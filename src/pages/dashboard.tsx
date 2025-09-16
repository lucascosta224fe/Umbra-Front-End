import { ComputersSection } from "../components/dashboard/computers-section";
import { GraphSection } from "@/components/dashboard/graph-section";
import { TopCards } from "@/components/dashboard/top-cards";

export function Dashboard() {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col px-10 py-5 gap-5">
        <TopCards />
        <div className="flex flex-col 2xl:grid xl:grid-cols-[1fr_333px] gap-6">
          <ComputersSection />
          <GraphSection />
        </div>
      </div>
    </div>
  );
}
