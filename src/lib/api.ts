import type { ComputerTimeseriesResponse } from "@/types/graphs";
import { mockComputerTimeseries } from "@/lib/mocks";

const RAW_BASE = import.meta.env.VITE_API_URL?.trim();
const BASE_URL = RAW_BASE && RAW_BASE !== "" ? RAW_BASE.replace(/\/$/, "") : "/api";
const USE_MOCKS = (import.meta.env.VITE_USE_MOCKS ?? "false").toLowerCase() === "true";

async function getText(url: string, init?: RequestInit) {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
  });
  const text = await res.text();
  return { res, text };
}

async function getJson<T>(path: string): Promise<T> {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

  if (USE_MOCKS) {
    if (path.includes("/computers/")) return mockComputerTimeseries() as T;
  }

  try {
    const { res, text } = await getText(url);

    if (!res.ok) {
      if (path.includes("/computers/")) return mockComputerTimeseries() as T;
      throw new Error(`API ${res.status} ${res.statusText} @ ${url}\n${text.slice(0, 200)}`);
    }

    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      if (path.includes("/computers/")) return mockComputerTimeseries() as T;
      throw new Error(`Não-JSON @ ${url}\nContent-Type: ${ct}\n${text.slice(0, 200)}`);
    }

    return JSON.parse(text) as T;
  } catch (err) {
    if (path.includes("/computers/")) return mockComputerTimeseries() as T;
    throw err;
  }
}

export const Api = {
  fetchComputerTimeseries: (id: string, timeWindow = "20m") =>
    getJson<ComputerTimeseriesResponse>(`/computers/${id}/timeseries?window=${timeWindow}`),
};
