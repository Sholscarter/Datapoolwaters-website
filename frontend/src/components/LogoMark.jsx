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
        width={size * 2}
        height={size * 2}
        loading="eager"
        decoding="async"
        draggable={false}
        style={{
          // The square JPG places the symbol in the upper-middle and the
          // wordmark below. We scale 2× and shift upward so only the symbol
          // portion is visible.
          width: size * 2,
          height: size * 2,
          objectFit: "cover",
          objectPosition: "center 20%",
          display: "block",
          transform: "translateY(-20%)",
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
