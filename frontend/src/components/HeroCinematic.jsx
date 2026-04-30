import React, { useEffect, useRef, useState } from "react";

// Cinematic, scroll-triggered hero adapted from the provided hero_v2 HTML.
// Brand-accurate: uses #035FFE, Optima-stack headline, Helvetica Neue captions.
// Each beat = ~4.2s; the hero is absolutely positioned, content appears letterboxed.

const SCENES = [
  {
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1920&q=80",
    sector: "",
  },
  {
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80",
    sector: "Agriculture & Agribusiness",
  },
  {
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80",
    sector: "Renewable Energy",
  },
  {
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80",
    sector: "Infrastructure",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    sector: "Technology & AI",
  },
  {
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80",
    sector: "Banking & Financial Technology",
  },
  {
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80",
    sector: "Electric Mobility",
  },
  {
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80&fit=crop",
    fallback: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1920&q=80",
    sector: "",
  },
];

const SCRIPT = [
  { text: "Africa is <em>rising</em> — not just in potential, but in <em>execution</em>.", sceneIdx: 0 },
  { text: "Across agriculture and <em>food systems</em>…", sceneIdx: 1 },
  { text: "Clean and <em>renewable energy</em>…", sceneIdx: 2 },
  { text: "Infrastructure that connects <em>people and markets</em>…", sceneIdx: 3 },
  { text: "From <em>technology and artificial intelligence</em>…", sceneIdx: 4 },
  { text: "To <em>banking, capital</em>, and modern commerce…", sceneIdx: 5 },
  { text: "To <em>electric mobility</em> shaping tomorrow's cities…", sceneIdx: 6 },
  { text: "The future of Africa is being built — <em>deliberately</em>.", sceneIdx: 0 },
  { text: "We partner with founders, institutions, and governments to <em>unlock capital</em>.", sceneIdx: 5 },
  { text: "Design fundable strategies and deliver <em>sustainable impact</em>.", sceneIdx: 1 },
  {
    text: "We operate where <em>capital meets strategy</em>.<br>Where growth meets discipline.<br>Where ambition meets execution.",
    sceneIdx: 3,
  },
  {
    text: "<em>Datapoolwaters Advisory.</em><br>Capital. Strategy. Sustainability.",
    sceneIdx: 7,
    final: true,
  },
];

const BEAT_MS = 4200;

function parseBeat(raw) {
  const segments = [];
  let remaining = raw;
  while (remaining.length > 0) {
    if (remaining.startsWith("<br>")) {
      segments.push({ type: "br" });
      remaining = remaining.slice(4);
    } else if (remaining.startsWith("<em>")) {
      const end = remaining.indexOf("</em>");
      if (end !== -1) {
        segments.push({ type: "em", text: remaining.slice(4, end) });
        remaining = remaining.slice(end + 5);
      } else {
        segments.push({ type: "text", text: remaining });
        remaining = "";
      }
    } else {
      const nextTag = remaining.search(/<em>|<br>/);
      if (nextTag === -1) {
        segments.push({ type: "text", text: remaining });
        remaining = "";
      } else {
        segments.push({ type: "text", text: remaining.slice(0, nextTag) });
        remaining = remaining.slice(nextTag);
      }
    }
  }
  return segments;
}

export default function HeroCinematic() {
  const [beatIdx, setBeatIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef();
  const startRef = useRef(null);
  const voRef = useRef(null);

  useEffect(() => {
    const totalDur = BEAT_MS * SCRIPT.length;
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % totalDur;
      const idx = Math.floor(elapsed / BEAT_MS);
      setProgress((elapsed / totalDur) * 100);
      setBeatIdx((prev) => (prev === idx ? prev : idx));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Animate words in when beatIdx changes
  useEffect(() => {
    const el = voRef.current;
    if (!el) return;
    const beat = SCRIPT[beatIdx];
    const segments = parseBeat(beat.text);

    el.innerHTML = "";
    let delay = 0;
    segments.forEach((seg) => {
      if (seg.type === "br") {
        el.appendChild(document.createElement("br"));
        return;
      }
      const words = seg.text.split(/(\s+)/);
      words.forEach((word) => {
        if (!word.trim()) {
          el.appendChild(document.createTextNode(word));
          return;
        }
        const span = document.createElement(seg.type === "em" ? "em" : "span");
        span.textContent = word;
        span.className = "word";
        span.style.transitionDelay = `${delay}s`;
        if (seg.type === "em") {
          span.style.color = "#7aa8ff";
          span.style.fontStyle = "italic";
        }
        el.appendChild(span);
        requestAnimationFrame(() => {
          span.classList.add("is-on");
        });
        delay += 0.045;
      });
    });
  }, [beatIdx]);

  const scene = SCENES[SCRIPT[beatIdx].sceneIdx] || SCENES[0];
  const isFinal = SCRIPT[beatIdx].final;

  const jump = (i) => {
    setBeatIdx(i);
    startRef.current = performance.now() - i * BEAT_MS;
  };

  return (
    <section
      className="relative w-full h-[92vh] min-h-[620px] bg-black overflow-hidden"
      data-testid="hero-cinematic"
      aria-label="Datapoolwaters Advisory intro"
    >
      {/* Slides */}
      {SCENES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === SCRIPT[beatIdx].sceneIdx ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 1 }}
        >
          <img
            src={s.img}
            onError={(e) => {
              if (e.currentTarget.src !== s.fallback)
                e.currentTarget.src = s.fallback;
            }}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform:
                i === SCRIPT[beatIdx].sceneIdx ? "scale(1.0)" : "scale(1.08)",
              transition: "transform 8s ease-out",
              filter: "brightness(0.65) saturate(1.2) contrast(1.08)",
            }}
          />
          <div className="absolute inset-0 hero-overlay" style={{ zIndex: 2 }} />
        </div>
      ))}

      {/* Grain + scanlines */}
      <div className="hero-grain" />
      <div className="hero-scanlines" />

      {/* Top blue vertical accent */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-px opacity-80"
        style={{
          height: "32%",
          background:
            "linear-gradient(to bottom, transparent, rgba(3,95,254,0.55), transparent)",
          zIndex: 10,
        }}
      />

      {/* Sector label top-right */}
      <div
        className={`absolute top-28 right-10 z-20 dpw-label text-white transition-all duration-500 ${
          scene.sector ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        data-testid="hero-sector-label"
      >
        <span style={{ color: "#7aa8ff" }}>{scene.sector}</span>
      </div>

      {/* Content */}
      <div className="absolute left-8 md:left-14 bottom-28 md:bottom-32 right-8 md:right-14 z-20 max-w-3xl">
        <div
          className="dpw-accent-line mb-5 animate-line-in"
          style={{ transformOrigin: "left" }}
        />
        <div
          ref={voRef}
          className={`font-serif text-white ${
            isFinal ? "text-[34px] md:text-[54px]" : "text-[24px] md:text-[44px]"
          } leading-[1.22] font-light`}
          style={{ minHeight: "130px" }}
          data-testid="hero-voiceover"
        />

        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-700 ${
            isFinal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          aria-hidden="true"
        >
          <span className="dpw-label" style={{ color: "#7aa8ff" }}>
            Capital
          </span>
          <span className="w-1 h-1 rounded-full bg-dpw-blue" />
          <span className="dpw-label text-white/70">Strategy</span>
          <span className="w-1 h-1 rounded-full bg-dpw-blue" />
          <span className="dpw-label text-white/70">Sustainability</span>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-dpw-blue hover:bg-[#0147c8] text-white px-6 py-3 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
            data-testid="hero-cta-talk"
          >
            Talk to Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/success-stories"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white px-4 py-3 text-[13px] tracking-[0.18em] uppercase border border-white/30 rounded-full transition-colors"
            data-testid="hero-cta-work"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Counter & dots */}
      <div
        className="absolute bottom-8 left-8 md:left-14 z-30 dpw-label text-white/50"
        data-testid="hero-counter"
      >
        {String(beatIdx + 1).padStart(2, "0")} / {String(SCRIPT.length).padStart(2, "0")}
      </div>
      <div className="absolute bottom-10 right-8 md:right-14 z-30 flex items-center gap-2">
        {SCRIPT.map((_, i) => (
          <button
            key={i}
            onClick={() => jump(i)}
            aria-label={`Jump to scene ${i + 1}`}
            data-testid={`hero-dot-${i}`}
            className={`w-[6px] h-[6px] rounded-full transition-all ${
              i === beatIdx
                ? "bg-dpw-blue scale-[1.6]"
                : "bg-white/25 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-dpw-blue z-30"
        style={{ width: `${progress}%`, boxShadow: "0 0 10px rgba(3,95,254,0.6)" }}
      />
    </section>
  );
}
