import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Award,
  FileText,
  Calendar,
  Download,
  Mail,
  Sparkles,
  CheckCircle2,
  Quote,
  Lock,
} from "lucide-react";
import FlowingLines from "../components/FlowingLines";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast, Toaster } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// ─── PLACEHOLDERS — replace before launch ──────────────────────────────────
const CONFIG = {
  // PLACEHOLDER: set the actual price string (e.g. "₦35,000")
  flagshipPrice: "₦[PRICE TBD]",
  // PLACEHOLDER: Paystack / Flutterwave public key for payment widget integration.
  // When set, "Buy Now" should open the payment popup directly.
  paystackPublicKey: "",
  flutterwavePublicKey: "",
  // PLACEHOLDER: email visitors should write to to claim 3 free models after purchase
  claimEmail: "concierge@datapoolwaters.com",
};

const UPCOMING_SEMINARS = [
  // PLACEHOLDER: edit/extend with real upcoming events
  {
    title: "How to Start a Profitable Agribusiness on ₦10M",
    date: "TBD — Lagos",
    mode: "In-person",
    register: "#",
  },
  {
    title: "Cashflow Discipline for First-Year Founders",
    date: "TBD — Online",
    mode: "Webinar",
    register: "#",
  },
];

const PAST_SEMINARS = [
  // PLACEHOLDER: replace with real replay links
  { title: "Pricing Your Product for Profit", replay: "#" },
  { title: "Funding Pathways for Small Businesses", replay: "#" },
];

const TESTIMONIALS = [
  // PLACEHOLDER content
  {
    name: "A. Adeyemi",
    role: "Founder, Agro-supply startup",
    quote:
      "The 20 businesses guide gave me the clarity I needed to choose a path I could actually execute — not a fantasy.",
  },
  {
    name: "C. Onyeka",
    role: "Owner, Lagos-based retail brand",
    quote:
      "I came in confused. I left with a financial model, a 90-day plan, and the confidence to talk to my bank.",
  },
  {
    name: "F. Bello",
    role: "Founder, services business",
    quote:
      "Datapoolwaters Business Concierge is the missing piece between Google and a real advisory firm.",
  },
];

const FAQS = [
  {
    q: "What do I get when I buy a guide?",
    a: "You receive the full digital guide (PDF + companion checklist), plus the right to claim detailed financial models for any 3 of the 20 businesses covered.",
  },
  {
    q: "How do I claim my 3 free financial models?",
    a: `After purchase, you'll receive an email with claim instructions. Reply with the names of any 3 businesses from the guide and we'll send fully-built financial models within 5 working days.`,
  },
  {
    q: "Do you help me actually set up the business?",
    a: "Yes. When you're ready to move from plan to execution, our main Advisory team can support fundraising, structuring, and go-to-market — see the Advisory tab.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Card and bank transfer via Paystack/Flutterwave. International payments are supported. A clearly-marked placeholder is shown until the merchant account is connected.",
  },
  {
    q: "Are the guides Nigeria-specific?",
    a: "Yes — pricing, regulatory steps, and supplier landscape are Nigeria-first, with notes on how the same models adapt to other African markets.",
  },
  {
    q: "Can I get a refund?",
    a: "Because guides are delivered digitally and immediately, all sales are final. We invest heavily in quality so you get real value on the first read.",
  },
];

// Concierge logo
function ConciergeLogo({ variant = "color", height = 36, className = "" }) {
  const src =
    variant === "white"
      ? "/assets/concierge/bc-primary-horizontal-white.svg"
      : "/assets/concierge/bc-primary-horizontal.svg";
  return (
    <img
      src={src}
      alt="Datapoolwaters Business Concierge"
      style={{ height, width: "auto", display: "block" }}
      className={className}
      data-testid={`bc-logo-${variant}`}
    />
  );
}

function ConciergeIcon({ size = 28, className = "" }) {
  return (
    <img
      src="/assets/concierge/bc-icon.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      data-testid="bc-icon"
    />
  );
}

export default function BusinessConcierge() {
  // Swap favicon to Business Concierge variant while this page is mounted.
  useEffect(() => {
    const head = document.head;
    const previous = Array.from(head.querySelectorAll("link[rel*='icon']")).map(
      (el) => ({ el, href: el.getAttribute("href") })
    );
    let link = head.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      head.appendChild(link);
    }
    link.setAttribute("href", "/assets/concierge/bc-favicon-blue.svg");
    document.title = "Business Concierge — Datapoolwaters Advisory";
    return () => {
      previous.forEach(({ el, href }) => href && el.setAttribute("href", href));
      document.title = "Datapoolwaters Advisory — Capital · Strategy · Sustainability";
    };
  }, []);

  const scrollTo = (id) => () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bc-theme" data-testid="page-business-concierge">
      <Toaster position="top-right" richColors />

      <Hero onFree={scrollTo("bc-free")} onPaid={scrollTo("bc-paid")} />
      <Overview />
      <FreeResources />
      <PaidStore />
      <Journey />
      <Seminars />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero({ onFree, onPaid }) {
  return (
    <section
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-white overflow-hidden"
      data-testid="bc-hero"
    >
      <FlowingLines position="top-right" size={560} color="#1A4FFF" opacity={0.1} />
      <FlowingLines position="bottom-left" size={360} color="#00C9A3" opacity={0.07} />

      <div className="dpw-container relative grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <ConciergeLogo height={44} />
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A4FFF]/30 bg-[#1A4FFF]/5">
            <Sparkles size={14} style={{ color: "#1A4FFF" }} />
            <span
              className="text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ color: "#1A4FFF" }}
            >
              Start smart. Grow with guidance.
            </span>
          </div>
          <h1 className="mt-7 font-serif text-5xl md:text-7xl leading-[1.02] text-[#101317]">
            Build, grow, and scale your business —{" "}
            <em className="italic" style={{ color: "#1A4FFF" }}>
              with guidance
            </em>
            .
          </h1>
          <p className="mt-8 text-[18px] leading-[1.7] text-[#444a55] max-w-xl">
            Datapoolwaters Business Concierge is your conduit to starting strong
            and growing into the businesses you&apos;ve always wanted.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onFree}
              data-testid="bc-cta-free"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase text-white transition-colors"
              style={{ background: "#1A4FFF" }}
            >
              Explore Free Resources <ArrowRight size={14} />
            </button>
            <button
              onClick={onPaid}
              data-testid="bc-cta-paid"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase border border-[#1A4FFF] text-[#1A4FFF] hover:bg-[#1A4FFF] hover:text-white transition-colors"
            >
              Get the 20 Business Ideas Guide
            </button>
          </div>
        </div>

        <div className="md:col-span-5 hidden md:block">
          <div
            className="relative aspect-square rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1A4FFF 0%, #5A82FF 60%, #00C9A3 130%)",
            }}
          >
            <FlowingLines position="bottom-right" size={420} color="#ffffff" opacity={0.18} />
            <div className="absolute inset-0 grid place-items-center">
              <img
                src="/assets/concierge/bc-stacked.svg"
                alt="Datapoolwaters Business Concierge"
                className="w-[58%]"
                data-testid="bc-hero-mark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── OVERVIEW ───────────────── */
function Overview() {
  const tiles = [
    {
      icon: <Rocket size={32} strokeWidth={1.4} />,
      k: "Start",
      v: "Free resources & templates to launch with clarity — business plan, cashflow, pricing.",
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.4} />,
      k: "Grow",
      v: "Premium strategy guides, financial models, and live seminars from practitioners.",
    },
    {
      icon: <Award size={32} strokeWidth={1.4} />,
      k: "Scale",
      v: "Graduate into full Datapoolwaters Advisory — capital, structuring, institutional growth.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#fafbfd]" data-testid="bc-overview">
      <div className="dpw-container">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div
              className="dpw-eyebrow mb-5"
              style={{ color: "#1A4FFF" }}
            >
              What is Business Concierge?
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317]">
              A bridge from{" "}
              <em className="italic" style={{ color: "#1A4FFF" }}>
                first idea
              </em>{" "}
              to{" "}
              <em className="italic" style={{ color: "#00C9A3" }}>
                institutional growth
              </em>
              .
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#444a55] max-w-md">
              We help small businesses start, grow, and graduate into our main
              Advisory services. Real frameworks, practical tools, and senior
              guidance — at every stage of the journey.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tiles.map((t, i) => (
              <div
                key={i}
                className="p-7 bg-white border-t-2 hover:-translate-y-1 transition-transform duration-300"
                style={{ borderTopColor: i === 1 ? "#00C9A3" : "#1A4FFF" }}
                data-testid={`bc-tile-${t.k.toLowerCase()}`}
              >
                <div style={{ color: i === 1 ? "#00C9A3" : "#1A4FFF" }}>
                  {t.icon}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-[#101317]">{t.k}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#5a6270]">
                  {t.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FREE RESOURCES ───────────────── */
function FreeResources() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const subscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/newsletter/subscribe`, {
        email: email.trim(),
        source: "business-concierge",
      });
      toast.success("You're on the list. Welcome.");
      setEmail("");
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        "Couldn't subscribe right now. Try again shortly.";
      toast.error(typeof msg === "string" ? msg : "Please check your email.");
    } finally {
      setSubmitting(false);
    }
  };

  const cards = [
    {
      icon: <Calendar size={26} strokeWidth={1.4} />,
      k: "Business Seminars",
      v: "Free live & online sessions on starting, pricing, and growing.",
      to: "#bc-seminars",
    },
    {
      icon: <Download size={26} strokeWidth={1.4} />,
      k: "Templates & Tools",
      v: "Business plan, cashflow, and pricing templates — downloadable.",
      to: "#",
    },
    {
      icon: <FileText size={26} strokeWidth={1.4} />,
      k: "Guides & Articles",
      v: "Practical reads on operations, capital, and customer acquisition.",
      to: "#",
    },
    {
      icon: <Mail size={26} strokeWidth={1.4} />,
      k: "Newsletter",
      v: "Monthly insights from practitioners — no fluff, no noise.",
      to: "#bc-newsletter",
    },
  ];

  return (
    <section
      id="bc-free"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      data-testid="bc-free-resources"
    >
      <FlowingLines position="top-left" size={420} color="#1A4FFF" opacity={0.07} />
      <div className="dpw-container relative">
        <div className="dpw-eyebrow mb-5" style={{ color: "#1A4FFF" }}>
          Free Resources Hub
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317] max-w-3xl">
          Everything you need to take the first step — at no cost.
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <a
              key={i}
              href={c.to}
              data-testid={`bc-free-card-${i}`}
              className="group p-7 bg-[#fafbfd] hover:bg-[#1A4FFF] transition-colors duration-300"
            >
              <div className="text-[#1A4FFF] group-hover:text-white transition-colors">
                {c.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl text-[#101317] group-hover:text-white transition-colors">
                {c.k}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#5a6270] group-hover:text-white/90 transition-colors">
                {c.v}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#1A4FFF] group-hover:text-white transition-colors">
                Explore <ArrowRight size={12} />
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div
          id="bc-newsletter"
          className="mt-16 p-10 md:p-14 rounded-md text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(120deg, #1A4FFF 0%, #2a5fff 55%, #00C9A3 160%)",
          }}
        >
          <FlowingLines position="bottom-right" size={360} color="#ffffff" opacity={0.14} />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="dpw-eyebrow" style={{ color: "#bfd1ff" }}>
                Newsletter
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                Monthly insights for first-time founders.
              </h3>
              <p className="mt-3 text-white/85 text-[15px] max-w-md">
                One email a month. Templates, case studies, and event invites.
                No spam.
              </p>
            </div>
            <form
              onSubmit={subscribe}
              className="md:col-span-5 flex flex-col sm:flex-row gap-3"
              data-testid="bc-newsletter-form"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                data-testid="bc-newsletter-email"
                className="h-12 bg-white text-[#101317] rounded-md border-0"
              />
              <button
                type="submit"
                disabled={submitting}
                data-testid="bc-newsletter-submit"
                className="h-12 px-6 rounded-md bg-white text-[#1A4FFF] hover:bg-[#101317] hover:text-white transition-colors text-[12px] tracking-[0.18em] uppercase disabled:opacity-60"
              >
                {submitting ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PAID STORE ───────────────── */
function PaidStore() {
  const [modalOpen, setModalOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/purchase-intent`, {
        product: "20 Profitable Businesses Guide (₦6M–₦30M)",
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        notes: form.notes.trim() || null,
      });
      setDone(true);
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || "Try again shortly.";
      toast.error(typeof msg === "string" ? msg : "Please check your inputs.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="bc-paid"
      className="py-24 md:py-32 bg-[#fafbfd]"
      data-testid="bc-paid-store"
    >
      <div className="dpw-container">
        <div className="dpw-eyebrow mb-5" style={{ color: "#1A4FFF" }}>
          Premium Business Resources
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317] max-w-3xl">
          Strategy Store
        </h2>
        <p className="mt-5 text-[16px] leading-[1.7] text-[#5a6270] max-w-2xl">
          Practitioner-built guides, models, and playbooks. Buy once. Use
          forever.
        </p>

        {/* Featured product */}
        <div
          className="mt-12 grid md:grid-cols-12 gap-0 bg-white overflow-hidden border border-[#e5e7eb]"
          data-testid="bc-featured-product"
        >
          <div
            className="md:col-span-5 relative min-h-[320px] flex items-center justify-center p-10"
            style={{
              background:
                "linear-gradient(135deg, #101317 0%, #1A4FFF 75%, #00C9A3 130%)",
            }}
          >
            <FlowingLines position="top-right" size={300} color="#ffffff" opacity={0.16} />
            <div className="relative text-center">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase text-white/90"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <Sparkles size={12} /> Featured Guide
              </div>
              <div className="mt-6 font-serif text-white text-5xl md:text-6xl leading-none">
                20
              </div>
              <div className="mt-2 font-serif text-white text-xl">
                profitable businesses
              </div>
              <div className="mt-1 text-white/70 text-[12px] tracking-[0.2em] uppercase">
                ₦6M — ₦30M
              </div>
            </div>
          </div>

          <div className="md:col-span-7 p-10 md:p-12">
            <h3 className="font-serif text-3xl md:text-[34px] leading-tight text-[#101317]">
              20 Profitable Businesses You Can Start with ₦6M – ₦30M
            </h3>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#5a6270]">
              A practical guide for first-time founders — 20 vetted businesses
              with indicative financials, setup steps, risks, and a path to
              scale. Buyers also receive detailed financial models for any 3
              businesses of their choice.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "20 vetted business ideas, sector-coded",
                "Indicative capex/opex & breakeven for each",
                "Setup steps, regulatory notes, risks",
                "Claim detailed financial models for 3 of your choice",
              ].map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[14px] text-[#3c4350]"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#1A4FFF" }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-end gap-6">
              <div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-[#9AA0AA]">
                  Price
                </div>
                <div className="font-serif text-3xl text-[#101317]">
                  {CONFIG.flagshipPrice}
                </div>
              </div>
              <button
                onClick={() => {
                  setDone(false);
                  setForm({ name: "", email: "", phone: "", notes: "" });
                  setModalOpen(true);
                }}
                data-testid="bc-buy-now"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-[13px] tracking-[0.18em] uppercase transition-colors"
                style={{ background: "#1A4FFF" }}
              >
                Buy Now <ArrowRight size={14} />
              </button>
            </div>
            <p className="mt-4 text-[12px] text-[#9AA0AA]">
              After purchase, you&apos;ll receive instructions to claim 3 free
              detailed financial models.
            </p>
          </div>
        </div>

        {/* Grid — additional / coming-soon products */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { k: "Pricing Playbook", v: "How to price for profit in Nigeria.", soon: true },
            { k: "Cashflow Masterclass", v: "12-month cashflow blueprint.", soon: true },
            { k: "Capital Roadmap", v: "From grants to growth equity.", soon: true },
          ].map((p, i) => (
            <div
              key={i}
              className="relative p-7 bg-white border border-[#e5e7eb] overflow-hidden"
              data-testid={`bc-coming-soon-${i}`}
            >
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#101317]/5 text-[10px] tracking-[0.22em] uppercase text-[#101317]/70">
                <Lock size={10} /> Coming soon
              </div>
              <ConciergeIcon size={32} />
              <h4 className="mt-5 font-serif text-xl text-[#101317]">{p.k}</h4>
              <p className="mt-2 text-[14px] text-[#5a6270]">{p.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Buy-Now modal — payment placeholder */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          data-testid="bc-buy-modal"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-white w-full max-w-lg p-8 md:p-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full hover:bg-[#fafbfd]"
              aria-label="Close"
              data-testid="bc-buy-modal-close"
            >
              ×
            </button>
            {!done ? (
              <form onSubmit={submit} data-testid="bc-buy-form">
                <div className="dpw-eyebrow mb-3" style={{ color: "#1A4FFF" }}>
                  Reserve Your Copy
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#101317] leading-tight">
                  20 Profitable Businesses Guide
                </h3>
                <p className="mt-3 text-[14px] text-[#5a6270]">
                  Tell us where to send your purchase link. We&apos;ll deliver
                  the guide and your claim instructions for 3 free financial
                  models the moment payment is confirmed.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <Label className="text-[11px] tracking-[0.22em] uppercase text-[#5a6270]">
                      Full name *
                    </Label>
                    <Input
                      required
                      minLength={2}
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      data-testid="bc-buy-name"
                      className="mt-2 h-11 rounded-none border-x-0 border-t-0 border-b-2 focus-visible:border-[#1A4FFF] focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] tracking-[0.22em] uppercase text-[#5a6270]">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      data-testid="bc-buy-email"
                      className="mt-2 h-11 rounded-none border-x-0 border-t-0 border-b-2 focus-visible:border-[#1A4FFF] focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] tracking-[0.22em] uppercase text-[#5a6270]">
                      Phone (optional)
                    </Label>
                    <Input
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      data-testid="bc-buy-phone"
                      className="mt-2 h-11 rounded-none border-x-0 border-t-0 border-b-2 focus-visible:border-[#1A4FFF] focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] tracking-[0.22em] uppercase text-[#5a6270]">
                      Anything we should know? (optional)
                    </Label>
                    <Textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, notes: e.target.value }))
                      }
                      data-testid="bc-buy-notes"
                      className="mt-2 rounded-none border-x-0 border-t-0 border-b-2 focus-visible:border-[#1A4FFF] focus-visible:ring-0 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="bc-buy-submit"
                  className="mt-7 w-full h-12 rounded-full text-white text-[13px] tracking-[0.18em] uppercase disabled:opacity-60 transition-colors"
                  style={{ background: "#1A4FFF" }}
                >
                  {submitting ? "Reserving…" : `Proceed to Payment · ${CONFIG.flagshipPrice}`}
                </button>
                <p className="mt-3 text-[11px] text-[#9AA0AA] leading-snug">
                  {/* PLACEHOLDER: Connect Paystack/Flutterwave keys in CONFIG to enable
                      direct in-page checkout. Until then, submissions are captured
                      and we follow up with payment instructions. */}
                  Payment provider (Paystack / Flutterwave) connection pending —
                  submit your details and we&apos;ll send payment instructions.
                </p>
              </form>
            ) : (
              <div className="text-center py-6" data-testid="bc-buy-success">
                <CheckCircle2
                  size={42}
                  className="mx-auto"
                  style={{ color: "#00C9A3" }}
                />
                <h3 className="mt-5 font-serif text-2xl text-[#101317]">
                  Reserved. Check your inbox.
                </h3>
                <p className="mt-3 text-[14px] text-[#5a6270]">
                  We&apos;ve received your request. You&apos;ll get a payment
                  link within minutes. After payment, email{" "}
                  <a
                    href={`mailto:${CONFIG.claimEmail}`}
                    className="text-[#1A4FFF] underline"
                  >
                    {CONFIG.claimEmail}
                  </a>{" "}
                  with your 3 chosen businesses to claim your free models.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-7 px-6 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase text-[#1A4FFF] border border-[#1A4FFF]"
                  data-testid="bc-buy-close"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ───────────────── JOURNEY ───────────────── */
function Journey() {
  const steps = [
    {
      no: "01",
      k: "Start",
      v: "Tap free resources, templates, and seminars to test the idea.",
      to: "#bc-free",
      color: "#1A4FFF",
    },
    {
      no: "02",
      k: "Grow",
      v: "Buy the 20-businesses guide, attend strategy seminars, build the model.",
      to: "#bc-paid",
      color: "#00C9A3",
    },
    {
      no: "03",
      k: "Scale with Advisory",
      v: "Graduate into Datapoolwaters Advisory for capital, structure, and growth.",
      to: "/what-we-do",
      color: "#101317",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-white" data-testid="bc-journey">
      <div className="dpw-container">
        <div className="dpw-eyebrow mb-5" style={{ color: "#1A4FFF" }}>
          Your Journey
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317] max-w-3xl">
          How it works.
        </h2>

        <div className="mt-14 relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute left-[16%] right-[16%] top-[88px] h-px"
            style={{
              background:
                "linear-gradient(to right, #1A4FFF 0%, #00C9A3 50%, #101317 100%)",
            }}
          />
          {steps.map((s, i) => {
            const Cmp = s.to.startsWith("/") ? Link : "a";
            return (
              <Cmp
                key={i}
                to={s.to}
                href={s.to}
                data-testid={`bc-journey-step-${i}`}
                className="relative block p-7 bg-[#fafbfd] hover:bg-white hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full grid place-items-center text-white font-serif text-lg relative z-10"
                  style={{ background: s.color }}
                >
                  {s.no}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-[#101317]">
                  {s.k}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#5a6270]">
                  {s.v}
                </p>
                <div
                  className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: s.color }}
                >
                  {i === 2 ? "Explore Advisory" : "Go there"}
                  <ArrowRight size={12} />
                </div>
              </Cmp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SEMINARS ───────────────── */
function Seminars() {
  return (
    <section
      id="bc-seminars"
      className="py-24 md:py-32 bg-[#fafbfd]"
      data-testid="bc-seminars"
    >
      <div className="dpw-container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="dpw-eyebrow mb-5" style={{ color: "#1A4FFF" }}>
              Seminars & Events
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317]">
              Learn live from practitioners.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="dpw-eyebrow mb-4 text-[#101317]">Upcoming</div>
            <div className="space-y-4">
              {UPCOMING_SEMINARS.map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-6 flex flex-col sm:flex-row sm:items-center gap-4 border-l-4"
                  style={{ borderColor: "#1A4FFF" }}
                  data-testid={`bc-upcoming-${i}`}
                >
                  <div className="flex-1">
                    <div className="font-serif text-xl text-[#101317]">
                      {s.title}
                    </div>
                    <div className="mt-1 text-[13px] text-[#5a6270]">
                      {s.date} · {s.mode}
                    </div>
                  </div>
                  <a
                    href={s.register}
                    data-testid={`bc-register-${i}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.18em] uppercase text-white"
                    style={{ background: "#1A4FFF" }}
                  >
                    Register <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>

            <div className="dpw-eyebrow mt-12 mb-4 text-[#101317]">Past Sessions</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {PAST_SEMINARS.map((s, i) => (
                <a
                  key={i}
                  href={s.replay}
                  data-testid={`bc-past-${i}`}
                  className="p-5 bg-white hover:bg-white/80 transition-colors"
                >
                  <div className="font-serif text-lg text-[#101317]">
                    {s.title}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#1A4FFF]">
                    Watch replay <ArrowRight size={11} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white" data-testid="bc-testimonials">
      <div className="dpw-container">
        <div className="dpw-eyebrow mb-5" style={{ color: "#1A4FFF" }}>
          Success Stories
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317] max-w-3xl">
          From first idea to first invoice.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-[#fafbfd]"
              data-testid={`bc-testimonial-${i}`}
            >
              <Quote size={28} style={{ color: "#1A4FFF" }} />
              <p className="mt-5 font-serif text-lg leading-[1.5] text-[#101317]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-[#e5e7eb]">
                <div className="font-medium text-[#101317]">{t.name}</div>
                <div className="text-[13px] text-[#5a6270] italic">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] text-[#9AA0AA]">
          {/* PLACEHOLDER testimonials */}
          Placeholder content — replace with real customer stories.
        </p>
      </div>
    </section>
  );
}

/* ───────────────── FAQ ───────────────── */
function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-[#fafbfd]" data-testid="bc-faq">
      <div className="dpw-container grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="dpw-eyebrow mb-5" style={{ color: "#1A4FFF" }}>
            FAQ
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-[#101317]">
            Questions, answered.
          </h2>
        </div>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[#e5e7eb]"
              >
                <AccordionTrigger
                  className="py-5 font-serif text-lg text-[#101317] hover:no-underline hover:text-[#1A4FFF] text-left"
                  data-testid={`bc-faq-trigger-${i}`}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-[1.7] text-[#5a6270] pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA BAND ───────────────── */
function CtaBand() {
  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden text-white"
      style={{ background: "#1A4FFF" }}
      data-testid="bc-cta-band"
    >
      <FlowingLines position="top-right" size={420} color="#ffffff" opacity={0.14} />
      <FlowingLines position="bottom-left" size={320} color="#00C9A3" opacity={0.18} />
      <div className="dpw-container relative text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl mx-auto">
          Ready for the next level?
        </h2>
        <p className="mt-6 text-[17px] text-white/85 max-w-2xl mx-auto">
          When you&apos;re ready to move from plan to reality, our Advisory team
          can help.
        </p>
        <Link
          to="/contact"
          data-testid="bc-band-cta"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1A4FFF] hover:bg-[#101317] hover:text-white transition-colors text-[13px] tracking-[0.18em] uppercase"
        >
          Book a Consultation <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
