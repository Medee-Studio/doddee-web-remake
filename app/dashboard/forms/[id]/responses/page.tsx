import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getFormById, getFormResponses } from '@/lib/supabase/queries';
import { ResponseViewer } from '@/components/dashboard/forms/response-viewer';
import { PageHeader } from '@/components/common/page-header';

interface FormResponsesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FormResponsesPage({ params }: FormResponsesPageProps) {
  const { id } = await params;
  const supabase = await createClient();
  
  const [form, responses] = await Promise.all([
    getFormById(supabase, id),
    getFormResponses(supabase, id),
  ]);

  if (!form) {
    notFound();
  }

  return (
    <>
      <PageHeader title={`Réponses à ${form.name}`} />
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <ResponseViewer form={form} responses={responses || []} />
      </div>
    </>
  );
}