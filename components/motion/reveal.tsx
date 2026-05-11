"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "p" | "span" | "h1" | "h2" | "h3";
};

/**
 * Reveal — the single motion primitive used across every section.
 * Fades + lifts in once the element enters the viewport. Use the
 * `delay` prop to stagger siblings: 0, 0.08, 0.16, 0.24…
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: Props) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
