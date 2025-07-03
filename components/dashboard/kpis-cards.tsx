import { Kpi } from "@/types";
import { whichEmoji } from "@/lib/helpers";
import { Activity, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function KpisCards({ kpis }: { kpis: Kpi[] }) {  
  // Filter out KPIs with -1 or invalid values
  const validKpis = kpis?.filter(kpi => {
    const value = typeof kpi.kpi_value === 'string' ? parseFloat(kpi.kpi_value.replace(',', '.')) : kpi.kpi_value;
    return value && value !== -1 && !isNaN(value);
  }) || [];
  
  return (
    <>
      {kpis && validKpis.length > 0 ? (
        <div className="w-full relative px-12">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {validKpis.map((kpi: Kpi, i: number) => (
                  <CarouselItem key={i} className="basis-full md:basis-1/4">
                    <Card className="w-full flex flex-col relative h-full justify-between py-4">
                      <p className="absolute top-2 left-2 text-sm">
                        {whichEmoji(kpi.kpi_type)}
                      </p>
                      <p className="text-3xl font-bold text-center">
                        {typeof kpi.kpi_value === 'string' ? kpi.kpi_value : kpi.kpi_value}{" "}
                        <span>{kpi.kpi_label.split(" ")[0]}</span>
                      </p>
                      <p
                        className="text-muted-foreground text-xs text-center line-clamp-2"
                        title={kpi.kpi_label}
                      >
                        {kpi.kpi_label.substring(
                          kpi.kpi_label.indexOf(" ") + 1,
                        )}
                      </p>
                    </Card>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="w-full ">
                <Card className="w-full flex flex-col relative justify-between py-4 px-4">
                  <Activity className="mt-2 ml-2 h-4 w-4" strokeWidth={3} />
                  <div className="flex flex-col items-center justify-center h-[150px] p-3">
                    <Link href={"/dashboard/kpis"} passHref>
                      <div className="relative w-20 h-20 mb-5">
                        {/* Dashed circle to mimic the chart */}

                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-muted-foreground/30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlusCircle className="h-9 w-9 text-muted-foreground" />
                        </div>
                      </div>
                    </Link>
                    <p className="text-center text-sm text-muted-foreground mb-2">
                      Aucune donnée disponible. Remplissez vos KPIs pour voir
                      les statistiques.
                    </p>
                  </div>
                </Card>
        </div>
      )}
    </>
  );
} 