import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampervanPage from "./app/pages/CampervanPage";
import HomePage from "./app/pages/HomePage";
import VanDetailPage from "./app/pages/VanDetailPage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campervans" element={<CampervanPage />} />

        <Route path="/campervans">
          <Route index element={<CampervanPage />}/>
          <Route path=":vanId" element={<VanDetailPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

