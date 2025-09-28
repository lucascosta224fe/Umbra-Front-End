import { useState } from "react";
import { ProtocolsTable } from "./table/protocols-table";
import { columnsActive, type ProtocolPayment } from "./table/columns-active";
import { cn } from "@/lib/utils";
import { columnsLog, type LogPayment } from "./table/columns-log";
import { LogTable } from "./table/log-table";
import { useDrillDownData } from "@/hooks/use-drilldown-data";

export const TableSelect = () => {
  const [current, setCurrent] = useState("log");

  const { selectedComputer } = useDrillDownData();

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
          <LogTable columns={columnsLog} data={selectedComputer?.logs || []} />
        ) : (
          <ProtocolsTable columns={columnsActive} data={selectedComputer?.sessions || []} />
        )}
      </div>
    </div>
  );
};