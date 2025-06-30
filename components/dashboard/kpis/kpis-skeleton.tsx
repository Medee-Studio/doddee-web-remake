import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function KpisSkeleton() {
  return (
    <>
      {/* Header Skeleton */}
      <header className="flex items-center justify-between border-b bg-background px-6 h-[64px]">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-8 w-32" />
        </div>
      </header>
      
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <Card className="min-w-[400px] w-full max-w-2xl relative">
          {/* Go back button skeleton */}
          <div className="absolute top-4 left-4">
            <Skeleton className="h-9 w-9 rounded-md" />
          </div>
          
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="h-7 w-48 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto mt-2" />
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Form fields skeleton */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </CardContent>
          
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}