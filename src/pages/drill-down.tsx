import { AlertTriangle, LoaderCircle } from "lucide-react";
import { TableSelect } from "@/components/drill-down/table-select";
import { GraphSection } from "@/components/graph-section";
import { ChartLine } from "@/components/charts/chart-line";
import { useDashboardConnection } from "@/hooks/use-dashboard-connection";
import { Link } from "react-router";
import { useDrillDownData } from "@/hooks/use-drilldown-data";

export const DrillDown = () => {
  useDashboardConnection();
  const { computerId, selectedComputer, computerChartData } = useDrillDownData();

  if (!computerId) {
    return (
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center justify-center gap-10 p-10 text-center text-white bg-card rounded-[16px]">
          <div className="flex gap-4 items-center">
            <AlertTriangle className="text-primary size-16" />
            <h2 className="text-3xl font-bold">
              Nenhum Computador Selecionado
            </h2>
          </div>
          <p className="text-lg text-description">
            Volte ao dashboard para escolher um computador e ver seus detalhes.
          </p>
          <Link
            to="/"
            className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
          >
            Voltar ao Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!selectedComputer || !computerChartData) {
    return (
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center justify-center text-white ">
          <LoaderCircle className="mb-4 animate-spin size-12 text-primary" />
          <p className="text-lg">Carregando dados do computador...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Drill-Down</h1>
      </div>

      <div className="px-10 py-5">
        <div className="flex flex-col gap-5">
          <div className="grid 2xl:grid-cols-[1fr_400px] gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex text-white items-center gap-2 mb-2">
                <h2 className="text-[20px] font-bold">
                  Computador {computerId}
                </h2>
                <span className="text-description">
                  {selectedComputer.ipv4}
                </span>
              </div>
              <ChartLine />
            </div>
            <GraphSection
              inOutData={computerChartData.inOutData}
              protocolsData={computerChartData.protocolsData}
            />
          </div>
          <TableSelect />
        </div>
      </div>
    </div>
  );
};
