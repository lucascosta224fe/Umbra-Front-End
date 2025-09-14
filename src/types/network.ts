export type Computer = {
  id: string;
  name: string;
  ipv4: string;
  mac: string;
  ipv6: string;
  barValue: number; // 0..100
  to?: string;
};
