"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  titleId,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "mb-10 max-w-2xl md:mb-14",
        align === "center" && "mx-auto text-center",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      <p className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
      <span
        aria-hidden
        className={cn(
          "mt-5 block h-px w-16 bg-gradient-to-r from-accent to-transparent",
          align === "center" && "mx-auto",
        )}
      />
    </motion.div>
  );
}
