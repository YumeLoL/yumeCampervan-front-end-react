// sanity.js
import { type ClientConfig, createClient } from "@sanity/client";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SanityProvider } from "./app/contexts/SanityContext";
import { BlogPage } from "./app/pages/BlogPage";
import CampervanPage from "./app/pages/CampervanPage";
import HomePage from "./app/pages/HomePage/HomePage";
import { Login } from "./app/pages/Login";
import { AccountPage } from "./app/pages/Member/AccountPage";
import { BookingsPage } from "./app/pages/Member/BookingsPage";
import { ConfirmPage } from "./app/pages/Member/ConfirmPage";
import { RequestPage } from "./app/pages/Member/RequestPage";
import { RecipesPage } from "./app/pages/RecipesPage";
import { SignUp } from "./app/pages/SignUp";
import VanDetailPage from "./app/pages/VanDetailPage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

const config: ClientConfig = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-26", // use current date (YYYY-MM-DD) to target the latest API version
};
export const sanityClient = createClient(config);

root.render(
  <React.StrictMode>
    {/* <MemberIdProvider> */}
    <SanityProvider client={sanityClient}>
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
            <Route path="/member/bookings" element={<BookingsPage />} />
            <Route path="/member/:vanId/request" element={<RequestPage />} />
            <Route path="/member/account" element={<AccountPage />} />
          </Route>

          <Route path="/request/confirm" element={<ConfirmPage />} />
        </Routes>
      </BrowserRouter>
    </SanityProvider>
    {/* </MemberIdProvider> */}
  </React.StrictMode>
);
