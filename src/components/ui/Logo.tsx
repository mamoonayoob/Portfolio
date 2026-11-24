import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** full wordmark vs compact monogram */
  variant?: "full" | "mark";
  /** solid plate (footer) vs transparent (header) */
  plate?: boolean;
  href?: string;
  priority?: boolean;
};

export function Logo({
  className,
  variant = "full",
  plate = false,
  href = "/#home",
  priority = false,
}: LogoProps) {
  const isMark = variant === "mark";
  const src = isMark
    ? "/images/logo-mark.png"
    : plate
      ? "/images/logo.png"
      : "/images/logo-transparent.png";

  const image = (
    <Image
      src={src}
      alt="Mamoon Ayoob — Software Engineer"
      width={isMark ? 48 : 220}
      height={isMark ? 48 : 147}
      priority={priority}
      className="h-full w-auto object-contain"
    />
  );

  const classes = cn(
    "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
    isMark ? "h-10 w-10" : "overflow-visible",
    !className && !isMark && "h-[3.25rem] sm:h-16",
    className,
  );

  if (!href) {
    return <span className={classes}>{image}</span>;
  }

  return (
    <Link href={href} className={classes} aria-label="Mamoon Ayoob — Home">
      {image}
    </Link>
  );
}
