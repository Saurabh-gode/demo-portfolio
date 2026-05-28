"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ClinicLogo } from "@/components/ClinicLogo";
import { navLinks } from "@/content/site";

const SCROLL_TOP_THRESHOLD = 72;
const SCROLL_DELTA = 10;
const TOP_REVEAL_ZONE_PX = 20;

export function FloatingHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [autoHidden, setAutoHidden] = useState(false);
  const [hoverReveal, setHoverReveal] = useState(false);
  const lastScrollY = useRef(0);
  const canHoverRef = useRef(true);

  const isVisible =
    !autoHidden || hoverReveal || menuOpen;

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const prev = lastScrollY.current;
    setScrolled(y > 20);

    if (y <= SCROLL_TOP_THRESHOLD) {
      setAutoHidden(false);
      lastScrollY.current = y;
      return;
    }

    if (canHoverRef.current) {
      if (y > prev + SCROLL_DELTA) {
        setAutoHidden(true);
      }
    } else if (y < prev - SCROLL_DELTA) {
      setAutoHidden(false);
    } else if (y > prev + SCROLL_DELTA) {
      setAutoHidden(true);
    }

    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    canHoverRef.current = hoverMq.matches;

    const onMqChange = (e: MediaQueryListEvent) => {
      canHoverRef.current = e.matches;
      if (!e.matches) setHoverReveal(false);
    };

    hoverMq.addEventListener("change", onMqChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      hoverMq.removeEventListener("change", onMqChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!canHoverRef.current) return;
      if (e.clientY <= TOP_REVEAL_ZONE_PX) {
        setHoverReveal(true);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const anchorClass = [
    "site-header-anchor",
    isVisible ? "site-header-anchor--visible" : "site-header-anchor--hidden",
  ].join(" ");

  const headerClass = [
    "site-header",
    scrolled ? "site-header--scrolled" : "",
    isVisible ? "site-header--revealed" : "site-header--concealed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={anchorClass}
      onMouseEnter={() => canHoverRef.current && setHoverReveal(true)}
      onMouseLeave={() => canHoverRef.current && setHoverReveal(false)}
    >
      <div className="site-header-edge" aria-hidden />

      <header className={headerClass}>
        <ClinicLogo />

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`site-header__nav${menuOpen ? " site-header__nav--open" : ""}`}
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`site-header__link${active ? " site-header__link--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn btn-primary site-header__cta"
            onClick={() => setMenuOpen(false)}
          >
            Book visit
          </Link>
        </nav>
      </header>
    </div>
  );
}
