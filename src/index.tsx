import { SanityProvider } from './contexts/SanityContext';
import './index.css';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';
import { BlogPage } from './pages/BlogPage/BlogPage';
import CampervanPage from './pages/CampervanPage/CampervanPage';
import HomePage from './pages/HomePage';
import { AccountPage } from './pages/Member/AccountPage';
import { BookingsPage } from './pages/Member/BookingsPage';
import { ConfirmPage } from './pages/Member/ConfirmPage';
import { RequestPage } from './pages/Member/RequestPage';
import { RecipesPage } from './pages/RecipesPage/RecipesPage';
import VanDetailPage from './pages/VanDetailPage/VanDetailPage';
import { type ClientConfig, createClient } from '@sanity/client';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

const config: ClientConfig = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-26', // use current date (YYYY-MM-DD) to target the latest API version
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
  </React.StrictMode>,
);
