import { getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/server';

export type PlanName = 'gratuit' | 'eco-profile' | 'cours' | 'la-totale';

export interface UserSubscription {
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_product_id: string | null;
  plan_name: PlanName;
  subscription_status: string;
}

// Plan features mapping
export const PLAN_FEATURES = {
  'gratuit': {
    reporting: true,
    dashboard: true,
    actionPlan: true,
    ecoProfile: false,
    courses: false,
  },
  'eco-profile': {
    reporting: true,
    dashboard: true,
    actionPlan: true,
    ecoProfile: true,
    courses: false,
  },
  'cours': {
    reporting: true,
    dashboard: true,
    actionPlan: true,
    ecoProfile: false,
    courses: true,
  },
  'la-totale': {
    reporting: true,
    dashboard: true,
    actionPlan: true,
    ecoProfile: true,
    courses: true,
  },
} as const;

// Routes that require specific plans
export const PROTECTED_ROUTES = {
  '/dashboard/eco-profile': ['eco-profile', 'la-totale'],
  '/dashboard/courses': ['cours', 'la-totale'],
} as const;

/**
 * Check if user has access to a specific feature
 */
export function hasFeatureAccess(planName: PlanName, feature: keyof typeof PLAN_FEATURES.gratuit): boolean {
  const planFeatures = PLAN_FEATURES[planName];
  return planFeatures ? planFeatures[feature] : false;
}

/**
 * Check if user has access to a specific route
 */
export function hasRouteAccess(planName: PlanName, route: string): boolean {
  const requiredPlans = PROTECTED_ROUTES[route as keyof typeof PROTECTED_ROUTES];
  if (!requiredPlans) return true; // Route is not protected
  return (requiredPlans as readonly PlanName[]).includes(planName);
}

/**
 * Get user subscription status
 */
export async function getCurrentUserSubscription(): Promise<UserSubscription | null> {
  try {
    const supabase = await createClient();
    const subscription = await getUserSubscriptionStatus(supabase);
    
    if (!subscription) {
      return {
        stripe_customer_id: null,
        stripe_subscription_id: null,
        stripe_product_id: null,
        plan_name: 'gratuit',
        subscription_status: 'active'
      };
    }
    
    return subscription as UserSubscription;
  } catch (error) {
    console.error('Error getting user subscription:', error);
    // Return default free plan on error
    return {
      stripe_customer_id: null,
      stripe_subscription_id: null,
      stripe_product_id: null,
      plan_name: 'gratuit',
      subscription_status: 'active'
    };
  }
}

/**
 * Check if subscription is active
 */
export function isSubscriptionActive(subscription: UserSubscription | null): boolean {
  if (!subscription) return false;
  return subscription.subscription_status === 'active' || subscription.subscription_status === 'trialing';
}

/**
 * Get plan display name in French
 */
export function getPlanDisplayName(planName: PlanName): string {
  const displayNames = {
    'gratuit': 'Gratuit',
    'eco-profile': 'Eco Profile',
    'cours': 'Cours',
    'la-totale': 'La Totale'
  };
  
  return displayNames[planName] || 'Inconnu';
}

/**
 * Get features list for a plan
 */
export function getPlanFeatures(planName: PlanName): string[] {
  const features = [];
  const planConfig = PLAN_FEATURES[planName];
  
  if (planConfig.reporting) features.push('Reporting');
  if (planConfig.dashboard) features.push('Tableau de bord');
  if (planConfig.actionPlan) features.push('Suivi du plan d\'action');
  if (planConfig.ecoProfile) features.push('Eco profile');
  if (planConfig.courses) features.push('Cours');
  
  return features;
}

/**
 * Check if user can upgrade to a specific plan
 */
export function canUpgradeTo(currentPlan: PlanName, targetPlan: PlanName): boolean {
  const planHierarchy: Record<PlanName, number> = {
    'gratuit': 0,
    'eco-profile': 1,
    'cours': 1,
    'la-totale': 2
  };
  
  return planHierarchy[targetPlan] > planHierarchy[currentPlan];
}