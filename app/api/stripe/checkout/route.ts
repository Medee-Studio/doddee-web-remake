import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/payments/stripe';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

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
      // This error is from the Supabase client itself (e.g., network issue, RPC function not found)
      console.error(
        'Erreur lors de l&apos;appel RPC supabase.rpc():',
        rpcCallError
      );
      throw new Error(
        `Échec de l'appel RPC: ${rpcCallError.message || 'Erreur inconnue'}`
      );
    }

    if (!rpcResponseData) {
      console.error('Aucune donnée retournée par la fonction RPC, ou donnée nulle.');
      throw new Error('Réponse invalide ou nulle de la fonction RPC.');
    }

    const typedData = rpcResponseData as UpdateTeamSubscriptionDetailsResponse;

    // Now, check for the business logic error returned *inside* the JSON from the RPC function
    if (typedData.error) {
      console.error('Erreur retournée par la logique de la fonction RPC:', typedData.error);
      throw new Error(typedData.error);
    }

    return NextResponse.redirect(new URL('/dashboard', request.url));
  } catch (error) {
    console.error('Erreur lors du traitement du checkout:', error);
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}