import { SupabaseClient } from '@supabase/supabase-js';
import { ActionResult, TeamDataWithMembers, TeamMemberRole, User } from './schema';
import { 
  RessourcesDataType, PlanAction, EcoProfile, EcoProfileWithActions, Kpi, KpiPayload, 
  QuestionnaireType, Action, PJ, UserMoralPJ,  FormField,  
   FormSchema, FormDataType, FormResponseData, FormResponse, 
  FormWithStats, FormListItem, FormListItemRow, RpcTeamMember, 
  RpcTeamData, ActionQueryResult, UserKpiWithDetails, KpiRpcResponse, CompleteProfileData, 
  QuestionnaireData, UtilisateurMorauxSecteurAndCategory, PublicUtilisateurMoral, 
  QuestionnaireResponse, ReportData, EnterpriseInfo, CompanyAccountInfo, ActionPJQueryResult, 
  UserMoralPJQueryResult
} from '@/types';
import { cache } from 'react';
import { z } from 'zod';

// ======================
// FORM VALIDATION SCHEMAS
// ======================

// Form validation schemas
export const fieldTypeSchema = z.enum([
  'text',
  'number',
  'slider',
  'radio',
  'checkbox',
  'section'
]);

export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const fieldValidationSchema = z.object({
  minLength: z.number().optional(),
  maxLength: z.number().optional(),
  pattern: z.string().optional(),
  message: z.string().optional(),
});

export const formFieldSchema = z.object({
  id: z.string(),
  type: fieldTypeSchema,
  label: z.string().optional(),
  description: z.string().optional(),
  required: z.boolean().optional(),
  placeholder: z.string().optional(),
  validation: fieldValidationSchema.optional(),
  options: z.array(optionSchema).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  defaultValue: z.unknown().optional(),
});

export const formSectionSchema = z.object({
  id: z.string(),
  type: z.literal('section'),
  title: z.string(),
  subtitle: z.string().optional(),
  fields: z.array(formFieldSchema),
});

export const formSchemaValidator = z.object({
  sections: z.array(formSectionSchema),
}).or(z.object({
  sections: z.array(z.unknown()), // More permissive for debugging
}));

export const formSettingsSchema = z.object({
  submitButtonText: z.string().optional(),
  successMessage: z.string().optional(),
  redirectUrl: z.string().url().optional(),
  allowMultipleSubmissions: z.boolean().optional(),
  requireEmail: z.boolean().optional(),
  requireName: z.boolean().optional(),
  sendEmailNotification: z.boolean().optional(),
  notificationEmail: z.string().email().optional(),
});

export const createFormSchema = z.object({
  name: z.string().min(1, 'Le nom du formulaire est requis'),
  description: z.string().optional(),
  schema: formSchemaValidator,
  settings: formSettingsSchema.optional(),
});

export const updateFormSchema = createFormSchema.partial();

export const formResponseSchema = z.object({
  formId: z.string().uuid(),
  respondentEmail: z.string().email().optional(),
  respondentName: z.string().optional(),
  responseData: z.record(z.unknown()),
});

// Dynamic field validation based on field type
export function createFieldValidator(field: FormField): z.ZodSchema {
  let validator: z.ZodSchema = z.unknown();

  switch (field.type) {
    case 'text':
      validator = z.string();
      if (field.validation?.minLength) {
        validator = (validator as z.ZodString).min(field.validation.minLength, field.validation.message);
      }
      if (field.validation?.maxLength) {
        validator = (validator as z.ZodString).max(field.validation.maxLength, field.validation.message);
      }
      if (field.validation?.pattern) {
        validator = (validator as z.ZodString).regex(new RegExp(field.validation.pattern), field.validation.message);
      }
      break;
    
    case 'number':
    case 'slider':
      validator = z.number();
      if (field.min !== undefined) {
        validator = (validator as z.ZodNumber).min(field.min);
      }
      if (field.max !== undefined) {
        validator = (validator as z.ZodNumber).max(field.max);
      }
      break;
    
    case 'radio':
      if (field.options) {
        const values = field.options.map(opt => opt.value);
        validator = z.enum(values as [string, ...string[]]);
      }
      break;
    
    case 'checkbox':
      validator = z.array(z.string());
      break;
  }

  if (field.required) {
    return validator;
  } else {
    return validator.optional();
  }
}

// Create dynamic response validator based on form schema
export function createResponseValidator(formSchemaInput: FormSchema) {
  const shape: Record<string, z.ZodSchema> = {};

  formSchemaInput.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.type !== 'section') {
        shape[field.id] = createFieldValidator(field);
      }
    });
  });

  return z.object(shape);
}

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

// Create a new form
export async function createForm(
  supabase: SupabaseClient,
  form: {
    name: string;
    description?: string;
    schema: Record<string, unknown>;
    settings?: Record<string, unknown>;
    isPublic?: boolean;
  }
): Promise<ActionResult> {
  console.log('createForm called with:', form);
  
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    console.error('User auth error:', userError);
    return { error: 'Utilisateur non authentifié.' };
  }

  console.log('User authenticated:', user.id);

  const insertData = {
    created_by: user.id,
    name: form.name,
    description: form.description || null,
    schema: form.schema,
    settings: form.settings || {},
    is_public: form.isPublic || false,
  };

  console.log('Inserting form data:', insertData);

  const { data, error } = await supabase
    .from('forms')
    .insert(insertData)
    .select()
    .single();

  if (error) {
    console.error('Database error creating form:', error);
    return { error: `Impossible de créer le formulaire: ${error.message}` };
  }

  console.log('Form created successfully:', data);
  return { success: data.id };
}

// Update a form
export async function updateForm(
  supabase: SupabaseClient,
  formId: string,
  updates: {
    name?: string;
    description?: string;
    schema?: Record<string, unknown>;
    settings?: Record<string, unknown>;
    isPublic?: boolean;
  }
): Promise<ActionResult> {
  // Map camelCase to snake_case for database columns
  const dbUpdates: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  if (updates.name !== undefined) dbUpdates.name = updates.name;
  if (updates.description !== undefined) dbUpdates.description = updates.description;
  if (updates.schema !== undefined) dbUpdates.schema = updates.schema;
  if (updates.settings !== undefined) dbUpdates.settings = updates.settings;
  if (updates.isPublic !== undefined) dbUpdates.is_public = updates.isPublic;

  const { error } = await supabase
    .from('forms')
    .update(dbUpdates)
    .eq('id', formId);

  if (error) {
    console.error('Error updating form:', error);
    return { error: 'Impossible de mettre à jour le formulaire.' };
  }

  return { success: 'Formulaire mis à jour avec succès.' };
}

// Delete a form
export async function deleteForm(
  supabase: SupabaseClient,
  formId: string
): Promise<ActionResult> {
  const { error } = await supabase
    .from('forms')
    .delete()
    .eq('id', formId);

  if (error) {
    console.error('Error deleting form:', error);
    return { error: 'Impossible de supprimer le formulaire.' };
  }

  return { success: 'Formulaire supprimé avec succès.' };
}

// Submit a form response
export async function submitFormResponse(
  supabase: SupabaseClient,
  response: {
    formId: string;
    respondentEmail?: string;
    respondentName?: string;
    responseData: FormResponseData;
  }
): Promise<ActionResult> {
  const { error } = await supabase
    .from('form_responses')
    .insert({
      form_id: response.formId,
      respondent_email: response.respondentEmail,
      respondent_name: response.respondentName,
      response_data: response.responseData,
    });

  if (error) {
    console.error('Error submitting form response:', error);
    return { error: 'Impossible de soumettre le formulaire.' };
  }

  return { success: 'Formulaire soumis avec succès.' };
}

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

// Delete a form response
export async function deleteFormResponse(
  supabase: SupabaseClient,
  responseId: string
): Promise<ActionResult> {
  const { error } = await supabase
    .from('form_responses')
    .delete()
    .eq('id', responseId);

  if (error) {
    console.error('Error deleting form response:', error);
    return { error: 'Impossible de supprimer la réponse.' };
  }

  return { success: 'Réponse supprimée avec succès.' };
}

// Export form responses
export async function exportFormResponses(
  supabase: SupabaseClient,
  formId: string,
  format: 'csv' | 'json' = 'csv'
): Promise<string | null> {
  const responses = await getFormResponses(supabase, formId);
  
  if (!responses) return null;

  if (format === 'json') {
    return JSON.stringify(responses, null, 2);
  }

  // CSV export
  if (responses.length === 0) return '';

  // Extract all unique field keys from responses
  const allKeys = new Set<string>();
  responses.forEach(response => {
    Object.keys(response.response_data).forEach(key => allKeys.add(key));
  });

  // Create CSV header
  const headers = ['ID', 'Email', 'Nom', 'Date de soumission', ...Array.from(allKeys)];
  const csv = [headers.join(',')];

  // Add rows
  responses.forEach(response => {
    const row = [
      response.id,
      response.respondent_email || '',
      response.respondent_name || '',
      new Date(response.submitted_at).toLocaleString('fr-FR'),
      ...Array.from(allKeys).map(key => {
        const value = response.response_data[key];
        if (Array.isArray(value)) return value.join(';');
        return value?.toString() || '';
      }),
    ];
    csv.push(row.map(val => `"${val}"`).join(','));
  });

  return csv.join('\n');
}

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
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('invite_member_to_current_user_team', {
    p_invitee_email: email,
    p_invitee_role: role,
  });

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC invite_member_to_current_user_team:', error.message);
    if (data && 'error' in (data as ActionResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de l\'envoi de l\'invitation via RPC: ' + error.message };
  }

  const result = data as ActionResult;
  if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Invitation envoyée avec succès.' };
}

export async function createTeam(
  supabaseClient: SupabaseClient,
  teamName: string
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
  const { raison_sociale, logo, ...restOfProfile } = profile;

  // RLS on 'eco_profiles' ensures users can only update their own profile
  const { error } = await supabase
    .from("eco_profiles")
    .upsert(
      {
        user_id_moral: userId,
        ...restOfProfile,
      },
      { onConflict: "user_id_moral" }
    )
    .select()
    .single();

  if (error) {
    console.error("Error upserting eco profile:", error);
    return { error: "Erreur lors de la mise à jour de l'éco-profil" };
  }

  return { success: "Éco-profil mis à jour avec succès" };
}

// ======================
// KPI FUNCTIONS
// ======================

// Debug function to check what exists in database
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

export async function addKpiResponse(
  supabase: SupabaseClient,
  kpiId: number,
  question: string,
  answer: string
): Promise<ActionResult> {
  const user = await getUser(supabase);
  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  const { error } = await supabase
    .from('utilisateurs_moraux_kpis')
    .insert({
      id_kpi: kpiId,
      user_id_moral: user.id,
      question: question,
      answer: answer,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error('Error adding KPI response:', error);
    return { error: 'Erreur lors de l\'ajout de la réponse.' };
  }

  return { success: 'Réponse ajoutée avec succès.' };
}

export function canAddNewKpiResponse(kpi: UserKpiWithDetails): boolean {
  const { kpi_details, created_at } = kpi;
  
  // If type is "ponctuel" OR recurrence is "ponctuel", always allow new responses
  if (kpi_details.recurrence === 'ponctuel') {
    return true;
  }
  
  // If type is "numeric", check recurrence
  if (kpi_details.type === 'numeric') {
    // If recurrence is null, cannot ask again
    if (!kpi_details.recurrence) {
      return false;
    }
    
    const lastResponseDate = new Date(created_at);
    
    switch (kpi_details.recurrence) {
      case 'mensuel':
        // Check if it's been at least a month since last response
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return lastResponseDate <= oneMonthAgo;
        
      case 'annuel':
        // Check if it's been at least a year since last response
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return lastResponseDate <= oneYearAgo;
        
      default:
        return false;
    }
  }
  
  return false;
}

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

// ======================
// PROFILE COMPLETION FUNCTIONS
// ======================

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

export async function updateCompanyAccountInfo(
  supabaseClient: SupabaseClient,
  data: {
    raison_sociale: string;
    tel: string;
    labels: string[];
    logoPath?: string | null;
  }
): Promise<ActionResult> {
  const supabase = supabaseClient;
  
  // Get current user
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    console.error('Error fetching auth user:', authError?.message);
    return { error: 'User not authenticated' };
  }

  const { error } = await supabase
    .from('utilisateurs_moraux')
    .upsert({
      user_id_moral: user.id,
      raison_sociale: data.raison_sociale,
      tel: data.tel,
      labels: data.labels,
      ...(data.logoPath !== undefined && { logo: data.logoPath })
    });

  if (error) {
    console.error('Error updating company account info:', error.message);
    return { error: error.message };
  }

  return { success: 'Company information updated successfully' };
}

export async function uploadCompanyLogo(
  supabaseClient: SupabaseClient,
  file: File
): Promise<{ success: boolean; filePath?: string; error?: string }> {
  const supabase = supabaseClient;
  
  // Get current user
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    console.error('Error fetching auth user:', authError?.message);
    return { success: false, error: 'User not authenticated' };
  }

  // Generate unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${user.id}_${Date.now()}.${fileExt}`;

  // Upload file to logos bucket
  const { error: uploadError } = await supabase.storage
    .from('logos')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (uploadError) {
    console.error('Error uploading logo:', uploadError.message);
    return { success: false, error: uploadError.message };
  }

  // Return just the filename since we use from('logos') to specify the bucket
  return { success: true, filePath: fileName };
}

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

export async function uploadPJFile(
  supabaseClient: SupabaseClient,
  file: File,
  idUtilisateurMoralAction: number,
  idPJ: number
): Promise<{ success: boolean; filePath?: string; error?: string }> {
  try {
    const fileExtension = file.name.split('.').pop();
    const fileName = `${idUtilisateurMoralAction}_${idPJ}_${Date.now()}.${fileExtension}`;

    const { data: uploadData, error: uploadError } = await supabaseClient.storage
      .from('pjs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Error uploading PJ file:', uploadError);
      return { success: false, error: uploadError.message };
    }

    // Update the utilisateurs_moraux_pjs table with the file path
    const { error: updateError } = await supabaseClient
      .from('utilisateurs_moraux_pjs')
      .update({
        path_to_pj: uploadData.path,
      })
      .eq('id_utilisateur_moral_action', idUtilisateurMoralAction)
      .eq('id_pj', idPJ);

      

    if (updateError) {
      console.error('Error updating PJ record:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, filePath: uploadData.path };
  } catch (error) {
    console.error('Error in uploadPJFile:', error);
    return { success: false, error: 'Unexpected error occurred' };
  }
}

export async function getPJFileUrl(
  supabaseClient: SupabaseClient,
  filePath: string
): Promise<string | null> {
  const { data, error } = await supabaseClient.storage
    .from('pjs')
    .createSignedUrl(filePath, 3600); // 1 hour expiry

  if (error) {
    console.error('Error creating signed URL for PJ:', error);
    return null;
  }

  return data.signedUrl;
}