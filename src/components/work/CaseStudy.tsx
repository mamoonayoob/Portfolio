import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";

type CaseStudyProps = {
  eyebrow: string;
  title: string;
  summary: string;
  company: string;
  role: string;
  website?: string;
  surfaces: { title: string; description: string; url?: string }[];
  tech: readonly string[];
  related?: { href: string; label: string; description: string }[];
  breadcrumbLabel: string;
  path: string;
};

export function CaseStudy({
  eyebrow,
  title,
  summary,
  company,
  role,
  website,
  surfaces,
  tech,
  related = [],
  breadcrumbLabel,
}: CaseStudyProps) {
  return (
    <main id="main" className="pt-28 pb-20">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/#projects" },
            { label: breadcrumbLabel },
          ]}
        />

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
          <span className="rounded-full border border-border px-3 py-1">
            {company}
          </span>
          <span className="rounded-full border border-border px-3 py-1">
            {role}
          </span>
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent"
            >
              Visit site <ArrowUpRight size={14} />
            </a>
          ) : null}
        </div>

        <section className="mt-10" aria-labelledby="surfaces-heading">
          <h2
            id="surfaces-heading"
            className="font-display text-xl font-semibold text-foreground"
          >
            Product surfaces
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {surfaces.map((surface) => (
              <article
                key={surface.title}
                className="surface-card rounded-2xl border border-border bg-surface/40 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {surface.title}
                  </h3>
                  {surface.url ? (
                    <a
                      href={surface.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {surface.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="tech-heading">
          <h2
            id="tech-heading"
            className="font-display text-xl font-semibold text-foreground"
          >
            Technologies
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-surface/50 px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-12" aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="font-display text-xl font-semibold text-foreground"
            >
              Related work
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="surface-card rounded-2xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/40"
                >
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <nav
          aria-label="Case study footer links"
          className="mt-12 flex flex-wrap gap-4 border-t border-border pt-6 text-sm"
        >
          <Link href="/#experience" className="text-accent hover:underline">
            Experience
          </Link>
          <Link href="/#projects" className="text-accent hover:underline">
            Projects
          </Link>
          <Link href="/#contact" className="text-accent hover:underline">
            Contact
          </Link>
        </nav>
      </Container>
    </main>
  );
}
