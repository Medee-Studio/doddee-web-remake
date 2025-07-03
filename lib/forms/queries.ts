import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';
import { FormData, FormListItem, FormListItemRow, FormResponseData, FormWithStats, FormResponse } from './types';
import { ActionResult } from '@/lib/supabase/schema';

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
): Promise<FormData | null> {
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
  } as FormData;
}

// Get form by public ID (for public submission)
export async function getFormByPublicId(
  supabase: SupabaseClient,
  publicId: string
): Promise<FormData | null> {
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
  } as FormData;
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