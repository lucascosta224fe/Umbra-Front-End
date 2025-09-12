import { FileWarning, LaptopMinimal, Network, RotateCcw, Timer } from "lucide-react";
import { DashboardCard } from "../components/dashboard/dashboard-card";

export function Dashboard() {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Dashboard</h1>
      </div>
      <div className="px-10 py-5">
        <div className="flex items-center justify-between">
          <DashboardCard icon={<LaptopMinimal size={20} className="text-primary"/>} title={"Computadores"} number={"5"} />
          <DashboardCard icon={<FileWarning size={20} className="text-[#B70306]"/>} title={"Pacotes Perdidos"} number={"13"} />
          <DashboardCard icon={<RotateCcw size={20} className="text-[#B47B1E]"/>} title={"Pacotes Reenviados"} number={"5"} />
          <DashboardCard icon={<Network size={20} className="text-[#1986D3]"/>} title={"Taxa de Tráfego"} number={"200mb/s"} />
          <DashboardCard icon={<Timer size={20} className="text-[#56A412]"/>} title={"Tempo Médio de Resposta"} number={"4ms"} />
        </div>
      </div>
    </div>
  );
}
