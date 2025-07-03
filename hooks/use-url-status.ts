"use client"

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { handleUrlStatusToast } from '@/lib/helpers';

/**
 * Custom hook to automatically handle URL status parameters and show toasts
 * Also cleans up the URL parameters after showing the toast
 */
export function useUrlStatus() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    
    if (title && description) {
      // Show the toast
      handleUrlStatusToast(searchParams);
      
      // Clean up the URL by removing the status parameters
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete('title');
      newSearchParams.delete('description');
      newSearchParams.delete('type');
      
      // Update the URL without the status parameters
      const newUrl = newSearchParams.toString() 
        ? `${window.location.pathname}?${newSearchParams.toString()}`
        : window.location.pathname;
        
      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, router]);
}