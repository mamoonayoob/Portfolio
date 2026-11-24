import type { MetadataRoute } from "next";
import { profile, siteUrl } from "@/data/profile";
import { seo } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.siteName,
    short_name: profile.firstName,
    description: seo.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#060b18",
    theme_color: "#3b82f6",
    lang: "en",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    id: siteUrl,
  };
}
