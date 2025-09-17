import { GraphSection } from "@/components/dashboard/graph-section";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const DrillDown = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Drill-Down</h1>
      </div>
      <div className="px-10 py-5">
        <div className="grid grid-cols-[1fr_400px] gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[20px] font-bold mb-2">
                Computador 1
              </h2>
              <div className="bg-card rounded-[16px] h-[560px]"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[20px] font-bold">
                Sessões Ativas
              </h2>
              <div className="rounded-[16px]">
                <div className="bg-[#1B1A3F] p-2 rounded-md">
                  <Table className="border border-primary/40 text-white">
                    <TableHeader className="w-full bg-card text-white hover:bg-card">
                      <TableRow>
                        <TableHead className="text-accent w-[100px] font-bold">
                          Protocolo
                        </TableHead>
                        <TableHead className=" text-center text-accent">
                          Endereço Local
                        </TableHead>
                        <TableHead className="text-center text-accent">
                          Endereço Externo
                        </TableHead>
                        <TableHead className="text-accent text-right">
                          Estado
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item) => {
                        return (
                          <TableRow key={item.name} className="p-4">
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-center">
                              {item.localAddress}
                            </TableCell>
                            <TableCell className="text-center">{item.externAddress}</TableCell>
                            <TableCell className="text-right">{item.state}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <GraphSection inOutData={inOutData} protocolsData={protocolsData} />
        </div>
      </div>
    </div>
  );
};
const items = [
  {name: "TCP",
    localAddress: "127.0.0.1:6463",
    externAddress: "kubernetes:60828",
    state: "ESTABLISHED"
  },
  {
    name: "TCP",
    localAddress: "1127.0.0.1:27060",
    externAddress: "kubernetes:62453",
    state: "SYN_SENT"
  },
  {
    name: "TCP",
    localAddress: "1127.0.0.1:45654",
    externAddress: "kubernetes:60861",
    state: "ESTABLISHED"
  }
]

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
