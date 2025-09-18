import { useEffect, useRef, useState } from "react";
import { Api } from "@/lib/api";
import type { ComputerTimeseriesResponse } from "@/types/graphs";

type Options = {
  pollMs?: number;     
  timeWindow?: string; 
};

export function useTimeseries(computerId: string, opts: Options = {}) {
  const { pollMs = 5000, timeWindow = "20m" } = opts;

  const [data, setData] = useState<ComputerTimeseriesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  async function load() {
    try {
      setError(null);
      const res = await Api.fetchComputerTimeseries(computerId, timeWindow);
      setData(res);
    } catch (e: any) {
      setError(e?.message ?? "Erro ao carregar série temporal");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    load();

    if (pollMs > 0) {
      timer.current = globalThis.setInterval(load, pollMs);
      return () => {
        if (timer.current) globalThis.clearInterval(timer.current);
      };
    }
  }, [computerId, timeWindow, pollMs]);

  return { data, loading, error, reload: load };
}
