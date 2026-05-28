"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/content/site";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type GalleryGridProps = {
  images: readonly GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const reduced = useReducedMotion();

  const container = reduced
    ? undefined
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      };

  const item = reduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      };

  return (
    <>
      <motion.div
        className="gallery-grid"
        variants={container}
        initial={reduced ? false : "hidden"}
        whileInView={reduced ? undefined : "show"}
        viewport={{ once: true, margin: "-40px" }}
      >
        {images.map((img) => (
          <motion.button
            key={img.src}
            type="button"
            className="gallery-item"
            variants={item}
            whileHover={reduced ? undefined : { scale: 1.02 }}
            onClick={() => setLightbox(img)}
            aria-label={`View ${img.title}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="gallery-item__image"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="gallery-item__label">{img.title}</span>
          </motion.button>
        ))}
      </motion.div>

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
