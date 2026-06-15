"use client";

import { useEffect, useState } from "react";
import { HERO_CAROUSEL_SLIDES } from "@/lib/hero-carousel-slides";

type HeroPhotoCarouselProps = {
  className?: string;
};

export function HeroPhotoCarousel({ className = "" }: HeroPhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(true);
  const total = HERO_CAROUSEL_SLIDES.length;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % total),
      5000
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion, total]);

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label="Heart to Heart event photos"
    >
      <div className="absolute inset-0">
        {HERO_CAROUSEL_SLIDES.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
