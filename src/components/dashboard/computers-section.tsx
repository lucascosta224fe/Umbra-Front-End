import type { Computer } from "@/types/dashboard";
import { ComputerCard } from "./computer-card";

export function ComputersSection({ computers }: { computers: Computer[] }) {
  if (!computers || computers.length === 0) {
    return (
      <section>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:mt-11">
          <ComputerCardSkeleton />
          <ComputerCardSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-4 text-[20px] font-bold text-white">Computadores</h2>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {computers.map((pc, i) => (
          <ComputerCard
            key={pc.mac || pc.ipv4[0]}
            name={i}
            ipv4={pc.ipv4[0]}
            mac={pc.mac}
            ipv6={pc.ipv6[0]}
            usagePct={pc.packetsIn ?? 0}
          />
        ))}
      </div>
    </section>
  );
}

const ComputerCardSkeleton = () => (
  <div className="h-[250px] animate-pulse rounded-lg bg-card/50 p-4" />
);
