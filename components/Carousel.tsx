"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { carouselSlides } from "@/content/site";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const INTERVAL_MS = 6000;

export function Carousel() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const slides = carouselSlides;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, [index, goTo, reduced]);

  const slide = slides[index];

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label="Featured work">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          className="carousel__slide"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.45 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="carousel__image"
            sizes="(max-width: 768px) 100vw, 72rem"
            priority={index === 0}
          />
          <div className="carousel__overlay">
            <h2>{slide.title}</h2>
            <p>{slide.caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="carousel__dots" role="tablist" aria-label="Slide selector">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`carousel__dot${i === index ? " carousel__dot--active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__btn"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel__btn"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
