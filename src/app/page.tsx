import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { OrdinifySpotlight } from "@/components/sections/OrdinifySpotlight";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { TechStrip } from "@/components/sections/TechStrip";
import { TranzoSpotlight } from "@/components/sections/TranzoSpotlight";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  personJsonLd,
  profilePageJsonLd,
  seo,
  websiteJsonLd,
} from "@/data/seo";

export const metadata: Metadata = {
  title: seo.defaultTitle,
  description: seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: "/",
    type: "profile",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[personJsonLd(), websiteJsonLd(), profilePageJsonLd()]} />
      <main id="main" itemScope itemType="https://schema.org/ProfilePage">
        <Hero />
        <TechStrip />
        <About />
        <Experience />
        <TranzoSpotlight />
        <OrdinifySpotlight />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
