"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: "up" | "scale" | "fade" | "left" | "right";
};

const variantsMap = {
  up: (y: number): Variants => ({
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: easeOut },
    },
  }),
  scale: (): Variants => ({
    hidden: { opacity: 0, scale: 0.94, y: 18 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: easeOut },
    },
  }),
  fade: (): Variants => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.55, ease: easeOut },
    },
  }),
  left: (): Variants => ({
    hidden: { opacity: 0, x: -28 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: easeOut },
    },
  }),
  right: (): Variants => ({
    hidden: { opacity: 0, x: 28 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: easeOut },
    },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  variant = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants =
    variant === "up" ? variantsMap.up(y) : variantsMap[variant]();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: variants.hidden,
        show: {
          ...variants.show,
          transition: {
            ...(typeof variants.show === "object" &&
            variants.show &&
            "transition" in variants.show
              ? variants.show.transition
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.09, delayChildren: 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      variants={{
        hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
