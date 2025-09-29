import { useMemo } from "react";
import { useDashboardStore } from "@/store/dashboard-store";
import type { Computer } from "@/types/dashboard";
import type { InOutDataProps, ProtocolsDataProps } from "@/types/graphs";
import { useSearchParams } from "react-router";

type ComputerChartData = {
  protocolsData: ProtocolsDataProps[];
  inOutData: InOutDataProps[];
};

type UseDrillDownDataResult = {
  computerId: string | null;
  selectedComputer: Computer | null; 
  computerChartData: ComputerChartData | null;
};

const protocolColors: { [key: string]: string } = {
  HTTPS: "#00B4D8",
  HTTP: "#06788f",
  FTP: "#3B009A",
  UDP: "#7209B7",
  TCP: "#560BAD",
  OTHER: "#6b7280",
  DEFAULT: "#06785c",
};

export const useDrillDownData = (): UseDrillDownDataResult => {
  const [searchParams] = useSearchParams();
  const computerId = searchParams.get("computer");
  const { computers } = useDashboardStore();

  const selectedComputer = useMemo(() => {
    if (!computerId || computers.length === 0) return null;
    const computerIndex = Number(computerId) - 1;
    if (computerIndex < 0 || computerIndex >= computers.length) return null;
    return computers[computerIndex];
  }, [computerId, computers]);

  const computerChartData = useMemo(() => {
    if (!selectedComputer) return null;

    const protocolsData = selectedComputer.protocols
      ? Object.entries(selectedComputer.protocols).map(([key, value]) => ({
          protocol: key.toUpperCase(),
          pacotes: value as unknown as number,
          fill: protocolColors[key.toUpperCase()] || protocolColors.DEFAULT,
        }))
      : [];

    const inOutData = [
      {
        name: "Entrada",
        value: selectedComputer.packetsIn || 0,
        fill: "#0047AB",
      },
      {
        name: "Saída",
        value: selectedComputer.packetsOut || 0,
        fill: "#ED303C",
      },
    ];

    return { protocolsData, inOutData };
  }, [selectedComputer]);


  return {
    computerId,
    selectedComputer,
    computerChartData,
  };
};