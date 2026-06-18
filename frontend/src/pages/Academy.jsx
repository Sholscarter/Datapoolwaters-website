import React from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { PROGRAMS } from "../data/programs";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  LineChart,
  Users,
  Building2,
  Clock,
  Calendar,
} from "lucide-react";

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
      <SEO />
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

      {/* ——————————— Programmes ——————————— */}
      <section
        className="py-24 md:py-32 bg-white relative overflow-hidden"
        data-testid="academy-programmes"
      >
        <FlowingLines position="bottom-right" size={460} opacity={0.07} />
        <div className="dpw-container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="dpw-eyebrow mb-5">Programmes</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black max-w-3xl">
                Cohort-based, practitioner-led.
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] text-dpw-dark-grey leading-[1.7]">
                Open programmes that translate live transaction experience into
                applied capability. Built for working professionals across
                finance, sustainability, and capital markets.
              </p>
            </div>
            <Link
              to="/contact?intent=programmes"
              data-testid="academy-programmes-enquire"
              className="hidden md:inline-flex items-center gap-2 text-dpw-blue text-[12px] tracking-[0.2em] uppercase hover:underline whitespace-nowrap"
            >
              Custom programmes for institutions <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => (
              <Link
                key={p.slug}
                to={`/academy/${p.slug}`}
                data-testid={`academy-program-card-${p.slug}`}
                className="group flex flex-col p-8 md:p-10 bg-white border border-dpw-light-grey hover:border-dpw-blue hover:shadow-[0_20px_50px_-25px_rgba(3,95,254,0.4)] transition-all duration-300"
              >
                <div className="dpw-eyebrow text-dpw-blue mb-4">
                  {p.format}
                </div>
                <h3 className="font-serif text-2xl md:text-[28px] leading-[1.15] text-dpw-black group-hover:text-dpw-blue transition-colors">
                  {p.name}
                </h3>
                <p className="mt-4 text-[14.5px] italic text-dpw-dark-grey leading-[1.55]">
                  {p.tagline}
                </p>

                <div className="mt-7 pt-6 border-t border-dpw-light-grey flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-dpw-dark-grey">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} className="text-dpw-blue" /> {p.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen size={13} className="text-dpw-blue" /> In-person
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="text-dpw-blue" />{" "}
                    {p.cohorts.length} cohorts / yr
                  </span>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-dpw-blue">
                  Explore programme
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </div>
              </Link>
            ))}

            {/* Placeholder slot — visually invites future programmes without looking empty */}
            <div className="hidden md:flex flex-col items-start justify-center p-10 border border-dashed border-dpw-light-grey text-dpw-dark-grey">
              <div className="dpw-eyebrow text-dpw-dark-grey mb-3">Coming Soon</div>
              <p className="font-serif text-xl text-dpw-black leading-[1.3]">
                More programmes are being curated across project finance, PPP
                structuring, and climate finance.
              </p>
              <Link
                to="/contact?intent=programmes"
                className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-dpw-blue hover:underline"
              >
                Request a topic <ArrowRight size={14} />
              </Link>
            </div>
          </div>
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
