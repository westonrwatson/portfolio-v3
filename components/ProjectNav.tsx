"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectNavProps = {
  projects: Project[];
  currentSlug: string;
};

const linkClass = (active: boolean) =>
  [
    "font-medium transition-colors",
    active ? "text-ink underline underline-offset-4" : "text-muted hover:text-ink",
  ].join(" ");

export function ProjectNav({ projects, currentSlug }: ProjectNavProps) {
  return (
    <nav
      className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-sm md:text-base"
      aria-label="Projects"
    >
      <Link href="/" className={linkClass(false)} scroll={false}>
        All
      </Link>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/?project=${encodeURIComponent(project.slug)}`}
          className={linkClass(project.slug === currentSlug)}
          aria-current={project.slug === currentSlug ? "page" : undefined}
          scroll={false}
        >
          {project.title}
        </Link>
      ))}
    </nav>
  );
}
