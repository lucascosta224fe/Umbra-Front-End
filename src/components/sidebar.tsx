import { Link } from "react-router";

const menuItems = [
  { title: "Dashboard", path: "/" },
  { title: "Metricas", path: "/metricas" },
  { title: "Drilldown", path: "/drilldown" },
];

export const Sidebar = () => {
  return (
    <div className="bg-[#1B1A3F] w-[279px] flex justify-center ">
      <nav className="flex flex-col gap-2">
        
        {menuItems.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="text-[#BFCDE0] px-4 py-2 flex hover:text-white hover:bg-[#5F56DC] rounded-[5px]">
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
