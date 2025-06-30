import { Suspense } from "react";
import { KpisSkeleton } from "@/components/dashboard/kpis/kpis-skeleton";
import KpisContent from "@/components/dashboard/kpis/kpis-content";

export default function KpisPage() {
  return (
    <Suspense fallback={<KpisSkeleton />}>
      <KpisContent />
    </Suspense>
  );
}