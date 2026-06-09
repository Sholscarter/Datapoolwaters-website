import React from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { ArrowRight } from "lucide-react";

const VALUES = [
  { k: "Integrity", v: "We act with transparency, independence, and fiduciary discipline." },
  { k: "Excellence", v: "We apply rigorous financial thinking to complex challenges." },
  { k: "Impact", v: "We design solutions that create long-term economic and social value." },
  { k: "Partnership", v: "We work alongside our clients — aligned, accountable, and outcome-focused." },
  { k: "Africa-Focused. Globally Standard.", v: "Global standards applied with a deep understanding of African markets." },
];

const APPROACH = [
  { k: "Institutional Credibility", v: "Advice that stands up to government, DFI, investor, and regulatory review." },
  { k: "Financial Rigor", v: "Robust financial, investment, and risk modelling at project and portfolio level." },
  { k: "Implementation Realism", v: "Structuring solutions that can be executed, financed, and sustained." },
  { k: "Impact Orientation", v: "Aligning commercial returns with socio-economic and environmental outcomes." },
];

export default function WhoWeAre() {
  return (
    <div data-testid="page-who-we-are">
      <SEO />
      {/* Page hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
        <FlowingLines position="top-right" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Who We Are</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-4xl">
            A <em className="italic text-dpw-blue">boutique</em> by choice.
            Senior-led. Deeply analytical. Execution focused.
          </h1>
          <div className="dpw-accent-line mt-10" />
        </div>
      </section>

      {/* About body */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="dpw-container grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-dpw-black">
              About Us
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-[17px] leading-[1.7] text-dpw-dark-grey">
            <p>
              Our work spans infrastructure, energy, climate, agribusiness,
              financial services, technology, and public-private partnerships
              across Africa. Datapoolwaters Advisory is a boutique investment,
              infrastructure, and strategic financial advisory firm operating
              across Nigeria and Africa.
            </p>
            <p>
              We partner with governments, regulators, investors, and
              growth-oriented enterprises on complex, high-impact transactions
              that shape markets, unlock capital, and deliver long-term value.
              Our work sits at the intersection of capital, policy,
              infrastructure, and sustainability.
            </p>
            <p>
              We combine deep financial expertise with engineering, regulatory,
              and institutional insight to deliver advisory solutions that are
              bankable, implementable, and resilient under scrutiny.
              Datapoolwaters is particularly known for its work on institutional
              capital raises, public-private partnerships (PPPs), concessioned
              infrastructure, energy transition projects, and climate and
              circular economy platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 md:py-32 bg-dpw-off-white relative overflow-hidden">
        <FlowingLines position="bottom-left" size={420} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="max-w-3xl">
            <div className="dpw-eyebrow mb-5">Our Approach</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black">
              We are <em className="italic text-dpw-blue">outcome-driven</em>.
              Our philosophy is built on four pillars.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-dpw-light-grey/70 border border-dpw-light-grey/70">
            {APPROACH.map((a, i) => (
              <div
                key={i}
                className="bg-white p-10 hover:bg-dpw-blue hover:text-white transition-colors duration-300 group"
                data-testid={`approach-${i}`}
              >
                <div className="font-serif text-[13px] tracking-[0.22em] uppercase text-dpw-blue group-hover:text-white/80 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-2xl text-dpw-black group-hover:text-white mb-3">
                  {a.k}
                </h3>
                <p className="text-[15px] leading-[1.6] text-dpw-dark-grey group-hover:text-white/90">
                  {a.v}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[17px] leading-[1.7] text-dpw-dark-grey max-w-4xl">
            Our most effective partnerships begin with strategy and design and
            extend through business cases, financial models, transaction
            structuring, fundraising, and implementation support.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="dpw-container">
          <div className="dpw-eyebrow mb-5">Our Values</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black max-w-3xl">
            What we stand for.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="p-6 border-t-2 border-dpw-blue bg-dpw-off-white hover:bg-dpw-blue group transition-colors duration-300"
                data-testid={`value-${i}`}
              >
                <div className="font-serif text-xl text-dpw-black group-hover:text-white">
                  {v.k}
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-dpw-dark-grey group-hover:text-white/90">
                  {v.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — deliberately understated. Senior-led. Names on request. */}
      <section className="py-24 md:py-36 bg-dpw-black text-white relative overflow-hidden">
        {/* Ambient flowing-lines backdrop */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <FlowingLines position="top-right" size={780} color="#035FFE" opacity={1} />
          <FlowingLines position="bottom-left" size={520} color="#035FFE" opacity={0.7} />
        </div>

        {/* Faint vertical rule on the left */}
        <div
          className="absolute left-10 top-1/2 -translate-y-1/2 w-px opacity-60 pointer-events-none"
          style={{
            height: "48%",
            background:
              "linear-gradient(to bottom, transparent, rgba(3,95,254,0.55), transparent)",
          }}
        />

        <div className="dpw-container relative">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <div className="dpw-eyebrow mb-6" style={{ color: "#7aa8ff" }}>
                The Team
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.02]">
                Led by seniors.
                <br />
                Staffed by the{" "}
                <em className="italic" style={{ color: "#7aa8ff" }}>
                  best brains
                </em>{" "}
                in advisory.
              </h2>
              <div className="mt-8 h-px w-14 bg-dpw-blue" />
              <p className="mt-8 text-white/75 text-[16px] leading-[1.75] max-w-md">
                We keep a low public profile — by design. Our partners have
                shaped billion-dollar transactions across African and global
                markets, and our bench is drawn from ex-DFI, private equity,
                development finance, and top-tier advisory backgrounds.
              </p>
              <p className="mt-4 text-white/55 italic text-[15px] leading-[1.75] max-w-md">
                The work speaks first. Names are introduced at the table.
              </p>
            </div>

            {/* Credential tiles — stats that hint without naming */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                {[
                  {
                    k: "Decades",
                    v: "Combined senior partner experience across African and global markets.",
                  },
                  {
                    k: "DFI · PE · Big Four",
                    v: "Pedigree our bench is drawn from — before they came to build here.",
                  },
                  {
                    k: "$200bn+",
                    v: "Capital considered, modelled, or structured across our engagements.",
                  },
                  {
                    k: "14+",
                    v: "Consequential mandates across infrastructure, energy, climate, and capital.",
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="bg-dpw-black p-8 md:p-10 hover:bg-dpw-blue transition-colors duration-500 group"
                    data-testid={`team-stat-${i}`}
                  >
                    <div className="font-serif text-3xl md:text-[40px] leading-none text-white group-hover:text-white">
                      {t.k}
                    </div>
                    <div className="mt-5 h-px w-8 bg-dpw-blue group-hover:bg-white/60 transition-colors" />
                    <p className="mt-5 text-[14px] leading-[1.6] text-white/65 group-hover:text-white/95">
                      {t.v}
                    </p>
                  </div>
                ))}
              </div>

              {/* Wet-appetite reveal strip */}
              <div className="mt-10 p-8 md:p-10 border border-white/15 bg-white/[0.03]">
                <div className="dpw-eyebrow mb-3" style={{ color: "#7aa8ff" }}>
                  Who You&apos;ll Meet
                </div>
                <p className="font-serif text-2xl md:text-[26px] leading-[1.35] text-white">
                  Senior practitioners who&apos;ve sat on both sides of the
                  table — as advisors, investors, policymakers, and operators
                  — before choosing to build here.
                </p>
                <p className="mt-5 text-[14px] leading-[1.7] text-white/60">
                  Serious engagements begin with a conversation. If you are a
                  government, institution, or founder exploring a meaningful
                  mandate, we&apos;ll introduce the right partners directly.
                </p>
                <Link
                  to="/contact"
                  data-testid="team-request-intro"
                  className="mt-7 inline-flex items-center gap-3 text-dpw-blue hover:text-white transition-colors text-[12px] tracking-[0.22em] uppercase group"
                >
                  Request an introduction
                  <span className="w-9 h-9 border border-dpw-blue group-hover:border-white rounded-full grid place-items-center transition-transform group-hover:translate-x-1">
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-24 md:py-28 bg-dpw-blue text-white relative overflow-hidden">
        <FlowingLines position="bottom-right" size={400} color="#000000" opacity={0.2} />
        <div className="dpw-container relative grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="dpw-eyebrow mb-5" style={{ color: "#cfe0ff" }}>
              Join Us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.08] max-w-3xl">
              Rigorous thinkers welcome. Loud résumés, not so much.
            </h2>
            <p className="mt-6 text-white/90 text-[17px] max-w-2xl leading-relaxed">
              We recruit quietly and selectively — analysts, sector specialists,
              and senior practitioners motivated by long-term impact over
              visibility. If you would rather be known for the work than the
              masthead, we would love to hear from you.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="mailto:advisory@datapoolwaters.com"
              data-testid="join-us-email"
              className="inline-flex items-center gap-3 bg-white text-dpw-blue hover:bg-black hover:text-white px-7 py-4 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              advisory@datapoolwaters.com <ArrowRight size={14} />
            </a>
            <div className="mt-3 text-[12px] tracking-[0.18em] uppercase text-white/70">
              Careers &amp; Opportunities
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white px-6 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase"
                data-testid="join-us-contact"
              >
                Get in touch <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
