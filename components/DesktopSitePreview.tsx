"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_DESKTOP_WIDTH = 1280;
const DESKTOP_ASPECT = 9 / 16;

type DesktopSitePreviewProps = {
  src: string;
  title: string;
  priority?: boolean;
  desktopWidth?: number;
};

export function DesktopSitePreview({
  src,
  title,
  priority = false,
  desktopWidth = DEFAULT_DESKTOP_WIDTH,
}: DesktopSitePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const desktopHeight = Math.round(desktopWidth * DESKTOP_ASPECT);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const width = container.offsetWidth;
      if (width > 0) {
        setScale(width / desktopWidth);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, [desktopWidth]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <iframe
        src={src}
        title={title}
        width={desktopWidth}
        height={desktopHeight}
        loading={priority ? "eager" : "lazy"}
        className="pointer-events-none absolute left-0 top-0 max-w-none origin-top-left border-0"
        style={{
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}
