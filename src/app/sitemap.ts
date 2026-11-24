import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-11-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/work/tranzo`,
      lastModified: "2026-11-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work/ordinify`,
      lastModified: "2026-11-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
