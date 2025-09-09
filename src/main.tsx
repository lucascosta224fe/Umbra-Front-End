import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layout.tsx";
import { App } from "./pages/app.tsx";
import { DrillDonm } from "./pages/drill-down.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}></Route>
         <Route path="Drilldown" element={<DrillDonm/>}> </Route><Route/>
      </Route>
    </Routes>
  </BrowserRouter>
);
