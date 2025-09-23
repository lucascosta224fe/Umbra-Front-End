import { CartesianGrid, Line, LineChart, XAxis, Legend, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

type ChartDataProps = {
  time: number;
  packages: number;
  tcpError: number;
};

const chartConfig = {
  packages: {
    label: "Packages",
    color: "#8979FF",
  },
  tcpError: {
    label: "TCP Errors",
    color: "#FF928A",
  },
} satisfies ChartConfig;

export function ChartLine({ chartData }: { chartData: ChartDataProps[] }) {
  return (
    <div className="h-full rounded-[16px] bg-card px-4 pt-4 pl-0 ">
      <div className="grid h-full place-items-center sm:p-4 sm:pl-1">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[600px] w-full"
        >
          <LineChart accessibilityLayer data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#5F56DC80" />
            <XAxis
              dataKey="time"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={10}
            />
            <YAxis
              dataKey="packages"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              cursor={{
                stroke: "hsl(var(--border))",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
              content={
                <ChartTooltipContent className="text-white" labelKey="time" />
              }
            />
            <Legend />
            <Line
              dataKey="packages"
              name="Pacotes"
              type="monotone"
              stroke="var(--color-packages)"
              strokeWidth={2}
              dot={{
                r: 3,
                fill: "var(--color-packages)",
              }}
            />
            <Line
              dataKey="tcpError"
              name="Erros de TCP"
              type="monotone"
              stroke="var(--color-tcpError)"
              strokeWidth={2}
              dot={{
                r: 3,
                fill: "var(--color-tcpError)",
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}