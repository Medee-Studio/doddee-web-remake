import { Suspense } from 'react';
import { getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { SubscriptionPlans } from '@/components/subscription/subscription-plans';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { PageHeader } from '@/components/common/page-header';
import { UpgradeNotification } from '@/components/subscription/upgrade-notification';

export default async function SubscriptionPage() {
  const supabase = await createClient();
  
  // Get user subscription with explicit client
  const userSubscription = await getUserSubscriptionStatus(supabase);
  
  return (
    <>
      <UpgradeNotification />
      <PageHeader title="Abonnement" />
      <div className="p-6">
        <div className="mb-8">
          <p className="text-gray-600">
            Choisissez le plan qui correspond le mieux à vos besoins ESG
          </p>
        </div>

      {/* Current Plan Display */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Votre plan actuel
          </CardTitle>
          <CardDescription>
            Voici les détails de votre abonnement actuel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Badge variant={userSubscription?.plan_name === 'gratuit' ? 'secondary' : 'default'}>
              {userSubscription?.plan_name === 'gratuit' ? 'Gratuit' :
               userSubscription?.plan_name === 'eco-profile' ? 'Eco Profile' :
               userSubscription?.plan_name === 'cours' ? 'Cours' :
               userSubscription?.plan_name === 'la-totale' ? 'La Totale' :
               'Gratuit'}
            </Badge>
            <span className="text-sm text-gray-600">
              Statut: {userSubscription?.subscription_status === 'active' ? 'Actif' : 'Inactif'}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Plans */}
      <Suspense fallback={<div>Chargement des plans...</div>}>
        <SubscriptionPlans currentPlan={userSubscription?.plan_name || 'gratuit'} />
      </Suspense>
      </div>
    </>
  );
}