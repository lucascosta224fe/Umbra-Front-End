import type { ComputerTimeseriesResponse, TimePoint } from "@/types/graphs";

const cache = new Map<string, ComputerTimeseriesResponse>();

/** Gera ticks "0..20" (21 pontos) */
function ticks0to20(): string[] {
  return Array.from({ length: 21 }, (_, i) => String(i));
}

function jitter(seed: number, i: number, base: number, amp: number) {
  // PRNG determinístico simples baseado em seed e i
  const x = Math.sin(seed * 9301 + i * 49297) * 233280;
  const r = x - Math.floor(x);
  return Math.max(0, Math.round(base + (r - 0.5) * amp));
}

export function mockComputerTimeseries(
  id = "1",
  base = 60
): ComputerTimeseriesResponse {
  if (cache.has(id)) return cache.get(id)!;

  const seed = Number(id) || 1;
  const points: TimePoint[] = ticks0to20().map((t, i) => ({
    t,
    total: jitter(seed, i, base + ((i % 7) * 5), 40),
    tcpErrors: i % 10 === 0 ? 2 : 0, // errozinho fixo só pra enxergar linha
  }));

  const resp: ComputerTimeseriesResponse = {
    computerId: id,
    ip: "192.168.10.15",
    points,
  };

  cache.set(id, resp);
  return resp;
}
