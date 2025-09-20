import { CartesianGrid, Line, LineChart, XAxis, Legend, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

export const description = "An interactive line chart";

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

export function ChartLine() {
  return (
    <div className="bg-card rounded-[16px] h-full px-4 pl-0 pt-4 ">
      <div className="grid h-full sm:p-4 sm:pl-1 place-items-center">
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
              tickFormatter={(value) => {
                if (value % 5 === 0) {
                  return `${value}`;
                }
                return "";
              }}
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
                <ChartTooltipContent
                  className="text-white"
                  labelKey="time"
                />
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

const chartData = [
  { time: 1, packages: 120, tcpError: 2 },
  { time: 2, packages: 250, tcpError: 1 },
  { time: 3, packages: 80, tcpError: 0 },
  { time: 4, packages: 340, tcpError: 3 },
  { time: 5, packages: 190, tcpError: 1 },
  { time: 6, packages: 420, tcpError: 4 },
  { time: 7, packages: 95, tcpError: 0 },
  { time: 8, packages: 210, tcpError: 2 },
  { time: 9, packages: 300, tcpError: 1 },
  { time: 10, packages: 155, tcpError: 0 },
  { time: 11, packages: 275, tcpError: 3 },
  { time: 12, packages: 130, tcpError: 1 },
  { time: 13, packages: 480, tcpError: 2 },
  { time: 14, packages: 60, tcpError: 0 },
  { time: 15, packages: 360, tcpError: 4 },
  { time: 16, packages: 200, tcpError: 1 },
  { time: 17, packages: 410, tcpError: 3 },
  { time: 18, packages: 170, tcpError: 0 },
  { time: 19, packages: 290, tcpError: 2 },
  { time: 20, packages: 330, tcpError: 1 },
  { time: 21, packages: 115, tcpError: 0 },
  { time: 22, packages: 450, tcpError: 4 },
  { time: 23, packages: 220, tcpError: 1 },
  { time: 24, packages: 380, tcpError: 2 },
  { time: 25, packages: 165, tcpError: 0 },
  { time: 26, packages: 285, tcpError: 3 },
  { time: 27, packages: 140, tcpError: 1 },
  { time: 28, packages: 400, tcpError: 2 },
  { time: 29, packages: 90, tcpError: 0 },
  { time: 30, packages: 310, tcpError: 1 },
];
