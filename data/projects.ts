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
    title: "westonwatson.com",
    description: [
      "My personal portfolio site — a gallery of design work spanning branding, posters, stickers, and visual projects, built as a simple scrollable showcase.",
      "Built during the Monday session as my first shipped site: static HTML and CSS, deployed live at westonwatson.com so visitors can browse the work in one place.",
    ],
    liveUrl: "https://westonwatson.com/",
    repoUrl: "",
    thumbnail: "/projects/westonwatson.png",
    bgColor: "#ffffff",
    session: "Monday",
  },
  {
    slug: "wednesday-v2",
    title: "Povtori — Daily Russian",
    description: [
      "Povtori is a daily Russian learning site built around one repeatable ~30-minute lesson — greetings, introductions, and core grammar without streak pressure or cram culture.",
      "The idea is small, steady exposure: show up once a day, make real progress, and build a habit that lasts past day thirty instead of burning out after a heroic session.",
    ],
    liveUrl: "https://povtori.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#b6b2ad",
    session: "Wednesday",
  },
  {
    slug: "thursday-site",
    title: "String&Can",
    description: [
      "String&Can is a live translation and transcription app that listens to Russian speech and surfaces English translation in real time — built for practical, in-the-moment understanding.",
      "Start listening to stream transcription and translation on screen, with a simple controls-first UI focused on getting words across quickly.",
    ],
    liveUrl: "https://stringandcan.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#e6e7e9",
    session: "Thursday",
  },
  {
    slug: "codemoldova",
    title: "CodeMoldova 2026",
    description: [
      "CodeMoldova is the program site for CodeMoldova 2026 — the hub for the cohort, schedule, and resources behind the summer coding initiative in Moldova.",
      "Built and deployed on Vercel as a central place for participants and partners to find program information and stay connected throughout the season.",
    ],
    liveUrl: "https://codemoldova.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#d8deea",
  },
  {
    slug: "utah-moldova-business",
    title: "Utah Moldova Business Partnership",
    description: [
      "The UMBP site promotes free consulting for Moldovan businesses — strategy, marketing, web development, and education — delivered each summer by a small intern team in Chișinău.",
      "The site walks visitors through services, past clients, how engagements work, and how to request consulting, with Weston on the intern team for web development.",
    ],
    liveUrl: "https://utahmoldovabusiness.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#f4f1ec",
  },
  {
    slug: "innaya-studio",
    title: "InnaYa Design Studio",
    description: [
      "InnaYa Design Studio is a bilingual portfolio site for a design studio — home, about, technologies, portfolio, and contact — built to present work clearly to clients in English and additional locales.",
      "Deployed on Vercel with a clean navigation structure so visitors can explore services, case studies, and get in touch without clutter.",
    ],
    liveUrl: "https://innayastudio.vercel.app/en",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#ebe8e4",
  },
];

export function isProjectReady(project: Project): boolean {
  return Boolean(project.liveUrl && project.liveUrl !== "#");
}

export const previewOutlineClass = "border border-stone-200";
