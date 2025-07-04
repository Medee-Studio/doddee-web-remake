'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormListItem, deleteForm } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import { MoreVertical, Eye, BarChart3, Copy, Trash2, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface FormsListClientProps {
  forms: FormListItem[];
}

export function FormsListClient({ forms: initialForms }: FormsListClientProps) {
  const router = useRouter();
  const [forms, setForms] = useState(initialForms);
  const [deletingFormId, setDeletingFormId] = useState<string | null>(null);

  const handleDelete = async (formId: string) => {
    const supabase = createClient();
    const result = await deleteForm(supabase, formId);

    if ('error' in result) {
      toast.error(result.error);
    } else {
      toast.success(result.success);
      setForms(forms.filter(f => f.id !== formId));
    }
    setDeletingFormId(null);
  };

  const copyPublicLink = (publicId: string) => {
    const url = `${window.location.origin}/form/${publicId}`;
    navigator.clipboard.writeText(url);
    toast.success('Lien copié dans le presse-papier');
  };

  if (forms.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Aucun formulaire</CardTitle>
          <CardDescription>
            Vous n&apos;avez pas encore créé de formulaire. Cliquez sur &quot;Nouveau formulaire&quot; pour commencer.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {forms.map((form) => (
          <Card 
            key={form.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => router.push(`/dashboard/forms/${form.id}`)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="line-clamp-1">
                    {form.name}
                  </CardTitle>
                  {form.description && (
                    <CardDescription className="line-clamp-2">
                      {form.description}
                    </CardDescription>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push(`/dashboard/forms/${form.id}`)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir le formulaire
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/dashboard/forms/${form.id}/responses`)}>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Voir les réponses
                    </DropdownMenuItem>
                    {form.isPublic && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => copyPublicLink(form.publicId)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Copier le lien public
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/form/${form.publicId}`, '_blank')}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ouvrir le lien public
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => setDeletingFormId(form.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant={form.isPublic ? 'default' : 'secondary'}>
                    {form.isPublic ? 'Public' : 'Privé'}
                  </Badge>
                  <span className="text-muted-foreground">
                    {form.responsesCount ? form.responsesCount : 0} réponse{form.responsesCount !== 1 ? 's' : ''}
                  </span>
                </div>
                <span className="text-muted-foreground">
                  
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={!!deletingFormId} onOpenChange={() => setDeletingFormId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le formulaire et toutes ses réponses seront
              définitivement supprimés.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingFormId && handleDelete(deletingFormId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}