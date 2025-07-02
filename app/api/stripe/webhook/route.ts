import Stripe from 'stripe';
import { handleSubscriptionChange, handleUserSubscriptionChange, handleUserCheckoutComplete, stripe } from '@/lib/payments/stripe';
import { NextRequest, NextResponse } from 'next/server';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed.' },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      // Handle user checkout completion
      if (session.client_reference_id && session.metadata?.plan_id) {
        await handleUserCheckoutComplete(session);
      }
      break;
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      // Check if this is a user subscription (has plan_id in metadata)
      if (subscription.metadata?.plan_id && subscription.metadata?.user_id) {
        await handleUserSubscriptionChange(subscription);
      } else {
        // Fallback to team subscription handling
        await handleSubscriptionChange(subscription);
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}