"use client";

import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { SectionReveal } from "@/components/motion/SectionReveal";
import {
  clinic,
  doctor,
  faqs,
  homeHighlights,
  homeTrust,
  noteToYou,
  tagline,
} from "@/content/site";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const heroImage =
  // "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80";
  "/gemini.png";

export default function HomePage() {
  const reduced = useReducedMotion();
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="hero__content">
            <span className="eyebrow">
              Best Dermatologist in Vile Parle, Andheri West
            </span>
            <h1>{doctor.name}</h1>
            <p className="hero__doctor">
              {doctor.credentials}
            </p>
            <p className="hero__specialty">{doctor.specialty}</p>
            <p className="hero__tagline">{tagline}</p>
            <p className="hero__subtagline">{clinic.description}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn-primary">
                Book an appointment
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View services
              </Link>
            </div>
            <div className="trust-bar">
              {homeTrust.map((item) => (
                <div key={item.label} className="trust-bar__item">
                  <span className="trust-bar__icon" aria-hidden>
                    {item.icon}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="hero__visual"
            initial={reduced ? false : { opacity: 0, y: 32, scale: 0.97 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <div className="hero__visual-glow" aria-hidden />

            <div className="hero__image-card">
              <div className="hero__image-wrap">
                <Image
                  src={heroImage}
                  alt={`${doctor.name} — dermatologist in Vile Parle`}
                  fill
                  className="hero__image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
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

            <motion.div
              className="hero__stat-pill"
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <span className="hero__stat-pill-value">8,000+</span>
              <span className="hero__stat-pill-label">Patients treated</span>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* <div className="container section section--no-top">
        <Carousel />
      </div> */}
      <SectionReveal className="section section--alt">
        <div className="container">
          <span className="eyebrow">Why patients trust Dr. Rane</span>
          <h2 className="section-title">Care built around you</h2>
          <p className="section-lead">
            From medical dermatology to aesthetic treatments and hair restoration,
            every plan is personalised, evidence-based, and delivered with warmth.
          </p>
          <div className="grid-3">
            {homeHighlights.map((item) => (
              <article key={item.title} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
      {/* 
      <SectionReveal className="section section--alt">
        <div className="container">
          <span className="eyebrow">From Dr. Rane</span>
          <h2 className="section-title">{noteToYou.headline}</h2>
          <div className="prose prose--centered">
            {noteToYou.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </SectionReveal> */}

      <SectionReveal className="section">
        <div className="container">
          <span className="eyebrow">Common questions</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-item__question">{faq.question}</summary>
                <p className="faq-item__answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
