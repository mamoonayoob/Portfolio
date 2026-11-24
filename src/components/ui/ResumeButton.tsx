"use client";

import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type ResumeButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "link";
};

export function ResumeButton({
  className,
  variant = "secondary",
}: ResumeButtonProps) {
  const styles = {
    primary:
      "btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-navy-950",
    secondary:
      "btn-ghost-glow inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/40",
    link: "inline-flex items-center gap-2 text-sm text-accent hover:underline",
  } as const;

  return (
    <a
      href={profile.resumeSrc}
      download="Mamoon-Ayoob-CV.pdf"
      className={cn(styles[variant], className)}
    >
      <Download size={16} />
      Download CV
    </a>
  );
}
