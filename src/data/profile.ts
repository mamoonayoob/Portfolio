export const profile = {
  name: "Mamoon Ayoob",
  firstName: "Mamoon",
  role: "Associate Software Engineer",
  company: "Tranzo Pvt. Ltd.",
  secondaryRole: {
    role: "Full Stack Developer",
    company: "Virtual Dive Studios",
    employmentType: "Part-time",
  },
  titles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineer",
  ] as const,
  location: "Lahore, Pakistan",
  email: "mamoonayoob@gmail.com",
  phone: "0304-4020940",
  education: {
    degree: "BS Computer Science",
    institution: "University of Management and Technology (UMT)",
    year: "2025",
  },
  /** Personal portrait */
  portraitSrc: "/images/personal.JPG",
  /** Brand logo (transparent wordmark) + plate + monogram */
  logoSrc: "/images/logo-transparent.png",
  logoPlateSrc: "/images/logo.png",
  logoMarkSrc: "/images/logo-mark.png",
  resumeSrc: "/Mamoon-Ayoob-CV.pdf",
  headline:
    "Full Stack / MERN engineer building courier logistics portals, WMS workflows, and HRMS product surfaces — across Tranzo and Ordinify.",
  summary: [
    "Computer Science graduate and Associate Software Engineer with professional experience in modern web applications, logistics product portals, business software, and e-commerce platforms.",
    "Technical experience spans React.js, Next.js, JavaScript, Node.js, Express.js, MongoDB, REST APIs, authentication, database integration, Shopify, and WordPress.",
    "Currently at Tranzo Pvt. Ltd. (courier & logistics), contributing to the product website, backoffice, merchant portal, and especially WMS. Also continuing part-time Full Stack work at Virtual Dive Studios on Ordinify (HRMS) — Superadmin frontend, ESS and MSS portals, and the Ordinify website.",
  ],
  focusAreas: [
    "Full Stack Web Development",
    "Courier / Logistics Portals",
    "WMS Development",
    "Enterprise / HRMS Portals",
    "Modern Frontend Engineering",
    "Backend Development & REST APIs",
    "E-commerce Development",
  ],
} as const;

export const heroHighlights = [
  "Tranzo — Website, Backoffice, Merchant & WMS",
  "Ordinify HRMS — Superadmin, ESS & MSS",
  "Full Stack MERN Delivery",
] as const;

export const techStrip = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "WMS",
  "JWT",
  "Tailwind CSS",
  "Shopify",
  "WordPress",
  "Git",
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://mamoonayoob.vercel.app";
