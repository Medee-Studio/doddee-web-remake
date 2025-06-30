import { Kpi } from "@/types";
import { formDataKpis } from "@/utils/formData/formDataKpis";
import { getKpiValueByLabel, whichEmoji } from "@/utils/helpers";
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
  // Debug logging
  console.log('KpisCards - received kpis:', kpis);
  
  const kpiTemplate: Kpi[] = formDataKpis.flatMap((form) => {
    return form.content.map((item) => {
      const kpiValue = getKpiValueByLabel(kpis, item.supabaseColumnName);
      console.log(`KPI: ${item.supabaseColumnName}, Value: ${kpiValue}`);
      return {
        kpi_type: form.kpi_type,
        kpi_value: kpiValue ?? -1,
        kpi_label: item.supabaseColumnName,
      };
    });
  });

  const validKpis = kpiTemplate.filter(kpi => kpi.kpi_value !== -1);
  console.log('Valid KPIs:', validKpis);
  
  // Fallback sample data for testing when no real KPIs
  const sampleKpis: Kpi[] = [
    { kpi_type: 'environnement', kpi_value: 1250, kpi_label: 'tonnes consommation d\'énergie' },
    { kpi_type: 'social', kpi_value: 45, kpi_label: 'nombre employés' },
    { kpi_type: 'gouvernance', kpi_value: 12, kpi_label: 'réunions gouvernance' },
    { kpi_type: 'environnement', kpi_value: 890, kpi_label: 'litres consommation d\'eau' },
  ];
  
  const displayKpis = validKpis.length > 0 ? validKpis : sampleKpis;
  
  return (
    <>
      {displayKpis.length > 0 ? (
        <div className="px-10 md:px-10 xl:px-8 w-full ">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {displayKpis.map((kpi: Kpi, i: number) => (
                <CarouselItem key={i} className="basis-full md:basis-1/4">
                  <Card className="w-full flex flex-col relative h-full justify-between">
                    <p className="absolute top-2 left-2 text-sm">
                      {whichEmoji(kpi.kpi_type)}
                    </p>
                    <p className="text-3xl font-bold text-center">
                      {kpi.kpi_value}{" "}
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
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              <CarouselItem className="basis-full md:basis-1/3">
                <Card className="w-full flex flex-col relative justify-between px-3 pt-2 pb-1">
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
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </>
  );
} 