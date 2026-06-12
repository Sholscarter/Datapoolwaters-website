import React, { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * InsightCarousel — interactive image slider used inside long-form insights.
 * - Arrow buttons + dot pagination + keyboard (Arrow Left/Right) + touch swipe.
 * - Preserves the native aspect ratio of supplied images (designed for square LI carousels).
 */
export default function InsightCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const touchStartX = useRef(null);

  const go = useCallback(
    (i) => setIndex(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (!total) return null;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <figure
      data-testid="insight-carousel"
      className="my-10 md:my-14 -mx-4 md:mx-0"
      aria-roledescription="carousel"
      aria-label="Article visual summary"
    >
      <div
        className="relative overflow-hidden bg-dpw-off-white rounded-sm shadow-[0_20px_60px_-20px_rgba(11,30,63,0.25)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="min-w-full aspect-square md:aspect-[4/3] flex items-center justify-center bg-white"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${total}`}
              aria-hidden={i !== index}
            >
              <img
                src={s.src}
                alt={s.alt || `Slide ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next controls */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          data-testid="carousel-prev"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-sm border border-dpw-light-grey text-dpw-black hover:bg-dpw-blue hover:text-white hover:border-dpw-blue transition-colors flex items-center justify-center shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          data-testid="carousel-next"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-sm border border-dpw-light-grey text-dpw-black hover:bg-dpw-blue hover:text-white hover:border-dpw-blue transition-colors flex items-center justify-center shadow-lg"
        >
          <ChevronRight size={20} />
        </button>

        {/* Counter */}
        <div
          className="absolute top-4 right-4 px-3 py-1 text-[11px] tracking-[0.25em] uppercase bg-black/60 text-white rounded-full"
          data-testid="carousel-counter"
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Dot pagination */}
      <div
        className="mt-5 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Carousel pagination"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            data-testid={`carousel-dot-${i}`}
            onClick={() => go(i)}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-dpw-blue"
                : "w-2 bg-dpw-light-grey hover:bg-dpw-dark-grey"
            }`}
          />
        ))}
      </div>

      {/* Active slide caption (if alt text present) */}
      {slides[index]?.alt && (
        <figcaption className="mt-3 text-center text-[13px] text-dpw-dark-grey italic px-4">
          {slides[index].alt}
        </figcaption>
      )}
    </figure>
  );
}
