'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FormWithStats } from '@/types';
import { deleteForm } from '@/lib/supabase/queries';
import { toggleFormPublishAction } from '@/lib/supabase/actions';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import { FormPreview } from './form-preview';
import { ArrowLeft, BarChart3, Globe, Lock, Copy, Check, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'sonner';

interface FormViewerProps {
  form: FormWithStats;
}

export function FormViewer({ form }: FormViewerProps) {
  const router = useRouter();
  const [isPublic, setIsPublic] = useState(form.isPublic);
  const [isToggling, setIsToggling] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Initialize button states based on fetched form data
  useEffect(() => {
    setIsPublic(form.isPublic);
    setIsToggling(false);
    setIsCopied(false);
  }, [form.isPublic, form.id]); // Re-initialize when form changes

  const handleTogglePublish = async () => {
    setIsToggling(true);
    try {
      const supabase = createClient();
      const result = await toggleFormPublishAction(supabase, form.id);
      
      if (result.error) {
        toast.error(result.error);
        return;
      }
      
      if (result.success) {
        toast.success(result.success);
        setIsPublic(result.isPublic);
      }
    } catch (error) {
      console.error('Error toggling publish status:', error);
      toast.error('Erreur lors de la publication du formulaire');
    } finally {
      setIsToggling(false);
    }
  };

  const handleCopyLink = async () => {
    const publicUrl = `${window.location.origin}/form/${form.publicId}`;
    
    try {
      await navigator.clipboard.writeText(publicUrl);
      setIsCopied(true);
      toast.success('Lien copié dans le presse-papiers');
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Error copying link:', error);
      toast.error('Erreur lors de la copie du lien');
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const supabase = createClient();
      const result = await deleteForm(supabase, form.id);

      if ('error' in result) {
        toast.error(result.error);
      } else {
        toast.success(result.success);
        router.push('/dashboard/forms');
      }
    } catch (error) {
      console.error('Error deleting form:', error);
      toast.error('Erreur lors de la suppression du formulaire');
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  const formatCreatedDate = (dateValue: string | Date) => {
    try {
      // Handle both string (from database) and Date objects
      const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
      if (isNaN(date.getTime())) {
        console.log('Invalid date for form:', form.id, 'createdAt:', dateValue);
        return new Date(dateValue).toLocaleDateString('fr-FR');
      }
      return formatDistanceToNow(date, {
        addSuffix: true,
        locale: fr,
      });
    } catch (error) {
      console.log('Date error for form:', form.id, error);
      return new Date(dateValue).toLocaleDateString('fr-FR');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">       
        <Button
          variant="outline"
          onClick={() => router.push(`/dashboard/forms`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button> 
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => router.push(`/dashboard/forms/${form.id}/responses`)}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Voir les réponses
          </Button>
          <Button
            variant="destructive"
            onClick={() => setShowDeleteDialog(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Supprimer
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
            <Badge variant={isPublic ? 'default' : 'secondary'}>
              {isPublic ? 'Public' : 'Privé'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Button
              variant={isPublic ? "secondary" : "default"}
              onClick={handleTogglePublish}
              disabled={isToggling}
            >
              {isPublic ? (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  {isToggling ? 'Dépublication...' : 'Dépublier'}
                </>
              ) : (
                <>
                  <Globe className="mr-2 h-4 w-4" />
                  {isToggling ? 'Publication...' : 'Publier'}
                </>
              )}
            </Button>
            
            {isPublic && (
              <Button
                variant="outline"
                onClick={handleCopyLink}
                disabled={isCopied}
              >
                {isCopied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copié
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copier le lien
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm font-medium">Réponses</p>
              <p className="text-2xl font-bold">{form.responsesCount}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Créé</p>
              <p className="text-sm text-muted-foreground">
                {formatCreatedDate(form.createdAt)}
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

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le formulaire {form.name} et toutes ses réponses seront
              définitivement supprimés.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? 'Suppression...' : 'Supprimer'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}