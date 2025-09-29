import { useDashboardStore } from "@/store/dashboard-store";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket: any;

export function useDashboardConnection() {
  const [hasError, setHasError] = useState(false);
  const { updateData } = useDashboardStore();

  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:3000");

      socket.on("connect", () => {
        console.log("✅ Conectado ao servidor via Socket.IO");
        setHasError(false);
      });

      socket.on("packetData", (data: any) => {
        updateData(data);
      });

      socket.on("error", (error: any) => {
        console.error("Houve um erro inesperado: ", error);
        setHasError(true);
      });

      socket.on("connect_error", (error: any) => {
        console.error("❌ Falha ao conectar com o servidor:", error);
        setHasError(true);
      });

      socket.on("disconnect", () => {
        console.log("❌ Desconectado do servidor.");
        setHasError(true);
      });
    }
  }, [updateData]);

  return { hasError };
}
