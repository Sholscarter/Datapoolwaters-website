import React from "react";
import { Link } from "react-router-dom";
import HeroCinematic from "../components/HeroCinematic";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import { CASE_STUDIES } from "../data/caseStudies";
import { INSIGHTS } from "../data/insights";
import { ArrowRight, Search, FileText, TrendingUp } from "lucide-react";

export default function Home() {
  const featured = CASE_STUDIES.slice(0, 6);

  return (
    <div data-testid="page-home">
      <SEO />
      <HeroCinematic />

      {/* ——————————————— Vision / Mission ——————————————— */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={440} opacity={0.09} />

        <div className="dpw-container relative grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="dpw-eyebrow mb-6">Our Impact</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black">
              Connecting<br />
              the dots.
            </h2>
            <div className="mt-6 dpw-accent-line" />
          </div>

          <div className="md:col-span-8 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-sans text-[13px] font-bold tracking-[0.22em] uppercase text-dpw-blue mb-4">
                Our Vision
              </h3>
              <p className="text-[17px] leading-[1.65] text-dpw-dark-grey">
                To help build Africa&apos;s next generation of billion dollar
                institutions and transformative infrastructure by bridging
                strategy, capital, and execution.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-[13px] font-bold tracking-[0.22em] uppercase text-dpw-blue mb-4">
                Our Mission
              </h3>
              <p className="text-[17px] leading-[1.65] text-dpw-dark-grey">
                To deliver world class, future ready financial and strategic
                advisory through disciplined thinking, innovative tools, and
                trusted partnerships — enabling our clients to raise capital,
                scale responsibly, and create durable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— Services Preview (the 3 icon pillars) ——————————————— */}
      <section className="relative py-24 md:py-32 bg-dpw-off-white overflow-hidden">
        <FlowingLines position="bottom-right" size={420} opacity={0.09} />

        <div className="dpw-container relative">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="dpw-eyebrow mb-6">How We Work</div>
              <h2 className="font-serif text-4xl md:text-[42px] leading-[1.08] text-dpw-black">
                Advisory built to be
                <em className="italic text-dpw-blue"> bankable</em>.
              </h2>
              <Link
                to="/what-we-do"
                data-testid="home-services-readmore"
                className="mt-8 inline-flex items-center gap-3 text-dpw-blue text-[13px] tracking-[0.18em] uppercase group"
              >
                Read More
                <span className="w-9 h-9 border border-dpw-blue rounded-full grid place-items-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Search size={38} strokeWidth={1.4} />,
                  title: "Advisory & Consulting",
                  body: "Complex structuring, PPP advisory, business cases, regulatory-aligned financial modelling.",
                  to: "/what-we-do#advisory",
                },
                {
                  icon: <FileText size={38} strokeWidth={1.4} />,
                  title: "Capital & Fundraising",
                  body: "Equity raises, capital structuring, and institutional investment alignment across the lifecycle.",
                  to: "/what-we-do#capital",
                },
                {
                  icon: <TrendingUp size={38} strokeWidth={1.4} />,
                  title: "Platforms & Innovation",
                  body: "Market-shaping initiatives, national systems, and structural reform partnerships.",
                  to: "/what-we-do#platforms",
                },
              ].map((s, i) => (
                <Link
                  to={s.to}
                  key={i}
                  data-testid={`home-service-${i}`}
                  className="group p-8 bg-white border border-transparent hover:border-dpw-blue transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-dpw-blue">{s.icon}</div>
                  <div className="mt-6 font-serif text-xl text-dpw-black leading-tight">
                    {s.title}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.55] text-dpw-dark-grey">
                    {s.body}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-dpw-blue text-[11px] tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    Explore
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— Examples of our engagements ——————————————— */}
      <section className="py-24 md:py-32 bg-white">
        <div className="dpw-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="dpw-eyebrow mb-4">Selected Work</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black max-w-2xl">
                Examples of our engagements
              </h2>
            </div>
            <Link
              to="/success-stories"
              data-testid="home-view-all-work"
              className="inline-flex items-center gap-3 text-dpw-blue text-[13px] tracking-[0.18em] uppercase group self-start md:self-auto"
            >
              View all
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((c) => (
              <Link
                key={c.slug}
                to={`/success-stories/${c.slug}`}
                data-testid={`home-case-${c.slug}`}
                className="group relative overflow-hidden bg-black"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.75) saturate(1.1)" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="dpw-label text-white/70 mb-3">{c.tag}</div>
                  <h3 className="font-serif text-2xl md:text-[26px] text-white leading-tight">
                    {c.title}
                  </h3>
                  <div className="mt-4 text-[12px] text-dpw-light-grey">
                    {c.size}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— Testimonial (blue section from mockup) ——————————————— */}
      <section
        className="relative py-28 md:py-36 overflow-hidden"
        style={{ background: "var(--dpw-blue)" }}
      >
        <FlowingLines
          position="bottom-left"
          size={380}
          color="#000000"
          opacity={0.22}
        />

        <div className="dpw-container relative grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3 flex md:block">
            <div className="font-serif text-[140px] leading-[0.75] text-white/90 select-none">
              &ldquo;
            </div>
          </div>
          <div className="md:col-span-9 on-blue">
            <p className="font-serif text-[22px] md:text-[30px] leading-[1.45] text-white">
              We operate where capital meets strategy. Where growth meets
              discipline. Where ambition meets execution — for founders,
              institutions, and governments building Africa&apos;s next decade.
            </p>
            <div className="mt-10">
              <div className="font-serif text-2xl text-white leading-tight">
                Datapoolwaters Advisory
              </div>
              <div className="font-serif italic text-white/80 text-[16px] mt-1">
                Capital · Strategy · Sustainability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— News & Insights ——————————————— */}
      <section className="py-24 md:py-32 bg-white">
        <div className="dpw-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="dpw-eyebrow mb-4">News &amp; Insights</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black">
                Perspectives from our work
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {INSIGHTS.map((a) => (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                data-testid={`home-insight-${a.slug}`}
                className="group"
              >
                <div className="overflow-hidden arch-top">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 dpw-label text-dpw-blue">{a.dateLabel}</div>
                <h3 className="mt-3 font-serif text-xl leading-snug text-dpw-black group-hover:text-dpw-blue transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14px] text-dpw-dark-grey leading-relaxed">
                  {a.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— Closing CTA strip ——————————————— */}
      <section className="bg-dpw-off-white py-24">
        <div className="dpw-container text-center">
          <p className="font-serif text-3xl md:text-[42px] leading-[1.2] text-dpw-black max-w-4xl mx-auto">
            We design capital, structure ambition, and unlock scale for
            Africa&apos;s most consequential ideas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              data-testid="home-cta-contact"
              className="inline-flex items-center gap-3 bg-dpw-blue hover:bg-[#0147c8] text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              Talk to Us <ArrowRight size={14} />
            </Link>
            <Link
              to="/success-stories"
              data-testid="home-cta-work"
              className="inline-flex items-center gap-2 text-dpw-black hover:text-dpw-blue px-5 py-3.5 text-[13px] tracking-[0.18em] uppercase border border-dpw-black/20 hover:border-dpw-blue rounded-full transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
