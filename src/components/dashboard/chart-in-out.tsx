import * as React from "react";
import { ArrowDownUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import type { ChartConfig } from "@/components/ui/chart";

export const description = "Gráfico em rosquinha do volume dados de entrada e saída";

const chartData = [
  { name: "Entrada", value: 275, fill: "#0047AB" },
  { name: "Saída", value: 200, fill: "#ED303C" },
];

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

export function ChartInOut() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <div className="flex flex-col bg-card rounded-[16px] items-center justify-center p-6">
      <div className="flex gap-3 items-center pb-0">
        <div className="bg-white rounded-full size-[40px] p-1 flex items-center justify-center aspect-square">
          <ArrowDownUp size={20} className="text-primary" />
        </div>
        <span className="font-bold text-[20px] text-white">Entrada e Saída</span>
      </div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] h-[210px] w-[210px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              labelClassName="text-white"
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
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
                          {totalVisitors.toLocaleString()}
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
