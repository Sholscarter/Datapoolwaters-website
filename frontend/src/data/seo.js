// Centralised SEO configuration for Datapoolwaters Advisory.
// Update SITE_URL once before deploy if the production domain changes.

import { CASE_STUDIES } from "./caseStudies";
import { INSIGHTS } from "./insights";

export const SITE_URL = "https://www.datapoolwaters.com";
export const SITE_NAME = "Datapoolwaters Advisory";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Target keywords — weighted into titles, descriptions, and JSON-LD knowsAbout.
// Anchored to the actual capabilities described in the site copy.
export const CORE_KEYWORDS = [
  "investment advisory",
  "financial model",
  "financial modelling",
  "Outline Business Case",
  "OBC",
  "Full Business Case",
  "FBC",
  "fundraising",
  "capital raising",
  "private equity advisory",
  "venture capital advisory",
  "project finance",
  "infrastructure finance",
  "Public-Private Partnership",
  "PPP advisory",
  "concession advisory",
  "ICRC",
  "Infrastructure Concession Regulatory Commission",
  "budgeting",
  "corporate finance advisory",
  "valuation",
  "transaction advisory",
  "due diligence",
  "blended finance",
  "climate finance",
  "carbon finance",
  "renewable energy finance",
  "agribusiness investment",
  "DFI",
  "Development Finance Institution",
  "Nigeria",
  "Africa",
  "boutique investment advisory firm",
];

const DEFAULT_DESCRIPTION =
  "Boutique investment & strategic financial advisory across Nigeria and Africa. Financial modelling, OBC/FBC business cases, ICRC-aligned PPP structuring, fundraising, and capital advisory for infrastructure, energy, climate, agribusiness, and technology.";

/**
 * Per-route SEO configuration.
 * Keys map exactly to React Router pathnames (with `:slug` placeholders).
 *
 *   title       — used as <title> and og:title (≤ ~60 chars recommended)
 *   description — used as <meta name="description"> (≤ ~160 chars)
 *   keywords    — included in og:keywords + JSON-LD (Google ignores meta keywords, but it doesn't hurt)
 *   image       — absolute OG/Twitter card image (defaults to /og-image.jpg)
 *   type        — open graph type
 */
export const SEO_DEFAULTS = {
  description: DEFAULT_DESCRIPTION,
  image: DEFAULT_OG_IMAGE,
  type: "website",
  keywords: CORE_KEYWORDS,
};

export const SEO_PAGES = {
  "/": {
    title: "Datapoolwaters Advisory — Investment, PPP & Financial Advisory in Africa",
    description:
      "Boutique investment & strategic financial advisory across Africa. Financial modelling, OBC/FBC business cases, ICRC-aligned PPP and concession structuring, fundraising, and capital advisory.",
    keywords: CORE_KEYWORDS,
  },
  "/who-we-are": {
    title: "Who We Are — Datapoolwaters Advisory",
    description:
      "A boutique, senior-led financial advisory firm. We design capital, structure ambition, and unlock scale for infrastructure, energy, climate, agribusiness, and technology across Africa.",
    keywords: [
      "boutique investment advisory firm",
      "senior advisory team",
      "Nigeria",
      "Africa",
      ...CORE_KEYWORDS,
    ],
  },
  "/what-we-do": {
    title: "What We Do — Financial Modelling, PPP & Fundraising Advisory",
    description:
      "Capabilities: financial modelling, OBC & FBC development, ICRC PPP structuring, concession advisory, fundraising, capital structuring, valuation, due diligence, and blended/climate finance.",
    keywords: [
      "financial modelling",
      "OBC FBC business case",
      "PPP advisory ICRC",
      "fundraising advisory",
      "capital structuring",
      "valuation",
      "blended finance",
      ...CORE_KEYWORDS,
    ],
  },
  "/business-concierge": {
    title: "Business Concierge — Start, Grow & Scale Your Business",
    description:
      "Datapoolwaters Business Concierge — guides, financial models, budgeting templates, and seminars for first-time founders. Start smart. Grow with guidance.",
    keywords: [
      "small business Nigeria",
      "business plan",
      "cashflow",
      "budgeting",
      "pricing",
      "founder resources",
      "financial model templates",
      ...CORE_KEYWORDS,
    ],
  },
  "/success-stories": {
    title: "Success Stories — Engagements Across Africa",
    description:
      "Transactions and programmes shaped by Datapoolwaters: from $9M Arnergy Series A to Nigeria's $200bn High-Speed Rail OBC, ICRC concessions, hydropower, climate platforms, and more.",
    keywords: [
      "case studies",
      "success stories",
      "fundraising case study",
      "ICRC concession",
      "OBC FBC",
      ...CORE_KEYWORDS,
    ],
  },
  "/academy": {
    title: "Datapoolwaters Academy — Finance & Infrastructure Training",
    description:
      "Applied capacity building: financial modelling, PPP frameworks, climate finance, finance for non-finance leaders, and institutional capacity building across Africa.",
    keywords: [
      "financial modelling training",
      "PPP training",
      "climate finance training",
      "executive education Africa",
      ...CORE_KEYWORDS,
    ],
  },
  "/capital": {
    title: "Datapoolwaters Capital — Early-Stage Investment Vehicle (Coming Soon)",
    description:
      "Datapoolwaters Capital is our proposed early-stage investment vehicle backing scalable, market-creating solutions across Africa. Currently in development pending regulatory approvals.",
    keywords: [
      "early-stage investment Africa",
      "venture capital Nigeria",
      "impact investment",
      ...CORE_KEYWORDS,
    ],
  },
  "/innovation": {
    title: "Innovation — Bruno.AI & EcoBruit",
    description:
      "Our platforms: Bruno.AI — AI-powered financial operating system for frontier markets; EcoBruit — AI-augmented ESG monitoring and reporting for credible sustainability management.",
    keywords: [
      "Bruno.AI",
      "EcoBruit",
      "ESG reporting",
      "financial operating system",
      "AI finance Africa",
      ...CORE_KEYWORDS,
    ],
  },
  "/contact": {
    title: "Contact — Datapoolwaters Advisory",
    description:
      "Talk to us about capital raises, OBC/FBC business cases, PPPs, infrastructure advisory, or institutional partnerships. We respond within two business days.",
    keywords: [
      "contact financial advisor Nigeria",
      "investment advisory enquiry",
      ...CORE_KEYWORDS,
    ],
  },
  "/governance": {
    title: "Governance, Ethics & Compliance — Datapoolwaters Advisory",
    description:
      "Our governance framework, code of ethics, anti-corruption stance, NDPA-aligned data protection, and whistleblowing channels. Built to the standards of DFIs and PPP authorities.",
    keywords: [
      "governance",
      "ethics",
      "compliance",
      "anti-corruption",
      "NDPA",
      "DFI standards",
      ...CORE_KEYWORDS,
    ],
  },
};

// Policy pages
["privacy", "terms", "ethics", "anti-trafficking", "whistleblowing"].forEach((k) => {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    ethics: "Code of Ethics & Professional Conduct",
    "anti-trafficking": "Anti-Trafficking & Modern Slavery Policy",
    whistleblowing: "Whistleblowing Policy",
  };
  SEO_PAGES[`/policies/${k}`] = {
    title: `${titles[k]} — Datapoolwaters Advisory`,
    description:
      "Datapoolwaters Advisory's governance documentation. Aligned with NDPA 2023, GDPR, ILO conventions, and DFI integrity standards.",
    keywords: ["policy", "compliance", "governance", ...CORE_KEYWORDS],
  };
});

// Dynamic — case study detail pages
export function getCaseSEO(slug) {
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return null;
  return {
    title: `${c.title} — Datapoolwaters Case Study`,
    description: c.what ? c.what.slice(0, 158).trim() + (c.what.length > 158 ? "…" : "") : DEFAULT_DESCRIPTION,
    image: c.image && c.image.startsWith("/") ? `${SITE_URL}${c.image}` : c.image || DEFAULT_OG_IMAGE,
    type: "article",
    keywords: [c.pillar, c.tag, ...CORE_KEYWORDS].filter(Boolean),
    article: {
      headline: c.title,
      image: c.image && c.image.startsWith("/") ? `${SITE_URL}${c.image}` : c.image,
      datePublished: "2024-01-01",
      author: SITE_NAME,
    },
  };
}

// Dynamic — insights / article pages
export function getInsightSEO(slug) {
  const a = INSIGHTS.find((x) => x.slug === slug);
  if (!a) return null;
  return {
    title: `${a.title} — Insights`,
    description: a.excerpt ? a.excerpt.slice(0, 158) : DEFAULT_DESCRIPTION,
    image: a.image || DEFAULT_OG_IMAGE,
    type: "article",
    keywords: [...(a.tags || []), ...CORE_KEYWORDS],
    article: {
      headline: a.title,
      image: a.image,
      datePublished: a.date,
      author: SITE_NAME,
    },
  };
}

// All routes for sitemap
export function allRoutes() {
  const base = Object.keys(SEO_PAGES);
  const cases = CASE_STUDIES.map((c) => `/success-stories/${c.slug}`);
  const insights = INSIGHTS.map((a) => `/insights/${a.slug}`);
  return [...base, ...cases, ...insights];
}
