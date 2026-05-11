import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

/**
 * Simplified Process section — no 400vh sticky container, no useScroll.
 * Just stacked, reveal-on-scroll cards. We'll re-add the scrollytelling
 * once we've confirmed the runtime is stable.
 */
export function Process() {
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
