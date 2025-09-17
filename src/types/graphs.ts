export type InOutDataProps = {
  name: string;
  value: number;
  fill: string;
}

export type ProtocolsDataProps = {
  protocol: string;
  pacotes: number;
  fill: string;
}

export type GraphSectionProps = {
  inOutData: InOutDataProps[];
  protocolsData: ProtocolsDataProps[];
};