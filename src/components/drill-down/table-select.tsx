import { useState } from "react";
import { ProtocolsTable } from "./protocols-table";
import { columns } from "./columns";
import { cn } from "@/lib/utils";

export const TableSelect = () => {
  const [current, setCurrent] = useState("log");

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between gap-2">
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
      <div className="bg-card px-4">
        {current === "log" ? (
          <ProtocolsTable columns={columns} data={items} />
        ) : (
          <ProtocolsTable columns={columns} data={items} />
        )}
      </div>
    </div>
  );
};

const items = [
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
