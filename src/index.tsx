import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountPage } from "./app/pages/AccountPage";
import { BlogPage } from "./app/pages/BlogPage";
import { BookingPage } from "./app/pages/BookingPage";
import CampervanPage from "./app/pages/CampervanPage";
import HomePage from "./app/pages/HomePage";
import { Login } from "./app/pages/Login";
import { RecipesPage } from "./app/pages/RecipesPage";
import { SignUp } from "./app/pages/SignUp";
import VanDetailPage from "./app/pages/VanDetailPage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    {/* <MemberIdProvider> */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campervans" element={<CampervanPage />} />

          <Route path="/campervans">
            <Route index element={<CampervanPage />} />
            <Route path=":vanId" element={<VanDetailPage />} />
          </Route>

          <Route path="/get-inspired/blogNews" element={<BlogPage />} />
          <Route path="/get-inspired/recipes" element={<RecipesPage />} />

          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/member">
            <Route path="/member/bookings" element={<BookingPage />} />
            <Route path="/member/account" element={<AccountPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
    {/* </MemberIdProvider> */}
  </React.StrictMode>
);

