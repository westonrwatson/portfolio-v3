import type { ReactNode } from "react";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Shared content column — aligns header, grid, and about to the same left/right edges. */
export function SiteContainer({ children, className = "" }: SiteContainerProps) {
  return (
    <div className={["site-inner", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
