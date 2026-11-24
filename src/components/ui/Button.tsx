"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "btn-glow bg-accent text-white hover:bg-accent-soft focus-visible:ring-accent",
  secondary:
    "btn-ghost-glow border border-border bg-surface/60 text-foreground hover:border-accent/50 hover:bg-surface-elevated focus-visible:ring-accent/60",
  ghost: "text-muted hover:text-foreground focus-visible:ring-accent/40",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
    variants[variant],
    className,
  );

  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { y: -3, scale: 1.03 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 22 },
      };

  if (external) {
    return (
      <motion.a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div className="inline-flex" {...motionProps}>
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  );
}
