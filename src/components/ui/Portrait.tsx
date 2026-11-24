"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PortraitProps = {
  src?: string;
  alt: string;
  className?: string;
  size?: number;
  fallback: string;
};

export function Portrait({
  src,
  alt,
  className,
  size = 80,
  fallback,
}: PortraitProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div
      className={cn(
        "avatar-glow relative overflow-hidden rounded-2xl border border-accent/40 bg-navy-950",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {!loaded && showImage ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-navy-800 via-navy-900 to-accent/20" />
      ) : null}

      {showImage ? (
        <Image
          src={src!}
          alt={alt}
          width={size}
          height={size}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          priority
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-display text-2xl font-semibold text-accent">
          {fallback}
        </div>
      )}
    </div>
  );
}
