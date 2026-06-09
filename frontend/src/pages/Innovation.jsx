import React from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { ArrowRight, Cpu, Database, Globe, ShieldCheck, BarChart3, Leaf } from "lucide-react";

const BRUNO = [
  { icon: <Database size={30} strokeWidth={1.4} />, k: "Automated Transaction Processing", v: "Smart classification, reconciliation, anomaly detection, and audit-ready documentation." },
  { icon: <BarChart3 size={30} strokeWidth={1.4} />, k: "Real-Time Financial Reporting", v: "AI-assisted analysis, performance insights, and dynamic management dashboards." },
  { icon: <Globe size={30} strokeWidth={1.4} />, k: "Multi-Entity & Multi-Currency Support", v: "Seamless consolidation across subsidiaries, jurisdictions, and FX exposures." },
  { icon: <ShieldCheck size={30} strokeWidth={1.4} />, k: "Compliance-Ready Infrastructure", v: "Built-in financial controls aligned with regulatory, investor, and audit requirements." },
];

const ECO = [
  "ESG data collection, validation, and tracking",
  "Climate, environmental, and social performance indicators",
  "Impact reporting aligned with global standards",
  "Decision dashboards for management and investors",
];

export default function Innovation() {
  return (
    <div data-testid="page-innovation">
      <SEO />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Our Innovation</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            Tools built for the{" "}
            <em className="italic text-dpw-blue">complexity</em> of frontier
            markets.
          </h1>
        </div>
      </section>

      {/* Bruno.AI */}
      <section
        id="bruno"
        className="py-24 md:py-32 text-white relative overflow-hidden"
        style={{ background: "var(--dpw-black)" }}
      >
        <FlowingLines position="bottom-right" size={520} color="#035FFE" opacity={0.14} />
        <div className="dpw-container relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-3">
                <Cpu size={28} className="text-dpw-blue" />
                <span className="dpw-label" style={{ color: "#7aa8ff" }}>
                  Bruno.AI
                </span>
              </div>
              <h2 className="mt-5 font-serif text-4xl md:text-[46px] leading-[1.08]">
                AI-powered financial operating system for frontier markets.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-white/80 text-[17px] leading-[1.75]">
              <p>
                Bruno.AI is an intelligent financial operating system designed
                for businesses operating across complex, multi-entity, and
                cross-border environments.
              </p>
              <p>
                Built for frontier and emerging markets, Bruno.AI transforms
                finance from manual record-keeping into real-time,
                decision-grade intelligence — combining automation, machine
                learning, and structured financial architecture.
              </p>
              <p>
                It enhances finance teams rather than replacing them — improving
                accuracy, accelerating reporting, and strengthening governance.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="dpw-eyebrow mb-6" style={{ color: "#7aa8ff" }}>
              Core Capabilities
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BRUNO.map((b, i) => (
                <div
                  key={i}
                  className="p-7 bg-white/[0.04] border border-white/10 hover:border-dpw-blue transition-colors"
                  data-testid={`bruno-cap-${i}`}
                >
                  <div className="text-dpw-blue">{b.icon}</div>
                  <h3 className="mt-5 font-serif text-xl leading-tight">
                    {b.k}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.55] text-white/75">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-10 md:p-14 border border-white/10 bg-white/[0.03]">
            <div className="dpw-eyebrow mb-4" style={{ color: "#7aa8ff" }}>
              Why Bruno.AI
            </div>
            <p className="font-serif text-2xl md:text-3xl leading-[1.35] max-w-3xl">
              Frontier markets demand resilient financial systems. Bruno.AI
              provides the intelligence, control, and scalability required to
              grow confidently — while maintaining transparency and
              institutional credibility.
            </p>
          </div>
        </div>
      </section>

      {/* EcoBruit */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <FlowingLines position="top-right" size={480} opacity={0.08} />
        <div className="dpw-container relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-3">
                <Leaf size={28} className="text-dpw-blue" />
                <span className="dpw-label text-dpw-blue">EcoBruit</span>
              </div>
              <h2 className="mt-5 font-serif text-4xl md:text-[46px] leading-[1.08] text-dpw-black">
                AI-augmented ESG monitoring &amp; reporting.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-dpw-dark-grey text-[17px] leading-[1.75]">
              <p>
                EcoBruit is an AI-augmented platform designed to help
                organizations measure, monitor, and report ESG performance with
                credibility, consistency, and decision-usefulness.
              </p>
              <p>
                As sustainability expectations increase — from regulators,
                investors, DFIs, and stakeholders — EcoBruit addresses the gap
                between impact ambition and verifiable data. The platform
                enables organizations to move beyond narrative ESG reporting
                toward data-driven sustainability management.
              </p>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="dpw-eyebrow mb-4">Key Focus Areas</div>
              <ul className="space-y-4">
                {ECO.map((e, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start pb-4 border-b border-dpw-light-grey/60 last:border-b-0"
                    data-testid={`eco-${i}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-dpw-blue mt-2 shrink-0" />
                    <span className="text-[16px] text-dpw-black">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-7 p-10 bg-dpw-off-white">
              <p className="font-serif text-2xl md:text-3xl leading-[1.35] text-dpw-black">
                Built for enterprises, infrastructure projects, financial
                institutions, and public sector programs seeking to embed ESG
                into core strategy, governance, and capital allocation.
              </p>
              <p className="mt-6 italic text-dpw-blue text-[18px]">
                Because credible impact requires systems — not spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dpw-blue text-white relative overflow-hidden">
        <FlowingLines position="bottom-left" size={420} color="#000000" opacity={0.22} />
        <div className="dpw-container relative text-center">
          <h3 className="font-serif text-3xl md:text-5xl leading-[1.15] max-w-3xl mx-auto">
            Want to see our platforms in action?
          </h3>
          <div className="mt-10">
            <Link
              to="/contact"
              data-testid="innovation-cta"
              className="inline-flex items-center gap-3 bg-white text-dpw-blue hover:bg-black hover:text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              Request a demo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
