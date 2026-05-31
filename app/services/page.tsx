"use cache";

import type { Metadata } from "next";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { clinic, serviceCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Dermatology, aesthetic, hair, and dermatosurgery services at ${clinic.shortName}.`,
};

export default async function ServicesPage() {
  return (
    <div className="container section">
      <SectionReveal>
        <span className="eyebrow">What we offer</span>
        <h1 className="section-title">Services that transform, not just treat</h1>
        <p className="section-lead">
          Comprehensive skin, hair, and aesthetic care — from medical dermatology
          to advanced procedures — all under one roof at Tvameva Aesthetics,
          Vile Parle West.
        </p>
      </SectionReveal>

      <div className="service-categories">
        {serviceCategories.map((category, i) => (
          <SectionReveal key={category.title} delay={i * 0.05}>
            <article className="service-category card">
              <div className="service-category__header">
                <div className="card-icon">{category.icon}</div>
                <div>
                  <h2>{category.title}</h2>
                  <p className="service-category__tagline">{category.tagline}</p>
                </div>
              </div>
              <ul className="service-category__list">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
