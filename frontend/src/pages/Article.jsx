import React from "react";
import { Link, useParams } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import InsightCarousel from "../components/InsightCarousel";
import { INSIGHTS } from "../data/insights";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Article() {
  const { slug } = useParams();
  const a = INSIGHTS.find((x) => x.slug === slug);

  if (!a) {
    return (
      <div className="pt-40 pb-40 text-center" data-testid="article-not-found">
        <div className="dpw-container">
          <h1 className="font-serif text-4xl text-dpw-black">Article not found</h1>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-3 text-dpw-blue"
          >
            <ArrowLeft size={14} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article data-testid="page-article">
      <SEO />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <FlowingLines position="top-left" size={480} opacity={0.08} />
        <div className="dpw-container relative max-w-4xl">
          <Link
            to="/"
            data-testid="article-back"
            className="inline-flex items-center gap-2 text-dpw-blue text-[12px] tracking-[0.2em] uppercase mb-8 hover:underline"
          >
            <ArrowLeft size={14} /> All insights
          </Link>
          <div className="dpw-label text-dpw-blue">{a.dateLabel}</div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-dpw-black">
            {a.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {a.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[11px] tracking-[0.2em] uppercase border border-dpw-light-grey text-dpw-dark-grey"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="dpw-container max-w-5xl">
          <div className="overflow-hidden arch-top">
            <img
              src={a.image}
              alt={a.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="dpw-container max-w-3xl prose-dpw">
          <div className="space-y-7 text-[17px] leading-[1.8] text-dpw-dark-grey">
            {a.body.map((blk, i) => {
              if (typeof blk === "string") {
                return <p key={i}>{blk}</p>;
              }
              if (blk.type === "carousel") {
                return <InsightCarousel key={i} slides={blk.slides} />;
              }
              return (
                <div key={i}>
                  <h2 className="font-serif text-2xl md:text-[30px] text-dpw-black mt-10 mb-4">
                    {blk.h}
                  </h2>
                  <p>{blk.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dpw-off-white">
        <div className="dpw-container max-w-3xl text-center">
          <p className="font-serif text-2xl md:text-3xl text-dpw-black leading-[1.35]">
            Have a transaction or institution in mind? Let&apos;s discuss.
          </p>
          <Link
            to="/contact"
            data-testid="article-cta"
            className="mt-8 inline-flex items-center gap-3 bg-dpw-blue hover:bg-[#0147c8] text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
          >
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </article>
  );
}
