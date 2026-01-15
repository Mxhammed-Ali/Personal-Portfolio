// Shared types for the portfolio application

export interface WorkItem {
  id: string;
  company: string;
  role: string;
  type: "Internship" | "Freelance";
  duration: string;
  description: string;
  technologies: string[];
  images: string[];
  pdfUrl?: string;
  copyright?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  course: string;
  year: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  pdfUrl?: string;
  image?: string;
  images?: string[];
  copyright?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements: string[];
  courses: string[];
}

export interface NavItem {
  id: string;
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}
