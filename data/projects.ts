export type Project = {
  slug: string;
  title: string;
  description: string[];
  liveUrl: string;
  repoUrl: string;
  thumbnail: string;
  bgColor: string;
  session?: string;
};

export const projects: Project[] = [
  {
    slug: "monday-site",
    title: "Project title (Monday)",
    description: [
      "Write one or two sentences about what you built in this project — the goal, the main features, and who it is for when someone visits your site.",
      "Write one or two sentences about what you learned in the Monday session — a tool, a technique, or something that surprised you while you were building.",
    ],
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#948c80",
    session: "Monday",
  },
  {
    slug: "wednesday-v2",
    title: "Project title (Wednesday v2)",
    description: [
      "Write one or two sentences about what you changed or added in this version — layout, content, colors, or new sections compared to your first site.",
      "Write one or two sentences about why you redesigned it, or what this v2 project is — what problem you wanted to solve or improve.",
    ],
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#b6b2ad",
    session: "Wednesday",
  },
  {
    slug: "thursday-site",
    title: "Project title (Thursday)",
    description: [
      "Write one or two sentences about the idea behind your Thursday project — what inspired it, what it does, and why you wanted to make it.",
      "Write one or two sentences about how you built it and what you are proud of — a decision, a detail, or a moment when it started to feel real.",
    ],
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#e6e7e9",
    session: "Thursday",
  },
  {
    slug: "coming-soon",
    title: "Coming soon",
    description: [
      "Write one or two sentences here when this project is ready to share — what it is, what it does, and why someone should take a look.",
      "Add a second pair of sentences with more detail — how you built it, what you learned, or what you would do next if you kept going.",
    ],
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#d8deea",
  },
];

export function isProjectReady(project: Project): boolean {
  return Boolean(project.liveUrl && project.liveUrl !== "#");
}
