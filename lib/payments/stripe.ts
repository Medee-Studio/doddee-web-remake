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
import { createClient } from '../supabase/server';

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
    allow_promotion_codes: true,
    subscription_data: {
      trial_period_days: 7
    }
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

  const supabase = await createClient();

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
  const supabase = await createClient();
  
  // Check if plan exists
  if (!PLAN_PRICE_IDS[planId as keyof typeof PLAN_PRICE_IDS]) {
    console.error('Invalid plan ID:', planId);
    throw new Error(`Plan invalide: ${planId}`);
  }

  const priceId = PLAN_PRICE_IDS[planId as keyof typeof PLAN_PRICE_IDS];
  
  // Check if price ID is configured
  if (!priceId) {
    console.error(`Price ID not configured for plan: ${planId}`);
    throw new Error(`Configuration manquante pour le plan: ${planId}`);
  }

  console.log('Creating checkout session for:', { planId, priceId, userId: user.id });
  
  // Get or create user profile
  const userProfile = await getUserSubscriptionStatus(supabase, user.id);
  
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${process.env.BASE_URL}/dashboard/subscription?success=true`,
      cancel_url: `${process.env.BASE_URL}/dashboard/subscription?canceled=true`,
      customer: userProfile?.stripe_customer_id || undefined,
      client_reference_id: user.id,
      customer_email: user.email,
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: 7,
        metadata: {
          plan_id: planId,
          user_id: user.id
        }
      },
      metadata: {
        plan_id: planId,
        user_id: user.id
      }
    });

    console.log('Stripe session created successfully:', session.id);
    return session.url!;
  } catch (error) {
    console.error('Stripe session creation failed:', error);
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

  const supabase = await createClient();
  const user = await getUserByStripeCustomerId(supabase, customerId);

  if (!user) {
    console.error('User not found for Stripe customer:', customerId);
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
  const supabase = await createClient();
  
  if (!session.customer || !session.client_reference_id) {
    console.error('Missing customer or client_reference_id in checkout session');
    return;
  }

  const customerId = session.customer as string;
  const userId = session.client_reference_id;
  
  // Create or update user's Stripe customer ID
  await createUserStripeCustomer(supabase, userId, customerId);
}