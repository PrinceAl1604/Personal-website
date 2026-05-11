import { content } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section
      id="about"
      className="px-5 md:px-10 py-32 md:py-48 border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">{content.about.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-section">{content.about.headline}</h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:pt-6 space-y-6">
          {content.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08} as="p">
              <span className="body-muted text-lg md:text-xl block">{p}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
