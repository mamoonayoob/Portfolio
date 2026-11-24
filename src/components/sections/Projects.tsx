"use client";

import Image from "next/image";
import { ArrowUpRight, Briefcase, FolderKanban } from "lucide-react";
import { professionalProducts, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectCard({
  title,
  description,
  highlights,
  tech,
  liveUrl,
  repoUrl,
  badge,
  company,
  imageSrc,
  caseStudyUrl,
}: {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  badge?: string;
  company?: string;
  imageSrc?: string;
  caseStudyUrl?: string;
}) {
  const isSvg = Boolean(imageSrc?.endsWith(".svg"));

  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40">
      <div className="relative h-44 overflow-hidden bg-navy-900">
        {imageSrc ? (
          isSvg ? (
            // SVGs via next/image often fail to paint with `fill` — use native img.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={`${title} preview`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Image
              src={imageSrc}
              alt={`${title} preview`}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 33vw"
            />
          )
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.25), transparent 40%), linear-gradient(135deg, #0b1224, #1e3a8a)",
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/40 text-sky-300 backdrop-blur">
              {badge === "Professional" ? (
                <Briefcase size={14} />
              ) : (
                <FolderKanban size={14} />
              )}
            </span>
            {badge ? (
              <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] text-white/85 backdrop-blur">
                {badge}
              </span>
            ) : null}
          </div>
          {company ? (
            <span className="max-w-[45%] truncate text-right text-[11px] text-white/75">
              {company}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-4 space-y-1.5">
          {highlights.map((item) => (
            <li key={item} className="text-sm text-muted/90">
              · {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="skill-chip rounded-md border border-border bg-navy-900/70 px-2 py-1 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {(liveUrl || repoUrl || caseStudyUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-4">
            {caseStudyUrl ? (
              <a
                href={caseStudyUrl}
                className="inline-flex items-center gap-1 text-sm text-accent transition-transform hover:translate-x-0.5 hover:underline"
              >
                Case study <ArrowUpRight size={14} />
              </a>
            ) : null}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent transition-transform hover:translate-x-0.5 hover:underline"
              >
                Live <ArrowUpRight size={14} />
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent transition-transform hover:translate-x-0.5 hover:underline"
              >
                Code <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work and professional product experience"
            description="Selected applications plus confidential-safe summaries of product work — including Ordinify HRMS and Tranzo logistics portals."
          />
        </Reveal>

        <Reveal>
          <h3 className="mb-5 font-display text-lg font-semibold text-foreground">
            Featured projects
          </h3>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                highlights={project.highlights}
                tech={project.tech}
                liveUrl={project.liveUrl || undefined}
                repoUrl={project.repoUrl || undefined}
                imageSrc={project.imageSrc || undefined}
                badge="Project"
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <h3 className="mt-14 mb-5 font-display text-lg font-semibold text-foreground">
            Professional product experience
          </h3>
          <p className="mb-6 max-w-2xl text-sm text-muted">
            High-level summaries only — no confidential company details,
            proprietary screens, or internal business information.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {professionalProducts.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                highlights={project.highlights}
                tech={project.tech}
                liveUrl={project.liveUrl || undefined}
                company={project.company}
                imageSrc={project.imageSrc || undefined}
                caseStudyUrl={
                  project.id.startsWith("tranzo")
                    ? "/work/tranzo"
                    : project.id.startsWith("ordinify")
                      ? "/work/ordinify"
                      : undefined
                }
                badge="Professional"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
