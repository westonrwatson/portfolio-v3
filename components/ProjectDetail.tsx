"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { isProjectReady } from "@/data/projects";
import { ProjectNav } from "@/components/ProjectNav";

type ProjectDetailProps = {
  project: Project;
  projects: Project[];
};

export function ProjectDetail({ project, projects }: ProjectDetailProps) {
  const ready = isProjectReady(project);

  return (
    <div className="space-y-6">
      {ready ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video w-full overflow-hidden bg-stone-200 transition-opacity hover:opacity-95"
          style={{ backgroundColor: project.bgColor }}
          aria-label={`Open ${project.title} live site`}
        >
          <iframe
            src={project.liveUrl}
            title={`Preview of ${project.title}`}
            className="pointer-events-none absolute inset-0 h-full w-full border-0"
          />
        </a>
      ) : (
        <div
          className="relative aspect-video w-full overflow-hidden bg-stone-200"
          style={{ backgroundColor: project.bgColor }}
        >
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 75rem"
            priority
          />
        </div>
      )}

      <div className="space-y-6 text-sm md:text-base">
        <div className="space-y-4">
          <h2 className="text-base font-bold tracking-tight text-ink md:text-lg">
            {project.title}
          </h2>

          <div className="max-w-2xl space-y-4">
            {project.description.map((paragraph, index) => (
              <p
                key={`${project.slug}-${index}`}
                className="leading-relaxed text-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {ready ? (
          <p className="text-muted">
            Click the preview to open the live site. If the embed is blank, the
            site may block embedding.
          </p>
        ) : null}

        <ProjectNav projects={projects} currentSlug={project.slug} />

        {ready || project.repoUrl ? (
          <div className="flex flex-wrap gap-3">
            {ready ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-stone-300 bg-ink px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-stone-800"
              >
                Open live site
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-stone-300 px-5 py-2.5 text-base font-medium text-ink transition-colors hover:bg-stone-100"
              >
                View on GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
