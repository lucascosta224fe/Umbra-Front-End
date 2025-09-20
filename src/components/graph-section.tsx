import type { GraphSectionProps } from "@/types/graphs";
import { ChartInOut } from "./dashboard/chart-in-out";
import { ProtocolsChart } from "./dashboard/protocols-chart";

export const GraphSection = ({ inOutData, protocolsData }: GraphSectionProps) => {
  return (
    <div className="bg-card flex justify-evenly 2xl:flex-col h-fit rounded-[16px] p-6 2xl:mt-11">
      <ChartInOut chartData={inOutData} />
      <ProtocolsChart chartData={protocolsData} />
    </div>
  );
};