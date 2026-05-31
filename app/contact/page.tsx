import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { clinic, footer } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book an appointment with ${clinic.shortName} at Tvameva Aesthetics, Vile Parle West.`,
};

export default function ContactPage() {
  return (
    <div className="container section">
      <SectionReveal>
        <span className="eyebrow">Get in touch</span>
        <h1 className="section-title">Contact us</h1>
        <p className="section-lead">
          Request an appointment or send us a message — we respond as soon as
          possible during clinic hours.
        </p>
      </SectionReveal>

      <div className="contact-grid">
        <SectionReveal>
          <div className="contact-info">
            <h3>Tvameva Aesthetics</h3>

            <div className="contact-info__block">
              <strong>Phone</strong>
              {footer.phones.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                </p>
              ))}
            </div>

            <div className="contact-info__block">
              <strong>Email</strong>
              <p>
                <a href={`mailto:${footer.email}`}>{footer.email}</a>
              </p>
            </div>

            <div className="contact-info__block">
              <strong>Address</strong>
              <p>
                <a href={footer.mapUrl} target="_blank" rel="noopener noreferrer">
                  {footer.address}
                </a>
              </p>
            </div>

            <div className="contact-info__block">
              <strong>Hours</strong>
              {footer.hours.map(({ days, time }) => (
                <p key={days}>
                  {days}: {time}
                </p>
              ))}
            </div>

            <p className="contact-info__note">
              For medical emergencies, please visit your nearest hospital
              emergency department. This form is not monitored 24/7.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="card">
            <h3 className="card__title">Send a message</h3>
            <ContactForm />
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
