/**
 * Public social profiles.
 */
export const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamoon-ayoob",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mamoonayoob",
  },
] as const;

export const activeSocials = socials.filter((s) => s.href.trim().length > 0);
