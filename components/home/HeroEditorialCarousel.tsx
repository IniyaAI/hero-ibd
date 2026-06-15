"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_GALLERY_SLIDES } from "@/lib/hero-carousel-slides";

const TOTAL = HERO_GALLERY_SLIDES.length;
const AUTO_INTERVAL_MS = 3000;
const INTERACTION_PAUSE_MS = 4500;

function getDiff(slideIndex: number, activeIndex: number) {
  let diff = slideIndex - activeIndex;
  if (diff > TOTAL / 2) diff -= TOTAL;
  if (diff < -TOTAL / 2) diff += TOTAL;
  return diff;
}

function slideTransform(diff: number) {
  if (diff === 0) {
    return { x: "-50%", scale: 1, opacity: 1, zIndex: 30 };
  }
  if (diff === -1) {
    return { x: "-118%", scale: 0.82, opacity: 0.38, zIndex: 10 };
  }
  if (diff === 1) {
    return { x: "18%", scale: 0.82, opacity: 0.38, zIndex: 10 };
  }
  return { x: diff < 0 ? "-160%" : "60%", scale: 0.72, opacity: 0, zIndex: 0 };
}

type HeroEditorialCarouselProps = {
  className?: string;
};

export function HeroEditorialCarousel({ className = "" }: HeroEditorialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const interactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + TOTAL) % TOTAL);
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const pauseAfterInteraction = useCallback(() => {
    setInteractionPaused(true);
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      setInteractionPaused(false);
    }, INTERACTION_PAUSE_MS);
  }, []);

  const handlePrev = useCallback(() => {
    goPrev();
    pauseAfterInteraction();
  }, [goPrev, pauseAfterInteraction]);

  const handleNext = useCallback(() => {
    goNext();
    pauseAfterInteraction();
  }, [goNext, pauseAfterInteraction]);

  const handleDotClick = useCallback(
    (index: number) => {
      goTo(index);
      pauseAfterInteraction();
    },
    [goTo, pauseAfterInteraction]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handlePrev, handleNext]);

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || isHovered || interactionPaused) return;
    const timer = window.setInterval(() => goNext(), AUTO_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isHovered, interactionPaused, reduceMotion]);

  const handleTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) return;
    const delta = clientX - touchStartX.current;
    if (delta > 48) handlePrev();
    else if (delta < -48) handleNext();
    touchStartX.current = null;
  };

  const activeSlide = HERO_GALLERY_SLIDES[activeIndex];
  const transition = {
    duration: reduceMotion ? 0.01 : 0.75,
    ease: [0.22, 0.03, 0.26, 1] as [number, number, number, number],
  };

  return (
    <div
      className={`w-full ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Heart to Heart photography"
    >
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 1.2, ease: "easeOut" }}
            className="absolute inset-[-20%]"
          >
            <Image
              src={activeSlide.src}
              alt=""
              fill
              className="scale-110 object-cover opacity-[0.28] blur-[72px] saturate-[1.15]"
              sizes="600px"
              aria-hidden
            />
          </motion.div>
        </div>

        <div className="relative mx-auto h-[min(52vw,280px)] w-full overflow-hidden sm:h-[320px] md:h-[360px] lg:h-[400px]">
          <div className="absolute inset-0">
            {HERO_GALLERY_SLIDES.map((slide, slideIndex) => {
              const diff = getDiff(slideIndex, activeIndex);
              if (Math.abs(diff) > 1) return null;

              const isActive = diff === 0;
              const transform = slideTransform(diff);

              return (
                <motion.article
                  key={slideIndex}
                  initial={false}
                  animate={{
                    left: "50%",
                    x: transform.x,
                    y: "-50%",
                    scale: transform.scale,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex,
                  }}
                  transition={transition}
                  className="absolute top-1/2 w-[86%] max-w-[440px] sm:max-w-[460px] lg:max-w-[480px]"
                  style={{ zIndex: transform.zIndex }}
                  aria-hidden={!isActive}
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[var(--color-line)] md:rounded-[28px] ${
                      isActive
                        ? `shadow-[0_24px_60px_rgba(92,83,104,0.2)]${!reduceMotion ? " hero-editorial-float" : ""}`
                        : "shadow-[0_12px_32px_rgba(92,83,104,0.1)]"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={isActive ? slide.alt : ""}
                      fill
                      className="object-cover"
                      style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
                      sizes="(max-width: 768px) 86vw, 480px"
                      priority={slideIndex < 2}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-40 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/85 text-[var(--color-plum-muted)] opacity-0 shadow-sm backdrop-blur-sm transition-all hover:border-[var(--color-lavender)] hover:text-[var(--color-lavender-deep)] focus-visible:opacity-100 group-hover:opacity-100 md:left-3 md:size-10"
            aria-label="Previous photo"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-40 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/85 text-[var(--color-plum-muted)] opacity-0 shadow-sm backdrop-blur-sm transition-all hover:border-[var(--color-lavender)] hover:text-[var(--color-lavender-deep)] focus-visible:opacity-100 group-hover:opacity-100 md:right-3 md:size-10"
            aria-label="Next photo"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        className="mt-7 flex max-w-full items-center justify-center gap-1.5 overflow-x-auto px-2 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-8 md:flex-wrap md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Carousel slides"
      >
        {HERO_GALLERY_SLIDES.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to photo ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className="flex shrink-0 items-center justify-center p-1"
            >
              <span
                className={`block rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? "size-[7px] bg-[var(--color-ombre-end)] shadow-[0_0_0_3px_rgba(193,160,210,0.2)]"
                    : "size-[5px] bg-[var(--color-line-strong)]/80 hover:bg-[var(--color-plum-muted)]/50"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
