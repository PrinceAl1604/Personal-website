import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function Testimonials() {
  return (
    <section className="px-5 md:px-10 py-32 md:py-48 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">CLIENT TESTIMONIALS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-section">
              Don’t take my <span className="text-accent">word</span> for it.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {content.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-bg-card p-8 md:p-12">
                <span className="text-accent text-5xl leading-none">“</span>
                <p className="mt-2 text-xl md:text-2xl font-[var(--font-display)] tracking-[-0.03em] leading-[1.35]">
                  {t.quote}
                </p>
                <div className="mt-10 flex items-center gap-4 pt-6 border-t border-[var(--color-border)]">
                  <div className="size-12 rounded-full bg-gradient-to-br from-accent to-warm" />
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{t.name}</p>
                    <p className="text-sm text-text-2">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
