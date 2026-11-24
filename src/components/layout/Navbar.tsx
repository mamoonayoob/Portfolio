"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const workLinks = [
  { href: "#tranzo", label: "Tranzo" },
  { href: "#ordinify", label: "Ordinify" },
  { href: "/work/tranzo", label: "Tranzo case study" },
  { href: "/work/ordinify", label: "Ordinify case study" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.replace("#", "")), "tranzo", "ordinify"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const primaryLinks = navLinks.filter(
    (l) => !["#tranzo", "#ordinify"].includes(l.href),
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo priority className="h-14 sm:h-[4.25rem]" />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm transition-colors",
                  active === link.href
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm transition-colors",
                active === "#tranzo" || active === "#ordinify"
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:text-foreground",
              )}
              aria-expanded={workOpen}
              onClick={() => setWorkOpen((v) => !v)}
              onBlur={() => window.setTimeout(() => setWorkOpen(false), 150)}
            >
              Work
              <ChevronDown
                size={14}
                className={cn("transition-transform", workOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence>
              {workOpen ? (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute top-full left-0 mt-2 min-w-[200px] rounded-xl border border-border bg-background/95 p-2 shadow-glow backdrop-blur-xl"
                >
                  {workLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                      onClick={() => setWorkOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button href="/#contact" variant="secondary" className="!py-2 !text-xs">
            Contact
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-b border-border bg-background/98 lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-sm hover:bg-surface",
                      active === link.href
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-2 pb-1 text-[11px] font-mono tracking-[0.16em] text-accent uppercase">
                Work
              </li>
              {workLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href="/#contact"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Contact Me
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
