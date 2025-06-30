import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ActionPlanSkeleton() {
  return (
    <>
      {/* Page Header skeleton */}
      <header className="flex items-center justify-between border-b bg-background px-6 h-[64px]">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-8 w-32" />
        </div>
      </header>
      
      <div className="flex flex-col space-y-6 p-6">
        <div className="space-y-6 mt-6">
          {/* Header skeleton */}
          <div className="flex flex-col">
            <Skeleton className="h-9 w-64 mx-auto mb-2" />
            <Skeleton className="h-6 w-48 mx-auto" />
          </div>

      {/* Timeline skeleton */}
      <div className="w-full flex flex-row justify-center gap-6 relative">
        {/* Left column */}
        <div>
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="my-3 md:my-0 min-h-[150px]">
              <CardContent className="p-0 pt-8 flex flex-row h-full justify-between relative">
                <div className="flex flex-col justify-between">
                  {/* Badge skeleton */}
                  <div className="absolute -top-2 -left-2">
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </div>
                  <div className="max-w-[200px] ml-2 space-y-2 mb-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                  <Skeleton className="h-5 w-5 rounded-full ml-2" />
                </div>
                <div className="flex flex-row">
                  <Separator orientation="vertical" className="h-full mx-3" />
                  <div className="flex flex-col items-center justify-around">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Center dots skeleton */}
        <div className="hidden md:flex flex-col justify-between py-[75px]">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-2 w-2 rounded-full" />
          ))}
        </div>

        {/* Right column */}
        <div className="hidden md:block">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="my-3 md:my-0 min-h-[150px]">
              <CardContent className="p-0 pt-8 flex flex-row h-full justify-between relative">
                <div className="flex flex-col justify-between">
                  <div className="absolute -top-2 -left-2">
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </div>
                  <div className="max-w-[200px] ml-2 space-y-2 mb-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                  <Skeleton className="h-5 w-5 rounded-full ml-2" />
                </div>
                <div className="flex flex-row">
                  <Separator orientation="vertical" className="h-full mx-3" />
                  <div className="flex flex-col items-center justify-around">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

          {/* Vertical line skeleton */}
          <div className="hidden md:flex h-full w-full absolute justify-center z-[-1]">
            <Separator orientation="vertical" className="h-full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}