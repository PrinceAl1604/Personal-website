import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function Awards() {
  return (
    <section className="px-5 md:px-10 py-32 md:py-48 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">I GOT FEATURED</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-section">
              Awards & <span className="text-accent">recognition</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {content.awards.map((a, i) => (
            <Reveal key={a.platform} delay={i * 0.08}>
              <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-bg-card p-6 md:p-8 h-full flex flex-col justify-between gap-10">
                <p className="font-[var(--font-display)] font-semibold text-2xl tracking-[-0.04em]">
                  {a.platform}
                </p>
                <div>
                  <p className="font-[var(--font-display)] font-black text-accent text-5xl md:text-6xl tracking-[-0.06em] leading-[0.8]">
                    {a.count}
                  </p>
                  <p className="mt-3 text-sm text-text-2">{a.tags}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
