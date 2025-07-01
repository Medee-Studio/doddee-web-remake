'use client';

import { useState } from 'react';
import { FormData } from '@/lib/forms/types';
import { deleteFormResponse, exportFormResponses } from '@/lib/forms/queries';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Download, MoreVertical, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

import { FormResponse } from '@/lib/forms/types';

interface ResponseViewerProps {
  form: FormData;
  responses: FormResponse[];
}

export function ResponseViewer({ form, responses: initialResponses }: ResponseViewerProps) {
  const [responses, setResponses] = useState(initialResponses);
  const [deletingResponseId, setDeletingResponseId] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDelete = async (responseId: string) => {
    const supabase = createClient();
    const result = await deleteFormResponse(supabase, responseId);

    if ('error' in result) {
      toast.error(result.error);
    } else {
      toast.success(result.success);
      setResponses(responses.filter(r => r.id !== responseId));
    }
    setDeletingResponseId(null);
  };

  const handleExport = async (format: 'csv' | 'json') => {
    setIsExporting(true);
    const supabase = createClient();
    const data = await exportFormResponses(supabase, form.id, format);

    if (data) {
      const blob = new Blob([data], {
        type: format === 'csv' ? 'text/csv' : 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form.name}-responses.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(`Données exportées en ${format.toUpperCase()}`);
    } else {
      toast.error('Erreur lors de l\'exportation');
    }
    setIsExporting(false);
  };

  // Extract all unique field keys from responses
  const allFieldKeys = new Set<string>();
  responses.forEach(response => {
    Object.keys(response.response_data).forEach(key => allFieldKeys.add(key));
  });

  // Get field labels from form schema
  const getFieldLabel = (fieldId: string) => {
    for (const section of form.schema.sections) {
      const field = section.fields.find(f => f.id === fieldId);
      if (field) return field.label || fieldId;
    }
    return fieldId;
  };

  const renderFieldValue = (value: unknown) => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'Oui' : 'Non';
    }
    return value?.toString() || '';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Réponses ({responses.length})</CardTitle>
              <CardDescription>
                Toutes les réponses soumises pour ce formulaire
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" disabled={isExporting || responses.length === 0}>
                    <Download className="mr-2 h-4 w-4" />
                    Exporter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleExport('csv')}>
                    Exporter en CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleExport('json')}>
                    Exporter en JSON
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {responses.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Aucune réponse pour le moment
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    {form.settings.requireName && <TableHead>Nom</TableHead>}
                    {form.settings.requireEmail && <TableHead>Email</TableHead>}
                    {Array.from(allFieldKeys).map(fieldKey => (
                      <TableHead key={fieldKey}>
                        {getFieldLabel(fieldKey)}
                      </TableHead>
                    ))}
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {responses.map((response) => (
                    <TableRow key={response.id}>
                      <TableCell>
                        <div className="text-sm">
                          {(() => {
                            try {
                              const date = new Date(response.submitted_at);
                              if (isNaN(date.getTime())) {
                                return 'Date invalide';
                              }
                              return date.toLocaleDateString('fr-FR');
                            } catch {
                              return 'Date invalide';
                            }
                          })()}
                          <div className="text-xs text-muted-foreground">
                            {(() => {
                              try {
                                const date = new Date(response.submitted_at);
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
                            })()}
                          </div>
                        </div>
                      </TableCell>
                      {form.settings.requireName && (
                        <TableCell>{response.respondent_name || '-'}</TableCell>
                      )}
                      {form.settings.requireEmail && (
                        <TableCell>{response.respondent_email || '-'}</TableCell>
                      )}
                      {Array.from(allFieldKeys).map(fieldKey => (
                        <TableCell key={fieldKey}>
                          <div className="max-w-xs truncate" title={renderFieldValue(response.response_data[fieldKey])}>
                            {renderFieldValue(response.response_data[fieldKey])}
                          </div>
                        </TableCell>
                      ))}
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => setDeletingResponseId(response.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!deletingResponseId} onOpenChange={() => setDeletingResponseId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Cette réponse sera définitivement supprimée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingResponseId && handleDelete(deletingResponseId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}