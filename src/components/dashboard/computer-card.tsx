import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { copyToClipboard } from "../../utils/copy-to-keyboard";
import type { ComputerCardProps } from "../../types/dashboard";

export function ComputerCard({
  name,
  ip,
  mac,
  ipv6,
  usagePct = 0,
  className,
  onOpen,
}: ComputerCardProps) {
  const pct = Math.min(Math.max(usagePct, 0), 100);

  return (
    <div
      className={cn(
        "rounded-2xl bg-card text-white shadow border border-white/5",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-description2">
        <div className="flex items-center h-full gap-2">
          <span className="truncate text-[16px] font-semibold leading-5">
            {name}
          </span>
          <span
            className="truncate text-[12px] text-[#5D5D81] cursor-pointer"
            onClick={() => copyToClipboard(ip)}
          >
            {ip}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpen}
          title="Abrir detalhes"
          className="grid w-8 h-8 bg-white border rounded-md cursor-pointer place-items-center border-white/10 text-primary hover:bg-white/10 hover:text-white"
        >
          <SquareArrowOutUpRight className="size-5" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <div className="text-[16px] text-white leading-none font-semibold">
            MAC Address
          </div>
          <div
            className="mt-2 inline-block rounded-md bg-[#BFCDE0] px-3 py-1 text-[14px] text-[#1B1A3F] cursor-pointer"
            onClick={() => copyToClipboard(mac)}
          >
            {mac}
          </div>
        </div>

        <div>
          <div className="text-[16px] text-[#FFFFFF] leading-none font-semibold">
            IPv6
          </div>
          <div
            className="mt-2 inline-block max-w-full truncate rounded-md bg-[#BFCDE0] px-3 py-1 text-[14px] text-[#1B1A3F] cursor-pointer"
            onClick={() => copyToClipboard(ipv6)}
          >
            {ipv6}
          </div>
        </div>
      </div>

      <div className="h-[18px] w-full bg-[#D7D4FF]">
        <div className="h-[18px] bg-[#5F56DC]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
