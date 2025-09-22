export type ComputerCardProps = {
  name: number;
  ipv4: string;
  ipv6: string;
  mac: string;
  packages: number;
  usagePct?: number;
  className?: string;
  onOpen?: () => void;
};

export type Computer = {
  name: string;
  ipv4: string[];
  ipv6: string[];
  mac: string;
  protocols: ProtocolsComputer[];
  packetsIn?: number;
  packetsOut?: number;
}

export type ProtocolsComputer = {
  http: number;
  https: number;
  ftp: number;
  tcp: number;
  udp: number;
  other: number;
}

export type Protocol = {
  protocol: string;
  pacotes: number;
  fill: string;
};

export type InOut = {
  name: string;
  value: number;
  fill: string;
};

export type TopCardsProps = {
  qtdComputadores?: number;
  qtdPacotesPerdidos?: number;
  qtdPacotesReenviados?: number;
  taxaTráfego?: number;
  tempoMedioResposta?: number;
};