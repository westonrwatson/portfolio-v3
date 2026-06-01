import Image from "next/image";
import { DesktopSitePreview } from "@/components/DesktopSitePreview";
import type { Project } from "@/data/projects";
import { isProjectReady } from "@/data/projects";

type ProjectLivePreviewProps = {
  project: Project;
  priority?: boolean;
  sizes?: string;
};

export function ProjectLivePreview({
  project,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 75rem",
}: ProjectLivePreviewProps) {
  const ready = isProjectReady(project);

  if (ready) {
    return (
      <DesktopSitePreview
        src={project.liveUrl}
        title={`Preview of ${project.title}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={project.thumbnail}
      alt=""
      fill
      unoptimized={project.thumbnail.endsWith(".svg")}
      className="object-cover"
      sizes={sizes}
      priority={priority}
    />
  );
}
