import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/payments/stripe';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';
import { updateUserSubscription, createUserStripeCustomer } from '@/lib/supabase/queries';

interface UpdateTeamSubscriptionDetailsResponse {
  success?: string;
  error?: string;
}

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.redirect(new URL('/pricing', request.url));
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'subscription'],
    });

    if (!session.customer || typeof session.customer === 'string') {
      throw new Error('Invalid customer data from Stripe.');
    }

    const customerId = session.customer.id;
    const subscriptionId =
      typeof session.subscription === 'string'
        ? session.subscription
        : session.subscription?.id;

    if (!subscriptionId) {
      throw new Error('No subscription found for this session.');
    }

    const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ['items.data.price.product'],
    });

    const plan = subscription.items.data[0]?.price;

    if (!plan) {
      throw new Error('No plan found for this subscription.');
    }

    const productId = (plan.product as Stripe.Product).id;

    if (!productId) {
      throw new Error('No product ID found for this subscription.');
    }

    const userId = session.client_reference_id;
    if (!userId) {
      throw new Error("No user ID found in session's client_reference_id.");
    }

    // Check if this is a user subscription (has plan_id in metadata)
    const planId = session.metadata?.plan_id;
    
    if (planId) {
      // Handle user subscription
      console.log('[CHECKOUT] Processing user subscription for plan:', planId);
      
      // Create or update user's Stripe customer ID
      await createUserStripeCustomer(supabase, userId, customerId);
      
      // Update user subscription
      await updateUserSubscription(supabase, userId, {
        stripe_subscription_id: subscriptionId,
        stripe_product_id: productId,
        plan_name: planId,
        subscription_status: subscription.status
      });

      return NextResponse.redirect(new URL('/dashboard/subscription?success=true', request.url));
    } else {
      // Handle team subscription (legacy flow)
      console.log('[CHECKOUT] Processing team subscription');
      
      const { data: rpcResponseData, error: rpcCallError } = await supabase.rpc(
        'update_team_subscription_details',
        {
          p_user_id: userId,
          p_stripe_customer_id: customerId,
          p_stripe_subscription_id: subscriptionId,
          p_stripe_product_id: productId,
          p_plan_name: (plan.product as Stripe.Product).name,
          p_subscription_status: subscription.status,
        }
      );

      if (rpcCallError) {
        console.error('Erreur lors de l&apos;appel RPC supabase.rpc():', rpcCallError);
        throw new Error(`Échec de l'appel RPC: ${rpcCallError.message || 'Erreur inconnue'}`);
      }

      if (!rpcResponseData) {
        console.error('Aucune donnée retournée par la fonction RPC, ou donnée nulle.');
        throw new Error('Réponse invalide ou nulle de la fonction RPC.');
      }

      const typedData = rpcResponseData as UpdateTeamSubscriptionDetailsResponse;

      if (typedData.error) {
        console.error('Erreur retournée par la logique de la fonction RPC:', typedData.error);
        throw new Error(typedData.error);
      }

      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } catch (error) {
    console.error('Erreur lors du traitement du checkout:', error);
    return NextResponse.redirect(new URL('/dashboard/subscription?error=true', request.url));
  }
}