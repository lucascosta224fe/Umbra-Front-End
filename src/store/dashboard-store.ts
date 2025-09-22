import { create } from "zustand";
import type { Computer, InOut, Protocol, TopCardsProps } from "@/types/dashboard";

const protocolColors: { [key: string]: string } = {
  HTTPS: "#0eaacf",
  HTTP: "#0ea2cf",
  FTP: "#147c9c",
  UDP: "#0b6885",
  TCP: "#06485c",
  OTHER: "#6b7280",
  DEFAULT: "#06785c",
};

interface DashboardState {
  topCardsData: TopCardsProps;
  computers: Computer[];
  inOutData: InOut[];
  protocolsData: Protocol[];
  updateData: (data: any) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  topCardsData: {},
  computers: [],
  inOutData: [],
  protocolsData: [],

  updateData: (data: any) => set(() => {
    const newProtocolsData = data.protocols
      ? Object.entries(data.protocols).map(([key, value]) => ({
          protocol: key.toUpperCase(),
          pacotes: value as number,
          fill: protocolColors[key.toUpperCase()] || protocolColors.DEFAULT,
        }))
      : [];

    const newInOutData = [
      {
        name: "Entrada",
        value: data.inputOutput?.input || 0,
        fill: "#0047AB",
      },
      {
        name: "Saída",
        value: data.inputOutput?.output || 0,
        fill: "#ED303C",
      },
    ];

    return {
      computers: data.computers || [],
      topCardsData: data || {},
      protocolsData: newProtocolsData,
      inOutData: newInOutData,
    };
  }),
}));