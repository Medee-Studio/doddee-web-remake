'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export function UpgradeNotification() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const upgrade = searchParams.get('upgrade');
    const route = searchParams.get('route');
    
    if (upgrade === 'true') {
      toast.info(
        'Vous devez souscrire à un abonnement pour accéder à cette fonctionnalité.',
        {
          description: route ? `Fonctionnalité demandée: ${route}` : undefined,
          duration: 5000,
        }
      );
    }
  }, [searchParams]);

  return null;
}