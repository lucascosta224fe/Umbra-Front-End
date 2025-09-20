import type { GraphSectionProps } from "@/types/graphs";
import { ChartInOut } from "./dashboard/chart-in-out";
import { ProtocolsChart } from "./dashboard/protocols-chart";

export const GraphSection = ({ inOutData, protocolsData }: GraphSectionProps) => {
  const isLoading = !protocolsData || protocolsData.length === 0 || !inOutData || inOutData.length === 0;

  if (isLoading) {
    return (
      <div className="bg-card/50 flex animate-pulse justify-evenly 2xl:flex-col h-[300px] 2xl:h-[700px] rounded-[16px] p-6 2xl:mt-11">
      </div>
    );
  }

  return (
    <div className="bg-card flex justify-evenly 2xl:flex-col h-fit rounded-[16px] p-6 2xl:mt-11">
      <ChartInOut chartData={inOutData} />
      <ProtocolsChart chartData={protocolsData} />
    </div>
  );
};