"use client";

import { motion } from "motion/react";
import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function Services() {
  return (
    <section
      id="services"
      className="px-5 md:px-10 py-32 md:py-48 border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">CREATIVE TOOLBOX</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section">
                What I <span className="text-accent">do</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <Reveal delay={0.15}>
              <p className="body-muted text-lg max-w-xl">
                Three focused offerings. Pick one or stack them — most clients
                start with one and bring the others in once they see the work.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.services.map((svc, i) => (
            <Reveal key={svc.num} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6, borderColor: "rgba(0,153,255,0.5)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-bg-card p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="font-[var(--font-display)] text-text-3 text-sm tracking-widest">
                    {svc.num}
                  </span>
                  <span className="size-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">
                    ↗
                  </span>
                </div>
                <h3 className="h-card mb-4">{svc.title}</h3>
                <p className="body-muted">{svc.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
