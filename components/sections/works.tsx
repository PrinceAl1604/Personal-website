"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function Works() {
  return (
    <section
      id="works"
      className="px-5 md:px-10 py-32 md:py-48 border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">SELECTED WORKS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section">
                Work that <span className="text-accent">speaks</span> louder.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <span className="text-sm text-text-3">
              {content.works.length} featured projects
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.works.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <Link
                href={w.href}
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-[var(--radius-card)] bg-bg-card aspect-[4/5]"
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${w.image})` }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Placeholder gradient when image is missing */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-warm/10 mix-blend-overlay" />
                  <div className="absolute bottom-4 right-4 size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white">↗</span>
                  </div>
                </motion.div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="h-card">{w.title}</h3>
                    <p className="mt-1 text-sm text-text-2">{w.category}</p>
                  </div>
                  <span className="text-xs text-text-3 mt-2">{w.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
