import { PageHeader } from '@/components/common/page-header';
import { FormBuilder } from '@/components/dashboard/forms/form-builder';

export default function NewFormPage() {
  return (
    <>
      <PageHeader title="Créer un nouveau formulaire" />
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <FormBuilder />
      </div>
    </>
  );
}