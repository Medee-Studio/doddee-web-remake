import { SupabaseClient } from '@supabase/supabase-js';
import { TeamDataWithMembers,  User } from './schema';
import { 
  RessourcesDataType, PlanAction,  EcoProfileWithActions, Kpi, 
   Action, PJ, UserMoralPJ,  
   FormDataType,  FormResponse, 
  FormWithStats, FormListItem, FormListItemRow, RpcTeamMember, 
  RpcTeamData, ActionQueryResult, UserKpiWithDetails, KpiRpcResponse, 
   UtilisateurMorauxSecteurAndCategory, PublicUtilisateurMoral, 
  QuestionnaireResponse, ReportData, EnterpriseInfo, CompanyAccountInfo, ActionPJQueryResult, 
  UserMoralPJQueryResult
} from '@/types';
import { cache } from 'react';


// ======================
// USER & AUTHENTICATION FUNCTIONS
// ======================

export async function getUser(supabaseClient: SupabaseClient) {
  const supabase = supabaseClient;
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    // console.error('Error fetching Supabase user:', error?.message);
    return null;
  }
  return user; 
}

export async function getUserProfile(supabaseClient: SupabaseClient, userId?: string) {
  const supabase = supabaseClient;
  let idToFetch = userId;

  if (!idToFetch) {
    const authUser = await getUser(supabaseClient);
    if (!authUser) return null;
    idToFetch = authUser.id;
  }

  const { data: userProfile, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', idToFetch)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { 
      console.error('Error fetching user profile:', error.message);
    }
    return null;
  }
  return userProfile;
}

export async function getUserWithTeam(supabaseClient: SupabaseClient, userId?: string) {
  // If a specific userId is provided and it's different from the current auth user,
  // the RPC `get_current_user_profile_and_team_id` cannot be used directly due to RLS on users table.
  // For simplicity, this function will now primarily serve to get the *current* user's profile and teamId via RPC.
  // If fetching for other users is a strict requirement, a different approach or RLS modification is needed.
  if (userId) {
      const currentUser = await getUser(supabaseClient);
      if (!currentUser || currentUser.id !== userId) {
          // Fallback to old method if specific, non-current user ID is passed.
          // This part might be restricted by RLS on 'users' table if not careful.
          console.warn("getUserWithTeam called with a specific userId; falling back to non-RPC method which might be RLS restricted for other users' profiles.");
          const userProfile = await getUserProfile(supabaseClient, userId);
          if (!userProfile) return null;

          const { data: teamMember, error: teamMemberError } = await supabaseClient
            .from('team_members')
            .select('team_id')
            .eq('user_id', userId)
            .single();
          
          if (teamMemberError && teamMemberError.code !== 'PGRST116') { 
            console.error('Error fetching user team membership (fallback):', teamMemberError.message);
            return { user: userProfile, teamId: null }; 
          }
          return {
            user: userProfile, 
            teamId: teamMember?.team_id || null,
          };
      }
  }
  
  // For the current user, use the RPC
  const { data, error } = await supabaseClient.rpc('get_current_user_profile_and_team_id');

  if (error) {
    console.error('Error calling get_current_user_profile_and_team_id RPC:', error.message);
    return null;
  }
  // The RPC returns data in the shape { user: UserProfile | null, teamId: number | null }
  return data as { user: User | null; teamId: number | null } | null;
}

export const getUserMoralData = cache(async (supabase: SupabaseClient) => {
  // Get the current session
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Failed to get session");
  }

  if (session) {
    const uuid = session.user.id;

    // Call the stored procedure with the uuid
    const { data: userMoralData, error: rpcError } = await supabase.rpc(
      "get_user_moral_data",
      { uuid },
    );

    if (rpcError) {
      throw new Error("Failed to get user moral data");
    }
    console.log("userMoralData", userMoralData)
    return userMoralData;
  } else {
    throw new Error("No active session found");
  }
});

// ======================
// FORM MANAGEMENT FUNCTIONS
// ======================

// Get user's forms with response counts
export const getUserForms = cache(async (supabase: SupabaseClient): Promise<FormListItem[] | null> => {
  try {
    // First try RPC function
    const { data: rpcData, error: rpcError } = await supabase.rpc('get_user_forms_with_stats');

    if (!rpcError && rpcData) {
      // Map database fields (snake_case) to interface fields (camelCase)
      return rpcData.map((form: FormListItemRow) => ({
        id: form.id,
        name: form.name,
        description: form.description,
        isPublic: form.is_public,
        publicId: form.public_id,
        createdAt: form.created_at,
        updatedAt: form.updated_at,
        responsesCount: form.responses_count || 0,
      })) as FormListItem[];
    }

    console.log('RPC failed, using direct query:', rpcError);

    // Fallback to direct query
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: formsData, error: formsError } = await supabase
      .from('forms')
      .select('id, name, description, is_public, public_id, created_at, updated_at')
      .eq('created_by', user.id)
      .order('created_at', { ascending: false });

    if (formsError) {
      console.error('Error fetching forms:', formsError);
      return null;
    }

    // Get response counts for each form
    const formsWithStats = await Promise.all(
      formsData.map(async (form) => {
        const { count } = await supabase
          .from('form_responses')
          .select('*', { count: 'exact', head: true })
          .eq('form_id', form.id);

        // Map database fields (snake_case) to interface fields (camelCase)
        return {
          id: form.id,
          name: form.name,
          description: form.description,
          isPublic: form.is_public,
          publicId: form.public_id,
          createdAt: form.created_at,
          updatedAt: form.updated_at,
          responsesCount: count || 0,
        } as FormListItem;
      })
    );

    return formsWithStats;
  } catch (error) {
    console.error('Error in getUserForms:', error);
    return null;
  }
});

// Get a single form by ID
export async function getFormById(
  supabase: SupabaseClient,
  formId: string
): Promise<FormDataType | null> {
  const { data, error } = await supabase
    .from('forms')
    .select('*')
    .eq('id', formId)
    .single();

  if (error) {
    console.error('Error fetching form:', error);
    return null;
  }

  // Map database fields (snake_case) to interface fields (camelCase)
  return {
    id: data.id,
    createdBy: data.created_by,
    name: data.name,
    description: data.description,
    schema: data.schema,
    settings: data.settings,
    isPublic: data.is_public,
    publicId: data.public_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  } as FormDataType;
}

// Get form by public ID (for public submission)
export async function getFormByPublicId(
  supabase: SupabaseClient,
  publicId: string
): Promise<FormDataType | null> {
  const { data, error } = await supabase
    .from('forms')
    .select('*')
    .eq('public_id', publicId)
    .eq('is_public', true)
    .single();

  if (error) {
    console.error('Error fetching public form:', error);
    return null;
  }

  // Map database fields (snake_case) to interface fields (camelCase)
  return {
    id: data.id,
    createdBy: data.created_by,
    name: data.name,
    description: data.description,
    schema: data.schema,
    settings: data.settings,
    isPublic: data.is_public,
    publicId: data.public_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  } as FormDataType;
}

// Get form with response count
export async function getFormWithStats(
  supabase: SupabaseClient,
  formId: string
): Promise<FormWithStats | null> {
  try {
    // Check if user is authenticated
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      console.error('User authentication failed in getFormWithStats:', userError);
      return null;
    }

    // First try RPC function
    const { data: rpcData, error: rpcError } = await supabase.rpc('get_form_with_stats', {
      p_form_id: formId,
    });

    if (!rpcError && rpcData?.[0]) {
      const data = rpcData[0];
      // Map database fields (snake_case) to interface fields (camelCase)
      return {
        id: data.id,
        createdBy: data.created_by,
        name: data.name,
        description: data.description,
        schema: data.schema,
        settings: data.settings,
        isPublic: data.is_public,
        publicId: data.public_id,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        responsesCount: data.responses_count || 0,
      } as FormWithStats;
    }

    console.log('RPC failed, using direct query:', rpcError);

    // Fallback to direct query with authorization check
    const { data: formData, error: formError } = await supabase
      .from('forms')
      .select('*')
      .eq('id', formId)
      .eq('created_by', user.id) // Ensure user can only access their own forms
      .single();

    if (formError) {
      console.error('Error fetching form:', formError);
      return null;
    }

    // Get response count separately
    const { count: responsesCount } = await supabase
      .from('form_responses')
      .select('*', { count: 'exact', head: true })
      .eq('form_id', formId);

    // Map database fields (snake_case) to interface fields (camelCase)
    return {
      id: formData.id,
      createdBy: formData.created_by,
      name: formData.name,
      description: formData.description,
      schema: formData.schema,
      settings: formData.settings,
      isPublic: formData.is_public,
      publicId: formData.public_id,
      createdAt: formData.created_at,
      updatedAt: formData.updated_at,
      responsesCount: responsesCount || 0,
    } as FormWithStats;
  } catch (error) {
    console.error('Error in getFormWithStats:', error);
    return null;
  }
}

// Form creation moved to actions.ts

// Form update, delete, and submission moved to actions.ts

// Get form responses
export async function getFormResponses(
  supabase: SupabaseClient,
  formId: string
): Promise<FormResponse[] | null> {
  const { data, error } = await supabase
    .from('form_responses')
    .select('*')
    .eq('form_id', formId)
    .order('submitted_at', { ascending: false });

  if (error) {
    console.error('Error fetching form responses:', error);
    return null;
  }

  return data;
}

// Get a single form response by ID
export async function getFormResponseById(
  supabase: SupabaseClient,
  responseId: string
): Promise<FormResponse | null> {
  const { data, error } = await supabase
    .from('form_responses')
    .select('*')
    .eq('id', responseId)
    .single();

  if (error) {
    console.error('Error fetching form response:', error);
    return null;
  }

  return data;
}

// Form response deletion and export moved to actions.ts

// Form actions have been moved to lib/supabase/actions.ts to handle revalidatePath properly

// ======================
// TEAM MANAGEMENT FUNCTIONS
// ======================

export async function getTeamByStripeCustomerId(supabaseClient: SupabaseClient, customerId: string) {
  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .eq('stripe_customer_id', customerId)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { 
        console.error('Error fetching team by Stripe customer ID:', error.message);
    }
    return null;
  }
  return data;
}

// Team subscription update moved to actions.ts

export async function getTeamForUser(supabaseClient: SupabaseClient): Promise<TeamDataWithMembers | null> {
  const { data: rpcData, error } = await supabaseClient.rpc('get_team_details_for_current_user');

  if (error) {
    console.error('Error calling get_team_details_for_current_user RPC:', error.message);
    return null;
  }
  
  if (!rpcData) {
    return null;
  }

  const typedRpcData = rpcData as RpcTeamData;

  // Transform snake_case keys from RPC to camelCase for TeamDataWithMembers
  const transformedData: TeamDataWithMembers = {
    // Team part
    id: typedRpcData.id,
    name: typedRpcData.name,
    createdAt: new Date(typedRpcData.created_at),
    updatedAt: new Date(typedRpcData.updated_at),
    stripeCustomerId: typedRpcData.stripe_customer_id,
    stripeSubscriptionId: typedRpcData.stripe_subscription_id,
    stripeProductId: typedRpcData.stripe_product_id,
    planName: typedRpcData.plan_name,
    subscriptionStatus: typedRpcData.subscription_status,
    // teamMembers part
    teamMembers: (typedRpcData.team_members || []).map((member: RpcTeamMember) => ({
      // TeamMember part
      id: member.id,
      userId: member.user_id,
      teamId: member.team_id,
      role: member.role,
      joinedAt: new Date(member.joined_at),
      // User part (already matches Pick<User, 'id' | 'email'>)
      user: member.user,
    })),
  };
  
  return transformedData;
}

// Team member management functions moved to actions.ts

export async function getTeamInvitesForUser(supabaseClient: SupabaseClient) {
  const authUser = await getUser(supabaseClient);
  if (!authUser) {
    return null;
  }

  const { data: invitations, error } = await supabaseClient
    .from('invitations')
    .select(`
      id,
      team_id,
      role,
      status,
      teams (
        id,
        name
      )
    `)
    .eq('email', authUser.email)
    .eq('status', 'pending'); // Only fetch pending invitations

  if (error) {
    console.error('Erreur lors de la récupération des invitations d\'équipe pour l\'utilisateur:', error.message);
    return null;
  }

  return invitations;
}

export async function getPendingTeamInvitations(supabaseClient: SupabaseClient, teamId: number) {
  if (!teamId) {
    console.log('Aucun teamId fourni à getPendingTeamInvitations');
    return null;
  }

  const { data: invitations, error } = await supabaseClient
    .from('invitations')
    .select('*') // Select all fields for now, can be refined later
    .eq('team_id', teamId)
    .eq('status', 'pending');

  if (error) {
    console.error('Erreur lors de la récupération des invitations d\'équipe en attente:', error.message);
    return null;
  }

  return invitations;
}

// Team invitation management functions moved to actions.ts

// ======================
// ACTION & RESOURCE FUNCTIONS
// ======================

export const getUserRessources = cache(async (supabase: SupabaseClient) => {
  const user = await getUser(supabase);
  const { data: ressourcesData } = await supabase.rpc("get_user_resources", {
    p_user_id_moral: user?.id,
  });
  return ressourcesData as RessourcesDataType;
});

export const getUserActionsData = cache(async (supabase: SupabaseClient) => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Failed to get session");
  }

  if (!session) {
    throw new Error("No active session found");
  }

  const uuid = session.user.id;
  
  try {
    const { data: userActionsData, error: queryError } = await supabase
      .from("utilisateurs_moraux_actions")
      .select(
        `
        id,
        id_action,
        action_status,
        deadline,
        actions (
          id_action,
          nom_action,
          action_type
        )
      `
      )
      .eq("user_id_moral", uuid)
      .in("action_status", ["en_cours", "valide", "en_cours_validation"])
      .not("deadline", "is", null);

    if (queryError) {
      console.warn("Database query failed, using mock data:", queryError.message);
      return [];
    }

    // Transform the data to match our PlanAction interface
    const transformedActions: PlanAction[] = (userActionsData || [] as ActionQueryResult[])
      .map((item: ActionQueryResult) => {
        // Handle actions as array (first element) or direct properties
        let actionData;
        if (Array.isArray(item.actions) && item.actions.length > 0) {
          actionData = item.actions[0];
        } else if (item.actions && !Array.isArray(item.actions)) {
          actionData = item.actions;
        } else {
          actionData = item;
        }
        
        const actionType = actionData?.action_type;
        const validActionType: 'environnement' | 'social' | 'gouvernance' = 
          actionType === 'social' || actionType === 'gouvernance' ? actionType : 'environnement';
        
        const actionStatus = item.action_status;
        const validActionStatus: 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide' = 
          actionStatus === 'en_cours_validation' || actionStatus === 'en_cours' || actionStatus === 'valide' 
            ? actionStatus : 'disponible';

        return {
          action_data: {
            id: actionData?.id_action || 0,
            nom_action: actionData?.nom_action || '',
            action_type: validActionType,
          },
          user_action_data: {
            id_utilisateur_moral_action: item.id || 0,
            deadline: item.deadline || '',
            action_status: validActionStatus,
          },
        };
      })
      .filter((item) => item.action_data.id !== 0 && item.user_action_data.id_utilisateur_moral_action !== 0); // Filter out invalid items

    return transformedActions;
  } catch (queryError) {
    console.error("Error in getUserActionsData:", queryError);
    throw new Error("Failed to get user actions data");
  }
});

// ======================
// ECO PROFILE FUNCTIONS
// ======================

export const getUserLabelsAndEcoProfile = cache(
  async (supabase: SupabaseClient, userId: string) => {
    const { data: userLabelsAndEcoProfile } = await supabase.rpc(
      "get_labels_and_eco_profile",
      {
        user_id_moral: userId,
      },
    );

    return userLabelsAndEcoProfile;
  },
);

export async function getEcoProfileById(supabase: SupabaseClient, profileId: string): Promise<EcoProfileWithActions | null> {
  const { data, error } = await supabase.rpc(
    "get_eco_profile_with_actions_labels_and_kpis",
    {
      profile_id: profileId,
    },
  );

  if (error || !data) {
    console.error('Error fetching eco profile:', error?.message);
    return null;
  }

  const profile = data as EcoProfileWithActions;

  // If there's a logo path, convert it to a signed URL (works for private buckets)
  if (profile.logo) {
    // Remove "logos/" prefix if it exists (for backward compatibility)
    const logoFileName = profile.logo.startsWith('logos/') ? profile.logo.replace('logos/', '') : profile.logo;
    
    const { data: signedUrlData, error: urlError } = await supabase
      .storage
      .from('logos')
      .createSignedUrl(logoFileName, 60 * 60 * 24); // Expires in 24 hours
    
    if (!urlError && signedUrlData?.signedUrl) {
      profile.logo = signedUrlData.signedUrl;
    } else {
      console.error('Error creating signed URL for eco profile logo:', urlError);
      profile.logo = undefined; // Set to undefined if we can't get the signed URL
    }
  }

  return profile;
}

// Eco profile upsert moved to actions.ts

// ======================
// KPI FUNCTIONS
// ======================

// KPI debug and definition functions moved to actions.ts

export async function getUserKpis(supabase: SupabaseClient): Promise<Kpi[] | null> {
  console.log('🔍 [getUserKpis] Starting to fetch user KPI values from database...');
  
  const user = await getUser(supabase);
  console.log('🔍 [getUserKpis] Current user:', user ? { id: user.id, email: user.email } : 'No user');
  
  if (!user) {
    console.log('❌ [getUserKpis] No authenticated user found');
    return null;
  }

  console.log('🔍 [getUserKpis] Querying utilisateurs_moraux_kpis table for user:', user.id);
  
  const { data, error } = await supabase
    .from("utilisateurs_moraux_kpis")
    .select("kpi_type,kpi_value,kpi_label")
    .eq("user_id_moral", user.id);

  console.log('🔍 [getUserKpis] Query response:', { data, error });

  if (error) {
    console.error('❌ [getUserKpis] Database error:', error);
    console.error('❌ [getUserKpis] Error message:', error.message);
    console.error('❌ [getUserKpis] Error code:', error.code);
    return null;
  }

  if (data) {
    console.log('✅ [getUserKpis] Successfully fetched user KPIs:', data);
    console.log('✅ [getUserKpis] Number of KPIs found:', data.length);
    console.log('✅ [getUserKpis] KPI types found:', data.map(kpi => kpi.kpi_type));
    return data as Kpi[];
  } else {
    console.log('⚠️ [getUserKpis] No KPI data found for user');
    return null;
  }
}

// KPI upsert moved to actions.ts

export async function getUserKpisWithDetails(supabase: SupabaseClient): Promise<UserKpiWithDetails[] | null> {
  const user = await getUser(supabase);
  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from('utilisateurs_moraux_kpis')
    .select(`
      *,
      kpi_details:kpis!inner(
        id_kpi,
        nom,
        recurrence,
        type,
        kpi_type,
        unit
      )
    `)
    .eq('user_id_moral', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching user KPIs with details:', error);
    return null;
  }

  return data as UserKpiWithDetails[];
}

export async function getAllKpisForUser(supabase: SupabaseClient): Promise<UserKpiWithDetails[] | null> {
  const user = await getUser(supabase);
  if (!user) {
    return null;
  }

  // Use the RPC function with user ID parameter
  const { data, error } = await supabase.rpc('get_all_kpis_for_user', { user_id: user.id });

  if (error) {
    console.error('Error fetching user KPIs via RPC:', error);
    return null;
  }

  if (!data) {
    return [];
  }

  // Group by KPI ID to get all responses for each KPI
  const kpiMap = new Map<number, UserKpiWithDetails>();
  
  data.forEach((response: KpiRpcResponse) => {
    const kpiId = response.id_kpi;
    if (!kpiMap.has(kpiId)) {
      // Create new entry with latest response as main data
      kpiMap.set(kpiId, {
        id: response.id,
        id_kpi: response.id_kpi,
        user_id_moral: response.user_id_moral,
        question: response.question,
        answer: response.answer,
        created_at: response.created_at,
        updated_at: response.updated_at,
        next_ask: response.next_ask,
        kpi_details: response.kpi_details, // Now it's already a proper object from JSONB
        all_responses: []
      } as UserKpiWithDetails);
    }
    
    // Add this response to the all_responses array
    const kpiEntry = kpiMap.get(kpiId)!;
    kpiEntry.all_responses!.push({
      id: response.id,
      answer: response.answer,
      created_at: response.created_at,
      updated_at: response.updated_at,
    });
  });

  return Array.from(kpiMap.values());
}

// KPI response functions moved to actions.ts

// ======================
// SUBSCRIPTION FUNCTIONS
// ======================

export async function getUserSubscriptionStatus(supabaseClient: SupabaseClient, userId?: string) {
  console.log('[QUERY] getUserSubscriptionStatus called with userId:', userId);
  
  const supabase = supabaseClient;
  
  // Verify supabase client is properly provided
  if (!supabase || !supabase.auth) {
    console.error('[QUERY] Invalid Supabase client provided');
    return {
      stripe_customer_id: null,
      stripe_subscription_id: null,
      stripe_product_id: null,
      plan_name: 'gratuit',
      subscription_status: 'active'
    };
  }
  
  let idToFetch = userId;
  
  if (!idToFetch) {
    console.log('[QUERY] No userId provided, fetching from auth...');
    const authUser = await getUser(supabase);
    console.log('[QUERY] Auth user retrieved:', authUser ? { id: authUser.id, email: authUser.email } : 'null');
    
    if (!authUser) {
      console.log('[QUERY] No authenticated user found, returning default free plan');
      return {
        stripe_customer_id: null,
        stripe_subscription_id: null,
        stripe_product_id: null,
        plan_name: 'gratuit',
        subscription_status: 'active'
      };
    }
    idToFetch = authUser.id;
  }

  console.log('[QUERY] Fetching subscription for user ID:', idToFetch);

  try {
    const { data: userProfile, error } = await supabase
      .from('users')
      .select('stripe_customer_id, stripe_subscription_id, stripe_product_id, plan_name, subscription_status')
      .eq('id', idToFetch)
      .single();

    console.log('[QUERY] Database query completed:', {
      error: error ? { code: error.code, message: error.message } : null,
      data: userProfile
    });

    if (error) {
      if (error.code !== 'PGRST116') { 
        console.error('[QUERY] Error fetching user subscription:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint,
          userId: idToFetch
        });
      } else {
        console.log('[QUERY] User not found in database (PGRST116), returning default free plan');
      }
      // Return default subscription for free plan
      return {
        stripe_customer_id: null,
        stripe_subscription_id: null,
        stripe_product_id: null,
        plan_name: 'gratuit',
        subscription_status: 'active'
      };
    }
    
    console.log('[QUERY] User subscription data retrieved successfully:', userProfile);
    return userProfile;
  } catch (error) {
    console.error('[QUERY] Unexpected error in getUserSubscriptionStatus:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      userId: idToFetch
    });
    // Return default subscription for free plan
    return {
      stripe_customer_id: null,
      stripe_subscription_id: null,
      stripe_product_id: null,
      plan_name: 'gratuit',
      subscription_status: 'active'
    };
  }
}

export async function getUserByStripeCustomerId(supabaseClient: SupabaseClient, customerId: string) {
  console.log('[WEBHOOK] getUserByStripeCustomerId called with:', { customerId });
  
  if (!customerId) {
    console.error('[WEBHOOK] getUserByStripeCustomerId: customerId is required');
    return null;
  }

  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('stripe_customer_id', customerId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      console.log('[WEBHOOK] getUserByStripeCustomerId: No user found for Stripe customer:', customerId);
    } else {
      console.error('[WEBHOOK] getUserByStripeCustomerId: Database error:', {
        code: error.code,
        message: error.message,
        customerId
      });
    }
    return null;
  }
  
  console.log('[WEBHOOK] getUserByStripeCustomerId: User found:', {
    userId: data.id,
    email: data.email,
    currentPlan: data.plan_name,
    currentStatus: data.subscription_status
  });
  
  return data;
}

// Subscription actions moved to actions.ts

// ======================
// PROFILE COMPLETION FUNCTIONS
// ======================

// Profile completion action moved to actions.ts

export async function getUtilisateurMorauxSecteurAndCategory(supabaseClient: SupabaseClient): Promise<UtilisateurMorauxSecteurAndCategory | null> {
  const supabase = supabaseClient;
  
  // Get the current user first
  const authUser = await getUser(supabaseClient);
  if (!authUser) {
    console.error('No authenticated user found');
    return null;
  }

  // Get sous_secteur_id from utilisateurs_moraux
  const { data: moralData, error: moralError } = await supabase
    .from('utilisateurs_moraux')
    .select('sous_secteur_id')
    .eq('user_id_moral', authUser.id)
    .single();

  if (moralError) {
    if (moralError.code !== 'PGRST116') {
      console.error('Error fetching user moral data:', moralError.message);
    }
    return null;
  }

  // Get all data from utilisateurs_moraux_categories
  const { data: categoriesData, error: categoriesError } = await supabase
    .from('utilisateurs_moraux_categories')
    .select('*')
    .eq('user_id', authUser.id)
    .single();

  if (categoriesError && categoriesError.code !== 'PGRST116') {
    console.error('Error fetching user categories data:', categoriesError.message);
  }

  return {
    sous_secteur_id: moralData?.sous_secteur_id || null,
    categories: categoriesData || null
  };
}

// ======================
// QUESTIONNAIRE FUNCTIONS
// ======================

// Questionnaire data save action moved to actions.ts

// ======================
// MAP DATA FUNCTIONS
// ======================

export async function getPublicUtilisateursMoraux(
  supabaseClient: SupabaseClient,
  searchTerm?: string,
  sousSecteurId?: number
): Promise<PublicUtilisateurMoral[]> {
  const supabase = supabaseClient;
  
  try {
    // Try to use RPC function first
    const { data, error } = await supabase.rpc('get_public_utilisateurs_moraux', {
      p_search_term: searchTerm || null,
      p_sous_secteur_id: sousSecteurId || null,
    });

    if (error) {
      if (error.code === 'PGRST202') {
        console.log('RPC function not found, using direct table query');
        // Fallback to direct table query
        let query = supabase
          .from('utilisateurs_moraux')
          .select('user_id_moral, raison_sociale, secteur_id, sous_secteur_id, coordinates, labels')
          .not('coordinates', 'is', null)
          .not('raison_sociale', 'is', null);

        if (searchTerm) {
          query = query.ilike('raison_sociale', `%${searchTerm}%`);
        }

        if (sousSecteurId) {
          query = query.eq('sous_secteur_id', sousSecteurId);
        }

        const { data: directData, error: directError } = await query.limit(100);

        if (directError) {
          console.warn('Direct table query failed, using mock data:', directError.message);
          return getMockUtilisateursMoraux(searchTerm, sousSecteurId);
        }

        return directData || [];
      } else {
        console.error('RPC error:', error.message);
        return getMockUtilisateursMoraux(searchTerm, sousSecteurId);
      }
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching public utilisateurs moraux:', error);
    return getMockUtilisateursMoraux(searchTerm, sousSecteurId);
  }
}

function getMockUtilisateursMoraux(searchTerm?: string, sousSecteurId?: number): PublicUtilisateurMoral[] {
  const mockData: PublicUtilisateurMoral[] = [
    {
      user_id_moral: '1',
      raison_sociale: 'EcoAgri Solutions',
      secteur_id: 1, // Alimentation, agriculture et élevage
      sous_secteur_id: 1, // Agriculture & production agricole
      coordinates: [2.3522, 48.8566], // Paris [lng, lat]
      labels: { certifications: ['ISO 14001', 'Agriculture Biologique'] }
    },
    {
      user_id_moral: '2',
      raison_sociale: 'Studio Créatif Durable',
      secteur_id: 2, // Arts, cinéma, culture
      sous_secteur_id: 16, // Centres culturels
      coordinates: [4.8357, 45.7640], // Lyon [lng, lat]
      labels: { certifications: ['B Corp', 'Label Écologique'] }
    },
    {
      user_id_moral: '3',
      raison_sociale: 'GreenConseil Audit',
      secteur_id: 4, // Audit, gestion, conseil, droit
      sous_secteur_id: 21, // Cabinet de conseil
      coordinates: [5.3698, 43.2965], // Marseille [lng, lat]
      labels: { certifications: ['ISO 9001', 'Fair Trade'] }
    },
    {
      user_id_moral: '4',
      raison_sociale: 'EcoMobility France',
      secteur_id: 5, // Automobiles, véhicules
      sous_secteur_id: 27, // Location & vente de vélos et trottinettes
      coordinates: [-1.5536, 47.2184], // Nantes [lng, lat]
      labels: { certifications: ['LEED', 'ISO 14001'] }
    },
    {
      user_id_moral: '5',
      raison_sociale: 'Digital Green Solutions',
      secteur_id: 11, // Digital, internet, logiciels
      sous_secteur_id: 64, // Plateformes, logiciels et applications
      coordinates: [1.4442, 43.6047], // Toulouse [lng, lat]
      labels: { certifications: ['ISO 26000', 'GreenIT'] }
    },
    {
      user_id_moral: '6',
      raison_sociale: 'ÉcoBâtiment & Co',
      secteur_id: 9, // Construction, travaux publics, immobilier, architecture
      sous_secteur_id: 51, // Construction & Travaux publics
      coordinates: [0.1079, 49.4944], // Le Havre [lng, lat]
      labels: { certifications: ['HQE', 'BREEAM'] }
    }
  ];

  let filteredData = mockData;

  if (searchTerm) {
    filteredData = filteredData.filter(item => 
      item.raison_sociale?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (sousSecteurId) {
    filteredData = filteredData.filter(item => item.sous_secteur_id === sousSecteurId);
  }

  return filteredData;
}

// ======================
// REPORTING FUNCTIONS
// ======================

export async function getEnvironnementResponses(supabaseClient: SupabaseClient): Promise<QuestionnaireResponse[]> {
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  
  if (error || !session) {
    throw new Error("No active session found");
  }

  const { data, error: queryError } = await supabaseClient
    .from('utilisateurs_moraux_environnement_response')
    .select('*')
    .eq('user_id_moral', session.user.id)
    .order('created_at', { ascending: true });

  if (queryError) {
    console.error('Error fetching environnement responses:', queryError);
    throw new Error('Failed to fetch environnement responses');
  }

  return data || [];
}

export async function getSocialResponses(supabaseClient: SupabaseClient): Promise<QuestionnaireResponse[]> {
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  
  if (error || !session) {
    throw new Error("No active session found");
  }

  const { data, error: queryError } = await supabaseClient
    .from('utilisateurs_moraux_social_response')
    .select('*')
    .eq('user_id_moral', session.user.id)
    .order('created_at', { ascending: true });

  if (queryError) {
    console.error('Error fetching social responses:', queryError);
    throw new Error('Failed to fetch social responses');
  }

  return data || [];
}

export async function getGouvernanceResponses(supabaseClient: SupabaseClient): Promise<QuestionnaireResponse[]> {
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  
  if (error || !session) {
    throw new Error("No active session found");
  }

  const { data, error: queryError } = await supabaseClient
    .from('utilisateurs_moraux_gouvernance_response')
    .select('*')
    .eq('user_id_moral', session.user.id)
    .order('created_at', { ascending: true });

  if (queryError) {
    console.error('Error fetching gouvernance responses:', queryError);
    throw new Error('Failed to fetch gouvernance responses');
  }

  return data || [];
}

export async function getEnterpriseInfo(supabaseClient: SupabaseClient): Promise<EnterpriseInfo | null> {
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  
  if (error || !session) {
    throw new Error("No active session found");
  }

  const { data, error: queryError } = await supabaseClient
    .from('utilisateurs_moraux')
    .select('raison_sociale, tel, siren, adresse, annee_de_creation, labels')
    .eq('user_id_moral', session.user.id)
    .single();

  if (queryError) {
    console.error('Error fetching enterprise info:', queryError);
    return null;
  }

  return data;
}

export async function getReportData(
  supabaseClient: SupabaseClient, 
  reportType: 'environnement' | 'social' | 'gouvernance'
): Promise<ReportData> {
  // Get enterprise information from utilisateurs_moraux table
  const enterpriseInfo = await getEnterpriseInfo(supabaseClient);
  
  // Get user moral data for actions
  const userMoralData = await getUserMoralData(supabaseClient);
  
  // Get questionnaire responses based on type
  let responses: QuestionnaireResponse[] = [];
  switch (reportType) {
    case 'environnement':
      responses = await getEnvironnementResponses(supabaseClient);
      break;
    case 'social':
      responses = await getSocialResponses(supabaseClient);
      break;
    case 'gouvernance':
      responses = await getGouvernanceResponses(supabaseClient);
      break;
  }

  // Get actions filtered by type
  const allActions = userMoralData?.actions || [];
  const filteredActions = allActions.filter((action: Action) => action.action_type === reportType);

  return {
    userProfile: enterpriseInfo,
    responses,
    actions: filteredActions,
    reportType
  };
}

// ======================
// COMPANY ACCOUNT FUNCTIONS
// ======================

export async function getCompanyAccountInfo(supabaseClient: SupabaseClient): Promise<CompanyAccountInfo | null> {
  const supabase = supabaseClient;
  
  // Get current user
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    console.error('Error fetching auth user:', authError?.message);
    return null;
  }

  const { data, error } = await supabase
    .from('utilisateurs_moraux')
    .select('user_id_moral, raison_sociale, tel, labels, logo')
    .eq('user_id_moral', user.id)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error('Error fetching company account info:', error.message);
    }
    return null;
  }

  // If there's a logo path, get the signed URL (works for private buckets)
  let logoUrl = null;
  if (data.logo) {
    // Remove "logos/" prefix if it exists (for backward compatibility)
    const logoFileName = data.logo.startsWith('logos/') ? data.logo.replace('logos/', '') : data.logo;
    
    const { data: signedUrlData, error: urlError } = await supabase
      .storage
      .from('logos')
      .createSignedUrl(logoFileName, 60 * 60 * 24); // Expires in 24 hours
    
    if (!urlError && signedUrlData?.signedUrl) {
      logoUrl = signedUrlData.signedUrl;
    } else {
      console.error('Error creating signed URL:', urlError);
    }
  }

  return {
    ...data,
    logo: logoUrl
  };
}

// Company account actions moved to actions.ts

// ======================
// PJS (PIÈCES JUSTIFICATIVES) FUNCTIONS
// ======================

export async function getActionPJs(
  supabaseClient: SupabaseClient,
  actionId: number
): Promise<PJ[]> {
  const { data, error } = await supabaseClient
    .from('actions_pjs')
    .select(`
      id_pj,
      pjs (
        id_pj,
        titre,
        description
      )
    `)
    .eq('id_action', actionId);

  if (error) {
    console.error('Error fetching action PJs:', error.message);
    return [];
  }

  return data?.flatMap((item: ActionPJQueryResult) => item.pjs).filter(Boolean) || [];
}

export async function getUserMoralPJs(
  supabaseClient: SupabaseClient,
  idUtilisateurMoralAction: number
): Promise<UserMoralPJ[]> {
  const { data, error } = await supabaseClient
    .from('utilisateurs_moraux_pjs')
    .select(`
      id,
      id_utilisateur_moral_action,
      id_pj,
      path_to_pj,
      status,
      pjs (
        id_pj,
        titre,
        description
      )
    `)
    .eq('id_utilisateur_moral_action', idUtilisateurMoralAction);

    
  if (error) {
    console.error('Error fetching user moral PJs:', error.message);
    return [];
  }

  return data?.map((item: UserMoralPJQueryResult) => ({
    id: item.id,
    id_utilisateur_moral_action: item.id_utilisateur_moral_action,
    id_pj: item.id_pj,
    path_to_pj: item.path_to_pj,
    status: item.status,
    pj: item.pjs && item.pjs.length > 0 ? item.pjs[0] : null
  })) || [];
}

// PJ (Pièces Justificatives) actions moved to actions.ts