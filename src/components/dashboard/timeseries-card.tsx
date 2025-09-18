import { Card, CardContent } from "@/components/ui/card";
import LineTimeseries from "@/components/charts/line-timeseries";
import { useTimeseries } from "@/hooks/use-timeseries";

type Props = {
  computerId: string;
  pollMs?: number;
  timeWindow?: string;
  height?: number;
};

export function TimeseriesCard({
  computerId,
  pollMs = 5000,
  timeWindow = "20m",
  height = 520,
}: Props) {
  const { data, error, reload } = useTimeseries(computerId, { pollMs, timeWindow });

  return (
    <Card className="bg-card border-primary/30">
      <CardContent className="pt-4 pb-4 px-4">
        {error ? (
          <div className="text-red-400 text-sm">
            API: {error}{" "}
            <button onClick={reload} className="underline ml-2">tentar novamente</button>
          </div>
        ) : (
          <LineTimeseries data={data?.points ?? []} height={height} />
        )}
      </CardContent>
    </Card>
  );
}
