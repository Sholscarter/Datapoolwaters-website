import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { DpwSymbol } from "./FlowingLines";

const GOVERNANCE = [
  { to: "/policies/privacy", label: "Privacy Policy" },
  { to: "/policies/terms", label: "Terms of Service" },
  { to: "/policies/ethics", label: "Code of Ethics & Professional Conduct" },
  { to: "/policies/anti-trafficking", label: "Anti-Trafficking & Modern Slavery" },
  { to: "/policies/whistleblowing", label: "Whistleblowing Policy" },
];

const EXPLORE = [
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/academy", label: "Academy" },
  { to: "/capital", label: "Capital" },
  { to: "/innovation", label: "Innovation" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-black text-white relative overflow-hidden"
      data-testid="site-footer"
    >
      {/* Subtle flowing lines accent */}
      <div className="absolute -top-20 -right-20 opacity-[0.08] pointer-events-none">
        <div className="w-[420px] h-[420px]">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <g transform="translate(120,0) scale(-1,1)">
              {Array.from({ length: 30 }).map((_, i) => {
                const t = i / 29;
                const a = (t * Math.PI) / 2;
                return (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={Math.cos(a) * 120}
                    y2={Math.sin(a) * 120}
                    stroke="#035FFE"
                    strokeWidth={0.3 + t * 1.4}
                  />
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      <div className="dpw-container py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <DpwSymbol size={44} color="#035FFE" />
              <div className="font-serif text-xl leading-tight">
                Datapoolwaters
                <br />
                Advisory
              </div>
            </div>
            <p className="mt-8 text-[15px] text-white/70 max-w-md leading-relaxed">
              We design capital, structure ambition, and unlock scale for
              Africa's most consequential ideas. Boutique investment and
              strategic financial advisory for infrastructure, startups, and
              growth companies across the continent.
            </p>

            <div className="mt-10 space-y-3 text-[14px] text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-dpw-blue" />
                <span>Lagos, Nigeria — Pan-African coverage</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-dpw-blue" />
                <a
                  href="mailto:advisory@datapoolwaters.com"
                  className="hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  advisory@datapoolwaters.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-dpw-blue" />
                <div className="space-y-1">
                  <div>+234 817 947 0589</div>
                  <div>+234 803 609 7664</div>
                  <div>+1 (646) 680 0923</div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <div className="dpw-label text-dpw-blue/90">Explore</div>
            <ul className="mt-6 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[14px] text-white/75 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  data-testid="footer-link-contact"
                  className="text-[14px] text-white/75 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div className="md:col-span-4">
            <div className="dpw-label text-dpw-blue/90">
              Governance &amp; Policies
            </div>
            <ul className="mt-6 space-y-3">
              {GOVERNANCE.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-policy-${l.label.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}`}
                    className="text-[14px] text-white/75 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-[12px] tracking-[0.2em] uppercase text-white/40">
            © {year} Datapoolwaters Advisory. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
              data-testid="social-linkedin"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Twitter / X"
              data-testid="social-twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
              data-testid="social-facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
