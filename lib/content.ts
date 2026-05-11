/**
 * Single source of truth for portfolio copy + data.
 * Edit this file to make the site yours — components consume from here.
 *
 * Sections marked with `★ EDIT ME` are the ones where your voice/work
 * matters most. Defaults are placeholders.
 */

export const content = {
  name: "Alex Njonkoua",
  role: "Senior UI/UX & Brand Designer",
  location: "Based in Cameroon · Available worldwide",
  email: "hello@alex.design", // ★ EDIT ME — real address

  hero: {
    eyebrow: "Hi, I'm Alex.",
    headline: "I design products people remember and brands they trust.", // ★ EDIT ME
    sub: "Crafting digital experiences for ambitious founders, startups, and teams.",
    primaryCta: { label: "See my work", href: "#works" },
    secondaryCta: { label: "Email me", href: "mailto:hello@alex.design" },
  },

  // ★ EDIT ME — your real numbers
  stats: [
    { value: 24, label: "Projects shipped" },
    { value: 18, label: "Happy clients" },
    { value: 6, label: "Years designing" },
    { value: 3, label: "Awards" },
  ],

  about: {
    eyebrow: "WHO I AM",
    headline: "I build brands and products that feel inevitable.",
    paragraphs: [
      // ★ EDIT ME — your real story, 2–3 short paragraphs
      "I'm Alex — a senior product and brand designer with six years helping startups and growing teams turn rough ideas into shipped, lovable products.",
      "I work across the full design surface: brand identity, UX research, interaction design, and high-fidelity UI. The goal is always the same — design that's clear, opinionated, and earns trust.",
    ],
  },

  works: [
    // ★ EDIT ME — your 3 real projects. Add real image paths under /public.
    {
      title: "Project One",
      category: "Product Design",
      year: "2025",
      image: "/projects/project-1.jpg",
      href: "#",
    },
    {
      title: "Project Two",
      category: "Brand Identity",
      year: "2025",
      image: "/projects/project-2.jpg",
      href: "#",
    },
    {
      title: "Project Three",
      category: "Web Design & Dev",
      year: "2024",
      image: "/projects/project-3.jpg",
      href: "#",
    },
  ],

  process: [
    {
      num: "01",
      title: "Discover",
      body: "Audit, interviews, audience mapping. I want to understand the why before I touch the what.",
    },
    {
      num: "02",
      title: "Define",
      body: "Research becomes strategy. We agree on the bet, the metric, and the constraints before pixels.",
    },
    {
      num: "03",
      title: "Design",
      body: "Branding, IA, wireframes, high-fidelity. Tight loops, fast iteration, no precious darlings.",
    },
    {
      num: "04",
      title: "Deliver",
      body: "Pixel-perfect handoff or built-in code. I stay close to launch so nothing gets lost in translation.",
    },
  ],

  services: [
    // ★ EDIT ME — fine-tune the descriptions to your voice
    {
      num: "01",
      title: "Design Coaching & Consulting",
      body: "1:1 mentorship, design reviews, and team-level audits. I help designers level up and teams ship faster.",
    },
    {
      num: "02",
      title: "Product Design",
      body: "End-to-end UX & UI for SaaS, mobile apps, and web platforms. Research, IA, interaction, prototypes, ship.",
    },
    {
      num: "03",
      title: "Brand Design",
      body: "Identity systems that scale: logo, typography, color, visual language, and the rules to use them.",
    },
  ],

  testimonials: [
    // ★ EDIT ME — replace with real quotes from real clients
    {
      quote:
        "Alex completely re-shaped how we think about our product. The result was sharper, faster, and finally on-brand.",
      name: "Client Name",
      role: "Founder, Company",
    },
    {
      quote:
        "From brand to product, Alex delivered a level of craft we couldn't find elsewhere. We'd hire him again tomorrow.",
      name: "Client Name",
      role: "Head of Design, Company",
    },
  ],

  awards: [
    // ★ EDIT ME — keep honest. Remove this whole section if you don't have any yet.
    { platform: "Awwwards", count: "2×", tags: "Honourable Mention" },
    { platform: "CSSDA", count: "3×", tags: "Best UI / Innovation" },
    { platform: "Behance", count: "5×", tags: "Curated Galleries" },
    { platform: "Dribbble", count: "10K+", tags: "Followers" },
  ],
} as const;
