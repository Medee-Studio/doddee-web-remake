'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { acceptTeamInvite } from '@/lib/supabase/queries';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@/lib/supabase/schema';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export type Invitation = {
  id: number;
  team_id: number;
  role: string;
  status: string;
  teams: Array<{ id: number; name: string }> | null; // 'teams' might be singular 'team' in your actual schema
};

export function TeamInvitationsSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Invitations à l&apos;équipe</CardTitle>
      </CardHeader>
    </Card>
  );
}

interface TeamInvitationsProps {
  initialInvitations: Invitation[];
  currentUser: User | null;
}

export function TeamInvitations({ initialInvitations, currentUser }: TeamInvitationsProps) {
  const router = useRouter();
  const [actionInProgress, setActionInProgress] = useState<number | null>(null);
  const supabase = createClient();

  const handleAcceptInvite = async (invitationId: number) => {
    setActionInProgress(invitationId);

    try {
      if (!currentUser?.id) {
        toast.error('Utilisateur non trouvé. Impossible d\'accepter l\'invitation.');
        setActionInProgress(null);
        return;
      }

      const result = await acceptTeamInvite(supabase, invitationId);

      if (result && 'error' in result && result.error) {
        toast.error(result.error);
      } else if (result && 'success' in result && result.success) {
        toast.success('Invitation acceptée avec succès!');
        router.refresh();
      } else {
        toast.error('Une erreur inattendue est survenue lors de l\'acceptation de l\'invitation.');
      }
    } catch {
      toast.error('Une erreur inattendue est survenue');
    } finally {
      setActionInProgress(null);
    }
  };

  const aucuneInvitation = (!initialInvitations || initialInvitations.length === 0);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Invitations</CardTitle>
        {aucuneInvitation && <CardDescription>Aucune invitation pour le moment.</CardDescription>}
      </CardHeader>
      {!aucuneInvitation && (
        <CardContent>
          <ul className="space-y-4">
            {initialInvitations.map((invite: Invitation) => (
              <li key={invite.id} className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">{invite.teams?.[0]?.name || 'Équipe'}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    Rôle: {invite.role}
                  </p>
                </div>
                <Button
                  onClick={() => handleAcceptInvite(invite.id)}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={actionInProgress === invite.id}
                >
                  {actionInProgress === invite.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Acceptation en cours...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Accepter l&apos;invitation
                    </>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
} 