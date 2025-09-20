import { useState } from "react";
import { ProtocolsTable } from "./table/protocols-table";
import { columnsActive, type ProtocolPayment } from "./table/columns-active";
import { cn } from "@/lib/utils";
import { columnsLog, type LogPayment } from "./table/columns-log";
import { LogTable } from "./table/log-table";

export const TableSelect = () => {
  const [current, setCurrent] = useState("log");

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full gap-2">
        <button
          onClick={() => setCurrent("log")}
          className={cn(
            "text-white text-[20px] text-center w-full cursor-pointer p-2 rounded-t-2xl hover:bg-card/60",
            current === "log" ? "bg-card hover:bg-card border-b-primary border-b" : ""
          )}
        >
          Log
        </button>
        <button
          onClick={() => setCurrent("active")}
          className={cn(
            "text-white text-[20px] text-center w-full cursor-pointer p-2 rounded-t-2xl hover:bg-card/60",
            current === "active" ? "bg-card hover:bg-card border-b-primary border-b" : ""
          )}
        >
          Sessões Ativas
        </button>
      </div>
      <div className="px-4 bg-card">
        {current === "log" ? (
          <LogTable columns={columnsLog} data={itemsLog} />
        ) : (
          <ProtocolsTable columns={columnsActive} data={items} />
        )}
      </div>
    </div>
  );
};

const items: ProtocolPayment[] = [
  {
    name: "TCP",
    localAddress: "127.0.0.1:6463",
    foreignAddress: "kubernetes:60828",
    state: "ESTABLISHED",
  },
  {
    name: "TCP",
    localAddress: "1127.0.0.1:27060",
    foreignAddress: "kubernetes:62453",
    state: "SYN_SENT",
  },
  {
    name: "TCP",
    localAddress: "1127.0.0.1:45654",
    foreignAddress: "kubernetes:60861",
    state: "ESTABLISHED",
  },
];

const itemsLog: LogPayment[] = [
  {
    source: "192.168.1.102",
    destination: "8.8.8.8",
    protocol: "DNS",
    length: "74",
    info: "Standard query 0x1a2b A www.google.com",
  },
  {
    source: "172.217.16.14",
    destination: "192.168.1.102",
    protocol: "TCP",
    length: "60",
    info: "443 -> 54321 [SYN, ACK]",
  },
  {
    source: "192.168.1.1",
    destination: "224.0.0.251",
    protocol: "MDNS",
    length: "110",
    info: "Standard query 0x0000 PTR _googlecast._tcp.local",
  },
  {
    source: "10.0.2.15",
    destination: "10.0.2.2",
    protocol: "UDP",
    length: "98",
    info: "Source port: 5353 Destination port: 5353",
  },
  {
    source: "208.67.222.222",
    destination: "192.168.1.102",
    protocol: "TLSv1.2",
    length: "1500",
    info: "Application Data",
  },
  {
    source: "192.168.1.102",
    destination: "52.94.234.195",
    protocol: "QUIC",
    length: "1280",
    info: "Initial, DCID=f1a2b3c4d5e6f7a8",
  },
  {
    source: "fe80::a1b2:c3d4:e5f6:g7h8",
    destination: "ff02::fb",
    protocol: "MDNS",
    length: "150",
    info: "Standard query response 0x0000 PTR",
  },
  {
    source: "192.168.1.105",
    destination: "192.168.1.255",
    protocol: "NBNS",
    length: "92",
    info: "Registration NB WORKGROUP<1e>",
  },
  {
    source: "45.33.32.156",
    destination: "192.168.1.102",
    protocol: "ICMP",
    length: "60",
    info: "Echo (ping) reply",
  },
  {
    source: "192.168.1.102",
    destination: "192.168.1.1",
    protocol: "ARP",
    length: "42",
    info: "Who has 192.168.1.1? Tell 192.168.1.102",
  },
];
