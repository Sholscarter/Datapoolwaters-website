# Datapoolwaters Advisory — Website PRD

## Original Problem Statement
> "Datapoolwaters Advisory Brand guide and website mock up, I want to build a website for the company, following its brand guidelines."
> Structure: multi-page, follow opencapital.com layout pattern.
> Contact form: functional, saves to DB.
> Fonts: system fallbacks for Optima / Helvetica Neue.
> Logo: user-provided (blue/white/black variants downloaded to /public/assets).

## Architecture
- **Backend:** FastAPI (server.py) — POST `/api/contact`, GET `/api/contact`, GET `/api/health`, GET `/api/`. MongoDB collection `contact_submissions`.
- **Frontend:** React 19 + react-router-dom v7, Tailwind, shadcn/ui components, lucide-react icons, sonner for toasts.
- **Brand:** Primary blue `#035FFE`; Optima serif stack (`Optima, Palatino, Georgia, serif`); Helvetica Neue sans stack.
- **Signature graphic:** `FlowingLines` SVG component (quarter-fan radial lines), used at 8–22% opacity across pages. `DpwSymbol` inline SVG used in header/footer.
- **Cinematic hero:** `HeroCinematic.jsx` — 12-beat scripted voiceover slideshow on home, using Unsplash imagery with brand overlay.

## Routes
- `/` — Home (hero + vision/mission + 3 pillars + engagements grid + testimonial + insights + CTA)
- `/who-we-are` — About + approach + values + team + join us
- `/what-we-do` — 3 pillar tabs + capabilities + related cases + academy/capital teasers
- `/success-stories` — filterable grid of 14 case studies
- `/success-stories/:slug` — individual case study detail
- `/academy` — Datapoolwaters Academy (focus areas + cohort CTA)
- `/capital` — Datapoolwaters Capital (Coming Soon + investment thesis)
- `/innovation` — Bruno.AI + EcoBruit
- `/contact` — functional contact form (MongoDB) + info
- `/insights/:slug` — article detail ("Unlocking Success" article)
- `/policies/:key` — privacy | terms | ethics | anti-trafficking | whistleblowing

## User Personas
- Institutional investors / DFIs exploring African deal flow
- Government ministries / regulators seeking PPP advisory
- Founders / companies raising institutional capital
- Job seekers / partners

## Core Requirements (Static)
- Strict brand-guide compliance (colors, fonts, flowing-lines usage, arched frame photo crops).
- Multi-page navigation matching opencapital.com style.
- Working contact form saving to MongoDB.
- Provided copy used verbatim for every section.
- Provided logo used in header/footer/public assets.

## Implemented (2025-12)
- [x] FastAPI backend with contact submission endpoint validated by curl.
- [x] Tailwind config with brand color tokens.
- [x] Global CSS with Optima & Helvetica Neue font stacks.
- [x] Header (fixed, transparent over hero), Footer (black with 3 columns + social).
- [x] FlowingLines SVG + DpwSymbol SVG components.
- [x] HeroCinematic adapted from provided hero_v2 HTML.
- [x] All 11 routes wired up in App.js.
- [x] 14 verbatim case studies + 1 article in /data.
- [x] 5 governance/policy pages with placeholder-but-usable text.
- [x] Responsive layouts (mobile nav, grids).
- [x] data-testid on all interactive elements.

## Backlog (prioritized)
- **P1:** Replace hero images with client-provided sector photography.
- **P1:** Provide real team bios & photos (WhoWeAre currently narrative-only).
- **P1:** Wire real governance policy text (client to supply).
- **P2:** Add CMS-style insights list page (`/insights`) when more articles arrive.
- **P2:** Add client logo marquee under "Examples of our engagements".
- **P2:** SEO: per-page meta tags + OG images.
- **P3:** Newsletter subscription capture.
- **P3:** Optional blog / admin UI to manage submissions + insights.

## Credentials / Secrets
- None required. Uses MongoDB via existing MONGO_URL env var. No third-party LLM/integration keys needed.

## Test Credentials
- N/A (no auth in MVP).
