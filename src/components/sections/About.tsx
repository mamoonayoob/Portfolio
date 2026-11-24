"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="About"
          titleId="about-heading"
          title="Software engineer focused on practical, business-ready products"
          description="A Full Stack / MERN Developer in Lahore building logistics portals, warehouse workflows, and HRMS product surfaces."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal variant="left">
            <div className="surface-card space-y-5 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
              {profile.summary.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted sm:text-[1.05rem]"
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
                Explore detailed case studies for{" "}
                <Link
                  href="/work/tranzo"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  Tranzo courier portals & WMS
                </Link>{" "}
                and{" "}
                <Link
                  href="/work/ordinify"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  Ordinify HRMS
                </Link>
                , or jump to{" "}
                <a
                  href="#projects"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  featured projects
                </a>{" "}
                and{" "}
                <a
                  href="#contact"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  contact
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} variant="right">
            <div className="surface-card rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Focus areas
              </h3>
              <ul className="mt-5 space-y-3">
                {profile.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="skill-chip rounded-lg border border-border/70 bg-navy-900/50 px-3.5 py-2.5 text-sm text-muted"
                  >
                    {area}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                  Education
                </p>
                <p className="mt-2 font-medium text-foreground">
                  {profile.education.degree}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {profile.education.institution} · {profile.education.year}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
