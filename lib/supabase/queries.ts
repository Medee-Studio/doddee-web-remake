import { SupabaseClient } from '@supabase/supabase-js';
import { ActionResult, TeamDataWithMembers, TeamMemberRole, User } from './schema';
import { RessourcesDataType, PlanAction, EcoProfile, EcoProfileWithActions, Kpi, KpiPayload, QuestionnaireType, Action } from '@/types';
import { cache } from 'react';

// Define types for RPC data structures
interface RpcTeamMemberUser {
  id: string;
  email: string;
}

interface RpcTeamMember {
  id: number;
  user_id: string;
  team_id: number;
  role: string;
  joined_at: string; // Comes as string from RPC, will be converted to Date
  user: RpcTeamMemberUser;
}

interface RpcTeamData {
  id: number;
  name: string;
  created_at: string; // Comes as string
  updated_at: string; // Comes as string
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_product_id: string | null;
  plan_name: string | null;
  subscription_status: string | null;
  team_members: RpcTeamMember[] | null;
}

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

export async function updateTeamSubscription(
  supabaseClient: SupabaseClient,
  teamId: number, 
  subscriptionData: {
    stripe_subscription_id: string | null;
    stripe_product_id: string | null;
    plan_name: string | null;
    subscription_status: string;
  }
) {
  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('teams')
    .update({
      ...subscriptionData,
      updated_at: new Date().toISOString(),
    })
    .eq('id', teamId)
    .select(); 

  if (error) {
    console.error('Error updating team subscription:', error.message);
    throw error; 
  }
  return data;
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

export async function removeTeamMember(
  supabaseClient: SupabaseClient,
  memberId: number
): Promise<ActionResult> {
  // Assuming currentUserId was for context, RLS handles auth.uid() implicitly.
  // getUserWithTeam without specific ID gets current user's team context.
  const userAndTeamContext = await getUserWithTeam(supabaseClient);

  if (!userAndTeamContext?.user || !userAndTeamContext.teamId) {
    return { error: 'L\'utilisateur n\'est pas membre d\'une équipe ou les données de l\'utilisateur/équipe ne peuvent pas être récupérées.' };
  }

  const { error: deleteError } = await supabaseClient
    .from('team_members')
    .delete()
    .match({ id: memberId, team_id: userAndTeamContext.teamId });

  if (deleteError) {
    console.error('Erreur lors de la suppression du membre de l\'équipe:', deleteError.message);
    return { error: 'Impossible de supprimer le membre de l\'équipe.' };
  }

  return { success: 'Membre de l\'équipe supprimé avec succès.' };
}

export async function inviteTeamMember(
  supabaseClient: SupabaseClient,
  email: string,
  role: TeamMemberRole
  // currentUserId: string // Removed as RPC uses auth.uid()
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('invite_member_to_current_user_team', {
    p_invitee_email: email,
    p_invitee_role: role,
  });

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC invite_member_to_current_user_team:', error.message);
    // Check if data from RPC itself contains an error message
    if (data && 'error' in (data as ActionResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de l\'envoi de l\'invitation via RPC: ' + error.message };
  }

  // RPC returns { success: string } or { error: string }
  const result = data as ActionResult;
  if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Invitation envoyée avec succès.' };
}

export async function createTeam(
  supabaseClient: SupabaseClient,
  teamName: string
  // currentUserId: string // Removed as RPC uses auth.uid()
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('create_team_for_current_user', {
    p_team_name: teamName,
  });

  type CreateTeamRpcResult = ActionResult & { team_id?: number };

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC create_team_for_current_user:', error.message);
    if (data && 'error' in (data as CreateTeamRpcResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de la création de l\'équipe via RPC: ' + error.message };
  }
  
  const result = data as CreateTeamRpcResult;
   if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Équipe créée avec succès.' };
}

export async function acceptTeamInvite(
  supabaseClient: SupabaseClient,
  invitationId: number
  // currentUserId: string // Removed as RPC uses auth.uid()
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('accept_team_invite_for_current_user', {
    p_invitation_id: invitationId,
  });

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC accept_team_invite_for_current_user:', error.message);
    if (data && 'error' in (data as ActionResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de l\'acceptation de l\'invitation via RPC: ' + error.message };
  }

  const result = data as ActionResult;
  if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Vous avez rejoint l\'équipe avec succès.' };
}

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

export async function handleRemoveTeamMemberForm(
  supabaseClient: SupabaseClient,
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const user = await getUser(supabaseClient);

  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  const memberIdString = formData.get('memberId');
  if (!memberIdString || typeof memberIdString !== 'string') {
    return { error: 'ID de membre non fourni ou invalide.' };
  }

  const memberId = parseInt(memberIdString, 10);
  if (isNaN(memberId)) {
    return { error: 'Format d\'ID de membre invalide.' };
  }

  return removeTeamMember(supabaseClient, memberId);
}

export async function cancelTeamInvitation(
  supabaseClient: SupabaseClient,
  invitationId: number,
): Promise<ActionResult> {
  // RLS policy "Team admins/owners can delete pending invitations for their team"
  // should ensure only authorized users can delete.
  // We also explicitly check for status 'pending' here as an additional safeguard.
  const { error } = await supabaseClient
    .from('invitations')
    .delete()
    .match({ id: invitationId, status: 'pending' });

  if (error) {
    console.error('Erreur lors de la suppression de l\'invitation d\'équipe:', error.message);
    return { error: 'Impossible de supprimer l\'invitation. Vous n\'avez peut-être pas les permissions ou l\'invitation n\'est pas en attente.' };
  }

  return { success: 'Invitation annulée avec succès.' };
}

export async function handleCancelTeamInvitationForm(
  supabaseClient: SupabaseClient,
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const user = await getUser(supabaseClient);

  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  const invitationIdString = formData.get('invitationId');
  if (!invitationIdString || typeof invitationIdString !== 'string') {
    return { error: 'ID d\'invitation non fourni ou invalide.' };
  }

  const invitationId = parseInt(invitationIdString, 10);
  if (isNaN(invitationId)) {
    return { error: 'Format d\'ID d\'invitation invalide.' };
  }

  return cancelTeamInvitation(supabaseClient, invitationId);
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

    return userMoralData;
  } else {
    throw new Error("No active session found");
  }
});

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
      
      // Return mock data for demonstration purposes when tables don't exist
      const mockActions: PlanAction[] = [
        {
          action_data: {
            id: 1,
            nom_action: "Mise en place d'un programme de recyclage",
            action_type: 'environnement',
          },
          user_action_data: {
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
            action_status: 'en_cours',
          },
        },
        {
          action_data: {
            id: 2,
            nom_action: "Formation du personnel sur la diversité",
            action_type: 'social',
          },
          user_action_data: {
            deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
            action_status: 'en_cours_validation',
          },
        },
        {
          action_data: {
            id: 3,
            nom_action: "Audit de transparence financière",
            action_type: 'gouvernance',
          },
          user_action_data: {
            deadline: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days from now
            action_status: 'valide',
          },
        },
      ];
      
      return mockActions;
    }

    // Define the query result type
    interface QueryResult {
      id_action?: number;
      action_status?: string;
      deadline?: string;
      actions?: Array<{
        id_action: number;
        nom_action: string;
        action_type: string;
      }> | {
        id_action: number;
        nom_action: string;
        action_type: string;
      };
      nom_action?: string;
      action_type?: string;
    }

    // Transform the data to match our PlanAction interface
    const transformedActions: PlanAction[] = (userActionsData || [] as QueryResult[])
      .map((item: QueryResult) => {
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
            deadline: item.deadline || '',
            action_status: validActionStatus,
          },
        };
      })
      .filter((item) => item.action_data.id !== 0); // Filter out invalid items

    return transformedActions;
  } catch (queryError) {
    console.error("Error in getUserActionsData:", queryError);
    throw new Error("Failed to get user actions data");
  }
});

// Eco Profile Queries
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

  return data as EcoProfileWithActions;
}

export async function upsertEcoProfile(
  supabase: SupabaseClient,
  profile: EcoProfile
): Promise<ActionResult> {
  const userResponse = await supabase.auth.getUser();
  if (userResponse.error) {
    return { error: "Erreur d'authentification" };
  }

  const userId = userResponse.data.user.id;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { raison_sociale, logo_organisation, ...restOfProfile } = profile;

  // RLS on 'eco_profils' ensures users can only update their own profile
  const { error } = await supabase
    .from("eco_profils")
    .upsert(
      {
        id: userId,
        ...restOfProfile,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    )
    .select()
    .single();

  if (error) {
    console.error("Error upserting eco profile:", error);
    return { error: "Erreur lors de la mise à jour de l'éco-profil" };
  }

  return { success: "Éco-profil mis à jour avec succès" };
}

// KPI Queries - Debug function to check what exists in database
export async function debugDatabaseKpiStructure(supabase: SupabaseClient) {
  console.log('🔍 [debugDatabaseKpiStructure] Investigating database structure...');
  
  try {
    // Check if utilisateurs_moraux_kpis table exists and what's in it
    console.log('🔍 [debugDatabaseKpiStructure] Checking utilisateurs_moraux_kpis table...');
    const { data: kpiTableData, error: kpiTableError } = await supabase
      .from('utilisateurs_moraux_kpis')
      .select('*')
      .limit(5);
    
    console.log('🔍 [debugDatabaseKpiStructure] utilisateurs_moraux_kpis query result:', { kpiTableData, kpiTableError });
    
    // Check what columns exist in the table
    if (kpiTableData && kpiTableData.length > 0) {
      console.log('🔍 [debugDatabaseKpiStructure] Table columns:', Object.keys(kpiTableData[0]));
    }
    
    // Check what RPC functions are available
    console.log('🔍 [debugDatabaseKpiStructure] Attempting to list available RPC functions...');
    try {
      const { data: rpcResult, error: rpcError } = await supabase.rpc('get_kpi_definitions');
      console.log('🔍 [debugDatabaseKpiStructure] get_kpi_definitions RPC result:', { rpcResult, rpcError });
    } catch (error) {
      console.log('🔍 [debugDatabaseKpiStructure] get_kpi_definitions RPC not available:', error);
    }
    
    // Check if there are any other KPI-related tables
    const possibleTables = ['kpi_definitions', 'kpis', 'kpi_templates', 'indicators'];
    for (const tableName of possibleTables) {
      try {
        console.log(`🔍 [debugDatabaseKpiStructure] Checking if ${tableName} table exists...`);
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .limit(1);
        console.log(`🔍 [debugDatabaseKpiStructure] ${tableName} table result:`, { data, error });
      } catch (error) {
        console.log(`🔍 [debugDatabaseKpiStructure] ${tableName} table not accessible:`, error);
      }
    }
    
  } catch (error) {
    console.log('🔍 [debugDatabaseKpiStructure] Error during investigation:', error);
  }
}

export async function getKpiDefinitions(supabase: SupabaseClient) {
  console.log('🔍 [getKpiDefinitions] Starting to fetch KPI definitions from database...');
  
  // NOTE: The get_kpi_definitions RPC function doesn't exist in the database yet.
  // This is expected behavior - the system will fall back to hardcoded definitions.
  // To implement dynamic KPI definitions from database:
  // 1. Create a kpi_definitions table in Supabase
  // 2. Create the get_kpi_definitions RPC function
  // 3. Populate with KPI definition data
  
  try {
    console.log('🔍 [getKpiDefinitions] Calling supabase.rpc("get_kpi_definitions")...');
    const { data, error } = await supabase.rpc('get_kpi_definitions');
    
    if (error) {
      if (error.code === 'PGRST202') {
        console.log('⚠️ [getKpiDefinitions] RPC function not found - this is expected. Using hardcoded fallback.');
      } else {
        console.log('❌ [getKpiDefinitions] Unexpected RPC error:', error);
      }
      return null;
    }
    
    if (data) {
      console.log('✅ [getKpiDefinitions] Successfully got data from RPC:', data);
      console.log('✅ [getKpiDefinitions] Data type:', typeof data);
      console.log('✅ [getKpiDefinitions] Data length:', Array.isArray(data) ? data.length : 'Not an array');
      return data;
    } else {
      console.log('⚠️ [getKpiDefinitions] RPC returned null/undefined data');
      return null;
    }
  } catch (error) {
    console.log('❌ [getKpiDefinitions] Exception caught:', error);
    return null;
  }
}

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

export async function upsertKpis(
  supabase: SupabaseClient,
  kpis: KpiPayload[]
): Promise<ActionResult> {
  const user = await getUser(supabase);
  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  try {
    // First, delete existing KPIs for this user
    const { error: deleteError } = await supabase
      .from("utilisateurs_moraux_kpis")
      .delete()
      .eq("user_id_moral", user.id);

    if (deleteError) {
      console.error('Error deleting existing KPIs:', deleteError.message);
      return { error: 'Erreur lors de la suppression des anciens KPIs.' };
    }

    // Then insert new KPIs, filtering out empty values
    const validKpis = kpis
      .filter(kpi => kpi.kpi_value !== "" && kpi.kpi_value !== -1)
      .map(kpi => ({
        ...kpi,
        user_id_moral: user.id,
      }));

    if (validKpis.length > 0) {
      const { error: insertError } = await supabase
        .from("utilisateurs_moraux_kpis")
        .insert(validKpis);

      if (insertError) {
        console.error('Error inserting KPIs:', insertError.message);
        return { error: 'Impossible de sauvegarder vos KPIs.' };
      }
    }

    return { success: 'Vos KPIs ont été sauvegardés avec succès.' };
  } catch (error) {
    console.error('Unexpected error in upsertKpis:', error);
    return { error: 'Une erreur inattendue s\'est produite.' };
  }
}


export interface CompleteProfileData {
  raison_sociale: string;
  tel: string;
  siren: string;
  adresse: string;
  annee_de_creation: number;
  labels: string[];
  coordonnees: number[];
  secteur: string;
  sous_secteur: string;
  fonction: string;
  flotte_vehicule: boolean;
  plus_de_un_salarie: boolean;
  locaux: boolean;
  parc_informatique: boolean;
  site_web: boolean;
  site_de_production: boolean;
  approvisionnement: boolean;
  distribution: boolean;
  stock: boolean;
}

export async function submitCompleteProfile(
  supabaseClient: SupabaseClient,
  data: CompleteProfileData
): Promise<ActionResult> {
  const supabase = supabaseClient;
  
  const { data: result, error } = await supabase.rpc('create_complete_profile', {
    p_raison_sociale: data.raison_sociale,
    p_tel: data.tel,
    p_siren: data.siren,
    p_adresse: data.adresse,
    p_annee_de_creation: data.annee_de_creation,
    p_labels: data.labels,
    p_coordinates: data.coordonnees,
    p_secteur_id: parseInt(data.secteur),
    p_sous_secteur_id: parseInt(data.sous_secteur),
    p_fonction: data.fonction,
    p_flotte_vehicule: data.flotte_vehicule,
    p_plus_de_un_salarie: data.plus_de_un_salarie,
    p_locaux: data.locaux,
    p_parc_informatique: data.parc_informatique,
    p_site_web: data.site_web,
    p_site_de_production: data.site_de_production,
    p_approvisionnement: data.approvisionnement,
    p_distribution: data.distribution,
    p_stock: data.stock
  });

  console.log('🔍 [submitCompleteProfile] Result:', result);

  if (error) {
    console.error('Error creating complete profile:', error);
    return { error: error.message };
  }

  return { success: 'Complete profile created successfully' };
}
// USER SUBSCRIPTION FUNCTIONS
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

export async function updateUserSubscription(
  supabaseClient: SupabaseClient,
  userId: string, 
  subscriptionData: {
    stripe_subscription_id: string | null;
    stripe_product_id: string | null;
    plan_name: string | null;
    subscription_status: string;
  }
) {
  console.log('[WEBHOOK] updateUserSubscription called with:', {
    userId,
    subscriptionData
  });
  
  if (!userId) {
    console.error('[WEBHOOK] updateUserSubscription: userId is required');
    return null;
  }

  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('users')
    .update({
      stripe_subscription_id: subscriptionData.stripe_subscription_id,
      stripe_product_id: subscriptionData.stripe_product_id,
      plan_name: subscriptionData.plan_name,
      subscription_status: subscriptionData.subscription_status,
    })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('[WEBHOOK] updateUserSubscription: Database error:', {
      code: error.code,
      message: error.message,
      userId,
      subscriptionData
    });
    return null;
  }
  
  console.log('[WEBHOOK] updateUserSubscription: Successfully updated user:', {
    userId,
    newPlan: data.plan_name,
    newStatus: data.subscription_status,
    stripeSubscriptionId: data.stripe_subscription_id
  });
  
  return data;
}

export async function createUserStripeCustomer(
  supabaseClient: SupabaseClient,
  userId: string,
  stripeCustomerId: string
) {
  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('users')
    .update({ stripe_customer_id: stripeCustomerId })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error creating user Stripe customer:', error.message);
    return null;
  }
  return data;
}

interface QuestionnaireData {
  answers: Array<{
    questionKey: string;
    questionText: string;
    answer: string | number | string[];
  }>;
  valide_id_actions: number[];
  disponible_id_actions: number[];
  kpis: Array<{
    questionId: string;
    questionText: string;
    kpiId: number;
    answer: string | number | string[];
  }>;
}

export async function saveQuestionnaireData(
  supabaseClient: SupabaseClient,
  questionnaireData: QuestionnaireData,
  questionnaireType: QuestionnaireType
): Promise<ActionResult> {
  const supabase = supabaseClient;
  const user = await getUser(supabase);
  
  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  try {
    // 1. Insert actions with status "valide"
    if (questionnaireData.valide_id_actions.length > 0) {
      const valideActions = questionnaireData.valide_id_actions.map(actionId => ({
        user_id_moral: user.id,
        id_action: actionId,
        action_status: 'valide'
      }));

      const { error: valideActionsError } = await supabase
        .from('utilisateurs_moraux_actions')
        .insert(valideActions);

      if (valideActionsError) {
        console.error('Error inserting valide actions:', valideActionsError.message);
        return { error: 'Erreur lors de l\'enregistrement des actions validées.' };
      }
    }

    // 2. Insert actions with status "disponible"
    if (questionnaireData.disponible_id_actions.length > 0) {
      const disponibleActions = questionnaireData.disponible_id_actions.map(actionId => ({
        user_id_moral: user.id,
        id_action: actionId,
        action_status: 'disponible'
      }));

      const { error: disponibleActionsError } = await supabase
        .from('utilisateurs_moraux_actions')
        .insert(disponibleActions);

      if (disponibleActionsError) {
        console.error('Error inserting disponible actions:', disponibleActionsError.message);
        return { error: 'Erreur lors de l\'enregistrement des actions disponibles.' };
      }
    }

    // 3. Insert KPIs
    if (questionnaireData.kpis.length > 0) {
      const kpiInserts = questionnaireData.kpis.map(kpi => ({
        user_id_moral: user.id,
        id_kpi: kpi.kpiId,
        question: kpi.questionText,
        answer: kpi.answer.toString() // Convert to string as per table schema
      }));

      const { error: kpisError } = await supabase
        .from('utilisateurs_moraux_kpis')
        .insert(kpiInserts);

      if (kpisError) {
        console.error('Error inserting KPIs:', kpisError.message);
        return { error: 'Erreur lors de l\'enregistrement des KPIs.' };
      }
    }

    // 4. Insert form answers - dynamically select table based on questionnaire type
    if (questionnaireData.answers.length > 0) {
      const answerInserts = questionnaireData.answers.map(answer => ({
        user_id_moral: user.id,
        question: answer.questionText,
        answer: Array.isArray(answer.answer) 
          ? answer.answer.join(', ') // Convert array to comma-separated string
          : answer.answer.toString()
      }));

      // Determine target table based on questionnaire type
      const getTableName = (type: QuestionnaireType): string => {
        switch (type) {
          case "environnement":
            return "utilisateurs_moraux_environnement_response";
          case "social":
            return "utilisateurs_moraux_social_response";
          case "gouvernance":
            return "utilisateurs_moraux_gouvernance_response";
          default:
            return "utilisateurs_moraux_environnement_response"; // fallback
        }
      };

      const tableName = getTableName(questionnaireType);
      console.log(`Inserting answers into table: ${tableName}`);

      const { error: answersError } = await supabase
        .from(tableName)
        .insert(answerInserts);

      if (answersError) {
        console.error(`Error inserting answers into ${tableName}:`, answersError.message);
        return { error: 'Erreur lors de l\'enregistrement des réponses.' };
      }
    }

    return { success: 'Questionnaire sauvegardé avec succès.' };
  } catch (error) {
    console.error('Unexpected error in saveQuestionnaireData:', error);
    return { error: 'Une erreur inattendue s\'est produite lors de la sauvegarde.' };
  }
  }

// Type for combined sector and category data
export interface UtilisateurMorauxSecteurAndCategory {
  sous_secteur_id: number | null;
  categories: {
    id: number;
    user_id: string;
    flotte_vehicule: boolean | null;
    plus_de_un_salarie: boolean | null;
    locaux: boolean | null;
    parc_informatique: boolean | null;
    site_web: boolean | null;
    site_de_production: boolean | null;
    approvisionnement: boolean | null;
    distribution: boolean | null;
    stock: boolean | null;
  } | null;
}

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

// MAP DATA FUNCTIONS
export interface PublicUtilisateurMoral {
  user_id_moral: string;
  raison_sociale: string | null;
  secteur_id: number | null;
  sous_secteur_id: number | null;
  coordinates: [number, number] | null; // [lng, lat] array format from database
  labels: {
    certifications?: string[];
  } | null;
}

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

// PDF Report Data Types and Functions
export interface QuestionnaireResponse {
  id: number;
  user_id_moral: string;
  question: string;
  answer: string;
  created_at: string;
}

export interface ReportData {
  userProfile: EnterpriseInfo | null;
  responses: QuestionnaireResponse[];
  actions: Action[];
  reportType: 'environnement' | 'social' | 'gouvernance';
}

// Query functions for PDF report data
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

// Enterprise information interface
export interface EnterpriseInfo {
  raison_sociale: string | null;
  tel: string | null;
  siren: string | null;
  adresse: string | null;
  annee_de_creation: number | null;
  labels: string[] | null;
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