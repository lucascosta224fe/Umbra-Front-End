import { columns } from "@/components/drill-down/columns";
import { ProtocolsTable } from "@/components/drill-down/protocols-table";
import { GraphSection } from "@/components/graph-section";
import { TimeseriesCard } from "@/components/dashboard/timeseries-card";

export const DrillDown = () => {
  const computerId = "1";
  const ip = "192.168.10.15";

  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Drill-Down</h1>
      </div>

      <div className="px-10 py-5">
        <div className="grid grid-cols-[1fr_400px] gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              {/* Título FORA do card */}
              <h2 className="text-white text-[24px] font-bold mb-2">
                Computador {computerId}{" "}
                <span className="text-white/60 text-[20px] font-bold">{ip}</span>
              </h2>

              <TimeseriesCard
                computerId={computerId}
                pollMs={0}
                timeWindow="20m"
                height={520}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[20px] font-bold">
                Sessões Ativas
              </h2>
              <div className="rounded-[16px]">
                <ProtocolsTable columns={columns} data={items} />
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA – mantém donuts/pizza */}
          <GraphSection inOutData={inOutData} protocolsData={protocolsData} />
        </div>
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

const inOutData = [
  { name: "Entrada", value: 275, fill: "#0047AB" },
  { name: "Saída", value: 200, fill: "#ED303C" },
];

const protocolsData = [
  { protocol: "HTTP", pacotes: 340, fill: "#0ea2cf" },
  { protocol: "FTP", pacotes: 305, fill: "#147c9c" },
  { protocol: "UDP", pacotes: 237, fill: "#0b6885" },
  { protocol: "TCP", pacotes: 150, fill: "#06485c" },
];
