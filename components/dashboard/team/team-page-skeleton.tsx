import { Skeleton } from "@/components/ui/skeleton";

export function TeamPageSkeleton() {
    return (
        <div className="space-y-8">
            {/* Based on SubscriptionSkeleton */}
            <div>
                <Skeleton className="h-8 w-1/4 mb-4" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-10 w-1/3 mt-4" />
            </div>

            {/* Based on TeamInvitationsSkeleton */}
            <div>
                <Skeleton className="h-8 w-1/3 mb-4" />
                <div className="space-y-4">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </div>

            {/* Based on TeamMembersSkeleton */}
            <div>
                <Skeleton className="h-8 w-1/4 mb-4" />
                <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
            </div>

            {/* Based on InviteTeamMemberSkeleton */}
            <div>
                <Skeleton className="h-8 w-1/3 mb-4" />
                <Skeleton className="h-10 w-full mb-2" />
                <Skeleton className="h-10 w-1/4" />
            </div>
        </div>
    );
} 