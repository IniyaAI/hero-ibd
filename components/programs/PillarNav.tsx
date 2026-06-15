"use client";

import { useEffect, useState } from "react";
import { BookOpen, Heart, Megaphone } from "lucide-react";
import { PILLAR_NAV } from "@/lib/programs-content";

const icons = {
  heart: Heart,
  book: BookOpen,
  megaphone: Megaphone,
} as const;

export function PillarNav() {
  const [active, setActive] = useState<string>("support");

  useEffect(() => {
    const sections = PILLAR_NAV.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="sticky top-16 z-40 border-b hairline bg-white/95 backdrop-blur-sm"
      aria-label="Program pillars"
    >
      <div className="container-full">
        <ul className="flex gap-1 overflow-x-auto py-2 md:justify-center md:gap-2">
          {PILLAR_NAV.map((item) => {
            const Icon = icons[item.icon];
            const isActive = active === item.id;

            return (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`inline-flex items-center gap-2 rounded-[var(--radius)] px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-[var(--color-coral)] text-white shadow-sm"
                      : "text-[var(--color-plum-muted)] hover:bg-[var(--color-wash)] hover:text-[var(--color-plum)]"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Icon size={16} aria-hidden />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
