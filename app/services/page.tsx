"use cache";

import type { Metadata } from "next";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { clinic, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Medical services and treatments offered at ${clinic.name}.`,
};

export default async function ServicesPage() {
  return (
    <div className="container section">
      <SectionReveal>
        <span className="eyebrow">What we offer</span>
        <h1 className="section-title">Medical services</h1>
        <p className="section-lead">
          Comprehensive outpatient care for adults and families — focused on
          prevention, accurate diagnosis, and thoughtful follow-through.
        </p>
      </SectionReveal>

      <div className="grid-2">
        {services.map((service, i) => (
          <SectionReveal key={service.title} delay={i * 0.05}>
            <article className="card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
