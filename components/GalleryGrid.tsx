"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/content/site";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type GalleryGridProps = {
  images: readonly GalleryImage[];
};

// Generates varied heights to create the authentic Masonry / Unsplash effect
const getAspectRatio = (index: number) => {
  const ratios = [
    "3/4",  // Portrait
    "4/3",  // Landscape
    "1/1",  // Square
    "4/5",  // Tall Portrait
    "16/9", // Cinematic Landscape
    "2/3",  // Very Tall Portrait
  ];
  return ratios[index % ratios.length];
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const reduced = useReducedMotion();

  return (
    <>
      <motion.div
        className="masonry-grid"
        variants={reduced ? undefined : containerVariants}
        initial={reduced ? false : "hidden"}
        whileInView={reduced ? undefined : "show"}
        viewport={{ once: true, margin: "-40px" }}
      >
        {images.map((img, index) => (
          <motion.button
            key={img.src}
            type="button"
            className="masonry-item"
            // Apply the pseudo-random ratio dynamically
            style={{ aspectRatio: getAspectRatio(index) }}
            variants={reduced ? undefined : itemVariants}
            onClick={() => setLightbox(img)}
            aria-label={`View ${img.title}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="masonry-item__image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="masonry-item__overlay">
              <span className="masonry-item__label">{img.title}</span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox Implementation */}
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}