import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CoursesSkeleton() {
  return (
    <>
      {/* Header Skeleton */}
      <header className="flex items-center justify-between border-b bg-background px-6 h-[64px]">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-8 w-32" />
        </div>
      </header>
      
      <div className="p-6">
        <div className="space-y-6">
          <Skeleton className="h-10 w-48" />
          
          <div className="w-full relative px-12">
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="basis-full md:basis-1/4">
                  <Card className="w-full flex flex-col relative h-full">
                    <CardContent className="p-0">
                      <div className="bg-gray-100 rounded-t-lg h-[90px] p-4">
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-row space-x-1">
                            <Skeleton className="h-6 w-6" />
                            <Skeleton className="h-6 w-24" />
                          </div>
                          <Skeleton className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}