import { cn } from "../../lib/utils";
import { ComputerCard } from "./computer-card";

export type ComputerItem = {
  id: string;
  name: string;
  ip: string;
  mac: string;
  ipv6: string;
  usagePct?: number;
};

type Props = {
  items: ComputerItem[];
  className?: string;
};

export function ComputersSection({ items, className }: Props) {
  return (
    <section className={cn("mt-8", className)}>
      <h2 className="mb-4 text-[22px] font-bold text-white">Computadores</h2>

      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((pc) => (
          <ComputerCard
            key={pc.id}
            name={pc.name}
            ip={pc.ip}
            mac={pc.mac}
            ipv6={pc.ipv6}
            usagePct={pc.usagePct ?? 0}
          />
        ))}
      </div>
    </section>
  );
}
