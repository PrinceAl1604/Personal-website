"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

/**
 * Sticky-scroll process section — the centerpiece of the Archer site.
 * Left column is pinned while the right column scrolls through 4 steps.
 * As you scroll, a progress bar fills and the active step highlights.
 */
export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="border-t border-[var(--color-border)] bg-bg"
    >
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[1920px] px-5 md:px-10"
        style={{ height: `${content.process.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 w-full">
            {/* Pinned left column */}
            <div className="md:col-span-5">
              <p className="eyebrow mb-6">MY APPROACH</p>
              <h2 className="h-section mb-8">
                A process that <span className="text-accent">earns</span> trust.
              </h2>
              <p className="body-muted text-lg max-w-md mb-10">
                Four phases, one outcome — design that ships, performs, and
                lasts longer than the launch.
              </p>

              {/* Progress bar */}
              <div className="relative h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-accent"
                  style={{ width: progressHeight }}
                />
              </div>
            </div>

            {/* Scrolling right column */}
            <div className="md:col-span-7 space-y-8">
              {content.process.map((step, i) => (
                <ProcessStep
                  key={step.num}
                  step={step}
                  index={i}
                  total={content.process.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Step = (typeof content.process)[number];

function ProcessStep({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: Step;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card fades in over its 1/total segment of the scroll.
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end - 0.05, end],
    [0.25, 1, 1, 0.25]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 0.98]
  );

  return (
    <motion.article
      style={{ opacity, scale }}
      className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-bg-card p-8 md:p-10"
    >
      <div className="flex items-baseline gap-6">
        <span className="font-[var(--font-display)] font-semibold text-accent text-3xl md:text-4xl tracking-[-0.04em]">
          {step.num}
        </span>
        <h3 className="h-card">{step.title}</h3>
      </div>
      <p className="body-muted mt-6 text-lg max-w-2xl">{step.body}</p>
    </motion.article>
  );
}

// re-export the hook type for the helper component above
export { useScroll };
