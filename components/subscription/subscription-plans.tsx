'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, BookOpen, Leaf, Crown } from 'lucide-react';
import { createUserCheckoutSession, createUserCustomerPortalAction } from '@/lib/payments/actions';

interface SubscriptionPlansProps {
  currentPlan: string;
}

const plans = [
  {
    id: 'gratuit',
    name: 'Gratuit',
    price: 0,
    description: 'Ce plan est 100% gratuit et vous permet d\'avoir accès aux fonctionnalités de base de la plateforme Doddee.',
    features: [
      'Reporting',
      'Tableau de bord',
      'Suivi du plan d\'action'
    ],
    icon: Check,
    color: 'bg-gray-100',
    current: false
  },
  {
    id: 'eco-profile',
    name: 'Eco Profile',
    price: 45,
    description: 'Ce plan vous permet de créer votre éco profile pour mettre en avant toutes vos actions.',
    features: [
      'Reporting',
      'Tableau de bord',
      'Suivi du plan d\'action',
      'Eco profile'
    ],
    icon: Leaf,
    color: 'bg-green-100',
    current: false
  },
  {
    id: 'cours',
    name: 'Cours',
    price: 45,
    description: 'Ce plan vous permet d\'accéder à toutes les ressources internes réalisées par notre équipe.',
    features: [
      'Reporting',
      'Tableau de bord',
      'Suivi du plan d\'action',
      'Cours'
    ],
    icon: BookOpen,
    color: 'bg-blue-100',
    current: false
  },
  {
    id: 'la-totale',
    name: 'La Totale',
    price: 90,
    description: 'Ce plan vous permet d\'avoir accès à toutes les fonctionnalités de la plateforme Doddee.',
    features: [
      'Reporting',
      'Tableau de bord',
      'Suivi du plan d\'action',
      'Cours',
      'Eco profile'
    ],
    icon: Crown,
    color: 'bg-purple-100',
    current: false
  }
];

export function SubscriptionPlans({ currentPlan }: SubscriptionPlansProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleUpgrade = async (planId: string) => {
    if (planId === 'gratuit') return;
    
    console.log('[COMPONENT] handleUpgrade called with planId:', planId);
    setLoading(planId);
    try {
      console.log('[COMPONENT] Calling createUserCheckoutSession...');
      await createUserCheckoutSession(planId);
      console.log('[COMPONENT] createUserCheckoutSession completed successfully');
    } catch (error) {
      console.error('[COMPONENT] Error in handleUpgrade:', {
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
        planId
      });
      
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      alert(`Erreur lors de l'achat du plan: ${errorMessage}\n\nVeuillez vérifier les logs de la console pour plus de détails.`);
    } finally {
      console.log('[COMPONENT] handleUpgrade finished, clearing loading state');
      setLoading(null);
    }
  };

  const handleManageBilling = async () => {
    setLoading('billing');
    try {
      await createUserCustomerPortalAction();
    } catch (error) {
      console.error('Erreur lors de l\'ouverture du portail client:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan) => {
        const Icon = plan.icon;
        const isCurrentPlan = currentPlan === plan.id;
        
        return (
          <Card 
            key={plan.id} 
            className={`relative ${isCurrentPlan ? 'ring-2 ring-primary' : ''}`}
          >
            {isCurrentPlan && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                Plan actuel
              </Badge>
            )}
            
            {/* {plan.id === 'la-totale' && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
                Le plus populaire
              </Badge>
            )} */}
            
            <CardHeader className="text-center">
              <div className={`mx-auto w-12 h-12 rounded-full ${plan.color} flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="text-3xl font-bold">
                {plan.price === 0 ? (
                  'Gratuit'
                ) : (
                  <>
                    {plan.price} €
                    <span className="text-sm font-normal text-gray-600">/mois</span>
                  </>
                )}
              </div>
              <CardDescription className="text-sm">
                {plan.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 flex flex-col justify-between h-full">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                {plan.id === 'gratuit' ? (
                  <Button 
                    variant={isCurrentPlan ? "secondary" : "outline"} 
                    className="w-full"
                    disabled
                  >
                    {isCurrentPlan ? 'Plan actuel' : 'Gratuit'}
                  </Button>
                ) : isCurrentPlan ? (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleManageBilling}
                    disabled={loading === 'billing'}
                  >
                    {loading === 'billing' ? 'Chargement...' : 'Gérer la facturation'}
                  </Button>
                ) : (
                  <Button 
                    className="w-full"
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={loading === plan.id}
                  >
                    {loading === plan.id ? 'Chargement...' : 'Acheter'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}