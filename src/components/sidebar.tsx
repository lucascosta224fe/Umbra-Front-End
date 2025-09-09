import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";
import { ChartColumn, Home, Radar } from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: Home , path: "/" },
  // { title: "Métricas", icon: ChartColumn, path: "/metricas" },
  { title: "Drilldown", icon: Radar, path: "/drilldown" },
];

export const Sidebar = () => {

  const { pathname } = useLocation();

  return (
    <div className="bg-[#1B1A3F] w-[279px] flex flex-col items-center">

      <div className="h-[100px] w-full"></div>

      <nav className="flex flex-col gap-2 w-full px-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link to={item.path} key={index} className={cn("text-[#BFCDE0] px-4 py-2 flex items-center gap-3 hover:text-white hover:bg-[#5F56DC] rounded-[5px] w-full font-bold", pathname == item.path ? "bg-[#5F56DC] text-white" : "")}>
              {Icon && <Icon className="size-4"/>}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
