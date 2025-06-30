import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ActionsSkeleton() {
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
        <div className="">
          <Card className="h-full overflow-x-scroll scrollbar-hidden">
            <CardContent>
              {/* Actions en cours section */}
              <Skeleton className="h-6 w-48 mb-4" />
              
              <div className="border border-dashed rounded-md p-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="h-full flex flex-col">
                      <CardContent className="flex flex-col justify-between flex-1">
                        <div>
                          <Skeleton className="h-4 w-full mb-3" />
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2">
                              <Skeleton className="h-6 w-8" />
                              <Skeleton className="h-3 w-12" />
                            </div>
                            <div className="flex items-center gap-2">
                              <Skeleton className="h-6 w-8" />
                              <Skeleton className="h-3 w-10" />
                            </div>
                            <div className="flex items-center gap-2">
                              <Skeleton className="h-6 w-8" />
                              <Skeleton className="h-3 w-8" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <Skeleton className="h-3 w-full mb-2" />
                          <Skeleton className="h-3 w-3/4 mb-3" />
                          <Skeleton className="h-8 w-full" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Actions disponibles section */}
              <Skeleton className="h-6 w-56 mb-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <Skeleton className="h-5 w-32 mb-1" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}