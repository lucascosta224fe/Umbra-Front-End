import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ChartInOut } from "./chart-in-out";

export const GraphSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-text text-[20px] font-bold">
          Protocolos mais utilizados
        </h2>
        <Table className="border border-primary/40 text-white">
          <TableHeader className="w-full bg-card text-white hover:bg-card">
            <TableRow className="w-full hover:bg-card">
              <TableHead className="w-[100px] text-accent font-bold">
                Protocolo
              </TableHead>
              <TableHead className="text-right text-accent font-bold">
                Quantidade
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(even)]:bg-card [&>*:nth-child(even)]:hover:bg-card/40 [&>*:nth-child(odd)]:bg-transparent [&>*:nth-child(odd)]:hover:bg-card/50">
            {protocols.map((protocol) => {
              return (
                <TableRow key={protocol.name} className="p-4">
                  <TableCell>{protocol.name}</TableCell>
                  <TableCell className="text-right">{protocol.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <ChartInOut />
    </div>
  );
};

const protocols = [
  {
    name: "HTTP",
    value: 21,
  },
  {
    name: "TCP",
    value: 9,
  },
  {
    name: "UDP",
    value: 5,
  },
  {
    name: "FTP",
    value: 3,
  },
];
