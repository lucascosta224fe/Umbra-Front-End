export type ComputerCardProps = {
  name: string;
  ip: string;
  mac: string;
  ipv6: string;
  usagePct?: number;
  className?: string;
  onOpen?: () => void;
};