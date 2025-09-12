import { Outlet } from "react-router";
import { Sidebar } from "./components/sidebar";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full bg-background">
        <Outlet />
      </main>
    </div>
  );
};
