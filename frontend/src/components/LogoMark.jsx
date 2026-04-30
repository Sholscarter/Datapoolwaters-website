import React from "react";

/**
 * Datapoolwaters Advisory official logo mark (symbol-only variant).
 *
 * The supplied JPGs are SQUARE, with the "DA" symbol centered inside with
 * ~25% padding on every side. The symbol itself is intrinsically WIDER than
 * it is tall (roughly 1.35 : 1). Rendering it in a square container with
 * `object-fit: cover` visually compresses the mark because the sides get
 * clipped to fit the shorter height.
 *
 * Fix: render in a RECTANGULAR container that matches the symbol's natural
 * aspect ratio, use `object-fit: contain` so the mark is never squished,
 * then scale it up so the padding around the symbol falls off the edges of
 * the container. The container's background colour matches the JPG so any
 * remaining edges blend invisibly into the host surface.
 *
 * Variants available: 'white' | 'blue' | 'black' | 'grey'
 */
const VARIANT_TO_SRC = {
  white: "/assets/logo-white-bg.jpg",
  blue: "/assets/logo-blue-bg.jpg",
  black: "/assets/logo-black-bg.jpg",
  grey: "/assets/logo-grey-bg.jpg",
};

const VARIANT_BG_COLOR = {
  white: "#ffffff",
  blue: "#035FFE",
  black: "#000000",
  grey: "#C2C6C8",
};

// Intrinsic aspect ratio of the "DA" mark (width / height).
const MARK_ASPECT = 1.35;

export default function LogoMark({
  variant = "white",
  /** Target display HEIGHT in px (width is derived from the mark's aspect). */
  size = 40,
  className = "",
  alt = "Datapoolwaters Advisory",
}) {
  const src = VARIANT_TO_SRC[variant] || VARIANT_TO_SRC.white;
  const bg = VARIANT_BG_COLOR[variant] || VARIANT_BG_COLOR.white;
  const height = size;
  const width = Math.round(size * MARK_ASPECT);

  return (
    <span
      className={`inline-block overflow-hidden shrink-0 ${className}`}
      style={{
        width,
        height,
        backgroundColor: bg,
        lineHeight: 0,
      }}
      aria-hidden="true"
      data-testid={`logo-mark-${variant}`}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        draggable={false}
        style={{
          // Render at full container size, preserving the mark's aspect via
          // contain (so it never squishes). Then scale ~1.55× to push the
          // uniform 25% padding off the edges of the container.
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center center",
          display: "block",
          transform: "scale(1.55)",
          transformOrigin: "center center",
        }}
      />
    </span>
  );
}

/** Full lockup (symbol-only, uncropped) — used for hero/large brand moments. */
export function LogoLockup({
  variant = "white",
  height = 120,
  className = "",
  alt = "Datapoolwaters Advisory",
}) {
  const src = VARIANT_TO_SRC[variant] || VARIANT_TO_SRC.white;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ height, width: "auto", display: "block" }}
      draggable={false}
      data-testid={`logo-lockup-${variant}`}
    />
  );
}
