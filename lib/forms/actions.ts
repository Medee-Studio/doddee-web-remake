'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createForm, updateForm, deleteForm, submitFormResponse } from './queries';
import { createFormSchema, formResponseSchema } from './schema';

export async function createFormAction(formData: FormData) {
  const supabase = await createClient();
  
  try {
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      schema: JSON.parse(formData.get('schema') as string),
      settings: JSON.parse(formData.get('settings') as string),
      isPublic: formData.get('isPublic') === 'true',
    };

    const validatedData = createFormSchema.parse(data);
    const result = await createForm(supabase, validatedData);

    if ('error' in result) {
      return { error: result.error };
    }

    revalidatePath('/dashboard/forms');
    redirect(`/dashboard/forms/${result.success}`);
  } catch (error) {
    console.error('Error creating form:', error);
    return { error: 'Erreur lors de la création du formulaire' };
  }
}

export async function updateFormAction(formId: string, formData: FormData) {
  const supabase = await createClient();
  
  try {
    const updates = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      schema: JSON.parse(formData.get('schema') as string),
      settings: JSON.parse(formData.get('settings') as string),
      isPublic: formData.get('isPublic') === 'true',
    };

    const result = await updateForm(supabase, formId, updates);

    if ('error' in result) {
      return { error: result.error };
    }

    revalidatePath('/dashboard/forms');
    revalidatePath(`/dashboard/forms/${formId}`);
    return { success: result.success };
  } catch (error) {
    console.error('Error updating form:', error);
    return { error: 'Erreur lors de la mise à jour du formulaire' };
  }
}

export async function deleteFormAction(formId: string) {
  const supabase = await createClient();
  
  try {
    const result = await deleteForm(supabase, formId);

    if ('error' in result) {
      return { error: result.error };
    }

    revalidatePath('/dashboard/forms');
    return { success: result.success };
  } catch (error) {
    console.error('Error deleting form:', error);
    return { error: 'Erreur lors de la suppression du formulaire' };
  }
}

export async function submitFormResponseAction(formData: FormData) {
  const supabase = await createClient();
  
  try {
    const data = {
      formId: formData.get('formId') as string,
      respondentEmail: formData.get('respondentEmail') as string || undefined,
      respondentName: formData.get('respondentName') as string || undefined,
      responseData: JSON.parse(formData.get('responseData') as string),
    };

    const validatedData = formResponseSchema.parse(data);
    const result = await submitFormResponse(supabase, validatedData);

    if ('error' in result) {
      return { error: result.error };
    }

    return { success: result.success };
  } catch (error) {
    console.error('Error submitting form response:', error);
    return { error: 'Erreur lors de la soumission du formulaire' };
  }
}

export async function toggleFormPublishAction(formId: string) {
  const supabase = await createClient();
  
  try {
    // First, get the current form to check its current publish status
    const { data: currentForm, error: fetchError } = await supabase
      .from('forms')
      .select('is_public')
      .eq('id', formId)
      .single();

    if (fetchError) {
      console.error('Error fetching form:', fetchError);
      return { error: 'Erreur lors de la récupération du formulaire' };
    }

    // Toggle the is_public status
    const newPublishStatus = !currentForm.is_public;
    
    const result = await updateForm(supabase, formId, { 
      isPublic: newPublishStatus 
    });

    if ('error' in result) {
      return { error: result.error };
    }

    revalidatePath('/dashboard/forms');
    revalidatePath(`/dashboard/forms/${formId}`);
    
    return { 
      success: newPublishStatus ? 'Formulaire publié avec succès' : 'Formulaire dépublié avec succès',
      isPublic: newPublishStatus
    };
  } catch (error) {
    console.error('Error toggling form publish status:', error);
    return { error: 'Erreur lors de la publication du formulaire' };
  }
}