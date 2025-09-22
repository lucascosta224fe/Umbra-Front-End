import { ComputersSection } from "../components/dashboard/computers-section";
import { GraphSection } from "@/components/graph-section";
import { TopCards } from "@/components/dashboard/top-cards";
import { useDashboardStore } from "@/store/dashboard-store";
import { useDashboardConnection } from "@/hooks/use-dashboard-connection";

export function Dashboard() {
  useDashboardConnection();

  const { topCardsData, computers, inOutData, protocolsData } = useDashboardStore();

  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-5 px-10 py-5">
        <TopCards {...topCardsData} />
        <div className="flex flex-col 2xl:grid xl:grid-cols-[1fr_333px] gap-6">
          <ComputersSection computers={computers} />
          <GraphSection inOutData={inOutData} protocolsData={protocolsData} />
        </div>
      </div>
    </div>
  );
}
