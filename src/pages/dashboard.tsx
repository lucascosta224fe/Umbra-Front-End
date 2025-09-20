import { ComputersSection } from "../components/dashboard/computers-section";
import { GraphSection } from "@/components/graph-section";
import { TopCards } from "@/components/dashboard/top-cards";

export function Dashboard() {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-5 px-10 py-5">
        <TopCards />
        <div className="flex flex-col 2xl:grid xl:grid-cols-[1fr_333px] gap-6">
          <ComputersSection />
          <GraphSection inOutData={inOutData} protocolsData={protocolsData}/>
        </div>
      </div>
    </div>
  );
}

const inOutData = [
  { name: "Entrada", value: 275, fill: "#0047AB" },
  { name: "Saída", value: 200, fill: "#ED303C" },
];

const protocolsData = [
  { protocol: "HTTP", pacotes: 340, fill: "#0ea2cf" },
  { protocol: "FTP", pacotes: 305, fill: "#147c9c" },
  { protocol: "UDP", pacotes: 237, fill: "#0b6885" },
  { protocol: "TCP", pacotes: 150, fill: "#06485c" },
];