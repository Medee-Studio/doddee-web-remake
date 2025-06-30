import { Suspense } from "react";
import { ActionsSkeleton } from "@/components/dashboard/actions/actions-skeleton";
import ActionsContent from "@/components/dashboard/actions/actions-content";

export default function ActionsPage() {
  return (
    <Suspense fallback={<ActionsSkeleton />}>
      <ActionsContent />
    </Suspense>
  );
}