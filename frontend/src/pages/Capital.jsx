import React from "react";
import { Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import { ArrowRight } from "lucide-react";

const THESIS = [
  "Strong fundamentals and disciplined execution",
  "Clear pathways to scale and institutional relevance",
  "Alignment with sustainability, inclusion, and resilience objectives",
];

export default function Capital() {
  return (
    <div data-testid="page-capital">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
        <FlowingLines position="top-right" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="dpw-eyebrow">Datapoolwaters Capital</div>
            <span className="px-3 py-1 text-[10px] tracking-[0.25em] uppercase border border-dpw-blue text-dpw-blue rounded-full">
              Coming Soon
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            Early-stage capital for{" "}
            <em className="italic text-dpw-blue">scalable, market-creating</em>{" "}
            solutions.
          </h1>
          <p className="mt-10 text-[18px] leading-[1.7] text-dpw-dark-grey max-w-3xl">
            Datapoolwaters Capital is our proposed early-stage investment
            vehicle, focused on backing businesses and platforms that address
            structural gaps in African markets. Informed by deep advisory
            exposure across infrastructure, energy, agriculture, finance, and
            public systems, Datapoolwaters Capital is designed to support
            ventures that combine commercial viability with systemic impact.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dpw-off-white">
        <div className="dpw-container grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="dpw-eyebrow mb-5">Investment Thesis</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dpw-black">
              We prioritise.
            </h2>
          </div>
          <div className="md:col-span-7">
            <ol className="space-y-6">
              {THESIS.map((t, i) => (
                <li
                  key={i}
                  className="flex gap-6 pb-6 border-b border-dpw-light-grey/60 last:border-b-0"
                  data-testid={`capital-thesis-${i}`}
                >
                  <div className="font-serif text-3xl text-dpw-blue leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-serif text-xl leading-[1.45] text-dpw-black">
                    {t}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-[16px] leading-[1.7] text-dpw-dark-grey">
              Datapoolwaters Capital will operate selectively, leveraging our
              advisory insight, networks, and operating support to help
              portfolio companies mature into institutional-grade businesses.
              This platform is currently in development and will be launched
              subject to all relevant regulatory approvals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dpw-black text-white relative overflow-hidden">
        <FlowingLines position="top-left" size={500} color="#035FFE" opacity={0.14} />
        <div className="dpw-container relative text-center">
          <h3 className="font-serif text-3xl md:text-5xl leading-[1.15] max-w-4xl mx-auto">
            Interested in being among the first to hear when we launch?
          </h3>
          <div className="mt-10">
            <Link
              to="/contact"
              data-testid="capital-cta"
              className="inline-flex items-center gap-3 bg-dpw-blue hover:bg-[#0147c8] text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              Register your interest <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
