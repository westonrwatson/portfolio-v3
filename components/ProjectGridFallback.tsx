import type { Project } from "@/data/projects";
import { SiteContainer } from "@/components/SiteContainer";
import { ProjectGridPlaceholder } from "@/components/ProjectGridPlaceholder";

/** Shown while WorkPage hydrates (useSearchParams requires client render). */
export function ProjectGridFallback({ projects }: { projects: Project[] }) {
  const showPlaceholder = projects.length % 2 === 1;

  return (
    <SiteContainer className="pb-8 md:pb-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8" aria-busy="true" aria-label="Loading projects">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="aspect-video w-full animate-pulse opacity-80"
            style={{ backgroundColor: project.bgColor }}
          />
        ))}
        {showPlaceholder ? <ProjectGridPlaceholder /> : null}
      </div>
    </SiteContainer>
  );
}
