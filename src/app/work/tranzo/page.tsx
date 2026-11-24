import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { CaseStudy } from "@/components/work/CaseStudy";
import { breadcrumbJsonLd, creativeWorkJsonLd } from "@/data/seo";
import { tranzo } from "@/data/tranzo";

const title = "Tranzo Case Study — Courier Portals & WMS";
const description =
  "How Mamoon Ayoob contributed as Associate Software Engineer at Tranzo Pvt. Ltd. on the product website, backoffice, merchant portal, and WMS for courier logistics in Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Tranzo developer",
    "Tranzo WMS",
    "courier portal developer Lahore",
    "merchant portal React",
    "Mamoon Ayoob Tranzo",
  ],
  alternates: {
    canonical: "/work/tranzo",
  },
  openGraph: {
    title,
    description,
    url: "/work/tranzo",
    type: "article",
  },
};

export default function TranzoCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/#projects" },
            { name: "Tranzo", path: "/work/tranzo" },
          ]),
          creativeWorkJsonLd({
            name: title,
            description,
            path: "/work/tranzo",
            url: tranzo.website,
          }),
        ]}
      />
      <CaseStudy
        eyebrow="Case Study · Logistics Software"
        title="Tranzo — Courier & Logistics Product Work"
        summary={tranzo.summary}
        company={tranzo.company}
        role={tranzo.role}
        website={tranzo.website}
        path="/work/tranzo"
        breadcrumbLabel="Tranzo"
        surfaces={tranzo.surfaces.map((s) => ({
          title: s.title,
          description: s.description,
          url: "url" in s ? s.url : undefined,
        }))}
        tech={tranzo.tech}
        related={[
          {
            href: "/work/ordinify",
            label: "Ordinify HRMS case study",
            description:
              "Part-time Full Stack work on Superadmin, ESS, MSS, and the Ordinify website.",
          },
          {
            href: "/#tranzo",
            label: "Tranzo spotlight on homepage",
            description:
              "Quick overview of website, backoffice, merchant portal, and WMS focus.",
          },
          {
            href: "/#contact",
            label: "Contact Mamoon",
            description: "Discuss logistics portals, WMS, or full-stack delivery.",
          },
        ]}
      />
    </>
  );
}
