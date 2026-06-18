// Datapoolwaters Academy — Programmes catalogue.
// To add a new programme, prepend an object to this array. The Academy listing
// page and the per-programme detail page (/academy/:slug) read from this file.

export const PROGRAMS = [
  {
    slug: "pe-vc-sustainable-investment-valuation",
    name: "Private Equity, Venture Capital & Sustainable Investment Valuation Programme",
    shortName: "PE, VC & Sustainable Investment Valuation",
    tagline:
      "Master the art of valuation, climate risk integration, and sustainable investing in private markets.",
    duration: "2 Weekends",
    format: "Hands-On Programme",
    deliveryMode: "In-person, practitioner-led sessions with applied case work.",
    cohorts: [
      { label: "Cohort 1", schedule: "April Intake (Annually)" },
      { label: "Cohort 2", schedule: "October Intake (Annually)" },
    ],
    certification:
      "Datapoolwaters Academy Professional Certificate in Private Equity, Venture Capital & Sustainable Investment Valuation.",
    overview: [
      "A practical, hands-on programme designed for finance professionals, investment analysts, fund managers, startup founders, development finance practitioners, sustainability professionals, corporate finance teams, and institutional investors seeking to build world-class capabilities in investment valuation and sustainable capital allocation.",
      "The programme combines traditional valuation methodologies with emerging sustainability, climate risk, ESG, and impact investing frameworks — equipping participants with the skills required to evaluate investment opportunities in today's evolving capital markets.",
      "Participants will learn how professional investors assess businesses, infrastructure projects, startups, climate-focused ventures, and impact investments while incorporating sustainability-related risks and opportunities into investment decisions.",
    ],
    objectives: [
      "Understand Private Equity and Venture Capital investment ecosystems.",
      "Perform business valuations using global best practices.",
      "Build integrated financial models for investment analysis.",
      "Apply Discounted Cash Flow (DCF) valuation techniques.",
      "Conduct Comparable Company Analysis (Trading Multiples).",
      "Conduct Precedent Transaction Analysis.",
      "Value early-stage startups and growth companies.",
      "Evaluate infrastructure and project finance investments.",
      "Incorporate ESG and sustainability factors into valuation models.",
      "Quantify climate-related financial risks and opportunities.",
      "Understand climate scenario analysis and transition risks.",
      "Evaluate carbon markets and climate investment opportunities.",
      "Assess impact investing and blended finance structures.",
      "Develop investment committee-ready investment memoranda.",
      "Understand exit strategies, portfolio management, and value creation plans.",
    ],
    capstone:
      "Participants will complete a comprehensive valuation and investment recommendation project.",
    audience: [
      "Investment Analysts",
      "Private Equity Professionals",
      "Venture Capital Professionals",
      "Fund Managers",
      "Corporate Finance Professionals",
      "Sustainability Professionals",
      "Startup Founders",
      "CFOs and Finance Executives",
      "Development Finance Professionals",
      "Investment Bankers",
      "Consultants",
      "Graduate Finance Professionals",
    ],
    outcomes:
      "Upon completion, participants will possess practical skills to evaluate investment opportunities, integrate sustainability considerations into valuation models, assess climate-related financial risks, and make informed capital allocation decisions in private and public markets.",
    cta: "Join the next cohort and gain the analytical skills used by leading Private Equity firms, Venture Capital funds, Development Finance Institutions, and Sustainable Investment Managers worldwide.",
  },
];

export const getProgramBySlug = (slug) =>
  PROGRAMS.find((p) => p.slug === slug) || null;
