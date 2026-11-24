"use client";

import { FormEvent, useState } from "react";
import { Copy, Check, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { activeSocials } from "@/data/socials";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      if (data.mode === "mailto" && data.mailto) {
        const subject = encodeURIComponent(data.mailto.subject);
        const body = encodeURIComponent(data.mailto.body);
        window.location.href = `mailto:${data.mailto.to}?subject=${subject}&body=${body}`;
      }

      setStatus("sent");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next product or engineering need"
          description="Open to professional conversations around full-stack development, MERN applications, and business software."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <div className="surface-card space-y-4 rounded-2xl border border-border bg-surface/40 p-6 sm:p-7">
              <a
                href={`mailto:${profile.email}`}
                className="skill-chip flex items-start gap-3 rounded-xl border border-border/80 bg-navy-900/40 p-4"
              >
                <span className="mt-0.5 text-accent">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-muted uppercase">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-foreground">
                    {profile.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/-/g, "")}`}
                className="skill-chip flex items-start gap-3 rounded-xl border border-border/80 bg-navy-900/40 p-4"
              >
                <span className="mt-0.5 text-accent">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-muted uppercase">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-foreground">
                    {profile.phone}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-navy-900/40 p-4">
                <span className="mt-0.5 text-accent">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-muted uppercase">
                    Location
                  </span>
                  <span className="mt-1 block text-sm text-foreground">
                    {profile.location}
                  </span>
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Email copied" : "Copy email"}
                </button>
                <ResumeButton variant="secondary" className="!py-2" />
              </div>

              {activeSocials.length > 0 ? (
                <div className="flex flex-wrap gap-3 border-t border-border pt-4">
                  {activeSocials.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="right">
            <form
              onSubmit={onSubmit}
              className="surface-card rounded-2xl border border-border bg-surface/40 p-6 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-muted sm:col-span-1">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm text-muted sm:col-span-1">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm text-muted">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell me about the role, product, or project."
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "sent" ? (
                <p className="mt-3 text-sm text-emerald-400">
                  Message ready — thanks for reaching out.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mt-3 text-sm text-red-400">{error}</p>
              ) : null}
              {status === "idle" ? (
                <p className="mt-3 text-xs text-muted/80">
                  Uses Formspree when configured (`FORMSPREE_FORM_ID`), otherwise
                  opens your email client.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
