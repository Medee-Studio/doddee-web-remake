"use client";

import { ToSendSupabase, KpiPayload } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createClient } from "@/lib/supabase/client";
import { SupabaseClient } from "@supabase/supabase-js";
import { toast } from "sonner";

export async function handleFormRequest(
  data: ToSendSupabase[],
  serverAction: (supabase: SupabaseClient, kpis: KpiPayload[]) => Promise<{ error?: string; success?: string }>,
  router: AppRouterInstance
) {
  try {
    const supabase = createClient();
    
    // Extract KPI payload from the data structure
    const kpis = data[0]?.payload || [];
    
    const result = await serverAction(supabase, kpis);
    
    if (result.error) {
      toast.error(result.error);
      return;
    }
    
    if (result.success) {
      toast.success(result.success);
      // Redirect to dashboard after successful submission
      router.push('/dashboard');
      return;
    }
    
    toast.success('Données sauvegardées avec succès');
    router.push('/dashboard');
    
  } catch (error) {
    console.error('Error in handleFormRequest:', error);
    toast.error('Une erreur inattendue s\'est produite');
  }
}