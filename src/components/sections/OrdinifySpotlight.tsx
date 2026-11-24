import { ArrowUpRight, Shield, Users, UserCog, Globe } from "lucide-react";
import { ordinify } from "@/data/ordinify";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  superadmin: Shield,
  ess: Users,
  mss: UserCog,
  website: Globe,
} as const;

export function OrdinifySpotlight() {
  return (
    <section id="ordinify" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured Product Work"
            title={`${ordinify.productName} — ${ordinify.productType} by ${ordinify.company}`}
            description={ordinify.summary}
          />
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-navy-800/80 via-navy-900 to-navy-950 p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                  {ordinify.role} · {ordinify.employmentType} ·{" "}
                  {ordinify.company}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {ordinify.productName}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {ordinify.tagline}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={ordinify.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition hover:bg-accent/20"
                  >
                    Visit ordinify.com
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="/work/ordinify"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted transition hover:border-accent/30 hover:text-foreground"
                  >
                    Case study
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {ordinify.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-muted backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {ordinify.surfaces.map((surface, index) => {
            const Icon = icons[surface.id as keyof typeof icons] ?? Shield;

            return (
              <Reveal key={surface.id} delay={index * 0.05}>
                <article className="surface-card group h-full rounded-2xl border border-border bg-surface/40 p-5 sm:p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={18} />
                    </span>
                    {"url" in surface && surface.url ? (
                      <a
                        href={surface.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        Live
                        <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
                        Portal
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {surface.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {surface.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
