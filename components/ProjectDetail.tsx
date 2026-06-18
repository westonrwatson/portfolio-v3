"use client";

import type { Project } from "@/data/projects";
import { isProjectReady, previewOutlineClass } from "@/data/projects";
import { ProjectLivePreview } from "@/components/ProjectLivePreview";
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
          className={`relative block aspect-video w-full overflow-hidden bg-surface transition-opacity hover:opacity-95 ${previewOutlineClass}`}
          style={{ backgroundColor: project.bgColor }}
          aria-label={`Open ${project.title} live site`}
        >
          <ProjectLivePreview project={project} priority />
        </a>
      ) : (
        <div
          className={`relative aspect-video w-full overflow-hidden bg-surface ${previewOutlineClass}`}
          style={{ backgroundColor: project.bgColor }}
        >
          <ProjectLivePreview project={project} priority />
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

        {ready || project.repoUrl ? (
          <div className="flex flex-wrap gap-3">
            {ready ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border bg-ink px-5 py-2.5 text-base font-medium text-page transition-colors hover:opacity-90"
              >
                Open live site
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border px-5 py-2.5 text-base font-medium text-ink transition-colors hover:bg-surface"
              >
                View on GitHub
              </a>
            ) : null}
          </div>
        ) : null}

        <ProjectNav projects={projects} currentSlug={project.slug} />
      </div>
    </div>
  );
}
