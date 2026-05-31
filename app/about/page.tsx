

import type { Metadata } from "next";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { StatCounter } from "@/components/StatCounter";
import { about, clinic, doctor } from "@/content/site";


export const metadata: Metadata = {
  title: "About",
  description: `Meet ${doctor.name} and learn about ${clinic.name}.`,
};

export default async function AboutPage() {
  return (
    <div className="container section">
      <SectionReveal>
        <span className="eyebrow">Our physician</span>
        <h1 className="section-title">{about.headline}</h1>
        <div className="doctor-card">
          <div className="doctor-card__avatar" aria-hidden>
            ⚕
          </div>
          <div>
            <h2 className="doctor-card__name">{doctor.name}</h2>
            <p className="doctor-card__role">
              {doctor.credentials} · {doctor.specialty}
            </p>
            <p className="doctor-card__bio">{doctor.bio}</p>
          </div>
        </div>

        <div className="hero about">
          <div className="prose">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="hero__visual">
            <div className="hero__visual-glow" aria-hidden />

            <div className="hero__image-card">
              <div className="hero__image-wrap">
                <img
                  src={"/gemini.png"}
                  alt={`${doctor.name} — dermatologist in Vile Parle`}
                  className="hero__image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="hero__image-badge">
                <span className="hero__badge-dot" aria-hidden />
                {doctor.name}
              </div>

              <div className="hero__image-label" aria-hidden>
                <span>{clinic.location}</span>
              </div>
            </div>

            <div
              className="hero__stat-pill"
            >
              <span className="hero__stat-pill-value">8,000+</span>
              <span className="hero__stat-pill-label">Patients treated</span>
            </div>
          </div>
        </div>

      </SectionReveal>

      <SectionReveal className="section section--tight-top">
        <span className="eyebrow">By the numbers</span>
        <h2 className="section-title">A practice you can rely on</h2>
        <div className="stats-grid">
          {about.stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
