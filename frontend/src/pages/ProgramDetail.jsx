import React from "react";
import { Link, useParams } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { getProgramBySlug } from "../data/programs";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Download,
  MessageSquare,
} from "lucide-react";

export default function ProgramDetail() {
  const { slug } = useParams();
  const p = getProgramBySlug(slug);

  if (!p) {
    return (
      <div className="pt-40 pb-40 text-center" data-testid="program-not-found">
        <div className="dpw-container">
          <h1 className="font-serif text-4xl text-dpw-black">Programme not found</h1>
          <Link
            to="/academy"
            className="mt-6 inline-flex items-center gap-3 text-dpw-blue"
          >
            <ArrowLeft size={14} /> Back to Academy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article data-testid={`page-program-${p.slug}`}>
      <SEO
        title={`${p.shortName || p.name} — Datapoolwaters Academy`}
        description={p.tagline}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={520} opacity={0.08} />
        <div className="dpw-container relative max-w-5xl">
          <Link
            to="/academy"
            data-testid="program-back"
            className="inline-flex items-center gap-2 text-dpw-blue text-[12px] tracking-[0.2em] uppercase mb-8 hover:underline"
          >
            <ArrowLeft size={14} /> All programmes
          </Link>
          <div className="dpw-eyebrow mb-5">Datapoolwaters Academy</div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-dpw-black">
            {p.name}
          </h1>
          <p className="mt-7 max-w-3xl text-[18px] md:text-[20px] italic text-dpw-blue leading-[1.5]">
            {p.tagline}
          </p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-y border-dpw-light-grey bg-dpw-off-white">
        <div className="dpw-container max-w-5xl">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-dpw-light-grey">
            <MetaCell icon={<Clock size={15} />} label="Duration" value={p.duration} />
            <MetaCell icon={<GraduationCap size={15} />} label="Format" value={p.format} />
            <MetaCell icon={<BookOpen size={15} />} label="Delivery" value={p.deliveryMode} />
            <MetaCell
              icon={<Award size={15} />}
              label="Certification"
              value="Academy Professional Certificate"
            />
          </dl>
        </div>
      </section>

      {/* Overview */}
      <Block eyebrow="Overview">
        <div className="space-y-5 text-[16.5px] leading-[1.8] text-dpw-dark-grey">
          {p.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Block>

      {/* Objectives */}
      <Block
        eyebrow="Course Objectives"
        sideNote="Participants will learn to:"
        bg="bg-dpw-off-white"
      >
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
      </Block>

      {/* Cohort schedule + capstone */}
      <Block eyebrow="Cohort Schedule">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {p.cohorts.map((c, i) => (
            <div key={i} className="p-5 bg-white border-l-2 border-dpw-blue">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dpw-dark-grey">
                <Calendar size={13} /> {c.label}
              </div>
              <div className="mt-1.5 font-serif text-xl text-dpw-black">
                {c.schedule}
              </div>
            </div>
          ))}
        </div>
        {p.capstone && (
          <div className="mt-6 p-5 bg-white border border-dpw-light-grey">
            <div className="text-[11px] tracking-[0.2em] uppercase text-dpw-blue">
              Capstone Project
            </div>
            <p className="mt-2 text-[14.5px] text-dpw-dark-grey leading-[1.6]">
              {p.capstone}
            </p>
          </div>
        )}
      </Block>

      {/* Audience */}
      <Block eyebrow="Who Should Attend" bg="bg-dpw-off-white">
        <div className="flex flex-wrap gap-2">
          {p.audience.map((a) => (
            <span
              key={a}
              className="px-4 py-2 text-[13px] bg-white border border-dpw-light-grey text-dpw-black hover:border-dpw-blue hover:text-dpw-blue transition-colors"
            >
              {a}
            </span>
          ))}
        </div>
      </Block>

      {/* Outcomes */}
      <Block eyebrow="Learning Outcomes">
        <p className="font-serif text-xl md:text-2xl text-dpw-black leading-[1.45]">
          {p.outcomes}
        </p>
      </Block>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-dpw-black text-white relative overflow-hidden">
        <FlowingLines position="bottom-right" size={420} color="#ffffff" opacity={0.1} />
        <div className="dpw-container max-w-5xl relative">
          <div className="dpw-eyebrow mb-4" style={{ color: "#9bb8ff" }}>
            Apply for the Next Cohort
          </div>
          <p className="font-serif text-2xl md:text-4xl leading-[1.25] max-w-4xl">
            {p.cta}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
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
      </section>
    </article>
  );
}

function MetaCell({ icon, label, value }) {
  return (
    <div className="px-5 py-6 md:px-7 md:py-7">
      <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
        {icon} {label}
      </div>
      <div className="mt-2 text-[14.5px] md:text-[15px] text-dpw-black leading-[1.45]">
        {value}
      </div>
    </div>
  );
}

function Block({ eyebrow, sideNote, bg = "bg-white", children }) {
  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <div className="dpw-container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="dpw-eyebrow text-dpw-blue mb-3">{eyebrow}</div>
            {sideNote && (
              <p className="mt-3 text-[14px] text-dpw-dark-grey leading-[1.6]">
                {sideNote}
              </p>
            )}
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
