export type ComputerCardProps = {
  name: number;
  ipv4: string;
  ipv6: string;
  mac: string;
  usagePct?: number;
  className?: string;
  onOpen?: () => void;
};

export type Computer = {
  name: string;
  ipv4: string[];
  ipv6: string[];
  mac: string;
  packetsIn?: number;
  packetsOut?: number;
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