import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CampervansPage from "./app/pages/CampervansPage";
import HomePage from "./app/pages/HomePage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/campervans">
          <Route index element={<CampervansPage />}/>
          {/* <Route path=":location" element={<CampervansPage />}/> */}
        </Route>

        {/* <Route path="/campervans/van">
          <Route index element={<CampervansPage />}/>
          <Route path=":id" element={<VanDetailPage />}/>
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

        <Route path="/contact" element={<ContactPage />} /> */}
        

        {/* <Route path="/signup" element={<ClientSignUpPage />} />
        <Route path="/signin" element={<ClientSignInPage />} />
        
        <Route path="/admin" element={<AdminLoginPage />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

