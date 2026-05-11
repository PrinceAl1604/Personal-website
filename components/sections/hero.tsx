"use client";

import { motion } from "motion/react";
import { content } from "@/lib/content";
import { StatCounter } from "@/components/motion/stat-counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-[120px] pb-20 md:pb-32 px-5 md:px-10"
    >
      <div className="mx-auto max-w-[1920px] flex flex-col justify-between min-h-[calc(100vh-120px)]">
        {/* Top — location + status pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-sm text-text-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span>{content.location}</span>
        </motion.div>

        {/* Middle — eyebrow + headline + CTAs */}
        <div className="py-16 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-6"
          >
            {content.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-hero max-w-5xl"
          >
            {content.hero.headline.split(" ").map((word, i) => {
              const isAccented = i === 1 || i === 6; // tweak which words pop
              return (
                <span key={i}>
                  <span className={isAccented ? "text-accent" : ""}>{word}</span>{" "}
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="body-muted mt-8 max-w-xl text-lg"
          >
            {content.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href={content.hero.primaryCta.href} className="btn-primary">
              {content.hero.primaryCta.label}
              <span>↓</span>
            </a>
            <a href={content.hero.secondaryCta.href} className="btn-ghost">
              {content.hero.secondaryCta.label}
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom — stat counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-[var(--color-border)]"
        >
          {content.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="overflow-hidden">
                <StatCounter to={stat.value} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-text-3">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
