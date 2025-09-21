import { useState, useEffect } from "react";
import { io } from "socket.io-client";
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

export function useNetworkData(url: string) {
  const [topCardsData, setTopCardsData] = useState<TopCardsProps>({});
  const [computers, setComputers] = useState<Computer[]>([]);
  const [inOutData, setInOutData] = useState<InOut[]>([]);
  const [protocolsData, setProtocolsData] = useState<Protocol[]>([]);

  useEffect(() => {
    const socket = io(url);

    socket.on("connect", () => {
      console.log("✅ Conectado ao servidor via Socket.IO");
    });

    socket.on("packetData", (data: any) => {
      setComputers(data.computers || []);
      setTopCardsData(data || {});

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

      if (data.protocols && typeof data.protocols === "object") {
        const newProtocolsData: Protocol[] = Object.entries(data.protocols).map(
          ([key, value]) => ({
            protocol: key.toUpperCase(),
            pacotes: value as number,
            fill: protocolColors[key.toUpperCase()] || protocolColors.DEFAULT,
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
  }, [url]);

  return { topCardsData, computers, inOutData, protocolsData };
}
