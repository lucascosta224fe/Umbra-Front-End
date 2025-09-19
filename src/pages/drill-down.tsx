import { TableSelect } from "@/components/drill-down/table-select";
import { GraphSection } from "@/components/graph-section";
import { ChartLine } from "@/components/charts/chart-line";

export const DrillDown = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Drill-Down</h1>
      </div>

      <div className="px-10 py-5">
        <div className="flex flex-col gap-5">
          <div className="grid 2xl:grid-cols-[1fr_400px] gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[20px] font-bold mb-2">
                Computador 1
              </h2>
              <ChartLine />
            </div>
            <GraphSection inOutData={inOutData} protocolsData={protocolsData} />
          </div>

          <TableSelect />
        </div>
      </div>
    </div>
  );
};

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
