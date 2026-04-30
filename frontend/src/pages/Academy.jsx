import React from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import { ArrowRight, GraduationCap, BookOpen, LineChart, Users, Building2 } from "lucide-react";

const FOCUS = [
  {
    icon: <LineChart size={34} strokeWidth={1.4} />,
    k: "Financial Modelling & Investment Analysis",
    v: "Project finance, PPP modelling, valuation, capital structuring, and investor-ready financial frameworks.",
  },
  {
    icon: <Building2 size={34} strokeWidth={1.4} />,
    k: "Corporate Finance & PPP Frameworks",
    v: "Business cases, concession structuring, risk allocation, fiscal sustainability, and regulatory alignment.",
  },
  {
    icon: <BookOpen size={34} strokeWidth={1.4} />,
    k: "Sustainable & Climate Finance",
    v: "ESG integration, carbon revenue modelling, blended finance, and impact measurement.",
  },
  {
    icon: <GraduationCap size={34} strokeWidth={1.4} />,
    k: "Finance for Non-Finance Leaders",
    v: "Financial literacy, capital budgeting, cashflow strategy, and governance essentials.",
  },
  {
    icon: <Users size={34} strokeWidth={1.4} />,
    k: "Institutional Capacity Building",
    v: "Custom programs for governments, DFIs, and corporates to strengthen internal technical capability.",
  },
];

export default function Academy() {
  return (
    <div data-testid="page-academy">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Datapoolwaters Academy</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            Building Africa&apos;s next generation of{" "}
            <em className="italic text-dpw-blue">finance, infrastructure &amp; impact</em>{" "}
            leaders.
          </h1>
          <p className="mt-10 text-[18px] leading-[1.7] text-dpw-dark-grey max-w-3xl">
            Datapoolwaters Academy is our applied capacity-building platform —
            translating real-world advisory experience into practical,
            market-relevant training. We equip professionals, institutions, and
            leaders with the technical depth and decision-making confidence
            required to finance, structure, and govern complex projects across
            Africa.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dpw-off-white">
        <div className="dpw-container">
          <div className="dpw-eyebrow mb-5">Focus Areas</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black max-w-3xl">
            What we teach.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS.map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white border-t-2 border-dpw-blue hover:-translate-y-1 transition-transform duration-300"
                data-testid={`academy-focus-${i}`}
              >
                <div className="text-dpw-blue">{f.icon}</div>
                <h3 className="mt-6 font-serif text-xl text-dpw-black leading-tight">
                  {f.k}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-dpw-dark-grey">
                  {f.v}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-16 font-serif text-2xl md:text-3xl text-dpw-black max-w-3xl leading-[1.35]">
            Delivered through executive workshops, technical bootcamps,
            fellowships, and bespoke institutional programs.
            <br />
            <em className="italic text-dpw-blue">
              Because sustainable markets require more than capital — they
              require capability.
            </em>
          </p>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-dpw-blue text-white relative overflow-hidden">
        <FlowingLines position="bottom-right" size={440} color="#000000" opacity={0.2} />
        <div className="dpw-container relative text-center">
          <div className="dpw-eyebrow mb-5" style={{ color: "#cfe0ff" }}>
            Join Our Next Cohort
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] max-w-3xl mx-auto">
            Learn from practitioners. Apply it where it matters.
          </h2>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              data-testid="academy-cta"
              className="inline-flex items-center gap-3 bg-white text-dpw-blue hover:bg-black hover:text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              Register your interest <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
