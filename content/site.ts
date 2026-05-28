export const clinic = {
  name: "Harborview Medical Clinic",
  shortName: "Harborview",
  tagline:
    "Compassionate, evidence-based care in a calm, modern setting — for you and your family.",
  description:
    "Harborview Medical Clinic offers primary care, preventive medicine, and chronic disease management with a patient-first approach.",
};

export const doctor = {
  name: "Dr. Sarah Mitchell",
  credentials: "MD, FACP",
  specialty: "Internal Medicine & Preventive Care",
  bio: "Board-certified physician with over 15 years of experience in internal medicine, focused on preventive care and long-term wellness.",
};

export const siteName = clinic.name;
export const tagline = clinic.tagline;
export const copyrightYear = 2026;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Our Clinic" },
  { href: "/contact", label: "Contact" },
] as const;

export const footer = {
  blurb: clinic.description,
  email: "care@harborviewclinic.example",
  phone: "+1 (555) 482-9100",
  address: "240 Harbor Lane, Suite 200, Riverside, CA 92501",
  hours: [
    { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const homeTrust = [
  { label: "Same-week appointments", icon: "◷" },
  { label: "Board-certified physician", icon: "✓" },
  { label: "Insurance accepted", icon: "◆" },
];

export const homeHighlights = [
  {
    title: "Personalized care plans",
    description:
      "Every visit starts with listening. We tailor prevention and treatment to your history, goals, and lifestyle.",
    icon: "♡",
  },
  {
    title: "Modern diagnostics",
    description:
      "On-site lab partnerships and coordinated imaging so you spend less time waiting and more time healing.",
    icon: "⚕",
  },
  {
    title: "Continuity you can trust",
    description:
      "See the same physician over time — with clear follow-ups and secure messaging between appointments.",
    icon: "∞",
  },
];

export const carouselSlides = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
    alt: "Bright, welcoming clinic reception",
    title: "A calm place to heal",
    caption: "Thoughtfully designed spaces for your comfort",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
    alt: "Doctor consulting with a patient",
    title: "Care that listens",
    caption: "Unhurried consultations with your physician",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    alt: "Medical professional in clinic",
    title: "Evidence-based medicine",
    caption: "Treatment guided by the latest clinical standards",
  },
];

export const services = [
  {
    title: "Primary & Preventive Care",
    description:
      "Annual physicals, wellness screenings, immunizations, and lifestyle counseling to keep you ahead of illness.",
    icon: "⚕",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Coordinated care for diabetes, hypertension, asthma, and other long-term conditions with regular monitoring.",
    icon: "◈",
  },
  {
    title: "Diagnostic Coordination",
    description:
      "Lab work, imaging referrals, and results review — streamlined so you always know the next step.",
    icon: "◎",
  },
  {
    title: "Women's & Men's Health",
    description:
      "Age-appropriate screenings, hormonal health discussions, and preventive care tailored to your needs.",
    icon: "♡",
  },
];

export const about = {
  headline: "Dedicated to your long-term health",
  paragraphs: [
    `${doctor.name} leads Harborview Medical Clinic with a philosophy rooted in prevention, clear communication, and respect for every patient.`,
    "Our team combines clinical excellence with a warm, unhurried environment — because quality care should feel human, not transactional.",
  ],
  stats: [
    { label: "Years in practice", value: 15, suffix: "+" },
    { label: "Patients cared for", value: 4200, suffix: "+" },
    { label: "Patient satisfaction", value: 98, suffix: "%" },
  ],
};

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Clinic reception area",
    title: "Reception",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "Doctor consulting with a patient",
    title: "Consultation suite",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
    alt: "Medical laboratory equipment",
    title: "Diagnostics",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    alt: "Healthcare team in discussion",
    title: "Our team",
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
    alt: "Patient in consultation",
    title: "Patient lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    alt: "Physician in clinical setting",
    title: "Facilities",
  },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
