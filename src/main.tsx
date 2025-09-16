import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layout.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { DrillDown } from "./pages/drill-down.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="drilldown" element={<DrillDown />}> </Route><Route />
      </Route>
    </Routes>
  </BrowserRouter>
);
