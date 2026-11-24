/**
 * Public-facing Tranzo courier / logistics product work.
 * Keep confidential WMS internals and proprietary details out.
 */
export const tranzo = {
  company: "Tranzo Pvt. Ltd.",
  industry: "Courier & Logistics",
  role: "Associate Software Engineer",
  website: "https://tranzo.pk/",
  merchantPortal: "https://portal.tranzo.pk/",
  tagline:
    "Courier and logistics product engineering across the public website, backoffice, merchant portal, and WMS.",
  summary:
    "At Tranzo — a Pakistan-based courier and logistics company — contributing as Associate Software Engineer on product portals and warehouse workflows, with focused work on the WMS alongside the product website, backoffice, and merchant portal.",
  surfaces: [
    {
      id: "website",
      title: "Product Website",
      description:
        "Work on Tranzo’s public product website used by businesses and customers to understand services, track shipments, and engage with the brand.",
      url: "https://tranzo.pk/",
    },
    {
      id: "backoffice",
      title: "Backoffice",
      description:
        "Backoffice interface work supporting internal operational workflows for the courier and logistics platform.",
    },
    {
      id: "merchant",
      title: "Merchant Portal",
      description:
        "Merchant-facing portal work for shipping and business operations — aligned with Tranzo’s merchant access experience.",
      url: "https://portal.tranzo.pk/",
    },
    {
      id: "wms",
      title: "WMS — Warehouse Management System",
      description:
        "Special focus on WMS development for warehouse and inventory-oriented workflows within Tranzo’s product stack.",
      emphasis: true,
    },
  ],
  tech: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Node.js",
    "REST APIs",
    "WMS",
    "Portal Engineering",
  ],
} as const;
