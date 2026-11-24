"use client";

import { journey } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="A progressive path into professional software engineering"
            description="From education and e-commerce work into full-stack product engineering."
          />
        </Reveal>

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {journey.map((item, index) => (
            <StaggerItem key={item.id}>
              <article className="surface-card relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-6">
                <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                  {item.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
                <span
                  aria-hidden
                  className="absolute right-4 bottom-3 font-display text-5xl font-semibold text-foreground/[0.04] transition-transform duration-500 group-hover:scale-110"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
