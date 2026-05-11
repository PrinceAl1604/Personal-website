"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
      style={{ height: 70 }}
    >
      <div className="mx-auto max-w-[1920px] h-full px-5 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="font-[var(--font-display)] text-lg font-semibold tracking-[-0.04em]"
        >
          Alex<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-[-0.02em] text-text-2 hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:hello@alex.design"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--color-border-2)] px-4 py-2 text-sm font-medium tracking-[-0.02em] hover:bg-white/5 transition-colors"
        >
          Book a call
          <span className="text-accent">↗</span>
        </a>
      </div>
    </header>
  );
}
