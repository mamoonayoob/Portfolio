import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { CaseStudy } from "@/components/work/CaseStudy";
import { breadcrumbJsonLd, creativeWorkJsonLd } from "@/data/seo";
import { ordinify } from "@/data/ordinify";

const title = "Ordinify Case Study — HRMS Superadmin, ESS & MSS";
const description =
  "How Mamoon Ayoob contributed as a part-time Full Stack Developer at Virtual Dive Studios on Ordinify HRMS — Superadmin frontend, ESS portal, MSS portal, and the product website.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Ordinify developer",
    "HRMS developer Lahore",
    "ESS MSS portal developer",
    "Superadmin frontend React",
    "Mamoon Ayoob Ordinify",
  ],
  alternates: {
    canonical: "/work/ordinify",
  },
  openGraph: {
    title,
    description,
    url: "/work/ordinify",
    type: "article",
  },
};

export default function OrdinifyCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/#projects" },
            { name: "Ordinify", path: "/work/ordinify" },
          ]),
          creativeWorkJsonLd({
            name: title,
            description,
            path: "/work/ordinify",
            url: ordinify.website,
          }),
        ]}
      />
      <CaseStudy
        eyebrow="Case Study · HRMS Product"
        title="Ordinify — HRMS Product Work"
        summary={ordinify.summary}
        company={ordinify.company}
        role={`${ordinify.role} (${ordinify.employmentType})`}
        website={ordinify.website}
        path="/work/ordinify"
        breadcrumbLabel="Ordinify"
        surfaces={ordinify.surfaces.map((s) => ({
          title: s.title,
          description: s.description,
          url: "url" in s ? s.url : undefined,
        }))}
        tech={ordinify.tech}
        related={[
          {
            href: "/work/tranzo",
            label: "Tranzo logistics case study",
            description:
              "Associate Software Engineer work on courier portals and WMS.",
          },
          {
            href: "/#ordinify",
            label: "Ordinify spotlight on homepage",
            description:
              "Overview of Superadmin, ESS, MSS, and the Ordinify website.",
          },
          {
            href: "/#contact",
            label: "Contact Mamoon",
            description: "Discuss HRMS portals or full-stack product engineering.",
          },
        ]}
      />
    </>
  );
}
