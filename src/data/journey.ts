export type JourneyMilestone = {
  id: string;
  year: string;
  title: string;
  detail: string;
};

/**
 * High-level professional journey. Keep years editable —
 * exact chronology can be refined without inventing achievements.
 */
export const journey: JourneyMilestone[] = [
  {
    id: "education",
    year: "2025",
    title: "BS Computer Science — UMT",
    detail:
      "Completed a Computer Science degree with a foundation in software engineering and modern web technologies.",
  },
  {
    id: "ecommerce",
    year: "E-commerce",
    title: "Shopify & WordPress Development",
    detail:
      "Built and customized e-commerce websites, themes, integrations, and performance-focused client sites at Gold Tech Pvt. Ltd.",
  },
  {
    id: "frontend-foundation",
    year: "Frontend",
    title: "Professional Frontend Experience",
    detail:
      "Strengthened frontend engineering through React-based development, reusable components, and professional team practices — including work at PITB.",
  },
  {
    id: "fullstack",
    year: "Full Stack",
    title: "MERN & Product Engineering",
    detail:
      "Grew into full-stack roles across development teams — covering React, Node, Express, MongoDB, Next.js, TypeScript, and Figma-driven UI implementation.",
  },
  {
    id: "ordinify",
    year: "Present",
    title: "Ordinify — Virtual Dive Studios (Part-time)",
    detail:
      "Ongoing part-time Full Stack work on Ordinify — Superadmin frontend, ESS and MSS portals, and the public product website.",
  },
  {
    id: "tranzo",
    year: "Present",
    title: "Associate Software Engineer — Tranzo",
    detail:
      "Building courier logistics product surfaces — website, backoffice, merchant portal — with special focus on WMS.",
  },
];
