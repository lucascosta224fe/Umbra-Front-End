import { Pie, PieChart } from "recharts";

import {
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { GlobeLock } from "lucide-react";
import type { ProtocolsDataProps } from "@/types/graphs";

export const description = "Gráfico em pizza dos protocolos de rede";

export function ProtocolsChart({ chartData }: { chartData: ProtocolsDataProps[] }) {
  const totalPackets = chartData?.reduce((acc, curr) => acc + curr.pacotes, 0);
  const hasData = totalPackets && totalPackets > 0;
  
  const displayData = hasData ? chartData : placeholderData;
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-3 p-2">
        <div className="flex size-[40px] aspect-square items-center justify-center rounded-full bg-white p-1">
          <GlobeLock size={20} className="text-primary" />
        </div>
        <span className="text-[20px] font-bold text-white">Protocolos</span>
      </div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] h-[400px] w-[224px]"
          >
          <PieChart>
            {hasData && (
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="protocol" />}
                labelClassName="text-white"
                />
              )}
            <Pie data={displayData} dataKey="pacotes" />
            <ChartLegend
              content={<ChartLegendContent nameKey="protocol" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center text-white"
              />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}

const chartConfig = {
  pacotes: {
    label: "pacotes",
  },
  HTTPS: {
    label: "HTTPS",
    color: "#00B4D8"
  },
  HTTP: {
    label: "HTTP",
    color: "#06788f",
  },
  FTP: {
    label: "FTP",
    color: "#3B009A",
  },
  UDP: {
    label: "UDP",
    color: "#7209B7",
  },
  TCP: {
    label: "TCP",
    color: "#560BAD",
  },
  OTHER: {
    label: "Outros",
    color: "#6b7280",
  }
} satisfies ChartConfig;

const placeholderData = Object.entries(chartConfig)
  .filter(([key]) => key !== "pacotes")
  .map(([key, value]) => ({
    protocol: value.label,
    pacotes: key === "OTHER" ? 1 : 0,
    fill: "#525252",
  }));