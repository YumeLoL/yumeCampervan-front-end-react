import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import AdminLoginPage from "./app/pages/AdminLoginPage";
import "./index.css";
import CampervansPage from "./app/pages/CampervansPage";
import PopularRoutesPage from "./app/pages/CampervansPage/PopularRoutesPage";
import BlogPage from "./app/pages/CampervansPage/Blog";
import ContactPage from "./app/pages/CantactPage";
import RecipesPage from "./app/pages/CampervansPage/Recipes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/campervans" element={<CampervansPage />} />
        <Route
          path="/get-inspired/popular-routes"
          element={<PopularRoutesPage />}
        />
        <Route path="/get-inspired/blog" element={<BlogPage />} />
        <Route path="/get-inspired/recipes" element={<RecipesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

