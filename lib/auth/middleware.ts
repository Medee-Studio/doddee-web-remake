import { z, ZodTypeDef } from 'zod';
import { TeamDataWithMembers, User } from '@/lib/supabase/schema';
import { getTeamForUser, getUser, getUserProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import { createClient } from '../supabase/server';

export type ActionState = {
  error?: string;
  success?: string;
  [key: string]: unknown; // This allows for additional properties
};

type ValidatedActionFunction<S extends z.ZodType<unknown, ZodTypeDef, unknown>, TResult> = (
  data: z.infer<S>,
  formData: FormData
) => Promise<TResult>;

export function validatedAction<S extends z.ZodType<unknown, ZodTypeDef, unknown>, TResult>(
  schema: S,
  action: ValidatedActionFunction<S, TResult>
) {
  return async (prevState: ActionState, formData: FormData): Promise<TResult | { error: string }> => {
    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    return action(result.data, formData);
  };
}

type ValidatedActionWithUserFunction<S extends z.ZodType<unknown, ZodTypeDef, unknown>, TResult> = (
  data: z.infer<S>,
  formData: FormData,
  user: User
) => Promise<TResult>;

export function validatedActionWithUser<S extends z.ZodType<unknown, ZodTypeDef, unknown>, TResult>(
  schema: S,
  action: ValidatedActionWithUserFunction<S, TResult>
) {
  return async (prevState: ActionState, formData: FormData): Promise<TResult | { error: string }> => {
    const supabase = await createClient();
    const authUser = await getUser(supabase);
    if (!authUser) {
      throw new Error('User is not authenticated');
    }
    if (!authUser.email) {
      throw new Error('User email is not defined');
    }

    // Get the full user profile from database with subscription properties
    const userProfile = await getUserProfile(supabase, authUser.id);
    if (!userProfile) {
      throw new Error('User profile not found');
    }

    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    return action(result.data, formData, userProfile);
  };
}

type ActionWithTeamFunction<TResult> = (
  formData: FormData,
  team: TeamDataWithMembers
) => Promise<TResult>;

export function withTeam<TResult>(action: ActionWithTeamFunction<TResult>) {
  return async (formData: FormData): Promise<TResult> => {
    const supabase = await createClient();
    const user = await getUser(supabase);
    if (!user) {
      redirect('/sign-in');
    }

    const team = await getTeamForUser(supabase) as TeamDataWithMembers | null;
    if (!team) {
      throw new Error('Team not found');
    }

    return action(formData, team);
  };
}