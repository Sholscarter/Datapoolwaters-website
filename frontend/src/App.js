import React, { useEffect } from "react";
import "@/App.css";
import "@/index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { initGA, trackPageview } from "./lib/analytics";
import { SITE_URL, SITE_NAME, CORE_KEYWORDS } from "./data/seo";

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
import Governance from "./pages/Governance";
import BusinessConcierge from "./pages/BusinessConcierge";
import NotFound from "./pages/NotFound";

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

function AnalyticsRouteTracker() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    // Defer to next tick so document.title is updated by the route's effects.
    const t = setTimeout(() => {
      trackPageview(pathname + search, document.title);
    }, 50);
    return () => clearTimeout(t);
  }, [pathname, search]);
  return null;
}

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  // Site-wide JSON-LD (Organization + WebSite). Lives once at the App root.
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: "Datapoolwaters Advisory Limited",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/dpw-horizontal.svg`,
        description:
          "Boutique investment and strategic financial advisory firm operating across Nigeria and Africa. Specialists in financial modelling, OBC/FBC business cases, ICRC-aligned PPP & concession advisory, fundraising, and capital structuring.",
        sameAs: [
          "https://www.linkedin.com/company/datapoolwaters/",
          "https://twitter.com/datapoolwaters",
          "https://instagram.com/datapoolwaters",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+234 813 421 5663",
            contactType: "customer support",
            email: "advisory@datapoolwaters.com",
            areaServed: ["NG", "Africa"],
            availableLanguage: "en",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        knowsAbout: CORE_KEYWORDS,
        slogan: "Capital · Strategy · Sustainability",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
      </Helmet>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <AnalyticsRouteTracker />
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
            path="/business-concierge"
            element={
              <Layout>
                <BusinessConcierge />
              </Layout>
            }
          />
          <Route
            path="/governance"
            element={
              <Layout>
                <Governance />
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
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}
