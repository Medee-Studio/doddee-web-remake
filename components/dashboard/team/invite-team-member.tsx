'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { useActionState } from 'react';
import { TeamMemberRole, User } from '@/lib/supabase/schema';
import { inviteTeamMember } from '@/lib/supabase/queries';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2, PlusCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type ActionState = {
  success?: string;
  error?: string;
};

export function InviteTeamMemberSkeleton() {
  return (
    <Card className="h-[260px]">
      <CardHeader>
        <CardTitle>Inviter un membre de l&apos;équipe</CardTitle>
      </CardHeader>
    </Card>
  );
}

interface InviteTeamMemberProps {
  currentUser: User | null;
  currentUserTeamRole: TeamMemberRole | null;
}

export function InviteTeamMember({ currentUser, currentUserTeamRole }: InviteTeamMemberProps) {
  const supabase = createClient();
  const router = useRouter();

  console.log(currentUserTeamRole);

  const isOwner = currentUserTeamRole === 'owner';
  const isLoading = currentUser === undefined || currentUserTeamRole === undefined;

  async function handleInviteAction(
    prevState: ActionState,
    formData: FormData
  ): Promise<ActionState> {
    const email = formData.get('email') as string;
    const role = formData.get('role') as TeamMemberRole;

    if (!currentUser?.id) {
      toast.error('L\'utilisateur n\'est pas authentifié ou les données sont en cours de chargement.');
      return { error: 'L\'utilisateur n\'est pas authentifié ou les données sont en cours de chargement.' };
    }

    if (!email || !role) {
      toast.error('Email et rôle sont requis.');
      return { error: 'Email et rôle sont requis.' };
    }

    const result = await inviteTeamMember(supabase, email, role);

    if (result && 'error' in result && result.error) {
      toast.error(result.error);
      return { error: result.error };
    }

    if (result && 'success' in result && result.success) {
      toast.success(result.success);
      router.refresh();
      return { success: result.success };
    }
    
    toast.error('Une erreur inattendue est survenue.');
    return { error: 'Une erreur inattendue est survenue.' };
  }

  const [, inviteAction, isInvitePending] = useActionState<ActionState, FormData>(
    handleInviteAction, 
    {}
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inviter un membre de l&apos;équipe</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={inviteAction} className="space-y-4">
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Entrez l'email"
              required
              disabled={!isOwner || isLoading || isInvitePending}
            />
          </div>
          <div>
            <Label>Rôle</Label>
            <RadioGroup
              defaultValue="member"
              name="role"
              className="flex space-x-4"
              disabled={!isOwner || isLoading || isInvitePending}
            >
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="member" id="member" />
                <Label htmlFor="member">Membre</Label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner">Propriétaire</Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            type="submit"
            size="sm"
            disabled={isInvitePending || !isOwner || isLoading}
          >
            {isInvitePending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Invitation en cours...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" />
                Inviter un membre
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {(!isOwner && !isLoading) && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Vous devez être propriétaire d&apos;une équipe pour inviter de nouveaux membres.
          </p>
        </CardFooter>
      )}
    </Card>
  );
} 