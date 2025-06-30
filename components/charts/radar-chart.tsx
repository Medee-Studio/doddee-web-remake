"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  TooltipProps,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { Action } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const chartConfig = {
  actionCount: {
    label: "Nombre d'actions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const truncateText = (text: string) => {
  const words = text.split(" ");
  if (words.length <= 3) return text;
  return `${words.slice(0, 3).join(" ")}...`;
};

const CustomTooltipContent = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          <div className="flex items-center justify-between gap-1">
            <span className="text-sm">{payload[0].payload.fullEnjeu}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1.5">
              <span className="text-muted-foreground">Nombre d&apos;actions</span>
              <span className="font-mono font-medium tabular-nums text-foreground ml-1">
                {payload[0].value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export function DashboardRadarChart({ data }: { data: Action[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [key, setKey] = useState<number>(0);
  
  const processedData = useMemo(() => {
    if (!data) return [];
    // Group actions by enjeu
    const groupedByEnjeu = data.reduce(
      (acc, action) => {
        if (!action.enjeu) return acc;

        const enjeuName = action.enjeu.nom_enjeu;
        if (!acc[enjeuName]) {
          acc[enjeuName] = 0;
        }
        acc[enjeuName]++;
        return acc;
      },
      {} as Record<string, number>
    );

    // Convert to array format for RadarChart
    return Object.entries(groupedByEnjeu).map(([enjeu, count]) => ({
      enjeu: truncateText(enjeu),
      fullEnjeu: enjeu, // Keep the full name for tooltip
      actionCount: count,
    }));
  }, [data]);
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [pathname, searchParams]);

  return (
    <Card className="xl:w-1/2">
      <CardContent className="pt-6 pb-0">
        {data ? (
          <ChartContainer
            config={chartConfig}
            className="mx-auto w-full max-h-[250px]"
          >
            <RadarChart data={processedData} key={key}>
              <ChartTooltip cursor={false} content={<CustomTooltipContent />} />
              <PolarAngleAxis dataKey="enjeu" />
              <PolarGrid />
              <Radar
                dataKey="actionCount"
                fill="hsl(var(--chart-4))"
                fillOpacity={0.7}
              />
            </RadarChart>
          </ChartContainer>
        ) : (
          <p></p>
        )}
      </CardContent>
      <CardHeader className="items-center pb-6">
        <CardTitle>Cartographie des enjeux</CardTitle>
        <CardDescription className="text-xs">
          Nombre d&apos;actions proposées par enjeu de durabilité (ESRS)
        </CardDescription>
      </CardHeader>
    </Card>
  );
} 