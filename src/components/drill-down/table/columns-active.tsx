import type { ColumnDef } from "@tanstack/react-table"

export type ProtocolPayment = {
  protocol: string
  localAddress: string
  externalAddress: string
  status: string
}

export const columnsActive: ColumnDef<ProtocolPayment>[] = [
  {
    accessorKey: "protocol",
    header: "Protocolo",
  },
  {
    accessorKey: "localAddress",
    header: "Endereço Local",
  },
  {
    accessorKey: "externalAddress",
    header: "Endereço Externo",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
]