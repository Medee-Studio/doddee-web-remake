import { SupabaseClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { ActionResult, TeamMemberRole } from './schema';
import { 
  FormField, FormSchema, FormResponseData, KpiPayload, 
  EcoProfile, CompleteProfileData, QuestionnaireData, QuestionnaireType,
  UserKpiWithDetails
} from '@/types';
import { getUser } from './queries';

// ======================
// FORM VALIDATION SCHEMAS
// ======================

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
// FORM MANAGEMENT ACTIONS
// ======================

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

// Toggle form publish status
export async function toggleFormPublishAction(
  supabase: SupabaseClient,
  formId: string
): Promise<ActionResult | { success: string; isPublic: boolean }> {
  // First get the current form to check its publish status
  const { data: form, error: fetchError } = await supabase
    .from('forms')
    .select('is_public')
    .eq('id', formId)
    .single();

  if (fetchError) {
    console.error('Error fetching form:', fetchError);
    return { error: 'Impossible de récupérer le formulaire.' };
  }

  const newIsPublic = !form.is_public;
  
  const { error } = await supabase
    .from('forms')
    .update({
      is_public: newIsPublic,
      updated_at: new Date().toISOString(),
    })
    .eq('id', formId);

  if (error) {
    console.error('Error toggling form publish status:', error);
    return { error: 'Impossible de modifier le statut de publication.' };
  }

  return { 
    success: newIsPublic ? 'Formulaire publié avec succès.' : 'Formulaire dépublié avec succès.',
    isPublic: newIsPublic
  };
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
  // Get form responses directly
  const { data: responses, error } = await supabase
    .from('form_responses')
    .select('*')
    .eq('form_id', formId)
    .order('submitted_at', { ascending: false });

  if (error) {
    console.error('Error fetching form responses:', error);
    return null;
  }
  
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

// ======================
// TEAM MANAGEMENT ACTIONS
// ======================

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

export async function removeTeamMember(
  supabaseClient: SupabaseClient,
  memberId: number
): Promise<ActionResult> {
  const { getUserWithTeam } = await import('./queries');
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
// ECO PROFILE ACTIONS
// ======================

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
// KPI ACTIONS
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
// SUBSCRIPTION ACTIONS
// ======================

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
// PROFILE COMPLETION ACTIONS
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

// ======================
// QUESTIONNAIRE ACTIONS
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
// COMPANY ACCOUNT ACTIONS
// ======================

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
// PJS (PIÈCES JUSTIFICATIVES) ACTIONS
// ======================

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

 