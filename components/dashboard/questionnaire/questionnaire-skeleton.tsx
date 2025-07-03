import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function QuestionnaireSkeleton() {
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Header skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-80 mb-2" />
        <Skeleton className="h-4 w-96" />
        
        {/* User info skeleton */}
        <div className="mt-4 p-4 bg-muted/50 rounded-md">
          <Skeleton className="h-4 w-48 mb-2" />
          <Skeleton className="h-3 w-32 mb-1" />
          <Skeleton className="h-3 w-40 mb-1" />
          <Skeleton className="h-3 w-36" />
        </div>
      </div>

      {/* Progress indicator skeleton */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
        <Skeleton className="h-4 w-24" />
        <div className="flex space-x-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-2 w-8 rounded" />
          ))}
        </div>
      </div>

      {/* Question cards skeleton */}
      <div className="space-y-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index} className={index === 0 ? "border-primary" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Skeleton className="h-5 w-full max-w-2xl" />
                </div>
                <Skeleton className="h-8 w-8 flex-shrink-0" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 flex-1 max-w-md" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation skeleton */}
      <div className="flex justify-between mt-6">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-20" />
      </div>

      {/* Debug info skeleton */}
      <Card className="mt-8">
        <CardHeader>
          <Skeleton className="h-4 w-32" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 