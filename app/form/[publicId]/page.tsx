import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getFormByPublicId } from '@/lib/supabase/queries';
import { PublicFormSubmission } from '@/components/forms/public-form-submission';

interface PublicFormPageProps {
  params: Promise<{
    publicId: string;
  }>;
}

export default async function PublicFormPage({ params }: PublicFormPageProps) {
  const { publicId } = await params;
  const supabase = await createClient();
  const form = await getFormByPublicId(supabase, publicId);

  if (!form) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <PublicFormSubmission form={form} />
      </div>
    </div>
  );
}