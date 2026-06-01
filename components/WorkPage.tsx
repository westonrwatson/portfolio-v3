"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import type { Project } from "@/data/projects";
import { SiteContainer } from "@/components/SiteContainer";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectGrid } from "./ProjectGrid";

type WorkPageProps = {
  projects: Project[];
};

export function WorkPage({ projects }: WorkPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("project");
  const selected = projects.find((project) => project.slug === slug) ?? null;

  const handleSelect = useCallback(
    (project: Project) => {
      router.push(`/?project=${encodeURIComponent(project.slug)}`, { scroll: false });
    },
    [router],
  );

  return (
    <SiteContainer className="pb-8 md:pb-10">
      {selected ? (
        <ProjectDetail project={selected} projects={projects} />
      ) : (
        <ProjectGrid projects={projects} onSelect={handleSelect} />
      )}
    </SiteContainer>
  );
}
