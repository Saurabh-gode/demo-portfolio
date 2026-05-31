

import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { clinic, galleryImages } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clinic",
  description: `Tour Tvameva Aesthetics — ${clinic.shortName}'s clinic in Vile Parle West, Mumbai.`,
};

export default async function GalleryPage() {
  return (
    <div className="container section">
      <SectionReveal>
        <span className="eyebrow">Facilities</span>
        <h1 className="section-title">A glimpse into our care</h1>
        <p className="section-lead">
          Tvameva Aesthetics in Vile Parle West offers a calm, hygienic environment
          designed for comfort, privacy, and thoughtful dermatology care — from
          consultation through treatment.
        </p>
      </SectionReveal>

      <GalleryGrid images={galleryImages} />
    </div>
  );
}
