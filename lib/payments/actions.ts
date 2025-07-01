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
  console.log('[SERVER ACTION] createUserCheckoutSession started with planId:', planId);
  
  try {
    const supabase = await createClient();
    console.log('[SERVER ACTION] Supabase client created');
    
    const user = await getUser(supabase);
    console.log('[SERVER ACTION] User retrieved:', user ? { id: user.id, email: user.email } : 'null');
    
    if (!user) {
      console.error('[SERVER ACTION] User authentication failed');
      throw new Error('Utilisateur non authentifié');
    }

    console.log('[SERVER ACTION] Calling createUserCheckout with:', { userId: user.id, planId });
    const checkoutUrl = await createUserCheckout({ 
      user, 
      planId 
    });
    
    console.log('[SERVER ACTION] Checkout URL created:', checkoutUrl);
    redirect(checkoutUrl);
  } catch (error) {
    console.error('[SERVER ACTION] Error in createUserCheckoutSession:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      planId
    });
    throw error;
  }
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