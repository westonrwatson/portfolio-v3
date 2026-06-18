"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type RevealOrigin = { x: number; y: number };

const WAVE_DURATION_MS = 700;
const COLOR_DURATION_MS = 350;
const WAVE_CLEANUP_MS = WAVE_DURATION_MS + COLOR_DURATION_MS + 150;

let activeWaveElements: HTMLElement[] = [];

function shouldWaveElement(el: Element): boolean {
  if (el.tagName === "IFRAME") {
    return false;
  }
  if (el.closest(".theme-toggle")) {
    return false;
  }
  if (el.classList.contains("text-white")) {
    return false;
  }
  if (!(el instanceof HTMLElement)) {
    return false;
  }

  const className = el.className;
  if (typeof className === "string" && /text-(ink|muted|page)/.test(className)) {
    return true;
  }

  return el.matches("a, p, h1, h2, h3, h4, li, button, label");
}

function getWaveTargets(): HTMLElement[] {
  const shell = document.querySelector(".site-shell");
  if (!shell) {
    return [];
  }

  const targets: HTMLElement[] = [];
  shell.querySelectorAll<HTMLElement>("*").forEach((el) => {
    if (shouldWaveElement(el)) {
      targets.push(el);
    }
  });

  return targets;
}

function staggerTextTransition(origin: RevealOrigin, endRadius: number) {
  activeWaveElements = [];

  getWaveTargets().forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      return;
    }

    const style = getComputedStyle(el);
    if (style.color) {
      el.style.color = style.color;
    }
    if (style.borderColor && style.borderColor !== "rgba(0, 0, 0, 0)") {
      el.style.borderColor = style.borderColor;
    }

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.hypot(cx - origin.x, cy - origin.y);
    const delay = (dist / endRadius) * WAVE_DURATION_MS;

    el.style.setProperty(
      "transition-property",
      "color, border-color",
    );
    el.style.setProperty("transition-duration", `${COLOR_DURATION_MS}ms`);
    el.style.setProperty("transition-timing-function", "ease-out");
    el.style.setProperty("transition-delay", `${delay}ms`);

    activeWaveElements.push(el);
  });
}

function releaseTextColors() {
  activeWaveElements.forEach((el) => {
    el.style.removeProperty("color");
    el.style.removeProperty("border-color");
  });
}

function clearTextWaveTransitions() {
  activeWaveElements.forEach((el) => {
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-timing-function");
    el.style.removeProperty("transition-delay");
  });

  activeWaveElements = [];
  document.documentElement.classList.remove("theme-wave-active");
}

function lockPageBackground(color: string) {
  const backdrop = document.getElementById("theme-backdrop");
  if (backdrop) {
    backdrop.style.backgroundColor = color;
  }
  document.documentElement.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
}

function unlockPageBackground() {
  const backdrop = document.getElementById("theme-backdrop");
  if (backdrop) {
    backdrop.style.removeProperty("background-color");
  }
  document.documentElement.style.removeProperty("background-color");
  document.body.style.removeProperty("background-color");
}

function applyTheme(theme: Theme, origin?: RevealOrigin) {
  const root = document.documentElement;
  const nextIsDark = theme === "dark";

  if (root.classList.contains("dark") === nextIsDark) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !origin) {
    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", theme);
    return;
  }

  const oldPageColor = getComputedStyle(root)
    .getPropertyValue("--color-page")
    .trim();
  const nextPageColor = nextIsDark ? "#141414" : "#ffffff";

  const { x, y } = origin;
  const endRadius =
    Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    ) + 24;

  const overlay = document.createElement("div");
  overlay.className = "theme-reveal-overlay";
  overlay.style.background = nextPageColor;
  overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;

  const shell = document.querySelector(".site-shell");
  if (shell?.parentNode) {
    shell.parentNode.insertBefore(overlay, shell);
  } else {
    document.body.appendChild(overlay);
  }

  lockPageBackground(oldPageColor);

  root.classList.add("theme-wave-active");
  staggerTextTransition(origin, endRadius);
  void root.offsetHeight;

  root.classList.toggle("dark", nextIsDark);
  localStorage.setItem("theme", theme);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      releaseTextColors();
    });
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`;
    });
  });

  let backgroundFinalized = false;
  const finalizeBackgroundReveal = () => {
    if (backgroundFinalized) {
      return;
    }
    backgroundFinalized = true;
    unlockPageBackground();
    overlay.remove();
  };

  overlay.addEventListener("transitionend", finalizeBackgroundReveal, {
    once: true,
  });
  window.setTimeout(finalizeBackgroundReveal, WAVE_DURATION_MS + 50);

  window.setTimeout(() => {
    clearTextWaveTransitions();
  }, WAVE_CLEANUP_MS);
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={[
        "h-full w-full transition-transform duration-500 ease-in-out motion-reduce:transition-none",
        isDark ? "rotate-[-15deg]" : "rotate-0",
      ].join(" ")}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={[
          "origin-[12px_12px] transition-all duration-500 ease-in-out motion-reduce:transition-none",
          isDark ? "scale-0 opacity-0" : "scale-100 opacity-100",
        ].join(" ")}
      >
        <path d="M12 3.5V5M12 20.5V19M3.5 12H5M20.5 12H19" />
        <path d="M6 6 7.05 7.05M18 6 16.95 7.05M18 18 16.95 16.95M6 18 7.05 16.95" />
      </g>

      <circle
        cx="12"
        cy="12"
        r="5"
        fill="currentColor"
        stroke="none"
        className="transition-all duration-500 ease-in-out motion-reduce:transition-none"
      />

      <g
        className={[
          "transition-transform duration-500 ease-in-out motion-reduce:transition-none",
          isDark ? "translate-x-[3.5px] scale-100" : "scale-0",
        ].join(" ")}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle cx="12" cy="12" r="4.25" fill="var(--color-page)" stroke="none" />
      </g>
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    const rect = event.currentTarget.getBoundingClientRect();
    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    setTheme(nextTheme);
    applyTheme(nextTheme, origin);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={[
        "theme-toggle relative h-6 w-6 shrink-0 transition-colors duration-200 md:h-7 md:w-7",
        isDark
          ? "text-[#a8b4c4] hover:text-[#ffc857]"
          : "text-[#ffc857] hover:text-[#a8b4c4]",
        mounted ? "opacity-100" : "opacity-0",
      ].join(" ")}
      aria-label={
        mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Switch color theme"
      }
      aria-pressed={mounted ? isDark : undefined}
    >
      <ThemeIcon isDark={isDark} />
    </button>
  );
}
