import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";
import {
  ChartColumn,
  ChevronLeft,
  ChevronRight,
  Home,
  Radar,
} from "lucide-react";
import { useEffect, useState } from "react";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  // { title: "Métricas", icon: ChartColumn, path: "/metricas" },
  { title: "Drilldown", icon: Radar, path: "/drilldown" },
];

export const Sidebar = () => {
  const [isCollapse, setCollapse] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCollapse(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={cn(
        "hidden md:flex relative bg-[#1B1A3F] flex-col items-center duration-200 transition-all",
        isCollapse ? "w-[84px]" : "w-72"
      )}
    >
      {!isCollapse ? (
        <Link
          to="/"
          aria-label="Ir para o Dashboard"
          className="px-2 py-9 w-full block"
        >
          <img src="/complete-logo.png" className="" />
        </Link>
      ) : (
        <Link
          to="/"
          aria-label="Ir para o Dashboard"
          className="px-2 py-9 w-full grid place-items-center"
        >
          <img src="/logo.png" className="" />
        </Link>
      )}

      <nav className="flex flex-col w-full gap-2 px-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.path}
              key={index}
              className={cn(
                "text-[#BFCDE0] px-4 py-2 flex items-center gap-3 hover:text-white hover:bg-primary/30 rounded-[5px] w-full font-bold duration-200 transition-all",
                pathname == item.path ? "bg-primary text-white" : ""
              )}
            >
              {Icon && <Icon className="size-5" />}
              <span
                className={cn(
                  "leading-4 line-clamp-1 text-[16px]",
                  isCollapse ? "hidden" : "block"
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
      <button
        className="absolute hidden -right-[1rem] top-[3.3rem] bg-primary hover:bg-primary/90 rounded-[5px] size-8 md:grid place-items-center transition-all duration-200 ease-in-out cursor-pointer"
        onClick={() => setCollapse(!isCollapse)}
      >
        <ChevronRight
          className={cn(
            "h-5 w-5 transition-transform duration-600 ease-in-out text-text hover:text-[#FFF] cursor-pointer",
            isCollapse ? "rotate-180" : ""
          )}
        />
      </button>
    </aside>
  );
};
