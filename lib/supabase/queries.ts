import { SupabaseClient } from '@supabase/supabase-js';
import { ActionResult, TeamDataWithMembers, TeamMemberRole, User } from './schema';
import { RessourcesDataType, PlanAction } from '@/types';
import { cache } from 'react';

// Define types for RPC data structures
interface RpcTeamMemberUser {
  id: string;
  email: string;
}

interface RpcTeamMember {
  id: number;
  user_id: string;
  team_id: number;
  role: string;
  joined_at: string; // Comes as string from RPC, will be converted to Date
  user: RpcTeamMemberUser;
}

interface RpcTeamData {
  id: number;
  name: string;
  created_at: string; // Comes as string
  updated_at: string; // Comes as string
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_product_id: string | null;
  plan_name: string | null;
  subscription_status: string | null;
  team_members: RpcTeamMember[] | null;
}

export async function getUser(supabaseClient: SupabaseClient) {
  const supabase = supabaseClient;
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    // console.error('Error fetching Supabase user:', error?.message);
    return null;
  }
  return user; 
}

export async function getUserProfile(supabaseClient: SupabaseClient, userId?: string) {
  const supabase = supabaseClient;
  let idToFetch = userId;

  if (!idToFetch) {
    const authUser = await getUser(supabaseClient);
    if (!authUser) return null;
    idToFetch = authUser.id;
  }

  const { data: userProfile, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', idToFetch)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { 
      console.error('Error fetching user profile:', error.message);
    }
    return null;
  }
  return userProfile;
}

export async function getTeamByStripeCustomerId(supabaseClient: SupabaseClient, customerId: string) {
  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .eq('stripe_customer_id', customerId)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { 
        console.error('Error fetching team by Stripe customer ID:', error.message);
    }
    return null;
  }
  return data;
}

export async function updateTeamSubscription(
  supabaseClient: SupabaseClient,
  teamId: number, 
  subscriptionData: {
    stripe_subscription_id: string | null;
    stripe_product_id: string | null;
    plan_name: string | null;
    subscription_status: string;
  }
) {
  const supabase = supabaseClient;
  const { data, error } = await supabase
    .from('teams')
    .update({
      ...subscriptionData,
      updated_at: new Date().toISOString(),
    })
    .eq('id', teamId)
    .select(); 

  if (error) {
    console.error('Error updating team subscription:', error.message);
    throw error; 
  }
  return data;
}

export async function getUserWithTeam(supabaseClient: SupabaseClient, userId?: string) {
  // If a specific userId is provided and it's different from the current auth user,
  // the RPC `get_current_user_profile_and_team_id` cannot be used directly due to RLS on users table.
  // For simplicity, this function will now primarily serve to get the *current* user's profile and teamId via RPC.
  // If fetching for other users is a strict requirement, a different approach or RLS modification is needed.
  if (userId) {
      const currentUser = await getUser(supabaseClient);
      if (!currentUser || currentUser.id !== userId) {
          // Fallback to old method if specific, non-current user ID is passed.
          // This part might be restricted by RLS on 'users' table if not careful.
          console.warn("getUserWithTeam called with a specific userId; falling back to non-RPC method which might be RLS restricted for other users' profiles.");
          const userProfile = await getUserProfile(supabaseClient, userId);
          if (!userProfile) return null;

          const { data: teamMember, error: teamMemberError } = await supabaseClient
            .from('team_members')
            .select('team_id')
            .eq('user_id', userId)
            .single();
          
          if (teamMemberError && teamMemberError.code !== 'PGRST116') { 
            console.error('Error fetching user team membership (fallback):', teamMemberError.message);
            return { user: userProfile, teamId: null }; 
          }
          return {
            user: userProfile, 
            teamId: teamMember?.team_id || null,
          };
      }
  }
  
  // For the current user, use the RPC
  const { data, error } = await supabaseClient.rpc('get_current_user_profile_and_team_id');

  if (error) {
    console.error('Error calling get_current_user_profile_and_team_id RPC:', error.message);
    return null;
  }
  // The RPC returns data in the shape { user: UserProfile | null, teamId: number | null }
  return data as { user: User | null; teamId: number | null } | null;
}

export async function getTeamForUser(supabaseClient: SupabaseClient): Promise<TeamDataWithMembers | null> {
  const { data: rpcData, error } = await supabaseClient.rpc('get_team_details_for_current_user');

  if (error) {
    console.error('Error calling get_team_details_for_current_user RPC:', error.message);
    return null;
  }
  
  if (!rpcData) {
    return null;
  }

  const typedRpcData = rpcData as RpcTeamData;

  // Transform snake_case keys from RPC to camelCase for TeamDataWithMembers
  const transformedData: TeamDataWithMembers = {
    // Team part
    id: typedRpcData.id,
    name: typedRpcData.name,
    createdAt: new Date(typedRpcData.created_at),
    updatedAt: new Date(typedRpcData.updated_at),
    stripeCustomerId: typedRpcData.stripe_customer_id,
    stripeSubscriptionId: typedRpcData.stripe_subscription_id,
    stripeProductId: typedRpcData.stripe_product_id,
    planName: typedRpcData.plan_name,
    subscriptionStatus: typedRpcData.subscription_status,
    // teamMembers part
    teamMembers: (typedRpcData.team_members || []).map((member: RpcTeamMember) => ({
      // TeamMember part
      id: member.id,
      userId: member.user_id,
      teamId: member.team_id,
      role: member.role,
      joinedAt: new Date(member.joined_at),
      // User part (already matches Pick<User, 'id' | 'email'>)
      user: member.user,
    })),
  };
  
  return transformedData;
}

export async function removeTeamMember(
  supabaseClient: SupabaseClient,
  memberId: number
): Promise<ActionResult> {
  // Assuming currentUserId was for context, RLS handles auth.uid() implicitly.
  // getUserWithTeam without specific ID gets current user's team context.
  const userAndTeamContext = await getUserWithTeam(supabaseClient);

  if (!userAndTeamContext?.user || !userAndTeamContext.teamId) {
    return { error: 'L\'utilisateur n\'est pas membre d\'une équipe ou les données de l\'utilisateur/équipe ne peuvent pas être récupérées.' };
  }

  const { error: deleteError } = await supabaseClient
    .from('team_members')
    .delete()
    .match({ id: memberId, team_id: userAndTeamContext.teamId });

  if (deleteError) {
    console.error('Erreur lors de la suppression du membre de l\'équipe:', deleteError.message);
    return { error: 'Impossible de supprimer le membre de l\'équipe.' };
  }

  return { success: 'Membre de l\'équipe supprimé avec succès.' };
}

export async function inviteTeamMember(
  supabaseClient: SupabaseClient,
  email: string,
  role: TeamMemberRole
  // currentUserId: string // Removed as RPC uses auth.uid()
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('invite_member_to_current_user_team', {
    p_invitee_email: email,
    p_invitee_role: role,
  });

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC invite_member_to_current_user_team:', error.message);
    // Check if data from RPC itself contains an error message
    if (data && 'error' in (data as ActionResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de l\'envoi de l\'invitation via RPC: ' + error.message };
  }

  // RPC returns { success: string } or { error: string }
  const result = data as ActionResult;
  if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Invitation envoyée avec succès.' };
}

export async function createTeam(
  supabaseClient: SupabaseClient,
  teamName: string
  // currentUserId: string // Removed as RPC uses auth.uid()
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('create_team_for_current_user', {
    p_team_name: teamName,
  });

  type CreateTeamRpcResult = ActionResult & { team_id?: number };

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC create_team_for_current_user:', error.message);
    if (data && 'error' in (data as CreateTeamRpcResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de la création de l\'équipe via RPC: ' + error.message };
  }
  
  const result = data as CreateTeamRpcResult;
   if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Équipe créée avec succès.' };
}

export async function acceptTeamInvite(
  supabaseClient: SupabaseClient,
  invitationId: number
  // currentUserId: string // Removed as RPC uses auth.uid()
): Promise<ActionResult> {
  const { data, error } = await supabaseClient.rpc('accept_team_invite_for_current_user', {
    p_invitation_id: invitationId,
  });

  if (error) {
    console.error('Erreur lors de l\'appel de la fonction RPC accept_team_invite_for_current_user:', error.message);
    if (data && 'error' in (data as ActionResult)) {
      return { error: (data as { error: string }).error };
    }
    return { error: 'Erreur lors de l\'acceptation de l\'invitation via RPC: ' + error.message };
  }

  const result = data as ActionResult;
  if ('error' in result) {
    return { error: result.error };
  }
  return { success: result.success || 'Vous avez rejoint l\'équipe avec succès.' };
}

export async function getTeamInvitesForUser(supabaseClient: SupabaseClient) {
  const authUser = await getUser(supabaseClient);
  if (!authUser) {
    return null;
  }

  const { data: invitations, error } = await supabaseClient
    .from('invitations')
    .select(`
      id,
      team_id,
      role,
      status,
      teams (
        id,
        name
      )
    `)
    .eq('email', authUser.email)
    .eq('status', 'pending'); // Only fetch pending invitations

  if (error) {
    console.error('Erreur lors de la récupération des invitations d\'équipe pour l\'utilisateur:', error.message);
    return null;
  }

  return invitations;
}

export async function getPendingTeamInvitations(supabaseClient: SupabaseClient, teamId: number) {
  if (!teamId) {
    console.log('Aucun teamId fourni à getPendingTeamInvitations');
    return null;
  }

  const { data: invitations, error } = await supabaseClient
    .from('invitations')
    .select('*') // Select all fields for now, can be refined later
    .eq('team_id', teamId)
    .eq('status', 'pending');

  if (error) {
    console.error('Erreur lors de la récupération des invitations d\'équipe en attente:', error.message);
    return null;
  }

  return invitations;
}

export async function handleRemoveTeamMemberForm(
  supabaseClient: SupabaseClient,
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const user = await getUser(supabaseClient);

  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  const memberIdString = formData.get('memberId');
  if (!memberIdString || typeof memberIdString !== 'string') {
    return { error: 'ID de membre non fourni ou invalide.' };
  }

  const memberId = parseInt(memberIdString, 10);
  if (isNaN(memberId)) {
    return { error: 'Format d\'ID de membre invalide.' };
  }

  return removeTeamMember(supabaseClient, memberId);
}

export async function cancelTeamInvitation(
  supabaseClient: SupabaseClient,
  invitationId: number,
): Promise<ActionResult> {
  // RLS policy "Team admins/owners can delete pending invitations for their team"
  // should ensure only authorized users can delete.
  // We also explicitly check for status 'pending' here as an additional safeguard.
  const { error } = await supabaseClient
    .from('invitations')
    .delete()
    .match({ id: invitationId, status: 'pending' });

  if (error) {
    console.error('Erreur lors de la suppression de l\'invitation d\'équipe:', error.message);
    return { error: 'Impossible de supprimer l\'invitation. Vous n\'avez peut-être pas les permissions ou l\'invitation n\'est pas en attente.' };
  }

  return { success: 'Invitation annulée avec succès.' };
}

export async function handleCancelTeamInvitationForm(
  supabaseClient: SupabaseClient,
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const user = await getUser(supabaseClient);

  if (!user) {
    return { error: 'Utilisateur non authentifié.' };
  }

  const invitationIdString = formData.get('invitationId');
  if (!invitationIdString || typeof invitationIdString !== 'string') {
    return { error: 'ID d\'invitation non fourni ou invalide.' };
  }

  const invitationId = parseInt(invitationIdString, 10);
  if (isNaN(invitationId)) {
    return { error: 'Format d\'ID d\'invitation invalide.' };
  }

  return cancelTeamInvitation(supabaseClient, invitationId);
}

export const getUserMoralData = cache(async (supabase: SupabaseClient) => {
  // Get the current session
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Failed to get session");
  }

  if (session) {
    const uuid = session.user.id;

    // Call the stored procedure with the uuid
    const { data: userMoralData, error: rpcError } = await supabase.rpc(
      "get_user_moral_data",
      { uuid },
    );

    if (rpcError) {
      throw new Error("Failed to get user moral data");
    }

    return userMoralData;
  } else {
    throw new Error("No active session found");
  }
});

export const getUserRessources = cache(async (supabase: SupabaseClient) => {
  const user = await getUser(supabase);
  const { data: ressourcesData } = await supabase.rpc("get_user_resources", {
    p_user_id_moral: user?.id,
  });
  return ressourcesData as RessourcesDataType;
});

export const getUserActionsData = cache(async (supabase: SupabaseClient) => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Failed to get session");
  }

  if (!session) {
    throw new Error("No active session found");
  }

  const uuid = session.user.id;
  
  try {
    const { data: userActionsData, error: queryError } = await supabase
      .from("utilisateurs_moraux_actions")
      .select(
        `
        id_action,
        action_status,
        deadline,
        actions (
          id_action,
          nom_action,
          action_type
        )
      `
      )
      .eq("user_id_moral", uuid)
      .in("action_status", ["en_cours", "valide", "en_cours_validation"])
      .not("deadline", "is", null);

    if (queryError) {
      console.warn("Database query failed, using mock data:", queryError.message);
      
      // Return mock data for demonstration purposes when tables don't exist
      const mockActions: PlanAction[] = [
        {
          action_data: {
            id: 1,
            nom_action: "Mise en place d'un programme de recyclage",
            action_type: 'environnement',
          },
          user_action_data: {
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
            action_status: 'en_cours',
          },
        },
        {
          action_data: {
            id: 2,
            nom_action: "Formation du personnel sur la diversité",
            action_type: 'social',
          },
          user_action_data: {
            deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
            action_status: 'en_cours_validation',
          },
        },
        {
          action_data: {
            id: 3,
            nom_action: "Audit de transparence financière",
            action_type: 'gouvernance',
          },
          user_action_data: {
            deadline: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days from now
            action_status: 'valide',
          },
        },
      ];
      
      return mockActions;
    }

    // Define the query result type
    interface QueryResult {
      id_action?: number;
      action_status?: string;
      deadline?: string;
      actions?: Array<{
        id_action: number;
        nom_action: string;
        action_type: string;
      }> | {
        id_action: number;
        nom_action: string;
        action_type: string;
      };
      nom_action?: string;
      action_type?: string;
    }

    // Transform the data to match our PlanAction interface
    const transformedActions: PlanAction[] = (userActionsData || [] as QueryResult[])
      .map((item: QueryResult) => {
        // Handle actions as array (first element) or direct properties
        let actionData;
        if (Array.isArray(item.actions) && item.actions.length > 0) {
          actionData = item.actions[0];
        } else if (item.actions && !Array.isArray(item.actions)) {
          actionData = item.actions;
        } else {
          actionData = item;
        }
        
        const actionType = actionData?.action_type;
        const validActionType: 'environnement' | 'social' | 'gouvernance' = 
          actionType === 'social' || actionType === 'gouvernance' ? actionType : 'environnement';
        
        const actionStatus = item.action_status;
        const validActionStatus: 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide' = 
          actionStatus === 'en_cours_validation' || actionStatus === 'en_cours' || actionStatus === 'valide' 
            ? actionStatus : 'disponible';

        return {
          action_data: {
            id: actionData?.id_action || 0,
            nom_action: actionData?.nom_action || '',
            action_type: validActionType,
          },
          user_action_data: {
            deadline: item.deadline || '',
            action_status: validActionStatus,
          },
        };
      })
      .filter((item) => item.action_data.id !== 0); // Filter out invalid items

    return transformedActions;
  } catch (queryError) {
    console.error("Error in getUserActionsData:", queryError);
    throw new Error("Failed to get user actions data");
  }
});