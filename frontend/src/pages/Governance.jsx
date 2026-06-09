import React from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { ArrowRight, Shield, FileText, Scale, Users, AlertTriangle } from "lucide-react";
import { GOVERNANCE_STATEMENT, POLICIES } from "../data/policies";

const POLICY_META = {
  privacy: { icon: <Shield size={26} strokeWidth={1.4} />, blurb: "How we collect, process, and protect personal data — aligned with NDPA 2023, NDPR, and GDPR." },
  terms: { icon: <FileText size={26} strokeWidth={1.4} />, blurb: "The terms governing your use of this website and any materials published on it." },
  ethics: { icon: <Scale size={26} strokeWidth={1.4} />, blurb: "The principles and standards that govern conduct across our directors, employees, and representatives." },
  "anti-trafficking": { icon: <Users size={26} strokeWidth={1.4} />, blurb: "Our zero-tolerance stance on human trafficking, forced labour, and modern slavery." },
  whistleblowing: { icon: <AlertTriangle size={26} strokeWidth={1.4} />, blurb: "Safe reporting channels, confidentiality, and protection against retaliation." },
};

export default function Governance() {
  const g = GOVERNANCE_STATEMENT;

  return (
    <div data-testid="page-governance">
      <SEO />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Governance &amp; Policies</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            {g.title}
          </h1>
          {g.lastReviewed && (
            <div
              className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 bg-dpw-blue/10 border border-dpw-blue/30 rounded-full"
              data-testid="governance-last-reviewed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-dpw-blue" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-dpw-blue font-medium">
                Last reviewed · {g.lastReviewed}
              </span>
            </div>
          )}
          <p className="mt-10 text-[18px] leading-[1.7] text-dpw-dark-grey max-w-3xl">
            {g.intro}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="dpw-container max-w-4xl space-y-12">
          {g.sections.map((s, i) => (
            <div key={i} data-testid={`governance-section-${i}`}>
              <h2 className="font-serif text-2xl md:text-[30px] text-dpw-black leading-tight">
                {s.h}
              </h2>
              {s.p && (
                <p className="mt-5 text-[16px] leading-[1.8] text-dpw-dark-grey">
                  {s.p}
                </p>
              )}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[16px] leading-[1.7] text-dpw-dark-grey"
                    >
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-dpw-blue shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.tail && (
                <p className="mt-5 text-[16px] leading-[1.8] text-dpw-dark-grey">
                  {s.tail}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Policies index */}
      <section className="py-24 md:py-28 bg-dpw-off-white relative overflow-hidden">
        <FlowingLines position="bottom-right" size={400} opacity={0.08} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Full Policy Suite</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black max-w-3xl">
            Our policies in detail.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(POLICIES).map(([k, p]) => (
              <Link
                key={k}
                to={`/policies/${k}`}
                data-testid={`governance-policy-${k}`}
                className="group p-8 bg-white border-t-2 border-dpw-blue hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-dpw-blue">{POLICY_META[k]?.icon}</div>
                <h3 className="mt-6 font-serif text-xl text-dpw-black leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-dpw-dark-grey">
                  {POLICY_META[k]?.blurb}
                </p>
                {p.lastReviewed && (
                  <div className="mt-5 text-[10px] tracking-[0.2em] uppercase text-dpw-dark-grey/70">
                    Last reviewed · {p.lastReviewed}
                  </div>
                )}
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-dpw-blue">
                  Read policy <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for governance concerns */}
      <section className="py-20 bg-dpw-black text-white relative overflow-hidden">
        <FlowingLines position="top-right" size={380} color="#035FFE" opacity={0.18} />
        <div className="dpw-container relative text-center">
          <div className="dpw-eyebrow mb-5" style={{ color: "#7aa8ff" }}>
            Governance Enquiries
          </div>
          <h3 className="font-serif text-3xl md:text-4xl leading-[1.2] max-w-3xl mx-auto">
            Questions, concerns, or reports related to our governance, ethics,
            or compliance framework?
          </h3>
          <div className="mt-8">
            <a
              href="mailto:advisory@datapoolwaters.com"
              data-testid="governance-email"
              className="inline-flex items-center gap-3 bg-dpw-blue hover:bg-[#0147c8] text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              advisory@datapoolwaters.com <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
