import { Suspense } from "react";
import { EcoProfileSkeleton } from "@/components/dashboard/eco-profile/eco-profile-skeleton";
import EcoProfileContent from "@/components/dashboard/eco-profile/eco-profile-content";

export default function EcoProfilePage() {
  return (
    <Suspense fallback={<EcoProfileSkeleton />}>
      <EcoProfileContent />
    </Suspense>
  );
}