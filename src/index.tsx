import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import AdminLoginPage from "./app/pages/AdminLoginPage";
import PopularRoutesPage from "./app/pages/GetInspiredPage/PopularRoutesPage";
import BlogPage from "./app/pages/GetInspiredPage/Blog";
import ContactPage from "./app/pages/CantactPage";
import RecipesPage from "./app/pages/GetInspiredPage/Recipes";
import VanDetailPage from "./app/pages/CampervansPage/VanDetailPage";
import CampervansPage from "./app/pages/CampervansPage";
import PostDetailPage from "./app/pages/GetInspiredPage/PopularRoutesPage/PostDetailPage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />

        <Route path="/campervans">
          <Route index element={<CampervansPage />}/>
          <Route path=":vanId" element={<VanDetailPage />} />
        </Route>
        
    
        <Route path="/get-inspired/popular-routes">
          <Route index  element={<PopularRoutesPage />} />
          <Route path=":postId" element={<PostDetailPage />} />
        </Route>

        <Route path="/get-inspired/blog" >
          <Route index element={<BlogPage />}/>
          <Route path=":blogId" element={<PostDetailPage />} />
        </Route>

        <Route path="/get-inspired/recipes" element={<RecipesPage />} />
        
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

