import { profile, siteUrl } from "@/data/profile";
import { activeSocials } from "@/data/socials";

export const seo = {
  siteName: `${profile.name} Portfolio`,
  defaultTitle: `${profile.name} | Full Stack & MERN Developer in Lahore`,
  defaultDescription:
    "Mamoon Ayoob is a Full Stack / MERN Developer and Associate Software Engineer in Lahore, Pakistan. Building Tranzo courier portals & WMS, plus Ordinify HRMS (Superadmin, ESS, MSS).",
  keywords: [
    "Mamoon Ayoob",
    "Mamoon Ayoob Full Stack Developer",
    "Full Stack Developer Lahore",
    "MERN Stack Developer Pakistan",
    "Associate Software Engineer Lahore",
    "React Next.js Node.js Developer",
    "Tranzo developer",
    "Ordinify HRMS developer",
    "WMS developer Pakistan",
    "Courier logistics portal developer",
    "HRMS Superadmin ESS MSS",
  ],
} as const;

export const sameAs = [
  ...activeSocials.map((s) => s.href),
  "https://ordinify.com/",
  "https://tranzo.pk/",
];

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.portraitSrc}`,
    email: profile.email,
    telephone: profile.phone,
    jobTitle: profile.role,
    worksFor: [
      {
        "@type": "Organization",
        name: profile.company,
        url: "https://tranzo.pk/",
      },
      {
        "@type": "Organization",
        name: profile.secondaryRole.company,
        url: "https://ordinify.com/",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "WMS",
      "HRMS",
      "E-commerce",
    ],
    sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: seo.siteName,
    description: seo.defaultDescription,
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en",
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: seo.defaultTitle,
    description: seo.defaultDescription,
    mainEntity: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function creativeWorkJsonLd({
  name,
  description,
  path,
  url,
}: {
  name: string;
  description: string;
  path: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: `${siteUrl}${path}`,
    creator: { "@id": `${siteUrl}/#person` },
    about: url ? { "@type": "WebSite", url } : undefined,
  };
}
