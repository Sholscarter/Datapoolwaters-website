import React, { useEffect } from "react";
import "@/App.css";
import "@/index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import SuccessStories, { CaseStudyDetail } from "./pages/SuccessStories";
import Academy from "./pages/Academy";
import Capital from "./pages/Capital";
import Innovation from "./pages/Innovation";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import PolicyPage from "./pages/PolicyPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // let the anchor behavior take over
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout transparentHeader>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/who-we-are"
            element={
              <Layout>
                <WhoWeAre />
              </Layout>
            }
          />
          <Route
            path="/what-we-do"
            element={
              <Layout>
                <WhatWeDo />
              </Layout>
            }
          />
          <Route
            path="/success-stories"
            element={
              <Layout>
                <SuccessStories />
              </Layout>
            }
          />
          <Route
            path="/success-stories/:slug"
            element={
              <Layout transparentHeader>
                <CaseStudyDetail />
              </Layout>
            }
          />
          <Route
            path="/academy"
            element={
              <Layout>
                <Academy />
              </Layout>
            }
          />
          <Route
            path="/capital"
            element={
              <Layout>
                <Capital />
              </Layout>
            }
          />
          <Route
            path="/innovation"
            element={
              <Layout>
                <Innovation />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/insights/:slug"
            element={
              <Layout>
                <Article />
              </Layout>
            }
          />
          <Route
            path="/policies/:key"
            element={
              <Layout>
                <PolicyPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
