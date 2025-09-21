import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { copyToClipboard } from "../../utils/copy-to-keyboard";
import type { ComputerCardProps } from "../../types/dashboard";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function ComputerCard({
  name,
  ipv4,
  mac,
  ipv6,
  packages,
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
            Computador {name + 1}
          </span>
          <span
            className="truncate text-[12px] text-[#5D5D81] cursor-pointer"
            onClick={() => copyToClipboard(ipv4)}
          >
            {ipv4}
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
            className="mt-2 inline-block rounded-md bg-[#BFCDE0] px-3 py-1 text-[14px] text-[#1B1A3F] cursor-pointer h-[29px]"
            onClick={() => copyToClipboard(mac)}
          >
            {mac ?? "Não possui endereço mac"}
          </div>
        </div>

        <div>
          <div className="text-[16px] text-[#FFFFFF] leading-none font-semibold">
            IPv6
          </div>
          <div
            className="mt-2 inline-block max-w-full truncate rounded-md bg-[#BFCDE0] px-3 py-1 text-[14px] text-[#1B1A3F] cursor-pointer h-[29px]"
            onClick={() => copyToClipboard(ipv6)}
          >
            {ipv6}
          </div>
        </div>
      </div>

      <div className="h-[18px] w-full bg-[#D7D4FF] mt-auto transition-all duration-400 ease-in-out">
        <Tooltip>
          <TooltipTrigger
            className="h-[18px] bg-[#5F56DC] mt-auto transition-all duration-400 ease-in-out"
            style={{ width: `${pct}%` }}
          />
          <TooltipContent className="">Pacotes: {packages}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
