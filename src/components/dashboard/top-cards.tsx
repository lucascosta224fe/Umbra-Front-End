import { LaptopMinimal, FileWarning, RotateCcw, Timer, Network } from "lucide-react";
import { DashboardCard } from "./dashboard-card";

export const TopCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
      <DashboardCard
        icon={<LaptopMinimal size={20} className="text-primary" />}
        title={"Computadores"}
        number={"5"}
      />
      <DashboardCard
        icon={<FileWarning size={20} className="text-[#B70306]" />}
        title={"Pacotes Perdidos"}
        number={"13"}
      />
      <DashboardCard
        icon={<RotateCcw size={20} className="text-[#B47B1E]" />}
        title={"Pacotes Reenviados"}
        number={"5"}
      />
      <DashboardCard
        icon={<Network size={20} className="text-[#1986D3]" />}
        title={"Taxa de Tráfego"}
        number={"200mb/s"}
      />
      <DashboardCard
        icon={<Timer size={20} className="text-[#56A412]" />}
        title={"Tempo Médio de Resposta"}
        number={"4ms"}
      />
    </div>
  );
};
