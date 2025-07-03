"use client"

import { useUrlStatus } from '@/hooks/use-url-status';

/**
 * Renders nothing but activates the useUrlStatus hook to display status toasts
 * based on URL search params. Should be placed within a client context
 * that has access to Next.js router and search params.
 */
export function UrlStatusHandler() {
  useUrlStatus();
  return null;
} 