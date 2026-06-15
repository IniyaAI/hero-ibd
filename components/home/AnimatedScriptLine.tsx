"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";

const scriptBaseClass =
  "font-script-accent mt-1 inline-block pb-1 text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[0.95] md:mt-2";

export function AnimatedScriptLine() {
  const reduceMotion = useReducedMotion();
  const [revealDone, setRevealDone] = useState(Boolean(reduceMotion));

  const scriptClassName = [
    scriptBaseClass,
    "script-accent-gradient",
    !reduceMotion && !revealDone ? "hero-script-brush-reveal" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={scriptClassName}
      onAnimationEnd={(event) => {
        if (event.animationName === "hero-script-brush-reveal") {
          setRevealDone(true);
        }
      }}
    >
      leads to action
    </span>
  );
}
