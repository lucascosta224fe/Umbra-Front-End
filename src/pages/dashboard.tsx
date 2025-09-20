import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { ComputersSection } from "../components/dashboard/computers-section";
import { GraphSection } from "@/components/graph-section";
import { TopCards, type TopCardsProps } from "@/components/dashboard/top-cards";
import type { Computer, InOut, Protocol } from "@/types/dashboard";

const protocolColors: { [key: string]: string } = {
  HTTPS: "#0eaacf",
  HTTP: "#0ea2cf",
  FTP: "#147c9c",
  UDP: "#0b6885",
  TCP: "#06485c",
  OTHER: "#6b7280",
  DEFAULT: "#06785c",
};

export function Dashboard() {
  const [topCardsData, setTopCardsData] = useState<TopCardsProps>({});
  const [computers, setComputers] = useState<Computer[]>([]);
  const [inOutData, setInOutData] = useState<InOut[]>([]);
  const [protocolsData, setProtocolsData] = useState<Protocol[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("✅ Conectado ao servidor via Socket.IO");
    });

    socket.on("packetData", (data: any) => {
      console.log(data)
      setComputers([...(data.computers || [])]);
      setTopCardsData({ ...(data || {}) });

      const newInputOutData: InOut[] = [
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
      setInOutData(newInputOutData);

      if (data.protocols && typeof data.protocols === 'object') {
        const newProtocolsData: Protocol[] = Object.entries(data.protocols).map(
          ([key, value]) => ({
            protocol: key.toUpperCase(),
            pacotes: value as number,
            fill:
              protocolColors[key.toUpperCase()] || protocolColors.DEFAULT,
          })
        );
        setProtocolsData(newProtocolsData);
      }
    });

    socket.on("disconnect", () => {
      console.log("❌ Desconectado do servidor.");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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