import { Suspense } from "react";
import { ProjectGridFallback } from "@/components/ProjectGridFallback";
import { WorkPage } from "@/components/WorkPage";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <Suspense fallback={<ProjectGridFallback projects={projects} />}>
      <WorkPage projects={projects} />
    </Suspense>
  );
}
