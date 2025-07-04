'use client';

import { useRouter } from 'next/navigation';
import { FormDataType, FormResponse } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Mail } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ResponseDetailViewerProps {
  form: FormDataType;
  response: FormResponse;
}

export function ResponseDetailViewer({ form, response }: ResponseDetailViewerProps) {
  const router = useRouter();

  // Get field label from form schema
  const getFieldLabel = (fieldId: string) => {
    for (const section of form.schema.sections) {
      const field = section.fields.find(f => f.id === fieldId);
      if (field) return field.label || fieldId;
    }
    return fieldId;
  };

  // Get field type from form schema
  const getFieldType = (fieldId: string) => {
    for (const section of form.schema.sections) {
      const field = section.fields.find(f => f.id === fieldId);
      if (field) return field.type;
    }
    return 'text';
  };

  // Get field section from form schema
  const getFieldSection = (fieldId: string) => {
    for (const section of form.schema.sections) {
      const field = section.fields.find(f => f.id === fieldId);
      if (field) return section.title;
    }
    return null;
  };

  // Render field value based on type
  const renderFieldValue = (fieldId: string, value: unknown) => {
    const fieldType = getFieldType(fieldId);
    
    if (value === null || value === undefined) {
      return <span className="text-muted-foreground italic">Non renseigné</span>;
    }

    switch (fieldType) {
      case 'checkbox':
        if (Array.isArray(value)) {
          return <span>{value.length > 0 ? value.join(', ') : 'Aucune sélection'}</span>;
        }
        return <span>{value ? 'Oui' : 'Non'}</span>;
      
      case 'radio':
        return <span>{value.toString()}</span>;
      
      case 'number':
      case 'slider':
        return <span>{typeof value === 'number' ? value.toString() : String(value)}</span>;
      
      case 'text':
      default:
        return <span>{value.toString()}</span>;
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Date invalide';
      }
      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Date invalide';
    }
  };

  // Get relative time
  const getRelativeTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Date invalide';
      }
      return formatDistanceToNow(date, {
        addSuffix: true,
        locale: fr,
      });
    } catch {
      return 'Date invalide';
    }
  };

  // Group fields by section
  const groupedFields = Object.entries(response.response_data).reduce((acc, [fieldId, value]) => {
    const sectionTitle = getFieldSection(fieldId) || 'Autres';
    if (!acc[sectionTitle]) {
      acc[sectionTitle] = [];
    }
    acc[sectionTitle].push({ fieldId, value });
    return acc;
  }, {} as Record<string, { fieldId: string; value: unknown }[]>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => router.push(`/dashboard/forms/${form.id}/responses`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux réponses
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations de la réponse</CardTitle>
          <CardDescription>
            Détails de la soumission
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Date de soumission</p>
                <p className="text-sm text-muted-foreground">{formatDate(response.submitted_at)}</p>
                <p className="text-xs text-muted-foreground">{getRelativeTime(response.submitted_at)}</p>
              </div>
            </div>

            {response.respondent_name && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Nom</p>
                  <p className="text-sm text-muted-foreground">{response.respondent_name}</p>
                </div>
              </div>
            )}

            {response.respondent_email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{response.respondent_email}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Réponses détaillées</h2>
        
        {Object.entries(groupedFields).map(([sectionTitle, fields]) => (
          <Card key={sectionTitle}>
            <CardHeader>
              <CardTitle className="text-lg">{sectionTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fields.map(({ fieldId, value }) => (
                <div key={fieldId} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{getFieldLabel(fieldId)}</p>
                      <div className="mt-1">
                        {renderFieldValue(fieldId, value)}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {getFieldType(fieldId)}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 