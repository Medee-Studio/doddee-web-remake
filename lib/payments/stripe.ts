import Stripe from 'stripe';
import { redirect } from 'next/navigation';
import { Team } from '@/lib/supabase/schema';
import { User } from '@supabase/supabase-js';
import {
  getTeamByStripeCustomerId,
  getUser,
  updateTeamSubscription,
  getUserByStripeCustomerId,
  updateUserSubscription,
  createUserStripeCustomer,
  getUserSubscriptionStatus
} from '@/lib/supabase/queries';
import { createClient, createServiceRoleClient } from '../supabase/server';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil'
});

export async function createCheckoutSession({
  team,
  priceId
}: {
  team: Team | null;
  priceId: string;
}) {
  const supabase = await createClient();
  const user = await getUser(supabase);

  if (!team || !user) {
    redirect(`/sign-up?redirect=checkout&priceId=${priceId}`);
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    mode: 'subscription',
    success_url: `${process.env.BASE_URL}/api/stripe/checkout?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/pricing`,
    customer: team.stripeCustomerId || undefined,
    client_reference_id: user.id.toString(),
    allow_promotion_codes: true
  });

  redirect(session.url!);
}

export async function createCustomerPortalSession(team: Team) {
  if (!team.stripeCustomerId || !team.stripeProductId) {
    redirect('/pricing');
  }

  let configuration: Stripe.BillingPortal.Configuration;
  const configurations = await stripe.billingPortal.configurations.list();

  if (configurations.data.length > 0) {
    configuration = configurations.data[0];
  } else {
    const product = await stripe.products.retrieve(team.stripeProductId);
    if (!product.active) {
      throw new Error("Team's product is not active in Stripe");
    }

    const prices = await stripe.prices.list({
      product: product.id,
      active: true
    });
    if (prices.data.length === 0) {
      throw new Error("No active prices found for the team's product");
    }

    configuration = await stripe.billingPortal.configurations.create({
      business_profile: {
        headline: 'Manage your subscription'
      },
      features: {
        subscription_update: {
          enabled: true,
          default_allowed_updates: ['price', 'quantity', 'promotion_code'],
          proration_behavior: 'create_prorations',
          products: [
            {
              product: product.id,
              prices: prices.data.map((price) => price.id)
            }
          ]
        },
        subscription_cancel: {
          enabled: true,
          mode: 'at_period_end',
          cancellation_reason: {
            enabled: true,
            options: [
              'too_expensive',
              'missing_features',
              'switched_service',
              'unused',
              'other',
            ],
          },
        },
        payment_method_update: {
          enabled: true,
        },
      },
    });
  }

  return stripe.billingPortal.sessions.create({
    customer: team.stripeCustomerId,
    return_url: `${process.env.BASE_URL}/dashboard`,
    configuration: configuration.id
  });
}

export async function handleSubscriptionChange(
  subscription: Stripe.Subscription
) {
  const customerId = subscription.customer as string;
  const subscriptionId = subscription.id;
  const status = subscription.status;

  const supabase = createServiceRoleClient();

  const team = await getTeamByStripeCustomerId(supabase, customerId);

  if (!team) {
    console.error('Team not found for Stripe customer:', customerId);
    return;
  }

  if (status === 'active' || status === 'trialing') {
    const plan = subscription.items.data[0]?.plan;
    await updateTeamSubscription(supabase, team.id, {
      stripe_subscription_id: subscriptionId,
      stripe_product_id: plan?.product as string,
      plan_name: (plan?.product as Stripe.Product).name,
      subscription_status: status
    });
  } else if (status === 'canceled' || status === 'unpaid') {
    await updateTeamSubscription(supabase, team.id, {
      stripe_subscription_id: null,
      stripe_product_id: null,
      plan_name: null,
      subscription_status: status
    });
  }
}

export async function getStripePrices() {
  const prices = await stripe.prices.list({
    expand: ['data.product'],
    active: true,
    type: 'recurring'
  });

  return prices.data.map((price) => ({
    id: price.id,
    productId:
      typeof price.product === 'string' ? price.product : price.product.id,
    unitAmount: price.unit_amount,
    currency: price.currency,
    interval: price.recurring?.interval,
    trialPeriodDays: price.recurring?.trial_period_days
  }));
}

export async function getStripeProducts() {
  const products = await stripe.products.list({
    active: true,
    expand: ['data.default_price']
  });

  return products.data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    defaultPriceId:
      typeof product.default_price === 'string'
        ? product.default_price
        : product.default_price?.id
  }));
}

// USER SUBSCRIPTION FUNCTIONS
const PLAN_PRICE_IDS = {
  'eco-profile': process.env.STRIPE_ECO_PROFILE_PRICE_ID!,
  'cours': process.env.STRIPE_COURS_PRICE_ID!,
  'la-totale': process.env.STRIPE_LA_TOTALE_PRICE_ID!,
};

export async function createUserCheckoutSession({
  user,
  planId
}: {
  user: User;
  planId: string;
}) {
  console.log('[STRIPE] createUserCheckoutSession started:', { userId: user.id, planId });
  
  const supabase = await createClient();
  console.log('[STRIPE] Supabase client created');
  
  // Check if plan exists
  console.log('[STRIPE] Available plans:', Object.keys(PLAN_PRICE_IDS));
  if (!PLAN_PRICE_IDS[planId as keyof typeof PLAN_PRICE_IDS]) {
    console.error('[STRIPE] Invalid plan ID:', planId, 'Available plans:', Object.keys(PLAN_PRICE_IDS));
    throw new Error(`Plan invalide: ${planId}`);
  }

  const priceId = PLAN_PRICE_IDS[planId as keyof typeof PLAN_PRICE_IDS];
  console.log('[STRIPE] Price ID retrieved:', priceId);
  
  // Check if price ID is configured
  if (!priceId) {
    console.error('[STRIPE] Price ID not configured for plan:', planId);
    throw new Error(`Configuration manquante pour le plan: ${planId}`);
  }

  console.log('[STRIPE] Environment variables check:', {
    BASE_URL: process.env.BASE_URL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? 'SET' : 'NOT SET',
    priceIdForPlan: priceId
  });
  
  // Get or create user profile
  console.log('[STRIPE] Getting user subscription status...');
  const userProfile = await getUserSubscriptionStatus(supabase, user.id);
  console.log('[STRIPE] User profile retrieved:', userProfile ? {
    stripe_customer_id: userProfile.stripe_customer_id,
    plan_name: userProfile.plan_name,
    subscription_status: userProfile.subscription_status
  } : 'null');
  
  try {
    console.log('[STRIPE] Creating Stripe checkout session with params:', {
      priceId,
      userId: user.id,
      userEmail: user.email,
      existingCustomerId: userProfile?.stripe_customer_id,
      planId
    });
    
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${process.env.BASE_URL}/api/stripe/checkout?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/dashboard/subscription?canceled=true`,
      client_reference_id: user.id,
      allow_promotion_codes: true,
      subscription_data: {
        metadata: {
          plan_id: planId,
          user_id: user.id
        }
      },
      metadata: {
        plan_id: planId,
        user_id: user.id
      }
    };

    // Only include customer OR customer_email, not both
    if (userProfile?.stripe_customer_id) {
      sessionParams.customer = userProfile.stripe_customer_id;
    } else {
      sessionParams.customer_email = user.email;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log('[STRIPE] Stripe session created successfully:', {
      sessionId: session.id,
      url: session.url,
      customerId: session.customer
    });
    return session.url!;
  } catch (error) {
    console.error('[STRIPE] Stripe session creation failed:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      planId,
      priceId,
      userId: user.id
    });
    throw new Error(`Erreur lors de la création de la session de paiement: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
  }
}

export async function createUserCustomerPortalSession(user: User) {
  const supabase = await createClient();
  const userProfile = await getUserSubscriptionStatus(supabase, user.id);
  
  if (!userProfile?.stripe_customer_id) {
    redirect('/dashboard/subscription');
  }

  return stripe.billingPortal.sessions.create({
    customer: userProfile.stripe_customer_id,
    return_url: `${process.env.BASE_URL}/dashboard/subscription`,
  });
}

export async function handleUserSubscriptionChange(
  subscription: Stripe.Subscription
) {
  const customerId = subscription.customer as string;
  const subscriptionId = subscription.id;
  const status = subscription.status;
  const planId = subscription.metadata?.plan_id;
  const userId = subscription.metadata?.user_id;

  const supabase = createServiceRoleClient();
  
  // First try to find user by user_id from metadata (more reliable)
  let user = null;
  if (userId) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (!error) {
      user = data;
    }
  }
  
  // Fallback to Stripe customer ID lookup if user not found by ID
  if (!user) {
    user = await getUserByStripeCustomerId(supabase, customerId);
  }

  if (!user) {
    console.error('User not found for subscription:', subscriptionId);
    return;
  }

  if (status === 'active' || status === 'trialing') {
    const plan = subscription.items.data[0]?.plan;
    await updateUserSubscription(supabase, user.id, {
      stripe_subscription_id: subscriptionId,
      stripe_product_id: plan?.product as string,
      plan_name: planId || 'unknown',
      subscription_status: status
    });
  } else if (status === 'canceled' || status === 'unpaid') {
    await updateUserSubscription(supabase, user.id, {
      stripe_subscription_id: null,
      stripe_product_id: null,
      plan_name: 'gratuit',
      subscription_status: 'canceled'
    });
  }
}

export async function handleUserCheckoutComplete(session: Stripe.Checkout.Session) {
  const supabase = createServiceRoleClient();
  
  if (!session.customer || !session.client_reference_id) {
    console.error('Missing customer or client_reference_id in checkout session');
    return;
  }

  const customerId = session.customer as string;
  const userId = session.client_reference_id;
  
  // Create or update user's Stripe customer ID
  await createUserStripeCustomer(supabase, userId, customerId);
}