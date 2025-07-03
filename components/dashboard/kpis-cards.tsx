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
  return (
    <>
      {kpis && kpis.length > 0 ? (
        <div className="w-full relative px-12">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {kpis.map((kpi: Kpi, i: number) => (
                <CarouselItem key={i} className="basis-full md:basis-1/4">
                  <Card className="w-full flex flex-col relative h-full justify-between py-4">
                    <p className="absolute top-2 left-2 text-sm">
                      {whichEmoji(kpi.kpi_type)}
                    </p>
                    <p className="text-3xl font-bold text-center">
                   
                      <span>{kpi.kpi_value}</span>
                      <span>{kpi.kpi_unit}</span>
                    </p>
                    <p
                      className="text-muted-foreground text-xs text-center line-clamp-2"
                
                    >
                      {kpi.kpi_label}
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
              <p className="text-center text-gray-400">Veuillez remplir vos formulaires ESG pour avoir accès à vos indicateurs RSE</p>
             
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
