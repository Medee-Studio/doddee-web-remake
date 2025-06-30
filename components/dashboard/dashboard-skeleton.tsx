import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <>
      {/* Header Skeleton */}
      <header className="flex items-center justify-between border-b bg-background px-6 py-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-8 w-64" />
        </div>
      </header>
      
      <div className="flex flex-col space-y-6 p-6">
      
      {/* Pie Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="flex flex-col w-full">
            <CardContent className="flex-1 pb-0">
              <div className="mx-auto aspect-square max-h-[250px] flex items-center justify-center">
                <Skeleton className="h-[200px] w-[200px] rounded-full" />
              </div>
            </CardContent>
            <CardHeader className="flex flex-col items-center pb-6">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-32" />
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* KPIs Section */}
      <Skeleton className="h-6 w-48" />
      <div className="px-10 md:px-10 xl:px-8 w-full">
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="w-full flex flex-col relative h-full justify-between min-w-[200px]">
              <div className="p-6">
                <Skeleton className="h-4 w-4 absolute top-2 left-2" />
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-3 w-24 mx-auto" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex flex-col xl:flex-row space-x-0 space-y-6 xl:space-x-6 xl:space-y-0">
        {/* Radar Chart */}
        <Card className="xl:w-1/2">
          <CardContent className="pt-6 pb-0">
            <div className="mx-auto w-full max-h-[250px] flex items-center justify-center">
              <Skeleton className="h-[200px] w-[200px] rounded-full" />
            </div>
          </CardContent>
          <CardHeader className="items-center pb-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-56" />
          </CardHeader>
        </Card>

        {/* Actions List */}
        <Card className="xl:w-1/2">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
} 