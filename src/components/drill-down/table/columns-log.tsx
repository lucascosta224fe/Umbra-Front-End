import type { ColumnDef } from "@tanstack/react-table"

export type LogPayment = {
  source: string
  destination: string
  protocol: string
  length: string
  info: string
}

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
    header: "Protocolo",
  },
  {
    accessorKey: "length",
    header: "Tamanho",
  },
  {
    accessorKey: "info",
    header: "Informação",
  },
]