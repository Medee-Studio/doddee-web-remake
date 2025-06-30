'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { customerPortalAction } from '@/lib/payments/actions';
import { TeamDataWithMembers, User } from '@/lib/supabase/schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, PlusCircle } from 'lucide-react';
import { createTeam } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

export function SubscriptionSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Team Subscription</CardTitle>
      </CardHeader>
    </Card>
  );
}

interface ManageSubscriptionProps {
  initialTeamData: TeamDataWithMembers | null;
  currentUser: User | null;
}

export function ManageSubscription({ initialTeamData, currentUser }: ManageSubscriptionProps) {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const supabase = createClient();

  const handleCreateTeam = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!teamName.trim()) {
      toast.error('Un nom d\'équipe est requis');
      return;
    }
    
    if (!currentUser?.id) { 
      toast.error('Données utilisateur non disponibles. Veuillez réessayer.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await createTeam(supabase, teamName);
      
      if ('error' in result && result.error) {
        toast.error(result.error);
      } else if ('success' in result && result.success) {
        toast.success('Équipe créée avec succès!');
        setTeamName('');
        router.refresh();
      } else {
        toast.error('Une erreur inattendue est survenue lors de la création de l\'équipe.');
      }
    } catch {
      toast.error('Une erreur inattendue est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!initialTeamData) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Créer une équipe</CardTitle>
          <CardDescription>          
            Vous n&apos;êtes pas membre d&apos;une équipe. Créez une équipe pour commencer.          
          </CardDescription>
        </CardHeader>
        <CardContent>          
          <form onSubmit={handleCreateTeam} className="space-y-4">
            <div>
              <Label htmlFor="teamName">Nom de l&apos;équipe</Label>
              <Input
                id="teamName"
                name="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Entrez le nom de l&apos;équipe"
                required
              />
            </div>
            <Button
              type="submit"
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Création...
                </>
              ) : (
                <>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Créer une équipe
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Abonnement de l&apos;équipe : {initialTeamData?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <p className="font-medium">
                Plan actuel: {initialTeamData?.planName || 'Gratuit'}
              </p>
              <p className="text-sm text-muted-foreground">
                {initialTeamData?.subscriptionStatus === 'active'
                  ? 'Facturé mensuellement'
                  : initialTeamData?.subscriptionStatus === 'trialing'
                  ? 'Période d\'essai'
                  : 'Aucun abonnement actif'}
              </p>
            </div>
            <form action={customerPortalAction}>
              <Button type="submit" variant="outline" size="sm">
                Gérer l&apos;abonnement
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
