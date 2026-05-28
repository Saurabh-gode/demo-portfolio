"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getThemeFromDom(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeFromDom,
    getServerSnapshot,
  );

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const label =
    theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__track" aria-hidden>
        <span
          className={`theme-toggle__thumb${theme === "dark" ? " theme-toggle__thumb--dark" : ""}`}
        />
      </span>
      <span className="theme-toggle__label">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
