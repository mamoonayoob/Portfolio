import Link from "next/link";
import { profile } from "@/data/profile";
import { activeSocials } from "@/data/socials";
import { Container } from "@/components/ui/Container";

const footerNav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

const workNav = [
  { href: "/#tranzo", label: "Tranzo overview" },
  { href: "/#ordinify", label: "Ordinify overview" },
  { href: "/work/tranzo", label: "Tranzo case study" },
  { href: "/work/ordinify", label: "Ordinify case study" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-navy-975">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-muted">
              Full Stack / MERN Developer in {profile.location}. Building
              logistics portals, WMS, and HRMS product surfaces.
            </p>
            <p className="mt-3 text-xs text-muted/80">
              {profile.role} · {profile.company}
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              Work
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {workNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {activeSocials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeSrc}
                  className="transition-colors hover:text-accent"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>
            Full Stack Developer · MERN · Lahore, Pakistan
          </p>
        </div>
      </Container>
    </footer>
  );
}
