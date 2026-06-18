"use client";

import { useEffect, useRef, useState } from "react";
import { DvdLogo } from "@/components/DvdLogo";
import { previewOutlineClass } from "@/data/projects";

const DVD_COLORS = [
  "#0080ff",
  "#ffffff",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#ff8800",
  "#88ff00",
];

const SPEED = 80;

function pickColor(exclude?: string) {
  const options = exclude
    ? DVD_COLORS.filter((color) => color !== exclude)
    : DVD_COLORS;

  return options[Math.floor(Math.random() * options.length)];
}

export function ProjectGridPlaceholder() {
  const [color, setColor] = useState("#0080ff");
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef(color);
  const positionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: SPEED, y: SPEED * 0.72 });

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    if (!container || !logo) return;

    const setRandomStart = () => {
      const bounds = container.getBoundingClientRect();
      const logoWidth = logo.offsetWidth;
      const logoHeight = logo.offsetHeight;
      const maxX = Math.max(bounds.width - logoWidth, 0);
      const maxY = Math.max(bounds.height - logoHeight, 0);

      positionRef.current = {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      };

      velocityRef.current = {
        x: (Math.random() > 0.5 ? 1 : -1) * SPEED * (0.75 + Math.random() * 0.35),
        y: (Math.random() > 0.5 ? 1 : -1) * SPEED * (0.75 + Math.random() * 0.35),
      };

      logo.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
    };

    const bumpColor = () => {
      const next = pickColor(colorRef.current);
      colorRef.current = next;
      setColor(next);
    };

    setRandomStart();

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const boundsWidth = container.clientWidth;
      const boundsHeight = container.clientHeight;
      const logoWidth = logo.offsetWidth;
      const logoHeight = logo.offsetHeight;
      const maxX = boundsWidth - logoWidth;
      const maxY = boundsHeight - logoHeight;

      let { x, y } = positionRef.current;
      let { x: vx, y: vy } = velocityRef.current;
      let xBounce = false;
      let yBounce = false;

      x += vx * dt;
      y += vy * dt;

      if (x <= 0) {
        x = 0;
        vx = Math.abs(vx);
        xBounce = true;
      } else if (x >= maxX) {
        x = maxX;
        vx = -Math.abs(vx);
        xBounce = true;
      }

      if (y <= 0) {
        y = 0;
        vy = Math.abs(vy);
        yBounce = true;
      } else if (y >= maxY) {
        y = maxY;
        vy = -Math.abs(vy);
        yBounce = true;
      }

      if (xBounce && yBounce) {
        bumpColor();
        bumpColor();
      } else if (xBounce || yBounce) {
        bumpColor();
      }

      positionRef.current = { x, y };
      velocityRef.current = { x: vx, y: vy };
      logo.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    const observer = new ResizeObserver(() => {
      const { x, y } = positionRef.current;
      const maxX = Math.max(container.clientWidth - logo.offsetWidth, 0);
      const maxY = Math.max(container.clientHeight - logo.offsetHeight, 0);
      positionRef.current = {
        x: Math.min(x, maxX),
        y: Math.min(y, maxY),
      };
      logo.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
    });

    observer.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  const handleToggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (document.fullscreenElement === container) {
        await document.exitFullscreen();
        return;
      }

      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      }
    } catch {
      // Fullscreen may be blocked by the browser.
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      void handleToggleFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`dvd-placeholder ${previewOutlineClass}`}
      role="button"
      tabIndex={0}
      aria-label="DVD screensaver. Click to open fullscreen."
      onClick={() => void handleToggleFullscreen()}
      onKeyDown={handleKeyDown}
    >
      <div ref={logoRef} className="dvd-logo">
        <DvdLogo color={color} />
      </div>
    </div>
  );
}
