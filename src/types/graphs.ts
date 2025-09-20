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

export type TimePoint = {
  t: string;        
  total: number;    
  tcpErrors?: number; 
};

export type ComputerTimeseriesResponse = {
  computerId: string;
  ip: string;
  points: TimePoint[];
};