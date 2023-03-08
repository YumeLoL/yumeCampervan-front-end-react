import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampervanPage from "./app/pages/CampervanPage";
import HomePage from "./app/pages/HomePage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campervans" element={<CampervanPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

