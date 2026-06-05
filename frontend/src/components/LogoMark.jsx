import React from "react";

/**
 * Datapoolwaters Advisory official logo.
 *
 * Renders the real horizontal lockup SVG (symbol + "Datapoolwaters Advisory"
 * wordmark, blue #035EFE). For light vs dark contexts we switch between the
 * native blue render and a CSS-filtered white render — clean transparency,
 * no JPG-background workaround.
 *
 * Variants:
 *  - 'color'  → native brand blue (default; use on white/light surfaces)
 *  - 'white'  → all-white (use over dark / blue / hero surfaces)
 *  - 'black'  → all-black (alt monochrome use)
 *
 * Components:
 *  - <LogoMark />     — horizontal lockup (header / inline)
 *  - <LogoLockup />   — vertical stacked lockup (hero / large brand moments)
 *  - <LogoSymbol />   — symbol only (favicon-sized inline icon)
 */

const HORIZONTAL = "/assets/dpw-horizontal.svg";
const VERTICAL = "/assets/dpw-vertical.svg";

// Filter recipes that recolor a single-color SVG when loaded as an <img>.
const FILTER = {
  color: "none",
  white: "brightness(0) invert(1)",
  black: "brightness(0)",
};

export default function LogoMark({
  variant = "color",
  /** Display height in px. Width auto-scales by the SVG's intrinsic aspect (~4.84:1). */
  size = 40,
  className = "",
  alt = "Datapoolwaters Advisory",
}) {
  return (
    <img
      src={HORIZONTAL}
      alt={alt}
      className={`shrink-0 ${className}`}
      style={{
        height: size,
        width: "auto",
        display: "block",
        filter: FILTER[variant] || FILTER.color,
      }}
      draggable={false}
      data-testid={`logo-mark-${variant}`}
    />
  );
}

export function LogoLockup({
  variant = "color",
  height = 160,
  className = "",
  alt = "Datapoolwaters Advisory",
}) {
  return (
    <img
      src={VERTICAL}
      alt={alt}
      className={className}
      style={{
        height,
        width: "auto",
        display: "block",
        filter: FILTER[variant] || FILTER.color,
      }}
      draggable={false}
      data-testid={`logo-lockup-${variant}`}
    />
  );
}

/** Symbol-only (uses the vertical lockup, cropped to its top portion via CSS). */
export function LogoSymbol({
  variant = "color",
  size = 40,
  className = "",
}) {
  // The vertical SVG is 600 × 426; the symbol occupies roughly the top 60%.
  // We render that portion in a square container with overflow: hidden.
  return (
    <span
      className={`inline-block overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size, lineHeight: 0 }}
      aria-hidden="true"
      data-testid={`logo-symbol-${variant}`}
    >
      <img
        src={VERTICAL}
        alt=""
        style={{
          // 600 × 426 source. Aspect ≈ 1.41. The mark sits in the top ~58%.
          // Scale up so width = container width × (600/600)*ratio. Easiest:
          // set width to size and height to size * (426/600 / 0.58) so the
          // symbol fills the visible square.
          width: size,
          height: size * (426 / 600) / 0.58,
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
          filter: FILTER[variant] || FILTER.color,
        }}
        draggable={false}
      />
    </span>
  );
}
