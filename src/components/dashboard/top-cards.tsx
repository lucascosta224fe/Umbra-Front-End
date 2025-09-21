import {
  LaptopMinimal,
  FileWarning,
  RotateCcw,
  Timer,
  Network,
} from "lucide-react";
import { DashboardCard } from "./dashboard-card";
import { formatTrafficRate } from "@/utils/format-traffic-data";
import type { TopCardsProps } from "@/types/dashboard";

export const TopCards = (data: TopCardsProps) => {
  if (Object.keys(data).length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
        <DashboardCardSkeleton />
        <DashboardCardSkeleton />
        <DashboardCardSkeleton />
        <DashboardCardSkeleton />
        <DashboardCardSkeleton />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
      <DashboardCard
        icon={<LaptopMinimal size={20} className="text-primary" />}
        title={"Computadores"}
        number={`${data.qtdComputadores ?? 0}`}
      />
      <DashboardCard
        icon={<FileWarning size={20} className="text-[#B70306]" />}
        title={"Pacotes Perdidos"}
        number={`${data.qtdPacotesPerdidos ?? 0}`}
      />
      <DashboardCard
        icon={<RotateCcw size={20} className="text-[#B47B1E]" />}
        title={"Pacotes Reenviados"}
        number={`${data.qtdPacotesReenviados ?? 0}`}
      />
      <DashboardCard
        icon={<Network size={20} className="text-[#1986D3]" />}
        title={"Taxa de Tráfego"}
        number={formatTrafficRate(data.taxaTráfego)}
      />
      <DashboardCard
        icon={<Timer size={20} className="text-[#56A412]" />}
        title={"Tempo Médio de Resposta"}
        number={`${data.tempoMedioResposta ?? 0}ms`}
      />
    </div>
  );
};

const DashboardCardSkeleton = () => (
  <div className="flex h-[88px] animate-pulse items-center gap-4 rounded-lg bg-card/50 p-4" />
);
