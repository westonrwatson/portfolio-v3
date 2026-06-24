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
  {
    slug: "build-with-ai",
    title: "Build With AI",
    description: [
      "Build With AI is a workshop hub for going from zero to two live websites in one session — setup guides, Lab 01 (Wordle), Lab 02 (About Me), and resources for Claude, Cursor, GitHub, and Vercel.",
      "Co-instructed with Meg Bagley, the site walks participants through prompting, building, and deploying real projects with a clear agenda from install to showcase.",
    ],
    liveUrl: "https://mdbuildwithai.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#f5f3ef",
  },
  {
    slug: "about-me-example",
    title: "About Me",
    description: [
      "A personal about site with a hero intro, story, skills, values, and contact — built as a clean single-page portfolio for Weston Watson.",
      "Highlights travel, design, and coding with stats, project cards, and a minimalist layout deployed on Vercel at about-me-example.vercel.app.",
    ],
    liveUrl: "https://about-me-example.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#f5f3f0",
  },
  {
    slug: "calea-courses",
    title: "Calea Courses",
    description: [
      "Calea Courses is a learning platform for building interactive courses, running classes with invite codes, and tracking student progress — designed to stay out of the way for teachers and students.",
      "Teachers create chapters and questions in a clean editor, invite rosters with codes, and monitor who needs help; students join a class and practice at their own pace with focused feedback.",
    ],
    liveUrl: "https://caleacourses.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#f8f7f5",
  },
  {
    slug: "frizeria-volintiri",
    title: "Frizeria din Volintiri",
    description: [
      "Frizeria din Volintiri is a bilingual salon site for Aliona Boldișor in Volintiri, Moldova — hair, nails, and waxing with transparent MDL pricing, gallery, FAQ, and phone-only booking.",
      "Built as a calm, appointment-first presence: services, about, and contact in English (and additional locales) so clients know what to expect before they call to schedule.",
    ],
    liveUrl: "https://frizeria-din-volintiri.vercel.app/en",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#f6f2ee",
  },
  {
    slug: "la-caii-lui-costin",
    title: "La caii lui Costin",
    description: [
      "La caii lui Costin is a bilingual farm experience site in Volintiri, Moldova — horseback riding, traditional carriage rides to nearby lakes, and visits to the family homestead with horses, pigs, and sheep.",
      "Built as a calm, appointment-first presence: packages, route map, gallery, and contact in Romanian (with EN/RU) so families and tourists can book a visit with Costin Ion before they arrive.",
    ],
    liveUrl: "https://la-caii-lui-costin.vercel.app/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#ede8df",
  },
  {
    slug: "la-strutii-din-jos",
    title: "La Struții din Jos",
    description: [
      "La Struții din Jos is a bilingual rural experience site in Volintiri, Moldova — a family homestead at the edge of the village where visitors can see ostriches up close, take photos, and learn about the birds on a guided visit.",
      "Built as a calm, appointment-first presence: visit flow, nearby attractions, rules, and contact in Romanian (with EN/RU) so families can call Ludmila Ciur and schedule a 30–45 minute visit before they arrive.",
    ],
    liveUrl: "https://la-strutii-din-jos.vercel.app/#en",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#e6ebe2",
  },
  {
    slug: "quoteme",
    title: "QuoteMe",
    description: [
      "QuoteMe is the marketing site for a home-screen quotes app — built around the idea that inspiration shouldn’t live in forgotten notes, but where you’ll actually see it every day.",
      "The landing page highlights privacy-first design (no ads, no tracking, quotes stay on device), testimonials, feedback, and download links in a clean, distraction-free layout.",
    ],
    liveUrl: "https://quotemeapp.com/",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#eef0f4",
  },
];

export function isProjectReady(project: Project): boolean {
  return Boolean(project.liveUrl && project.liveUrl !== "#");
}

export const previewOutlineClass = "border border-border";
