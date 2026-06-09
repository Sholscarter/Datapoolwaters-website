import React from "react";
import { useParams, Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import SEO from "../components/SEO";
import { ArrowLeft, Mail } from "lucide-react";
import { POLICIES } from "../data/policies";

function Section({ s }) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl md:text-[30px] text-dpw-black leading-tight">
        {s.h}
      </h2>

      {s.p && (
        <p className="mt-5 text-[16px] leading-[1.8] text-dpw-dark-grey">
          {s.p}
        </p>
      )}

      {s.bulletsIntro && (
        <p className="mt-4 text-[16px] leading-[1.8] text-dpw-dark-grey">
          {s.bulletsIntro}
        </p>
      )}

      {s.bullets && s.bullets.length > 0 && (
        <ul className="mt-5 space-y-2.5 pl-1">
          {s.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-[16px] leading-[1.7] text-dpw-dark-grey"
            >
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-dpw-blue shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {s.bulletsIntro2 && (
        <p className="mt-6 text-[16px] leading-[1.8] text-dpw-dark-grey">
          {s.bulletsIntro2}
        </p>
      )}

      {s.bullets2 && s.bullets2.length > 0 && (
        <ul className="mt-5 space-y-2.5 pl-1">
          {s.bullets2.map((b, i) => (
            <li
              key={i}
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

      {s.contact && (
        <div className="mt-6 p-6 bg-dpw-off-white border-l-2 border-dpw-blue">
          <div className="font-serif text-lg text-dpw-black">
            {s.contact.name}
          </div>
          <a
            href={`mailto:${s.contact.email}`}
            className="mt-2 inline-flex items-center gap-2 text-dpw-blue hover:underline text-[15px]"
            data-testid="policy-contact-email"
          >
            <Mail size={15} /> {s.contact.email}
          </a>
        </div>
      )}
    </section>
  );
}

export default function PolicyPage() {
  const { key } = useParams();
  const p = POLICIES[key];

  if (!p) {
    return (
      <div className="pt-40 pb-40 text-center" data-testid="policy-not-found">
        <div className="dpw-container">
          <h1 className="font-serif text-4xl text-dpw-black">Policy not found</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-3 text-dpw-blue">
            <ArrowLeft size={14} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  const otherPolicies = Object.entries(POLICIES).filter(([k]) => k !== key);

  return (
    <article data-testid={`page-policy-${key}`}>
      <SEO />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <FlowingLines position="top-right" size={460} opacity={0.08} />
        <div className="dpw-container relative max-w-4xl">
          <Link
            to="/governance"
            data-testid="policy-back"
            className="inline-flex items-center gap-2 text-dpw-blue text-[12px] tracking-[0.2em] uppercase mb-8 hover:underline"
          >
            <ArrowLeft size={14} /> Governance &amp; Policies
          </Link>
          <div className="dpw-eyebrow mb-5">Governance &amp; Policies</div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-dpw-black">
            {p.title}
          </h1>
          <div className="mt-4 text-[14px] text-dpw-dark-grey italic">
            {p.formalTitle}
          </div>
          {p.lastReviewed && (
            <div
              className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 bg-dpw-blue/10 border border-dpw-blue/30 rounded-full"
              data-testid="policy-last-reviewed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-dpw-blue" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-dpw-blue font-medium">
                Last reviewed · {p.lastReviewed}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="dpw-container grid md:grid-cols-12 gap-12 max-w-6xl">
          {/* Sidebar nav */}
          <aside className="md:col-span-4 order-2 md:order-1">
            <div className="md:sticky md:top-28">
              <div className="dpw-eyebrow mb-4">Other Policies</div>
              <nav className="space-y-1 border-t border-dpw-light-grey/60">
                {otherPolicies.map(([k, v]) => (
                  <Link
                    key={k}
                    to={`/policies/${k}`}
                    data-testid={`policy-sidebar-${k}`}
                    className="block py-3 border-b border-dpw-light-grey/60 text-[14px] text-dpw-dark-grey hover:text-dpw-blue transition-colors"
                  >
                    {v.title}
                  </Link>
                ))}
                <Link
                  to="/governance"
                  data-testid="policy-sidebar-overview"
                  className="block py-3 text-[14px] text-dpw-blue hover:underline"
                >
                  ← Governance Statement overview
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main body */}
          <div className="md:col-span-8 order-1 md:order-2">
            {p.sections.map((s, i) => (
              <Section key={i} s={s} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
