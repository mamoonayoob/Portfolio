"use client";

import { techStrip } from "@/data/profile";

export function TechStrip() {
  const items = [...techStrip, ...techStrip];

  return (
    <div className="relative border-y border-border/70 bg-navy-975/80 py-4 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-950 to-transparent"
      />
      <div className="marquee-track flex w-max gap-3">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="rounded-full border border-border/80 bg-surface/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
