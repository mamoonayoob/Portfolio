export type Project = {
  id: string;
  title: string;
  category: "featured" | "professional";
  description: string;
  highlights: string[];
  tech: string[];
  /** Optional public URL — leave empty to hide the link */
  liveUrl?: string;
  /** Optional repo URL — leave empty to hide the link */
  repoUrl?: string;
  /** Optional image under /public */
  imageSrc?: string;
  company?: string;
};

export const projects: Project[] = [
  {
    id: "quickmart",
    title: "QuickMart – Grocery Delivery Platform",
    category: "featured",
    description:
      "Final-year project focused on a real-time grocery delivery platform with multi-role workflows and modern web architecture.",
    highlights: [
      "Multi-role dashboards",
      "Grocery ordering workflows",
      "Real-time order tracking",
      "Customer and operational flows",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "",
    repoUrl: "",
    imageSrc: "/images/projects/quickmart.svg",
  },
  {
    id: "contact-management",
    title: "Contact Management System",
    category: "featured",
    description:
      "Web-based application for managing contact information and records with structured data workflows.",
    highlights: [
      "CRUD-based contact management",
      "Structured data handling",
      "Application workflow support",
    ],
    tech: ["JavaScript", "Node.js", "MongoDB"],
    liveUrl: "",
    repoUrl: "https://github.com/mamoonayoob/Contact_Management_System",
    imageSrc: "/images/projects/contact.svg",
  },
  {
    id: "smart-hostel",
    title: "Smart Hostel Management System",
    category: "featured",
    description:
      "Backend-focused practice application centered on data handling, APIs, and management workflows.",
    highlights: [
      "Backend development focus",
      "API-driven data handling",
      "Management-oriented workflows",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "",
    repoUrl: "",
    imageSrc: "/images/projects/hostel.svg",
  },
];

export const professionalProducts: Project[] = [
  {
    id: "tranzo-wms",
    title: "Tranzo WMS — Warehouse Management System",
    category: "professional",
    company: "Tranzo Pvt. Ltd.",
    description:
      "Focused contribution to Tranzo’s WMS within the courier and logistics product stack — supporting warehouse-oriented application workflows.",
    highlights: [
      "WMS-focused development",
      "Warehouse and inventory-oriented workflows",
      "Integrated with Tranzo’s broader product portals",
    ],
    tech: ["React.js", "WMS", "Application Workflows"],
    imageSrc: "/images/projects/tranzo.svg",
    liveUrl: "https://tranzo.pk/",
  },
  {
    id: "tranzo-portals",
    title: "Tranzo Product Portals",
    category: "professional",
    company: "Tranzo Pvt. Ltd.",
    description:
      "Portal and website work across Tranzo’s courier platform — public product site, backoffice, and merchant experience.",
    highlights: [
      "Product website (tranzo.pk)",
      "Backoffice interfaces",
      "Merchant portal workflows",
    ],
    tech: ["React.js", "Next.js", "Portal Engineering"],
    liveUrl: "https://tranzo.pk/",
    imageSrc: "/images/projects/tranzo.svg",
  },
  {
    id: "ordinify-hrms",
    title: "Ordinify — HRMS Platform",
    category: "professional",
    company: "Virtual Dive Studios",
    description:
      "Part-time Full Stack contribution to Ordinify, a cloud-based HRMS product — spanning role-based portal frontends and supporting application workflows.",
    highlights: [
      "Superadmin frontend development",
      "ESS (Employee Self-Service) portal",
      "MSS (Manager Self-Service) portal",
      "Cross-stack feature and workflow support",
    ],
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "REST APIs"],
    imageSrc: "/images/projects/ordinify.svg",
    liveUrl: "https://ordinify.com/",
  },
  {
    id: "ordinify-website",
    title: "Ordinify Product Website",
    category: "professional",
    company: "Virtual Dive Studios",
    description:
      "Contributed to the public Ordinify website that presents the HRMS product to businesses and prospects.",
    highlights: [
      "Product marketing website contribution",
      "Modern responsive web experience",
      "Aligned with the Ordinify product brand",
    ],
    tech: ["Next.js", "Frontend", "Responsive UI"],
    liveUrl: "https://ordinify.com/",
    imageSrc: "/images/projects/ordinify.svg",
  },
];
