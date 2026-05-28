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

export default function HomePage() {
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
