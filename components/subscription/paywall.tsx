'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Star, ArrowRight } from 'lucide-react';
import { PlanName, getPlanDisplayName } from '@/lib/subscription/utils';
import Link from 'next/link';

interface PaywallProps {
  requiredPlans: PlanName[];
  feature: string;
  description?: string;
  className?: string;
}

export function Paywall({ requiredPlans, feature, description, className }: PaywallProps) {
  
  return (
    <Card className={`border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 ${className}`}>
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
          <Lock className="h-8 w-8 text-amber-600" />
        </div>
        <CardTitle className="flex items-center justify-center gap-2">
          <Star className="h-5 w-5 text-amber-500" />
          Fonctionnalité Premium
        </CardTitle>
        <CardDescription>
          {description || `Accédez à ${feature} avec un abonnement premium`}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="text-center space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Cette fonctionnalité est disponible avec :
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {requiredPlans.map((plan) => (
              <Badge key={plan} variant="secondary" className="bg-amber-100 text-amber-800">
                {getPlanDisplayName(plan)}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/dashboard/subscription" className="flex items-center gap-2">
              Voir les plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface FeatureGuardProps {
  requiredPlans: PlanName[];
  currentPlan: PlanName;
  feature: string;
  description?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function FeatureGuard({ 
  requiredPlans, 
  currentPlan, 
  feature, 
  description, 
  children, 
  fallback 
}: FeatureGuardProps) {
  const hasAccess = requiredPlans.includes(currentPlan);
  
  if (hasAccess) {
    return <>{children}</>;
  }
  
  if (fallback) {
    return <>{fallback}</>;
  }
  
  return (
    <Paywall 
      requiredPlans={requiredPlans}
      feature={feature}
      description={description}
    />
  );
}