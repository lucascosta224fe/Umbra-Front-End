import { ExternalLink } from "lucide-react";
import { cn } from "../../lib/utils";

type ComputerCardProps = {
  name: string;
  ip: string;
  mac: string;
  ipv6: string;
  usagePct?: number;
  className?: string;
  onOpen?: () => void;
};

export function ComputerCard({
  name, ip, mac, ipv6, usagePct = 0, className, onOpen,
}: ComputerCardProps) {
  const pct = Math.min(Math.max(usagePct, 0), 100);

  return (
    <div
      className={cn(
        // CARD
        "rounded-2xl bg-[#1B1A3F] text-white p-4 shadow border border-white/5",
        className
      )}
    >
      {/* HEADER*/}
      <div className="flex items-start justify-between">
        <div className="min-w-0">

          <div className="mt-1 flex items-center gap-2">
            <span className="truncate text-[16px] font-semibold leading-5">
              {name}
            </span>
            <span className="truncate text-[12px] text-[#5D5D81]">{ip}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          title="Abrir detalhes"
          className="grid h-8 w-8 place-items-center rounded-md bg-[#FFFFFF] border border-white/10 text-[#5F56DC] hover:bg-white/10 hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

      {/* DIVISOR */}
      <div className="mt-3 h-px w-full bg-[#5D5D81]" />

      {/* INFO LINES */}
      <div className="mt-3 space-y-3">
        <div>
          <div className="text-[12px] text-[#FFFFFF] leading-none">MAC Address</div>
          <div className="mt-2 inline-block rounded-md bg-[#BFCDE0] px-3 py-1 text-[12px] text-[#1B1A3F]">
            {mac}
          </div>
        </div>

        <div>
          <div className="text-[12px] text-[#FFFFFF] leading-none">IPv6</div>
          <div className="mt-2 inline-block max-w-full truncate rounded-md bg-[#BFCDE0] px-3 py-1 text-[12px] text-[#1B1A3F]">
            {ipv6}
          </div>
        </div>
      </div>

      {/* BARRA  */}
      <div className="mt-4 h-[10px] w-full bg-[#D7D4FF]">
        <div
          className="h-[10px] bg-[#5F56DC]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}