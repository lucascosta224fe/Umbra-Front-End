import type { ColumnDef } from "@tanstack/react-table"

export type ProtocolPayment = {
  name: string
  localAddress: string
  foreignAddress: string
  state: string
}

export const columnsActive: ColumnDef<ProtocolPayment>[] = [
  {
    accessorKey: "name",
    header: "Protocolo",
  },
  {
    accessorKey: "localAddress",
    header: "Endereço Local",
  },
  {
    accessorKey: "foreignAddress",
    header: "Endereço Externo",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
]