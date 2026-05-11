import { content } from "@/lib/content";

const socials = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-border)] bg-bg"
    >
      <div className="mx-auto max-w-[1920px] px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Big CTA */}
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Let’s work together</p>
            <h2 className="h-section max-w-2xl">
              Have an idea worth designing?
              <br />
              <span className="text-text-2">Let’s talk.</span>
            </h2>
            <a
              href={`mailto:${content.email}`}
              className="btn-primary mt-10 text-base"
            >
              {content.email}
              <span>↗</span>
            </a>
          </div>

          {/* Nav + socials */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-4">Navigate</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#works" className="hover:text-accent transition-colors">Works</a></li>
                <li><a href="#process" className="hover:text-accent transition-colors">Process</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Elsewhere</p>
              <ul className="space-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-text-3">
          <p>© {new Date().getFullYear()} Alex Njonkoua. All rights reserved.</p>
          <p>Built with Next.js · Designed in Figma</p>
        </div>
      </div>
    </footer>
  );
}
