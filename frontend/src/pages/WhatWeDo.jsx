import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { ArrowRight, Check } from "lucide-react";
import { CASE_STUDIES } from "../data/caseStudies";

const PILLARS = [
  {
    id: "advisory",
    no: "01",
    title: "Advisory & Consulting",
    summary:
      "Complex structuring, PPP advisory, business cases, regulatory-aligned financial modelling.",
    intro:
      "We work with governments, founders, boards, and investors on complex, high-stakes decisions that shape capital allocation, infrastructure delivery, and long-term value creation. Our advisory work combines rigorous financial modelling, strategic clarity, regulatory awareness, and real-world execution experience across infrastructure, energy, climate, agriculture, financial services, and technology. We do not stop at strategy. Our work is designed to be bankable, defensible, and implementation-ready — standing up to investor, lender, and regulatory scrutiny.",
    capabilities: [
      {
        k: "Strategic & Corporate Finance Advisory",
        v: "We support leadership teams and boards in making capital-informed decisions that drive sustainable growth. Our work includes corporate strategy development, capital allocation planning, expansion modelling, restructuring analysis, and scenario-based decision frameworks. We ensure strategy is financially coherent, risk-adjusted, and executable — not theoretical.",
      },
      {
        k: "Public-Private Partnership (PPP) & Concession Advisory",
        v: "We structure infrastructure and public service projects to attract private capital while safeguarding public interest. Our PPP advisory spans project identification, structuring frameworks, risk allocation design, concession modelling, bankability testing, and alignment with ICRC and regulatory requirements.",
      },
      {
        k: "Business Cases & Transaction Modelling",
        v: "We develop Outline Business Cases (OBCs), Full Business Cases (FBCs), and integrated financial models for complex projects — incorporating demand forecasting, multi-scenario stress testing, tariff modelling, fiscal sustainability analysis, and long-term revenue projections.",
      },
      {
        k: "Policy & Institutional Advisory",
        v: "We support governments and public institutions in designing policy-enabled markets — regulatory framework design, pricing and tariff advisory, institutional reform modelling, and financial sustainability analysis for public services.",
      },
    ],
  },
  {
    id: "capital",
    no: "02",
    title: "Capital & Fundraising Advisory",
    summary: "Equity raises, capital structuring, institutional investment alignment.",
    intro:
      "We advise businesses, project sponsors, and institutional stakeholders as they raise, structure, and deploy capital across venture growth, private equity, project finance, and long-term infrastructure investments. We support the full capital lifecycle: from investment readiness and positioning, through transaction execution, to post-investment governance alignment.",
    capabilities: [
      {
        k: "Fundraising & Investment Advisory",
        v: "End-to-end advisors on equity and structured capital raises — investment readiness assessments, financial model refinement, valuation analysis, investor targeting, data room preparation, due diligence coordination, and negotiation support with VCs, PEs, DFIs, climate funds, and institutional investors.",
      },
      {
        k: "Project & Infrastructure Finance Structuring",
        v: "We design capital stacks for large-scale infrastructure and climate-linked projects — revenue modelling, blended finance structuring, debt-equity optimisation, concession cashflow modelling, credit enhancement strategies, and multilateral/DFI alignment.",
      },
      {
        k: "Financial Modelling & Valuation",
        v: "Decision-grade models for transactions and capital allocation — operating projections, capex structuring, sensitivity analysis, downside protection, valuation benchmarking, and capital structure optimisation.",
      },
      {
        k: "Sustainable & Impact Capital Advisory",
        v: "Climate alignment, ESG structuring, and gender-lens frameworks embedded into investment design — measurable impact metrics, carbon revenue frameworks, sustainability-linked financing models, and DFI-aligned reporting.",
      },
    ],
  },
  {
    id: "platforms",
    no: "03",
    title: "Platforms, Innovation & Institutional Partnerships",
    summary: "Market-shaping initiatives, national systems, structural reform.",
    intro:
      "Through our work across markets and policy, we frequently identify structural gaps — where capital, institutions, or delivery systems are missing, fragmented, or inefficient. Platforms & Innovation is how we go beyond advisory — designing and supporting scalable initiatives that enable markets to function sustainably.",
    capabilities: [
      {
        k: "Market & Ecosystem Design",
        v: "Enabling environments where private capital and public systems operate effectively — market diagnostics, ecosystem mapping, incentive structuring, risk-sharing frameworks, and long-term sustainability modelling.",
      },
      {
        k: "Institutional & Multi-Stakeholder Partnerships",
        v: "Collaboration across public institutions, private capital, and development actors — governance framework design, partnership models, financial architecture, and implementation coordination.",
      },
      {
        k: "Policy-Enabled Market Platforms",
        v: "Creation of platforms that unlock sector-wide efficiency — from infrastructure finance mechanisms to climate-aligned delivery systems — combining regulatory design, financial structuring, and capital mobilisation.",
      },
    ],
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(PILLARS[0].id);
  const current = PILLARS.find((p) => p.id === active);
  const relatedCases = CASE_STUDIES.filter((c) =>
    active === "advisory"
      ? c.pillar === "Advisory & Consulting"
      : active === "capital"
      ? c.pillar === "Capital & Fundraising Advisory"
      : c.pillar === "Platforms & Innovation"
  );

  return (
    <div data-testid="page-what-we-do">
      <SEO />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">What We Do</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            We build <em className="italic text-dpw-blue">bankable</em>{" "}
            institutions and mobilize capital for sustainable development.
          </h1>
          <p className="mt-10 text-[18px] leading-[1.7] text-dpw-dark-grey max-w-3xl">
            We combine deep financial expertise, infrastructure advisory, and
            impact-driven strategy — delivering solutions that stand up to
            investor, lender, and regulatory scrutiny.
          </p>
        </div>
      </section>

      {/* Pillar tabs */}
      <section className="pb-24 md:pb-32">
        <div className="dpw-container">
          <div className="grid md:grid-cols-3 gap-0 border-t border-dpw-light-grey/70">
            {PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                data-testid={`pillar-tab-${p.id}`}
                className={`text-left p-8 border-b-2 transition-all ${
                  active === p.id
                    ? "bg-dpw-blue text-white border-dpw-blue"
                    : "bg-white text-dpw-black border-transparent hover:bg-dpw-off-white"
                }`}
              >
                <div
                  className={`font-sans text-[11px] tracking-[0.3em] ${
                    active === p.id ? "text-white/80" : "text-dpw-blue"
                  }`}
                >
                  {p.no}
                </div>
                <div className="mt-4 font-serif text-[22px] leading-tight">
                  {p.title}
                </div>
                <div
                  className={`mt-3 text-[14px] leading-[1.5] ${
                    active === p.id ? "text-white/85" : "text-dpw-dark-grey"
                  }`}
                >
                  {p.summary}
                </div>
              </button>
            ))}
          </div>

          {/* Active pillar content */}
          <div className="mt-16 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="dpw-eyebrow mb-4">Our Capabilities</div>
              <h2 className="font-serif text-3xl md:text-[38px] leading-[1.1] text-dpw-black">
                {current.title}
              </h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-dpw-dark-grey">
                {current.intro}
              </p>
            </div>
            <div className="md:col-span-7 space-y-8">
              {current.capabilities.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-6 pb-8 border-b border-dpw-light-grey/60 last:border-b-0 last:pb-0"
                >
                  <div className="shrink-0 text-dpw-blue">
                    <Check size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-dpw-black">{c.k}</h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-dpw-dark-grey">
                      {c.v}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related case studies */}
          <div className="mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="dpw-eyebrow mb-3">Related Work</div>
                <h3 className="font-serif text-3xl md:text-4xl text-dpw-black">
                  Engagements under this pillar
                </h3>
              </div>
              <Link
                to="/success-stories"
                data-testid="wwd-all-work"
                className="inline-flex items-center gap-3 text-dpw-blue text-[13px] tracking-[0.18em] uppercase"
              >
                All success stories <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  to={`/success-stories/${c.slug}`}
                  data-testid={`wwd-case-${c.slug}`}
                  className="group p-7 bg-dpw-off-white hover:bg-dpw-blue hover:text-white transition-colors duration-300"
                >
                  <div className="font-sans text-[11px] tracking-[0.25em] uppercase text-dpw-blue group-hover:text-white/80">
                    {c.tag}
                  </div>
                  <h4 className="mt-4 font-serif text-xl leading-snug text-dpw-black group-hover:text-white">
                    {c.title}
                  </h4>
                  <div className="mt-3 text-[13px] text-dpw-dark-grey group-hover:text-white/85">
                    {c.size}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-dpw-blue group-hover:text-white">
                    Read more <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academy / Capital teaser */}
      <section className="py-24 bg-dpw-off-white">
        <div className="dpw-container grid md:grid-cols-2 gap-8">
          <Link
            to="/academy"
            data-testid="wwd-teaser-academy"
            className="group relative overflow-hidden bg-black p-10 md:p-14 text-white min-h-[300px]"
          >
            <FlowingLines position="bottom-right" size={340} color="#035FFE" opacity={0.3} />
            <div className="dpw-eyebrow mb-4" style={{ color: "#7aa8ff" }}>
              Datapoolwaters Academy
            </div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">
              Building Africa&apos;s next generation of finance &amp;
              infrastructure leaders.
            </h3>
            <div className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-dpw-blue group-hover:text-white transition-colors">
              Explore the Academy <ArrowRight size={12} />
            </div>
          </Link>
          <Link
            to="/capital"
            data-testid="wwd-teaser-capital"
            className="group relative overflow-hidden bg-dpw-blue p-10 md:p-14 text-white min-h-[300px]"
          >
            <FlowingLines position="top-left" size={340} color="#000000" opacity={0.22} />
            <div className="dpw-eyebrow mb-4" style={{ color: "#cfe0ff" }}>
              Datapoolwaters Capital
            </div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">
              Early-stage capital for scalable, market-creating solutions.
              <br />
              <span className="italic text-white/80 text-2xl">Coming soon.</span>
            </h3>
            <div className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-white">
              Learn more <ArrowRight size={12} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
