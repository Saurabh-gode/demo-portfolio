"use cache";

import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { clinic, galleryImages } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clinic",
  description: `Tour the facilities at ${clinic.name}.`,
};

export default async function GalleryPage() {
  return (
    <div className="container section">
      <SectionReveal>
        <span className="eyebrow">Facilities</span>
        <h1 className="section-title">Our clinic</h1>
        <p className="section-lead">
          A welcoming, hygienic environment designed for comfort, privacy, and
          efficient care — from reception through consultation.
        </p>
      </SectionReveal>

      <GalleryGrid images={galleryImages} />
    </div>
  );
}
