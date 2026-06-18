"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteContainer } from "@/components/SiteContainer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";

const navLinkClass = (active: boolean) =>
  [
    "text-base font-medium tracking-wide transition-colors",
    active ? "text-ink" : "text-muted hover:text-ink",
  ].join(" ");

export function Header() {
  const pathname = usePathname();
  const isWork = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <header>
      <SiteContainer className="flex items-center justify-between py-6 md:py-8">
        <div className="flex items-center gap-1.5 md:gap-2">
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-wider text-ink md:text-3xl"
          >
            {site.name}
          </Link>
          <ThemeToggle />
        </div>

        <nav className="flex items-center gap-6 md:gap-8" aria-label="Main">
          <Link
            href="/"
            className={navLinkClass(isWork)}
            aria-current={isWork ? "page" : undefined}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={navLinkClass(isAbout)}
            aria-current={isAbout ? "page" : undefined}
          >
            About
          </Link>
        </nav>
      </SiteContainer>
    </header>
  );
}
