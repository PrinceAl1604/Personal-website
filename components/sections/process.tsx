"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

/**
 * Process section — two layouts:
 *
 * • Desktop (≥1024px): the classic Archer sticky-scroll "scrollytelling"
 *   — left column pinned, right column of step cards advances while
 *   a progress bar fills the left.
 *
 * • Mobile/tablet (<1024px): a simple stacked card grid, no scroll
 *   subscriptions. This is what was crashing before — running
 *   useScroll with a 400vh container on phones is a memory-killer.
 */
export function Process() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mobile path — render simple cards, never touch useScroll
  if (!isDesktop) {
    return <ProcessSimple />;
  }

  return <ProcessSticky />;
}

/* ─────────────────────────────────────────────────────
   Mobile / fallback — no scroll subscriptions
   ───────────────────────────────────────────────────── */

function ProcessSimple() {
  return (
    <section
      id="process"
      className="px-5 md:px-10 py-32 md:py-48 border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">MY APPROACH</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section">
                A process that <span className="text-accent">earns</span> trust.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <Reveal delay={0.15}>
              <p className="body-muted text-lg max-w-xl">
                Four phases, one outcome — design that ships, performs, and
                lasts longer than the launch.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.process.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08}>
              <article className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-bg-card p-8 md:p-10">
                <div className="flex items-baseline gap-6">
                  <span className="font-[var(--font-display)] font-semibold text-accent text-3xl md:text-4xl tracking-[-0.04em]">
                    {step.num}
                  </span>
                  <h3 className="h-card">{step.title}</h3>
                </div>
                <p className="body-muted mt-6 text-lg max-w-2xl">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   Desktop — sticky-scroll scrollytelling
   ───────────────────────────────────────────────────── */

function ProcessSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

              <div className="relative h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-accent origin-left"
                  style={{ scaleX: progressScaleX }}
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
  scrollYProgress: MotionValue<number>;
}) {
  // Memoize the input/output arrays so they don't churn the transform
  // every render — this was a contributor to the original perf hit.
  const opacityKeys = useMemo(() => {
    const start = index / total;
    const end = (index + 1) / total;
    return {
      input: [start - 0.05, start, end - 0.05, end] as const,
      output: [0.25, 1, 1, 0.25] as const,
      scaleInput: [start, end] as const,
      scaleOutput: [1, 0.98] as const,
    };
  }, [index, total]);

  const opacity = useTransform(
    scrollYProgress,
    [...opacityKeys.input],
    [...opacityKeys.output]
  );
  const scale = useTransform(
    scrollYProgress,
    [...opacityKeys.scaleInput],
    [...opacityKeys.scaleOutput]
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
