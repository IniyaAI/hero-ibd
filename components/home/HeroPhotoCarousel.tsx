"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { HERO_CAROUSEL_SLIDES } from "@/lib/site-content";

export function HeroPhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(true);
  const total = HERO_CAROUSEL_SLIDES.length;
  const active = HERO_CAROUSEL_SLIDES[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total]
  );

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => goTo(index + 1), 5000);
    return () => window.clearInterval(timer);
  }, [goTo, index, reduceMotion]);

  return (
    <figure
      className="w-full lg:max-w-xl lg:ml-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label="Heart to Heart event photos"
    >
      <div className="relative aspect-[4/5] overflow-hidden border hairline bg-[var(--color-wash)] sm:aspect-[5/6] lg:aspect-[4/5]">
        {HERO_CAROUSEL_SLIDES.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 36rem"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <figcaption className="mt-3 flex items-center justify-between gap-4">
        <p className="min-w-0 truncate text-sm text-[var(--color-plum-muted)]">
          {active.caption}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {HERO_CAROUSEL_SLIDES.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => goTo(i)}
              className={`size-2 rounded-full transition-colors ${
                i === index
                  ? "bg-[var(--color-coral)]"
                  : "bg-[var(--color-line-strong)]"
              }`}
              aria-label={`Show photo ${i + 1}: ${item.caption}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
