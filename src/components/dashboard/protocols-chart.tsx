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

export function ProtocolsChart( { chartData }: { chartData: ProtocolsDataProps[] }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-3 items-center p-2">
        <div className="bg-white rounded-full size-[40px] p-1 flex items-center justify-center aspect-square">
          <GlobeLock size={20} className="text-primary" />
        </div>
        <span className="font-bold text-[20px] text-white">Protocolos</span>
      </div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] h-[400px] w-[224px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="protocol"/>}
              labelClassName="text-white"
            />
            <Pie data={chartData} dataKey="pacotes" />
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
    color: "#0eaacf"
  },
  HTTP: {
    label: "HTTP",
    color: "#0ea2cf",
  },
  FTP: {
    label: "FTP",
    color: "#147c9c",
  },
  UDP: {
    label: "UDP",
    color: "#0b6885",
  },
  TCP: {
    label: "TCP",
    color: "#06485c",
  },
  OTHER: {
    label: "Outros",
    color: "#06785c",
  }
} satisfies ChartConfig;