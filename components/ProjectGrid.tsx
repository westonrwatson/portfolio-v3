"use client";

import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

export function ProjectGrid({ projects, onSelect }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} onSelect={onSelect} />
      ))}
    </div>
  );
}
