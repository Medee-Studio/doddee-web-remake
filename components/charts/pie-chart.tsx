"use client";

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
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Action, ActionStatus } from "@/types";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Label, Pie, PieChart } from "recharts";

const chartConfig = {
  disponible: {
    label: "Actions disponibles",
    color: "hsl(var(--chart-1))",
  },
  en_cours_validation: {
    label: "Actions en cours de validation",
    color: "hsl(var(--chart-2))",
  },
  en_cours: {
    label: "Actions en cours",
    color: "hsl(var(--chart-3))",
  },
  valide: {
    label: "Actions validées",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function DashboardPieChart({
  title,
  data,
  className,
}: {
  title: string;
  data: Action[] | undefined;
  className?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [key, setKey] = useState<number>(0);
  
  const valideRatio = useMemo(() => {
    if (!data || data.length === 0) return 0;
    const totalElements = data.length;
    const valideElements = data.filter(
      (item) => item.action_status === "valide",
    ).length;
    return (valideElements / totalElements) * 100;
  }, [data]);

  type StatusCounts = Record<ActionStatus, number>;

  const aggregatedData = useMemo(() => {
    if (!data) return [];
    const statusCounts: StatusCounts = data.reduce(
      (acc: StatusCounts, item: Action) => {
        acc[item.action_status] = (acc[item.action_status] || 0) + 1;
        return acc;
      },
      {} as StatusCounts,
    );

    // Transform the StatusCounts object into an array of objects with color
    const chartData = Object.keys(statusCounts).map((status) => ({
      name: status,
      value: statusCounts[status as ActionStatus],
      fill: chartConfig[status as ActionStatus].color,
    }));

    return chartData;
  }, [data]);
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [pathname, searchParams]);

  const showForm = data?.length == 0 || data == undefined;
  return (
    <Card className={`flex flex-col w-full py-4 ${className}`}>
      <CardContent className="flex-1 pb-0 px-4">
        {!showForm ? (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart key={key}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Pie
                data={aggregatedData}
                dataKey="value"
                valueKey="name"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {Number(valideRatio.toFixed(0)).toLocaleString()}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-xs"
                          >
                            d&apos;action validée
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-[250px] p-6">
            <Link
              href={
                title == "♻️ Environnement"
                  ? "/dashboard/esg/environnement"
                  : title == "🤝🏼 Social"
                    ? "/dashboard/esg/social"
                    : "/dashboard/esg/gouvernance"
              }
              passHref
            >
              <div className="relative w-32 h-32 mb-4">
                {/* Dashed circle to mimic the chart */}

                <div className="absolute inset-0 rounded-full border-4 border-dashed border-muted-foreground/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlusCircle className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
            </Link>
            <p className="text-center text-sm text-muted-foreground mb-4">
              Aucune donnée disponible. Lancez votre diagnostic pour débloquer
              votre score ESG et visualiser vos progrès.
            </p>
          </div>
        )}
      </CardContent>
      <CardHeader
        className={`flex flex-col items-center pb-4 px-4 ${!data && "pt-0"}`}
      >
        <CardTitle>{title}</CardTitle>
        {!showForm ? (
          <CardDescription className="text-xs text-center">
            {data.filter((item) => item.action_status === "valide").length}{" "}
            action(s) validée(s) sur un total de {data.length} action(s)
          </CardDescription>
        ) : (
          <p></p>
        )}
      </CardHeader>
    </Card>
  );
} 