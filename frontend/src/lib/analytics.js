// Google Analytics 4 (GA4) integration — SPA-aware.
// Activates only when REACT_APP_GA4_MEASUREMENT_ID is set in /app/frontend/.env
// Format: G-XXXXXXXXXX
//
// Usage:
//   import { initGA, trackPageview, trackEvent } from './lib/analytics';
//   initGA();                                          // call once at app boot
//   trackPageview('/contact', 'Contact');              // on every SPA route change
//   trackEvent('contact_form_submit', { form: 'main' });

const MEASUREMENT_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID || "";

let initialized = false;

export function isEnabled() {
  return Boolean(MEASUREMENT_ID && MEASUREMENT_ID.startsWith("G-"));
}

export function initGA() {
  if (initialized || !isEnabled() || typeof window === "undefined") return;

  // 1) Inject gtag.js loader
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(s);

  // 2) Initialize dataLayer + gtag stub
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  // We send page_view manually on every route change, so disable the
  // automatic initial page_view to avoid double-counting.
  gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  initialized = true;
}

export function trackPageview(path, title) {
  if (!isEnabled() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(name, params = {}) {
  if (!isEnabled() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
