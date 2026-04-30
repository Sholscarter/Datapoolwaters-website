import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DpwSymbol } from "./FlowingLines";

const NAV = [
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/academy", label: "Academy" },
  { to: "/capital", label: "Capital" },
  { to: "/innovation", label: "Innovation" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ transparentOnHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const transparent = transparentOnHero && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md border-b border-[color:var(--dpw-light-grey)]/60"
      }`}
      data-testid="site-header"
    >
      <div className="dpw-container flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-testid="nav-home-logo"
          aria-label="Datapoolwaters Advisory — Home"
        >
          <DpwSymbol
            size={38}
            color={transparent ? "#ffffff" : "#035FFE"}
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-serif text-[17px] leading-tight tracking-tight transition-colors ${
                transparent ? "text-white" : "text-dpw-black"
              }`}
            >
              Datapoolwaters
            </span>
            <span
              className={`font-serif text-[17px] leading-tight tracking-tight transition-colors ${
                transparent ? "text-white" : "text-dpw-black"
              }`}
            >
              Advisory
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `text-[13px] tracking-wide transition-colors duration-200 relative
                ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-dpw-dark-grey hover:text-dpw-blue"
                }
                ${
                  isActive
                    ? transparent
                      ? "text-white after:opacity-100"
                      : "text-dpw-blue after:opacity-100"
                    : "after:opacity-0"
                }
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0
                after:h-px after:bg-current after:transition-opacity`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`lg:hidden p-2 -mr-2 rounded-full transition ${
            transparent ? "text-white" : "text-dpw-black"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[color:var(--dpw-light-grey)]/60`}
      >
        <nav className="dpw-container py-6 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-mobile-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `py-3 border-b border-[color:var(--dpw-light-grey)]/50 text-[15px] ${
                  isActive ? "text-dpw-blue" : "text-dpw-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
