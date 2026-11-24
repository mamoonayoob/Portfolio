"use client";

import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience across product and engineering teams"
            description="Currently building at Tranzo (courier & logistics) while continuing part-time Full Stack work on Ordinify at Virtual Dive Studios."
          />
        </Reveal>

        <div className="relative space-y-5">
          <div
            aria-hidden
            className="absolute top-3 bottom-3 left-[11px] hidden w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:block"
          />

          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} variant="left">
              <article className="group relative md:pl-10">
                <span
                  aria-hidden
                  className="absolute top-6 left-0 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-navy-950 transition-transform duration-300 group-hover:scale-125 md:block"
                />
                <div className="surface-card rounded-2xl border border-border bg-surface/40 p-5 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {item.role}
                        </h3>
                        {item.current ? (
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-accent uppercase">
                            Current
                          </span>
                        ) : null}
                        {item.employmentType ? (
                          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-muted uppercase">
                            {item.employmentType}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {item.company}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs tracking-wide text-muted uppercase">
                      {item.period}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
