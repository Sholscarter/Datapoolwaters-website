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
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Download,
  MessageSquare,
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

      {/* ——————————— Featured / Flagship Programmes ——————————— */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden" data-testid="academy-programmes">
        <FlowingLines position="bottom-right" size={460} opacity={0.07} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Flagship Programmes</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black max-w-3xl">
            Cohort-based, practitioner-led.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] text-dpw-dark-grey leading-[1.7]">
            Structured executive programmes that translate live transaction
            experience into capability. Limited seats per cohort.
          </p>

          <div className="mt-16 space-y-20">
            {PROGRAMS.map((p, idx) => (
              <article
                key={p.slug}
                data-testid={`academy-programme-${p.slug}`}
                className="border-t border-dpw-light-grey pt-12"
              >
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-7">
                    {idx === 0 && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 bg-dpw-blue/10 text-dpw-blue text-[11px] tracking-[0.2em] uppercase">
                        <span className="w-1.5 h-1.5 bg-dpw-blue rounded-full" />
                        Newly Launched · Featured Programme
                      </div>
                    )}
                    <h3 className="font-serif text-3xl md:text-4xl leading-[1.1] text-dpw-black">
                      {p.name}
                    </h3>
                    <p className="mt-5 text-[17px] md:text-[18px] italic text-dpw-blue leading-[1.5]">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Meta sidebar */}
                  <div className="lg:col-span-5 lg:pl-8 lg:border-l border-dpw-light-grey">
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <dt className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dpw-dark-grey">
                          <Clock size={14} /> Duration
                        </dt>
                        <dd className="mt-1.5 text-[15px] font-medium text-dpw-black">
                          {p.duration}
                        </dd>
                      </div>
                      <div>
                        <dt className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dpw-dark-grey">
                          <GraduationCap size={14} /> Format
                        </dt>
                        <dd className="mt-1.5 text-[15px] font-medium text-dpw-black">
                          {p.format}
                        </dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dpw-dark-grey">
                          <BookOpen size={14} /> Delivery Mode
                        </dt>
                        <dd className="mt-1.5 text-[15px] text-dpw-black leading-[1.5]">
                          {p.deliveryMode}
                        </dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dpw-dark-grey">
                          <Award size={14} /> Certification
                        </dt>
                        <dd className="mt-1.5 text-[14px] text-dpw-dark-grey leading-[1.55]">
                          {p.certification}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Overview */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="dpw-eyebrow text-dpw-blue mb-3">Overview</div>
                    <div className="dpw-accent-line" />
                  </div>
                  <div className="lg:col-span-8 space-y-5 text-[16px] leading-[1.75] text-dpw-dark-grey">
                    {p.overview.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="dpw-eyebrow text-dpw-blue mb-3">Course Objectives</div>
                    <p className="mt-3 text-[14px] text-dpw-dark-grey leading-[1.6]">
                      Participants will learn to:
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {p.objectives.map((obj, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14.5px] text-dpw-dark-grey leading-[1.55]"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-1 flex-shrink-0 text-dpw-blue"
                            strokeWidth={1.6}
                          />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cohort schedule + Capstone */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="dpw-eyebrow text-dpw-blue mb-3">Cohort Schedule</div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {p.cohorts.map((c, i) => (
                        <div
                          key={i}
                          className="p-5 bg-dpw-off-white border-l-2 border-dpw-blue"
                        >
                          <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dpw-dark-grey">
                            <Calendar size={13} /> {c.label}
                          </div>
                          <div className="mt-1.5 font-serif text-xl text-dpw-black">
                            {c.schedule}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-5 bg-white border border-dpw-light-grey">
                      <div className="text-[11px] tracking-[0.2em] uppercase text-dpw-blue">
                        Capstone Project
                      </div>
                      <p className="mt-2 text-[14.5px] text-dpw-dark-grey leading-[1.6]">
                        {p.capstone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Who Should Attend */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="dpw-eyebrow text-dpw-blue mb-3">Who Should Attend</div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap gap-2">
                      {p.audience.map((a) => (
                        <span
                          key={a}
                          className="px-4 py-2 text-[13px] border border-dpw-light-grey text-dpw-black hover:border-dpw-blue hover:text-dpw-blue transition-colors"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="dpw-eyebrow text-dpw-blue mb-3">Learning Outcomes</div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-serif text-xl md:text-2xl text-dpw-black leading-[1.45]">
                      {p.outcomes}
                    </p>
                  </div>
                </div>

                {/* CTA block */}
                <div className="mt-16 p-8 md:p-12 bg-dpw-black text-white relative overflow-hidden">
                  <div className="relative max-w-3xl">
                    <div className="dpw-eyebrow mb-4" style={{ color: "#9bb8ff" }}>
                      Apply for the Next Cohort
                    </div>
                    <p className="font-serif text-2xl md:text-3xl leading-[1.3]">
                      {p.cta}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/contact?program=${encodeURIComponent(p.slug)}&intent=apply`}
                        data-testid={`programme-apply-${p.slug}`}
                        className="inline-flex items-center gap-2 bg-dpw-blue hover:bg-white hover:text-dpw-black px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-colors"
                      >
                        Apply Now <ArrowRight size={14} />
                      </Link>
                      <Link
                        to={`/contact?program=${encodeURIComponent(p.slug)}&intent=brochure`}
                        data-testid={`programme-brochure-${p.slug}`}
                        className="inline-flex items-center gap-2 border border-white/40 hover:bg-white hover:text-dpw-black px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-colors"
                      >
                        <Download size={14} /> Download Brochure
                      </Link>
                      <Link
                        to={`/contact?program=${encodeURIComponent(p.slug)}&intent=advisor`}
                        data-testid={`programme-advisor-${p.slug}`}
                        className="inline-flex items-center gap-2 border border-white/40 hover:bg-white hover:text-dpw-black px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-colors"
                      >
                        <MessageSquare size={14} /> Speak to an Advisor
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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
