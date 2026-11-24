/**
 * Public-facing Ordinify / Virtual Dive Studios work summary.
 * Keep confidential module internals, metrics, and proprietary details out.
 */
export const ordinify = {
  productName: "Ordinify",
  productType: "HRMS",
  company: "Virtual Dive Studios",
  role: "Full Stack Developer",
  employmentType: "Part-time",
  website: "https://ordinify.com/",
  tagline:
    "Ongoing part-time Full Stack work on Ordinify HRMS — Superadmin frontend, ESS and MSS portals, and the product website.",
  summary:
    "Continuing as a part-time Full Stack Developer at Virtual Dive Studios on Ordinify — focusing on role-based portal frontends and the product’s public website while supporting application workflows across the stack.",
  surfaces: [
    {
      id: "superadmin",
      title: "Superadmin Frontend",
      description:
        "Built and refined Superadmin-facing interfaces for platform administration and operational control within the HRMS.",
    },
    {
      id: "ess",
      title: "ESS Portal",
      description:
        "Employee Self-Service portal work — interfaces that help employees manage day-to-day HR-related actions from a dedicated portal experience.",
    },
    {
      id: "mss",
      title: "MSS Portal",
      description:
        "Manager Self-Service portal work — manager-facing workflows and screens for team-level HR actions and approvals.",
    },
    {
      id: "website",
      title: "Ordinify Website",
      description:
        "Contributed to Ordinify’s public product website used to present the HRMS offering to businesses and prospects.",
      url: "https://ordinify.com/",
    },
  ],
  tech: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Full Stack",
  ],
} as const;
