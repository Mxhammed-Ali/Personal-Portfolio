export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  coverImage: string;
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  pdfUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "camp-management-system",
    title: "Camp Management System",
    shortDescription: "Inventory + occupancy tracking with clean UI and fast workflows.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    coverImage: "/assets/Personal/1/1.png",
    githubUrl: "https://github.com/yourname/camp-management",
    liveUrl: "https://yourname.github.io/portfolio/#/projects/camp-management-system",
    images: [
      { src: "/assets/Personal/1/1.png", alt: "Dashboard view", caption: "Main dashboard overview" },
      { src: "/assets/Personal/1/2.png", alt: "Bed allocation", caption: "Bed allocation screen" },
    ],
  },
  {
    slug: "process-guide",
    title: "Process & Functions Guide",
    shortDescription: "Client-facing documentation and visuals for workflow onboarding.",
    tags: ["Docs", "UI", "Figma"],
    coverImage: "/assets/academic/1/1.png",
    pdfUrl: "/assets/academic/1/sample.pdf",
    images: [
      { src: "/assets/academic/1/2.png", alt: "Guide preview", caption: "First pages preview" },
    ],
  },
];
