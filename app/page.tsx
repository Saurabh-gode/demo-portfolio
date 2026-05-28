"use client";

import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { SectionReveal } from "@/components/motion/SectionReveal";
import {
  clinic,
  doctor,
  homeHighlights,
  homeTrust,
  tagline,
} from "@/content/site";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

export default function HomePage() {
  const reduced = useReducedMotion();
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="hero__content">
            <span className="eyebrow">Trusted family medicine</span>
            <h1>{clinic.name}</h1>
            <p className="hero__doctor">
              {doctor.name} · {doctor.credentials}
            </p>
            <p className="hero__tagline">{tagline}</p>
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
          {/* Replace your motion.div with this */}
          <motion.div
            className="hero__visual"
            initial={reduced ? false : { opacity: 0, y: 32, scale: 0.97 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Decorative glow ring behind the card */}
            <div className="hero__visual-glow" aria-hidden />

            {/* Floating image card */}
            <div className="hero__image-card">
              <div className="hero__image-wrap">
                <Image
                  src="/gemini.png"
                  alt="Our clinic — a welcoming space for your care"
                  fill
                  className="hero__image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating trust badge */}
              <div className="hero__image-badge">
                <span className="hero__badge-dot" aria-hidden />
                Book an appointment
              </div>

              {/* Subtle bottom gradient label */}
              <div className="hero__image-label" aria-hidden>
                <span>Established 2005 · Mumbai</span>
              </div>
            </div>

            {/* Floating stat pill */}
            <motion.div
              className="hero__stat-pill"
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <span className="hero__stat-pill-value">15+</span>
              <span className="hero__stat-pill-label">Years of care</span>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <div className="container section section--no-top">
        <Carousel />
      </div>

      <SectionReveal className="section section--alt">
        <div className="container">
          <span className="eyebrow">Why Harborview</span>
          <h2 className="section-title">Care built around you</h2>
          <p className="section-lead">
            From preventive visits to ongoing condition management, we combine
            clinical rigor with the time and attention every patient deserves.
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
    </>
  );
}
