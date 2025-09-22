import { useDashboardStore } from "@/store/dashboard-store";
import { useEffect } from "react";
import { io } from "socket.io-client";

let socket: any;

export function useDashboardConnection() {
  const { updateData } = useDashboardStore();

  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:3000");

      socket.on("connect", () => {
        console.log("✅ Conectado ao servidor via Socket.IO");
      });

      socket.on("packetData", (data: any) => {
        updateData(data);
      });

      socket.on("disconnect", () => {
        console.log("❌ Desconectado do servidor.");
      });
    }

  }, [updateData]);
}