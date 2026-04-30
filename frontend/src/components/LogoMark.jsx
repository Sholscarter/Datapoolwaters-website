import React from "react";

/**
 * Datapoolwaters Advisory official logo mark.
 * The provided JPG files are square compositions of symbol + stacked wordmark.
 * This component clips the JPG to show only the upper "symbol" portion,
 * scaled to the requested size, against a matching background. Because each
 * background variant is a flat JPG, the edges blend perfectly when the
 * surrounding container uses the same color.
 *
 * Variants available: 'white' | 'blue' | 'black' | 'grey'
 */
const VARIANT_TO_SRC = {
  white: "/assets/logo-white-bg.jpg",
  blue: "/assets/logo-blue-bg.jpg",
  black: "/assets/logo-black-bg.jpg",
  grey: "/assets/logo-grey-bg.jpg",
};

export default function LogoMark({
  variant = "white",
  size = 40,
  className = "",
  alt = "Datapoolwaters Advisory",
}) {
  const src = VARIANT_TO_SRC[variant] || VARIANT_TO_SRC.white;
  return (
    <span
      className={`inline-block overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size, lineHeight: 0 }}
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
          // New symbol-only logo: the mark is centered in the square with
          // ~25% padding on each side. We scale ~1.55× and center-crop so the
          // padding is trimmed but the full mark is visible, with the
          // surrounding (matching) JPG background blending into the container.
          width: "155%",
          height: "155%",
          marginLeft: "-27.5%",
          marginTop: "-27.5%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
        }}
      />
    </span>
  );
}

/** Full lockup (symbol + wordmark) as a standalone image — used for hero/large brand moments. */
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
