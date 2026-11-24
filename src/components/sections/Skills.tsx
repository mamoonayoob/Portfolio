"use client";

import {
  Boxes,
  Code2,
  Database,
  ShoppingBag,
  Terminal,
  Workflow,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  frontend: Code2,
  backend: Terminal,
  databases: Database,
  ecommerce: ShoppingBag,
  tools: Boxes,
  practices: Workflow,
} as const;

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical skills organized by engineering domain"
            description="A practical stack used across full-stack products, enterprise workflows, and e-commerce platforms."
          />
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon =
              icons[category.id as keyof typeof icons] ?? Code2;

            return (
              <StaggerItem key={category.id}>
                <div className="surface-card h-full rounded-2xl border border-border bg-surface/40 p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="skill-chip rounded-md border border-border/80 bg-navy-900/60 px-2.5 py-1 text-xs text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
