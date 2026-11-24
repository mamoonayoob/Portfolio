"use client";

import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroHighlights, profile } from "@/data/profile";
import { activeSocials } from "@/data/socials";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb-float orb-pulse absolute top-[-12%] left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
        <div className="orb-float-delayed absolute top-[18%] right-[-6%] h-[320px] w-[320px] rounded-full bg-sky-400/15 blur-[110px]" />
        <div className="orb-float absolute bottom-[8%] left-[-10%] h-[260px] w-[260px] rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="absolute top-24 left-1/2 h-px w-[min(70%,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-[1px]" />
        <div className="hero-grid absolute inset-0 opacity-[0.4]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.04]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.p
              className="hero-status mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3.5 py-1.5 text-xs text-muted backdrop-blur-md"
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              </span>
              Available for professional opportunities
            </motion.p>

            <motion.p
              className="mb-3 font-mono text-[11px] tracking-[0.22em] text-accent uppercase"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04, ease: easeOut }}
            >
              Portfolio · Full Stack Engineer
            </motion.p>

            <motion.h1
              className="text-glow-strong font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem] xl:leading-[1.05]"
              initial={
                reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.06, ease: easeOut }}
            >
              <span itemProp="name">{profile.name}</span>
            </motion.h1>
            <p className="sr-only">
              Full Stack and MERN Stack Developer in Lahore, Pakistan —
              Associate Software Engineer at Tranzo and part-time Full Stack
              Developer on Ordinify HRMS.
            </p>

            <motion.div
              className="mt-5 space-y-2"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: easeOut }}
            >
              <p className="text-lg font-medium text-glow text-accent sm:text-xl">
                {profile.role}{" "}
                <span className="text-muted">at</span> {profile.company}
              </p>
              <p className="text-sm text-muted sm:text-[0.95rem]">
                {profile.secondaryRole.role} at {profile.secondaryRole.company}{" "}
                <span className="rounded-md border border-accent/25 bg-accent/10 px-1.5 py-0.5 text-[11px] text-accent">
                  {profile.secondaryRole.employmentType}
                </span>
              </p>
              <p className="text-sm text-muted/90">{profile.titles.join(" · ")}</p>
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: easeOut }}
            >
              {profile.headline}
            </motion.p>

            <motion.ul
              className="mt-7 flex flex-wrap gap-2.5"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.28 },
                },
              }}
            >
              {heroHighlights.map((item) => (
                <motion.li
                  key={item}
                  className="hero-chip inline-flex cursor-default items-center gap-1.5 rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs text-muted"
                  variants={
                    reduceMotion
                      ? undefined
                      : {
                          hidden: { opacity: 0, y: 10, scale: 0.96 },
                          show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.4, ease: easeOut },
                          },
                        }
                  }
                >
                  <Sparkles
                    size={12}
                    className="text-accent drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38, ease: easeOut }}
            >
              <Button href="#tranzo">
                View Tranzo Work
                <ArrowDownRight size={16} />
              </Button>
              <Button href="#ordinify" variant="secondary">
                Ordinify Work
              </Button>
              <ResumeButton />
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.46 }}
            >
              <span className="glow-ring inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/40 px-3 py-1.5 transition-all">
                <MapPin size={14} className="text-accent" />
                {profile.location}
              </span>
              {activeSocials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: easeOut }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/10 blur-2xl"
            />
            <motion.div
              aria-hidden
              className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent/70 via-sky-400/20 to-cyan-300/30"
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.55, 1, 0.55] }
              }
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="hero-panel relative overflow-hidden rounded-2xl border border-accent/25 bg-navy-900/80 p-6 backdrop-blur-xl sm:p-8"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: { type: "spring", stiffness: 280, damping: 20 },
                    }
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl"
              />

              <div className="relative mb-6 flex items-center justify-between gap-4">
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { rotate: [-2, 2, 0], scale: 1.04 }
                  }
                  transition={{ duration: 0.45 }}
                >
                  <Portrait
                    src={profile.portraitSrc}
                    alt={`${profile.name} portrait`}
                    fallback="MA"
                    size={84}
                  />
                </motion.div>
                <div className="glow-ring rounded-xl border border-accent/20 bg-navy-950/70 px-3.5 py-2.5 text-right transition-all">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    WMS + Portals
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                  Currently
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {profile.company}
                </h2>
                <p className="mt-1 text-sm text-muted">{profile.role}</p>

                <div className="mt-4 grid gap-2">
                  <a
                    href="#tranzo"
                    className="hero-chip rounded-lg border border-accent/20 bg-accent/5 px-3 py-2.5 text-xs text-muted"
                  >
                    <span className="block font-medium text-foreground">
                      Tranzo · Courier & Logistics
                    </span>
                    <span className="mt-0.5 block">
                      Website · Backoffice · Merchant · WMS
                    </span>
                  </a>
                  <a
                    href="#ordinify"
                    className="hero-chip rounded-lg border border-border/80 bg-navy-950/50 px-3 py-2.5 text-xs text-muted"
                  >
                    <span className="block font-medium text-foreground">
                      Virtual Dive · Ordinify HRMS
                    </span>
                    <span className="mt-0.5 block">
                      Superadmin · ESS · MSS · Website · Part-time
                    </span>
                  </a>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-border/80 pt-6">
                  {profile.focusAreas.slice(0, 4).map((area, i) => (
                    <motion.li
                      key={area}
                      className="flex items-start gap-2 text-sm text-muted transition-colors hover:text-foreground"
                      initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.45 + i * 0.08,
                        duration: 0.4,
                        ease: easeOut,
                      }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
                      {area}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
