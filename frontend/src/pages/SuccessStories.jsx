import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import { CASE_STUDIES, CATEGORIES } from "../data/caseStudies";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function SuccessStories() {
  const [active, setActive] = useState("all");
  const filtered = useMemo(
    () =>
      active === "all"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.category === active),
    [active]
  );

  return (
    <div data-testid="page-success-stories">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <FlowingLines position="top-right" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Success Stories</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            Transactions and programmes that{" "}
            <em className="italic text-dpw-blue">shape markets</em> and unlock
            long-term value.
          </h1>
          <p className="mt-10 text-[18px] leading-[1.7] text-dpw-dark-grey max-w-3xl">
            A selection of engagements across fundraising, infrastructure, PPP,
            energy, climate, maritime, and aviation — delivered under scrutiny,
            built to last.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-10 bg-white">
        <div className="dpw-container">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActive("all")}
              data-testid="filter-all"
              className={`px-5 py-2.5 text-[12px] tracking-[0.2em] uppercase rounded-full border transition-colors ${
                active === "all"
                  ? "bg-dpw-blue text-white border-dpw-blue"
                  : "bg-white text-dpw-black border-dpw-light-grey hover:border-dpw-blue"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                data-testid={`filter-${c.id}`}
                className={`px-5 py-2.5 text-[12px] tracking-[0.2em] uppercase rounded-full border transition-colors ${
                  active === c.id
                    ? "bg-dpw-blue text-white border-dpw-blue"
                    : "bg-white text-dpw-black border-dpw-light-grey hover:border-dpw-blue"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32 bg-white">
        <div className="dpw-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <Link
                key={c.slug}
                to={`/success-stories/${c.slug}`}
                data-testid={`case-${c.slug}`}
                className="group relative overflow-hidden bg-black"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.72) saturate(1.1)" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="dpw-label text-white/70 mb-3">{c.tag}</div>
                  <h3 className="font-serif text-[22px] md:text-[24px] text-white leading-tight">
                    {c.title}
                  </h3>
                  <div className="mt-4 text-[12px] text-dpw-light-grey">
                    {c.size}
                  </div>
                </div>
                <div className="absolute top-5 left-5 dpw-label text-white/90">
                  {c.pillar.split(" ")[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CaseStudyDetail() {
  const { slug } = useParams();
  const c = CASE_STUDIES.find((x) => x.slug === slug);

  if (!c) {
    return (
      <div className="pt-40 pb-40 text-center" data-testid="case-not-found">
        <div className="dpw-container">
          <h1 className="font-serif text-4xl text-dpw-black">
            Case study not found
          </h1>
          <Link
            to="/success-stories"
            className="mt-6 inline-flex items-center gap-3 text-dpw-blue"
          >
            <ArrowLeft size={14} /> Back to success stories
          </Link>
        </div>
      </div>
    );
  }

  const others = CASE_STUDIES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <article data-testid="page-case-detail">
      {/* Cover */}
      <section className="relative h-[68vh] min-h-[480px] bg-black overflow-hidden">
        <img
          src={c.image}
          alt={c.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-x-0 bottom-10 md:bottom-20 z-10">
          <div className="dpw-container">
            <Link
              to="/success-stories"
              data-testid="case-back"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[12px] tracking-[0.2em] uppercase mb-8"
            >
              <ArrowLeft size={14} /> All Success Stories
            </Link>
            <div className="dpw-label text-white/70 mb-4">{c.tag}</div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-white max-w-5xl">
              {c.title}
            </h1>
            <div className="mt-5 text-white/80 text-[14px] tracking-wide">
              {c.size}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <FlowingLines position="top-right" size={360} opacity={0.07} />
        <div className="dpw-container relative grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="dpw-eyebrow mb-4">What We Did</div>
            <h2 className="font-serif text-3xl md:text-[38px] leading-[1.1] text-dpw-black">
              The mandate.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-[17px] leading-[1.75] text-dpw-dark-grey">
              {c.what}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-dpw-off-white">
        <div className="dpw-container grid md:grid-cols-2 gap-12">
          <div>
            <div className="dpw-eyebrow mb-4">Business Outcome</div>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight text-dpw-black mb-8">
              Measurable results.
            </h3>
            <ul className="space-y-4">
              {c.outcome.map((o, i) => (
                <li key={i} className="flex gap-3">
                  <Check size={18} className="text-dpw-blue mt-1 shrink-0" />
                  <span className="text-[15px] leading-[1.6] text-dpw-dark-grey">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="dpw-eyebrow mb-4">Strategic &amp; Sustainable Impact</div>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight text-dpw-black mb-8">
              Long-term value.
            </h3>
            <ul className="space-y-4">
              {c.impact.map((o, i) => (
                <li key={i} className="flex gap-3">
                  <Check size={18} className="text-dpw-blue mt-1 shrink-0" />
                  <span className="text-[15px] leading-[1.6] text-dpw-dark-grey">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other cases */}
      <section className="py-24 bg-white">
        <div className="dpw-container">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h3 className="font-serif text-3xl md:text-4xl text-dpw-black">
              More engagements
            </h3>
            <Link
              to="/success-stories"
              data-testid="case-more-link"
              className="inline-flex items-center gap-3 text-dpw-blue text-[13px] tracking-[0.18em] uppercase"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/success-stories/${o.slug}`}
                className="group p-7 bg-dpw-off-white hover:bg-dpw-blue hover:text-white transition-colors"
              >
                <div className="dpw-label text-dpw-blue group-hover:text-white/80">
                  {o.tag}
                </div>
                <h4 className="mt-3 font-serif text-xl text-dpw-black group-hover:text-white">
                  {o.title}
                </h4>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-dpw-blue group-hover:text-white">
                  Read more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
