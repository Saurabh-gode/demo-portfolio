export const clinic = {
  name: "Dr. Meghana Rane — Tvameva Aesthetics",
  shortName: "Tvameva",
  location: "Vile Parle West, Mumbai",
  tagline:
    "Thoughtful Care For Your Skin, Your Hair And Your Confidence.",
  description:
    "Combining medical expertise with warmth and detail, helping you look and feel like your best self again.",
};

export const doctor = {
  name: "Dr. Meghana Rane",
  credentials: "MBBS | MD (Dermatology, Venereology & Leprosy) | DNB | MNAMS",
  specialty: "Dermatologist in Vile Parle | Aesthetic & Hair Specialist",
  bio: "Dr. Meghana Rane (MBBS, MD, DNB, MNAMS) is a Dermatologist in Vile Parle, known for her calm and methodical approach to skin, hair, and aesthetic care.",
};

export const siteName = "Tvameva Aesthetics";
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
  cta: "Healing begins when you stop fixing and start understanding.",
  email: "meghanarane0704@gmail.com",
  phone: "+91 9930211726",
  phones: ["+91 9930211726", "+91 9326538125"],
  address:
    "501/502, Sapphire Plaza, Dadabhai Rd, Vile Parle West, Mumbai 400 056",
  mapUrl:
    "https://www.google.com/maps/place/Dr+Meghana+Rane+-+Best+Dermatologist+in+Vile+Parle+West,+Andheri+West",
  hours: [{ days: "Mon – Sat", time: "11:00 AM – 8:30 PM" }],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/drmeghanarane/" },
    { label: "YouTube", href: "https://www.youtube.com/@drmeghanarane" },
    { label: "Facebook", href: "https://www.facebook.com/drmeghanarane" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/drmeghanarane" },
  ],
};

export const homeTrust = [
  { label: "Trained at KEM Hospital, Mumbai", icon: "◆" },
  { label: "8,000+ patients treated", icon: "✓" },
  { label: "8+ years of experience", icon: "◷" },
  { label: "IADVL | ACSI | MNAMS", icon: "♡" },
];

export const noteToYou = {
  headline: "A Note To You",
  paragraphs: [
    "Maybe your skin feels different lately. Or your hair has started to thin, and you're not sure why.",
    "You've probably tried to fix it — a few products, some advice, a little hope that it would settle. And yet, here you are, still looking for something that truly helps.",
    "You don't have to figure it out alone. That's what we'll do together: understand what your skin or hair really needs, and help it find its balance again.",
  ],
};

export const homeHighlights = [
  {
    title: "She listens before she diagnoses",
    description:
      "Every consultation begins with understanding your concerns, history, and goals — not rushing to a prescription.",
    icon: "♡",
  },
  {
    title: "She explains, even when it takes time",
    description:
      "Clear, honest guidance so you always know what a treatment does, why it matters, and what to expect.",
    icon: "◎",
  },
  {
    title: "Subtle, natural results",
    description:
      "She believes subtle, natural results are stronger than dramatic ones — helping you look like yourself, refreshed.",
    icon: "✦",
  },
  {
    title: "She never pushes — she guides",
    description:
      "Recommendations are built around what your skin or hair actually needs, never upselling or pressure.",
    icon: "◈",
  },
  {
    title: "Backed by real training",
    description:
      "Her training from KEM Hospital, IADVL, and ACSI ensures your care is backed by skill, not just machines.",
    icon: "⚕",
  },
  {
    title: "Warmth for anxious patients",
    description:
      "Her warmth makes even the most anxious patient feel at ease — because good care should feel safe.",
    icon: "∞",
  },
];

export const carouselSlides = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
    alt: "Dermatologist consulting with a patient",
    title: "Care that listens",
    caption: "Unhurried consultations focused on your skin and hair",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
    alt: "Modern aesthetic clinic reception",
    title: "Tvameva Aesthetics",
    caption: "A calm, welcoming space in Vile Parle West",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600&q=80",
    alt: "Professional skin care treatment",
    title: "Evidence-based treatments",
    caption: "Medical dermatology, aesthetics, and trichology under one roof",
  },
];

export const serviceCategories = [
  {
    title: "Clinical Dermatology",
    tagline: "For skin that's been struggling and deserves real relief.",
    icon: "◆",
    items: [
      "Acne & Pigmentation Treatment",
      "Psoriasis, Eczema & Rosacea",
      "Fungal, Bacterial & Viral Infections",
      "Vitiligo & Leprosy Care",
      "Keloids & Scars",
      "Pediatric Dermatology",
    ],
  },
  {
    title: "Aesthetic Dermatology",
    tagline: "For those looking to renew, restore, and feel radiant again.",
    icon: "✦",
    items: [
      "Botox & Fillers",
      "Chemical Peels & Microdermabrasion",
      "PRP & GFC Skin Rejuvenation",
      "Hydrafacial, HIFU & Thread Lift",
      "Vampire & Hollywood Facials",
      "Korean Glass Skin Treatment",
      "Skin Whitening & Polishing",
      "Melasma & Wrinkle Reduction",
      "Bridal & Groom Skin Packages",
    ],
  },
  {
    title: "Hair & Scalp Treatments",
    tagline: "For hair that needs repair, strength, and growth.",
    icon: "◎",
    items: [
      "PRP & GFC for Hair",
      "Stem Cell Therapy",
      "Mesotherapy for Hair",
      "Pattern Baldness & Dandruff Treatment",
      "White Hair Management",
      "Hair Transplant (FUE)",
      "Scalp Micropigmentation",
    ],
  },
  {
    title: "Dermatosurgery & Procedures",
    tagline:
      "Precision, safety, and care — from minor procedures to advanced techniques.",
    icon: "⚕",
    items: [
      "Mole & Wart Removal",
      "Scar Revision & Skin Biopsy",
      "Cyst & Lipoma Excision",
      "Nail Avulsion & Excisional Surgeries",
      "Vitiligo Surgery",
      "Erbium Glass Laser",
      "Radio Frequency & Electrocautery",
    ],
  },
] as const;

/** Flat list for simple consumers */
export const services = serviceCategories.map((category) => ({
  title: category.title,
  description: category.tagline,
  icon: category.icon,
}));

export const about = {
  headline: "Meet Dr. Meghana Rane",
  paragraphs: [
    "Dr. Meghana Rane (MBBS, MD, DNB, MNAMS) is a Dermatologist in Vile Parle, known for her calm and methodical approach to skin, hair, and aesthetic care.",
    "A graduate of Seth G.S. Medical College & KEM Hospital, Mumbai, she has trained under India's leading dermatologists and holds fellowships in aesthetic medicine, laser treatments, dermatosurgery, and hair transplantation. She holds memberships with the IADVL, ACSI, and the National Academy of Medical Sciences.",
    "Her clinical experience spans medical dermatology, aesthetic medicine, and trichology, supported by over 10 published research papers in reputable national and international journals. What sets her apart is her attention to detail and the genuine time she spends helping patients understand their skin.",
  ],
  stats: [
    { label: "Years of experience", value: 8, suffix: "+" },
    { label: "Patients treated", value: 8000, suffix: "+" },
    { label: "Research papers published", value: 10, suffix: "+" },
  ],
};

export const faqs = [
  {
    question:
      "Who is the best dermatologist in Vile Parle for acne and pigmentation?",
    answer:
      "Dr. Meghana Rane is a board-certified Dermatologist in Vile Parle known for her expertise in acne, pigmentation, and aesthetic skin restoration through personalised, evidence-based care.",
  },
  {
    question: "Are Botox and Fillers safe for Indian skin?",
    answer:
      "Yes. Dr. Meghana uses FDA-approved injectables and advanced facial assessment techniques to ensure natural, safe results for every skin tone.",
  },
  {
    question: "How soon will PRP or GFC show hair growth results?",
    answer:
      "Most patients begin to notice visible improvements within 3 to 4 sessions. Consistency and proper home care make the results last longer.",
  },
  {
    question: "Is laser hair removal suitable for sensitive skin?",
    answer:
      "Yes. The clinic utilises advanced laser systems calibrated for Indian and sensitive skin types to ensure safe and comfortable sessions.",
  },
  {
    question: "How is this clinic different from a salon or beauty centre?",
    answer:
      "Here, treatments are medical, not cosmetic. Every plan is built around diagnosis, precision, and safety — helping your skin heal, not just look better.",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Clinic reception area",
    title: "Reception",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "Doctor consulting with a patient",
    title: "Consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    alt: "Skin care treatment session",
    title: "Treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    alt: "Modern dental and medical clinic interior",
    title: "Clinic interior",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
    alt: "Medical equipment in clinic",
    title: "Advanced equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    alt: "Healthcare professional",
    title: "Patient care",
  },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
