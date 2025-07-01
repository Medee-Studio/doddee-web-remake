'use server';

import { redirect } from 'next/navigation';
import { createCheckoutSession, createCustomerPortalSession, createUserCheckoutSession as createUserCheckout, createUserCustomerPortalSession } from './stripe';
import { withTeam } from '@/lib/auth/middleware';
import { createClient } from '@/lib/supabase/server';
import { getUser } from '@/lib/supabase/queries';

export const checkoutAction = withTeam(async (formData, team) => {
  const priceId = formData.get('priceId') as string;
  await createCheckoutSession({ team: team, priceId });
});

export const customerPortalAction = withTeam(async (_, team) => {
  const portalSession = await createCustomerPortalSession(team);
  redirect(portalSession.url);
});

// USER-BASED ACTIONS
export async function createUserCheckoutSession(planId: string) {
  const supabase = await createClient();
  const user = await getUser(supabase);
  
  if (!user) {
    throw new Error('Utilisateur non authentifié');
  }

  const checkoutUrl = await createUserCheckout({ 
    user, 
    planId 
  });
  
  redirect(checkoutUrl);
}

export async function createUserCustomerPortalAction() {
  const supabase = await createClient();
  const user = await getUser(supabase);
  
  if (!user) {
    throw new Error('Utilisateur non authentifié');
  }

  const portalSession = await createUserCustomerPortalSession(user);
  redirect(portalSession.url);
}