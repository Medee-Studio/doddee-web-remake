'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useActionState, useEffect } from 'react';
import { TeamDataWithMembers, Invitation, ActionResult } from '@/lib/supabase/schema';
import { handleRemoveTeamMemberForm, handleCancelTeamInvitationForm } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function TeamMembersSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse space-y-4 mt-1">
          <div className="flex items-center space-x-4">
            <div className="size-8 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-14 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface TeamMembersProps {
  initialTeamData: TeamDataWithMembers | null;
  pendingInvitations?: Invitation[];
}

function PendingInvitations({ invitations }: { invitations: Invitation[] }) {
  const supabase = createClient();
  const router = useRouter();

  const handleCancelTeamInvitationFormWithSupabase = handleCancelTeamInvitationForm.bind(
    null,
    supabase
  );

  const [cancelState, cancelAction, isCancelPending] = useActionState<
    ActionResult | null,
    FormData
  >(handleCancelTeamInvitationFormWithSupabase, null);

  useEffect(() => {
    if (cancelState) {
      if ('error' in cancelState && cancelState.error) {
        toast.error(cancelState.error);
      } else if ('success' in cancelState && cancelState.success) {
        toast.success(cancelState.success);
        router.refresh();
      }
    }
  }, [cancelState, router]);

  if (!invitations || invitations.length === 0) {
    return null;
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Invitations en attente</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {invitations.map((invite) => (
            <li key={invite.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-medium">{invite.email}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    Rôle: {invite.role}
                  </p>
                </div>
              </div>
              <form action={cancelAction}>
                <input type="hidden" name="invitationId" value={invite.id} />
                <Button
                  type="submit"
                  variant="outline"
                  size="sm"
                  disabled={isCancelPending}
                >
                  {isCancelPending ? 'Annulation...' : 'Annuler'}
                </Button>
              </form>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function TeamMembers({ initialTeamData, pendingInvitations }: TeamMembersProps) {
  const supabase = createClient();
  const router = useRouter();

  const handleRemoveTeamMemberFormWithSupabase = handleRemoveTeamMemberForm.bind(
    null,
    supabase
  );

  const [removeState, removeAction, isRemovePending] = useActionState<
    ActionResult | null,
    FormData
  >(handleRemoveTeamMemberFormWithSupabase, null);

  useEffect(() => {
    if (removeState) {
      if ('error' in removeState && removeState.error) {
        toast.error(removeState.error);
      } else if ('success' in removeState && removeState.success) {
        toast.success(removeState.success);
        router.refresh();
      }
    }
  }, [removeState, router]);

  const hasMembers = (initialTeamData?.teamMembers?.length ?? 0) > 0;
  const hasPendingInvitations = (pendingInvitations?.length ?? 0) > 0;

  if (!hasMembers && !hasPendingInvitations) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Membres de l&apos;équipe et invitations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Aucun membre dans l&apos;équipe et aucune invitation en attente.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {hasMembers && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Membres de l&apos;équipe</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {initialTeamData!.teamMembers!.map((member) => (
                <li key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">
                        {member.user?.email || 'Unknown User'}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  {member.role !== 'owner' && (
                    <form action={removeAction}>
                      <input type="hidden" name="memberId" value={member.id} />
                      {initialTeamData!.id && <input type="hidden" name="teamId" value={initialTeamData!.id} />}
                      <Button
                        type="submit"
                        variant="outline"
                        size="sm"
                        disabled={isRemovePending}
                      >
                        {isRemovePending ? 'Suppression en cours...' : 'Supprimer'}
                      </Button>
                    </form>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {hasPendingInvitations && <PendingInvitations invitations={pendingInvitations!} />}
    </>
  );
} 