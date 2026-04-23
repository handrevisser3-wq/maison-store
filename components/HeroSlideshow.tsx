"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/slide-1.jpg",
    alt: "Luxury Cape Town apartment interior with home décor objects and Table Mountain view",
  },
  {
    src: "/images/hero/slide-2.jpg",
    alt: "Elegant South African home lifestyle — styled ceramics, linen and coffee table objects",
  },
  {
    src: "/images/hero/slide-3.jpg",
    alt: "Cape Town rooftop terrace at golden hour with premium lifestyle décor",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  // Incrementing key forces the active slide's Ken Burns wrapper to remount,
  // restarting the CSS animation from scale(1.0) on every slide change.
  const [animKey, setAnimKey] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [paused, advance]);

  const goTo = (index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Image layers (stacked, cross-fade via opacity) ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {i === current ? (
            // Active slide: remount this wrapper on every slide change so the
            // ken-burns-slide animation restarts from scale(1.0)
            <div key={animKey} className="absolute inset-0 animate-ken-burns-slide">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
              />
            </div>
          ) : (
            // Inactive slides: static, no animation
            <div className="absolute inset-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
              />
            </div>
          )}
        </div>
      ))}

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ease-out ${
              i === current
                ? "w-5 h-[5px] bg-white"
                : "w-[5px] h-[5px] bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
