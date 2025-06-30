import { Suspense } from "react";
import { ActionPlanSkeleton } from "@/components/dashboard/action-plan/action-plan-skeleton";
import ActionPlanContent from "@/components/dashboard/action-plan/action-plan-content";

export default function ActionPlanPage() {
  return (
    <Suspense fallback={<ActionPlanSkeleton />}>
      <ActionPlanContent />
    </Suspense>
  );
}