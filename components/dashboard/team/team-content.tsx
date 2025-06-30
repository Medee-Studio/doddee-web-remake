import { ManageSubscription } from '@/components/dashboard/team/manage-subscription';
import { TeamMembers } from '@/components/dashboard/team/team-members';
import { InviteTeamMember } from '@/components/dashboard/team/invite-team-member';
import { TeamInvitations } from '@/components/dashboard/team/team-invitations';
import { createClient } from '@/lib/supabase/server';
import { getUserProfile, getTeamForUser, getTeamInvitesForUser, getPendingTeamInvitations } from '@/lib/supabase/queries';
import { User, Invitation, TeamDataWithMembers, TeamMemberRole } from '@/lib/supabase/schema';

type PageInvitation = {
  id: number;
  team_id: number;
  role: string;
  status: string;
  teams: Array<{ id: number; name: string }> | null;
};

export async function TeamContent() {
    const supabase = await createClient();
    const userProfile = await getUserProfile(supabase) as User | null;
    
    const teamData = userProfile ? await getTeamForUser(supabase) : null;
    const invitations = userProfile ? await getTeamInvitesForUser(supabase) as PageInvitation[] || [] : [];
    const pendingTeamInvitations = teamData?.id ? await getPendingTeamInvitations(supabase, teamData.id) as Invitation[] || [] : [];

    const currentUserTeamRole = teamData?.teamMembers?.find(member => member.userId === userProfile?.id)?.role || null;

    return (
        <>
            <ManageSubscription initialTeamData={teamData as TeamDataWithMembers} currentUser={userProfile} />
            
            {teamData?.id ?
            <>
              <TeamMembers initialTeamData={teamData as TeamDataWithMembers} pendingInvitations={pendingTeamInvitations} />
              <InviteTeamMember currentUser={userProfile} currentUserTeamRole={currentUserTeamRole as TeamMemberRole | null} />
            </>
            :
            <TeamInvitations initialInvitations={invitations} currentUser={userProfile} />
            }
        </>
    );
} 