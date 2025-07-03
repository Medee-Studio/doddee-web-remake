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

  console.log('[WEBHOOK] Processing event:', {
    type: event.type,
    id: event.id,
    created: event.created
  });

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('[WEBHOOK] checkout.session.completed:', {
        sessionId: session.id,
        clientReferenceId: session.client_reference_id,
        planId: session.metadata?.plan_id
      });
      
      // Handle user checkout completion
      if (session.client_reference_id && session.metadata?.plan_id) {
        await handleUserCheckoutComplete(session);
      } else {
        console.log('[WEBHOOK] checkout.session.completed: Missing required data, skipping');
      }
      break;
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      console.log('[WEBHOOK] subscription event:', {
        type: event.type,
        subscriptionId: subscription.id,
        customerId: subscription.customer,
        status: subscription.status,
        planId: subscription.metadata?.plan_id,
        userId: subscription.metadata?.user_id,
        hasMetadata: !!subscription.metadata
      });
      
      // Check if this is a user subscription (has plan_id in metadata)
      if (subscription.metadata?.plan_id && subscription.metadata?.user_id) {
        console.log('[WEBHOOK] Processing as user subscription');
        await handleUserSubscriptionChange(subscription);
      } else {
        console.log('[WEBHOOK] Processing as team subscription (fallback)');
        // Fallback to team subscription handling
        await handleSubscriptionChange(subscription);
      }
      break;
    default:
      console.log(`[WEBHOOK] Unhandled event type: ${event.type}`);
  }

  console.log('[WEBHOOK] Event processing completed successfully:', {
    type: event.type,
    id: event.id
  });
  
  return NextResponse.json({ received: true });
}