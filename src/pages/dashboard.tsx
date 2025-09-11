import { DashboardCard } from "../components/dashboard/dashboard-card";

export function Dashboard() {
  return (
    <main className="bg-[#0D0C23] w-full">
      <div className="p-10">
        <h1 className="text-white text-[40px] font-bold">Dashboard</h1>
      </div>
      <div className="px-10 py-5 ">
        <div className="flex items-center justify-between">
          <DashboardCard title={"Computadores"} number={"5"} />
          <DashboardCard title={"Pacotes Perdidos"} number={"13"} />
          <DashboardCard title={"Pacotes Reenviados"} number={"5"} />
          <DashboardCard title={"Taxa de Tráfego"} number={"200mb/s"} />
          <DashboardCard title={"Tempo Médio de Resposta"} number={"4ms"} />
        </div>
      </div>
    </main>
  );
}
