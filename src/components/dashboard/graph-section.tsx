import type { GraphSectionProps } from "@/types/graphs";
import { ChartInOut } from "./chart-in-out";
import { ProtocolsChart } from "./protocols-chart";

export const GraphSection = ({ inOutData, protocolsData }: GraphSectionProps) => {
  return (
    <div className="bg-card flex flex-col h-fit rounded-[16px] p-6 2xl:mt-11">
      <ChartInOut chartData={inOutData} />
      <ProtocolsChart chartData={protocolsData} />
    </div>
  );
};