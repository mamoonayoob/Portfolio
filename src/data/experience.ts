export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  employmentType?: "Full-time" | "Part-time";
  highlights: string[];
};

/**
 * Period strings are editable placeholders where exact dates were not provided.
 * Update them in this file without touching components.
 */
export const experience: ExperienceItem[] = [
  {
    id: "tranzo",
    company: "Tranzo Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Present",
    location: "Lahore, Pakistan",
    current: true,
    employmentType: "Full-time",
    highlights: [
      "Building product software for Tranzo — a courier and logistics company serving e-commerce and business shipping across Pakistan.",
      "Contributed to the product website (tranzo.pk) used for services, tracking, and brand presence.",
      "Worked on backoffice interfaces supporting internal courier and logistics operations.",
      "Worked on the merchant portal for business shipping workflows.",
      "Special focus on WMS (Warehouse Management System) development and warehouse-oriented application workflows.",
      "Collaborating with the team during software development and sprint activities.",
    ],
  },
  {
    id: "virtual-dive",
    company: "Virtual Dive Studios",
    role: "Full Stack Developer",
    period: "Present",
    location: "Lahore, Pakistan",
    current: true,
    employmentType: "Part-time",
    highlights: [
      "Continuing part-time Full Stack development on Ordinify — the company’s HRMS product.",
      "Built and enhanced the Superadmin frontend for platform administration interfaces.",
      "Worked on the ESS (Employee Self-Service) portal experience.",
      "Worked on the MSS (Manager Self-Service) portal experience.",
      "Contributed to Ordinify’s public product website (ordinify.com).",
      "Supporting frontend and backend application workflows across the HRMS stack.",
    ],
  },
  {
    id: "advance-connect",
    company: "Advance Connect Solution",
    role: "MERN Stack Developer",
    period: "Previous role",
    highlights: [
      "Professional full-stack development with React.js, Node.js, Express.js, and MongoDB.",
      "Built and maintained frontend functionality alongside backend services.",
      "Worked with REST APIs, database operations, and application workflows.",
      "Implemented and maintained web application features end to end.",
    ],
  },
  {
    id: "techionik",
    company: "Techionik",
    role: "Software Developer",
    period: "Previous role",
    highlights: [
      "Professional development experience with Next.js and TypeScript.",
      "Frontend engineering focused on modern, maintainable interfaces.",
      "Implemented UI from Figma designs with attention to layout fidelity and responsiveness.",
    ],
  },
  {
    id: "gold-tech",
    company: "Gold Tech Pvt. Ltd.",
    role: "Shopify & WordPress Developer",
    period: "2+ years",
    highlights: [
      "Developed and customized e-commerce websites on Shopify and WordPress.",
      "Customized Shopify themes and WordPress sites using Liquid, Elementor, plugins, and third-party integrations.",
      "Worked on payment gateway and chat integrations.",
      "Improved responsiveness, usability, and performance across client sites.",
      "Handled website maintenance and SEO-related implementation.",
    ],
  },
  {
    id: "pitb",
    company: "Punjab Information Technology Board (PITB)",
    role: "Frontend Developer Intern",
    period: "Internship",
    highlights: [
      "Worked with React.js and modern frontend development practices.",
      "Developed reusable UI components and responsive interfaces.",
      "Used HTML, CSS, JavaScript, and Git in a professional development environment.",
    ],
  },
];
