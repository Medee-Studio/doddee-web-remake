import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getFormWithStats } from '@/lib/supabase/queries';
import { FormViewer } from '@/components/dashboard/forms/form-viewer';
import { PageHeader } from '@/components/common/page-header';

interface FormDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FormDetailsPage({ params }: FormDetailsPageProps) {
  const { id } = await params;
  
  try {
    const supabase = await createClient();

    const form = await getFormWithStats(supabase, id);
    if (!form) {
      console.error('Form not found or user not authorized:', id);
      notFound();
    }

    return (
      <>
        <PageHeader title={form.name} /> 
        <div className="p-6 space-y-6 max-w-6xl mx-auto">
          <FormViewer form={form} />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error in FormDetailsPage:', error);
    notFound();
  }
}