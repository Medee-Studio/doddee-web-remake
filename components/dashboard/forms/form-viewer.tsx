'use client';

import { useRouter } from 'next/navigation';
import { FormWithStats } from '@/lib/forms/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FormPreview } from './form-preview';
import { BarChart3 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface FormViewerProps {
  form: FormWithStats;
}

export function FormViewer({ form }: FormViewerProps) {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => router.push(`/dashboard/forms/${form.id}/responses`)}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Voir les réponses
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Paramètres du formulaire</CardTitle>
              <CardDescription>
                Gérez la visibilité et les paramètres de votre formulaire
              </CardDescription>
            </div>
            <Badge variant={form.isPublic ? 'default' : 'secondary'}>
              {form.isPublic ? 'Public' : 'Privé'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm font-medium">Réponses</p>
              <p className="text-2xl font-bold">{form.responsesCount}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Créé</p>
              <p className="text-sm text-muted-foreground">
                {(() => {
                  try {
                    const date = new Date(form.createdAt);
                    if (isNaN(date.getTime())) {
                      console.log('Invalid date for form:', form.id, 'createdAt:', form.createdAt);
                      return new Date(form.createdAt).toLocaleDateString('fr-FR');
                    }
                    return formatDistanceToNow(date, {
                      addSuffix: true,
                      locale: fr,
                    });
                  } catch (error) {
                    console.log('Date error for form:', form.id, error);
                    return new Date(form.createdAt).toLocaleDateString('fr-FR');
                  }
                })()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Aperçu du formulaire</h2>
        <FormPreview
          formData={{
            name: form.name,
            description: form.description,
            schema: form.schema,
            settings: form.settings,
          }}
        />
      </div>
    </div>
  );
}