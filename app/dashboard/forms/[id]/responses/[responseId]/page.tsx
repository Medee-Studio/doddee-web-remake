import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getFormById, getFormResponseById } from '@/lib/forms/queries';
import { PageHeader } from '@/components/common/page-header';
import { ResponseDetailViewer } from '@/components/dashboard/forms/response-detail-viewer';

interface ResponseDetailPageProps {
  params: Promise<{
    id: string;
    responseId: string;
  }>;
}

export default async function ResponseDetailPage({ params }: ResponseDetailPageProps) {
  const { id, responseId } = await params;
  const supabase = await createClient();
  
  const [form, response] = await Promise.all([
    getFormById(supabase, id),
    getFormResponseById(supabase, responseId),
  ]);

  if (!form || !response) {
    notFound();
  }

  return (
    <>
      <PageHeader title={`Réponse détaillée - ${form.name}`} />
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <ResponseDetailViewer form={form} response={response} />
      </div>
    </>
  );
} 