import { Suspense } from 'react';
import { createClient } from '@/lib/supabase/server';
import { getUserForms } from '@/lib/supabase/queries';
import { FormsListClient } from '@/components/dashboard/forms/forms-list-client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { PageHeader } from '@/components/common/page-header';

async function FormsList() {
  const supabase = await createClient();
  const forms = await getUserForms(supabase);

  return <FormsListClient forms={forms || []} />;
}

export default function FormsPage() {
  return (
    <>
      <PageHeader title="Formulaires" />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/dashboard/forms/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nouveau formulaire
            </Button>
          </Link>
        </div>

        <Suspense fallback={
          <Card>
            <CardHeader>
              <CardTitle>Chargement...</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Chargement de vos formulaires...</p>
            </CardContent>
          </Card>
        }>
          <FormsList />
        </Suspense>
      </div>
    </>
  );
}