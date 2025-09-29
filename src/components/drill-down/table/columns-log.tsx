import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export type LogPayment = {
  source: string;
  destination: string;
  protocol: string;
  length: string;
  info: string;
};

export const columnsLog: ColumnDef<LogPayment>[] = [
  {
    accessorKey: "source",
    header: "Origem",
  },
  {
    accessorKey: "destination",
    header: "Destino",
  },
  {
    accessorKey: "protocol",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Protocolo" />
    ),
  },
  {
    accessorKey: "length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tamanho" />
    ),
  },
  {
    accessorKey: "info",
    header: "Informação",
  },
];
