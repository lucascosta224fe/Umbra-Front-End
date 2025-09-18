import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { TimePoint } from "@/types/graphs";

const COLOR_TOTAL  = "#7F6BFF"; 
const COLOR_ERRORS = "#FF7A59"; 
const X_MAX = 20;               

type Props = {
  data: TimePoint[];
  height?: number;
  showSecondary?: boolean;
};

function DarkTooltip({
  active, payload, label,
}: { active?: boolean; payload?: any[]; label?: string }) {
  if (!active || !payload?.length) return null;
  const total  = payload.find((p) => p.dataKey === "total");
  const errors = payload.find((p) => p.dataKey === "tcpErrors");

  return (
    <div className="rounded-lg border border-white/10 bg-[#12122B]/95 px-3 py-2 text-xs text-white shadow-lg">
      <div className="opacity-80 mb-1">{label}</div>
      {total && total.value != null && (
        <div className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full" style={{ background: COLOR_TOTAL }} />
          <span className="opacity-80">Todos os pacotes :</span>
          <span className="font-semibold">{total.value}</span>
        </div>
      )}
      {errors && (
        <div className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full" style={{ background: COLOR_ERRORS }} />
          <span className="opacity-80">TCP Errors :</span>
          <span className="font-semibold">{errors.value ?? 0}</span>
        </div>
      )}
    </div>
  );
}

export default function LineTimeseries({
  data,
  height = 520,
  showSecondary = true,
}: Props) {

  const numeric = data.map((d, i) => ({
    ...d,
    tn: Number(d.t ?? i),
  }));


  const byIdx = new Map<number, (TimePoint & { tn: number })>(numeric.map(d => [d.tn, d]));
  const lastRealTotal = numeric.length ? (numeric[numeric.length - 1].total ?? 0) : 0;

  const padded = Array.from({ length: X_MAX + 1 }, (_, i) => {
    const found = byIdx.get(i);
    if (found) return found;
    return { t: String(i), tn: i, total: lastRealTotal, tcpErrors: 0 };
  });


  const maxVal = Math.max(
    10,
    ...padded.map(d => Math.max(d.total ?? 0, d.tcpErrors ?? 0)),
  );
  const Y_MAX = Math.max(100, Math.ceil(maxVal / 10) * 10);
  const xTicks = Array.from({ length: X_MAX + 1 }, (_, i) => i);
  const yTicks = [0, 20, 40, 60, 80, 100].concat(Y_MAX > 100 ? [Y_MAX] : []);

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={padded} margin={{ top: 5, right: 5, bottom: -24, left: -24 }}>
          <CartesianGrid strokeDasharray="3 6" stroke="rgba(255,255,255,0.18)" />

          <XAxis
            dataKey="tn"
            type="number"
            domain={[0, X_MAX]}
            ticks={xTicks}
            allowDecimals={false}
            allowDataOverflow
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            tickMargin={6}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={false}
            padding={{ right: 0 }}
          />

          <YAxis
            domain={[0, Y_MAX]}
            ticks={yTicks}
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            tickMargin={6}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={false}
          />

          <Tooltip content={<DarkTooltip />} cursor={{ stroke: "rgba(255,255,255,0.28)" }} />

          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}
          />

          <Line
            name="Todos os pacotes"
            type="monotone"
            dataKey="total"
            stroke={COLOR_TOTAL}
            strokeWidth={2.5}
            dot={{ r: 3, strokeWidth: 2, stroke: COLOR_TOTAL, fill: "#151534" }}
            activeDot={{ r: 6 }}
            connectNulls
            isAnimationActive={false}
          />

          {showSecondary && (
            <Line
              name="TCP Errors"
              type="monotone"
              dataKey="tcpErrors"
              stroke={COLOR_ERRORS}
              strokeWidth={1.5}
              strokeDasharray="5 5"
              dot={{ r: 2, strokeWidth: 1, stroke: COLOR_ERRORS, fill: "#151534" }}
              connectNulls
              isAnimationActive={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
