import { Suspense } from "react";
import { WorkPage } from "@/components/WorkPage";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <WorkPage projects={projects} />
    </Suspense>
  );
}
