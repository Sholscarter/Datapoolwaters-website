// Datapoolwaters Advisory — Flowing Lines brand graphic
// Per brand guide: radial lines with increasing thickness, only half visible, cropped at edges
// Opacity 15-25% when overlaid behind content; variable color for contrast.

import React from "react";

/**
 * FlowingLines — the signature radial/fan graphic from the Datapoolwaters logo.
 * Renders a quarter-fan of thin lines that thicken outward.
 *
 * Props:
 *  - position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
 *  - size: CSS size (default 520)
 *  - color: stroke color (default #035FFE)
 *  - opacity: 0..1 (default 0.18 — brand guide: 15–25% when text overlays)
 *  - className: optional extra tailwind classes
 */
export default function FlowingLines({
  position = "top-left",
  size = 520,
  color = "#035FFE",
  opacity = 0.18,
  className = "",
}) {
  // origin coordinate set depends on position: lines fan from the "inside" corner
  // of the cropped quadrant toward the outer edge
  const cornerMap = {
    "top-left": { ox: 0, oy: 0, sx: 1, sy: 1 },
    "top-right": { ox: 120, oy: 0, sx: -1, sy: 1 },
    "bottom-left": { ox: 0, oy: 120, sx: 1, sy: -1 },
    "bottom-right": { ox: 120, oy: 120, sx: -1, sy: -1 },
  };
  const c = cornerMap[position] || cornerMap["top-left"];

  // generate fan lines (quadrant), ~32 lines, thickness increases with index
  const lines = Array.from({ length: 32 }, (_, i) => {
    const t = i / 31; // 0..1
    const angle = t * (Math.PI / 2); // 0..90 deg
    const len = 120;
    const x2 = Math.cos(angle) * len;
    const y2 = Math.sin(angle) * len;
    const strokeWidth = 0.25 + t * 1.8;
    return { x2, y2, strokeWidth, t };
  });

  const positionStyle = {
    "top-left": { top: 0, left: 0 },
    "top-right": { top: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 },
  }[position];

  return (
    <div
      className={`flow-lines ${className}`}
      style={{ ...positionStyle, width: size, height: size, opacity }}
      aria-hidden="true"
      data-testid={`flowing-lines-${position}`}
    >
      <svg
        viewBox="0 0 120 120"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <g transform={`translate(${c.ox}, ${c.oy}) scale(${c.sx}, ${c.sy})`}>
          {lines.map((l, idx) => (
            <line
              key={idx}
              x1={0}
              y1={0}
              x2={l.x2}
              y2={l.y2}
              stroke={color}
              strokeWidth={l.strokeWidth}
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/**
 * DpwSymbol — compact SVG recreation of the Datapoolwaters Advisory "DA" mark
 * for use in headers/footers where the JPG would be too heavy.
 * Renders two flowing-line fans forming a 'D' and an 'A' silhouette.
 */
export function DpwSymbol({ size = 40, color = "#035FFE", className = "" }) {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-label="Datapoolwaters Advisory"
      role="img"
      data-testid="dpw-symbol"
    >
      {/* D-shape fan (left) */}
      <g>
        <path
          d="M8 14 Q62 14 62 60 Q62 106 8 106 Z"
          fill={color}
          opacity="0.16"
        />
        <path
          d="M8 14 Q62 14 62 60 Q62 106 8 106"
          stroke={color}
          strokeWidth="1.4"
          fill="none"
        />
        {Array.from({ length: 14 }).map((_, i) => {
          const t = i / 13;
          const angle = (Math.PI / 2) * (1 - t); // fan downward
          const x2 = 8 + Math.cos(angle) * 54;
          const y2 = 14 + Math.sin(angle) * 92;
          return (
            <line
              key={`d-${i}`}
              x1="8"
              y1="14"
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={0.4 + t * 1.1}
              opacity={0.55}
            />
          );
        })}
      </g>
      {/* A-shape fan (right, mirrored) */}
      <g transform="translate(52 0)">
        <path
          d="M8 106 L8 52 Q8 14 34 14 Q60 14 60 52 L60 106 Z"
          fill={color}
          opacity="0.16"
        />
        <path
          d="M8 106 L8 52 Q8 14 34 14 Q60 14 60 52 L60 106"
          stroke={color}
          strokeWidth="1.4"
          fill="none"
        />
        {Array.from({ length: 14 }).map((_, i) => {
          const t = i / 13;
          const angle = (Math.PI / 2) * t;
          const x2 = 60 - Math.cos(angle) * 52;
          const y2 = 14 + Math.sin(angle) * 92;
          return (
            <line
              key={`a-${i}`}
              x1="60"
              y1="14"
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={0.4 + t * 1.1}
              opacity={0.55}
            />
          );
        })}
      </g>
    </svg>
  );
}
