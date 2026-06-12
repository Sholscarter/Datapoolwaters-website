import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you are looking for does not exist. Return to the Datapoolwaters Advisory homepage."
        noindex
      />
      <section
        data-testid="notfound-page"
        className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-white"
      >
        <div className="max-w-2xl w-full text-center">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--dpw-gold, #B69D69)" }}
          >
            404 — Not Found
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{
              fontFamily:
                'Optima, "Optima nova", "Linux Biolinum", "URW Classico", "Palatino Linotype", "Book Antiqua", Palatino, serif',
              color: "var(--dpw-navy, #0B1E3F)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            We could not find that page.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 mb-10 leading-relaxed">
            The link may be outdated, or the page may have moved. Let us guide
            you back to where you need to be.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              data-testid="notfound-home-link"
              className="inline-flex items-center px-6 py-3 text-sm tracking-wider uppercase border transition-colors"
              style={{
                background: "var(--dpw-navy, #0B1E3F)",
                color: "#fff",
                borderColor: "var(--dpw-navy, #0B1E3F)",
              }}
            >
              Return Home
            </Link>
            <Link
              to="/contact"
              data-testid="notfound-contact-link"
              className="inline-flex items-center px-6 py-3 text-sm tracking-wider uppercase border transition-colors"
              style={{
                color: "var(--dpw-navy, #0B1E3F)",
                borderColor: "var(--dpw-navy, #0B1E3F)",
                background: "transparent",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
