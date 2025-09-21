import * as React from "react";
import { ArrowDownUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import type { ChartConfig } from "@/components/ui/chart";
import type { InOutDataProps } from "@/types/graphs";

export const description =
  "Gráfico em rosquinha do volume dados de entrada e saída";

export function ChartInOut({ chartData }: { chartData: InOutDataProps[] }) {
  const totalValue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, [chartData]);

  const hasData = totalValue > 0;
  const displayData = hasData ? chartData : placeholderData;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-3 p-2">
        <div className="flex size-[40px] aspect-square items-center justify-center rounded-full bg-white p-1">
          <ArrowDownUp size={20} className="text-primary" />
        </div>
        <span className="text-[20px] font-bold text-white">
          Entrada e Saída
        </span>
      </div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] h-[224px] w-[224px]"
        >
          <PieChart>
            {hasData && (
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                labelClassName="text-white"
              />
            )}
            <Pie
              data={displayData}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              strokeWidth={5}
              isAnimationActive={hasData}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold fill-white"
                        >
                          {hasData ? totalValue.toLocaleString() : "0"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}

const chartConfig = {
  value: {
    label: "Dados",
  },
  entrada: {
    label: "Entrada",
    color: "#0047AB",
  },
  saida: {
    label: "Saída",
    color: "#ED303C",
  },
} satisfies ChartConfig;

const placeholderData = [
  { name: "Entrada", value: 1, fill: "#525252" },
  { name: "Saída", value: 1, fill: "#525252" },
];