"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { motion } from "motion/react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
};

/**
 * The giant 0+ stat counter.
 * - Starts at 0, animates to `to` when it scrolls into view.
 * - Renders the suffix (e.g. "+") as a separate, non-animated element
 *   so the kerning stays clean.
 */
export function StatCounter({ to, suffix = "+", duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span
        className="font-[var(--font-display)] font-black tracking-[-0.06em] leading-[0.76]"
        style={{
          fontSize: "clamp(4rem, 12vw, var(--text-stat))",
        }}
      >
        {rounded}
      </motion.span>
      <span
        className="font-[var(--font-display)] font-black tracking-[-0.06em] leading-[0.76] text-accent"
        style={{
          fontSize: "clamp(4rem, 12vw, var(--text-stat))",
        }}
      >
        {suffix}
      </span>
    </span>
  );
}
