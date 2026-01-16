import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import type { SocialLink } from "@/types";
import { GradientBackground } from "./GradientBackground";
import { getAssetPath } from "@/lib/assets";

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mxhammed-Ali", icon: <Github className="w-6 h-6" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-ali-basheer/", icon: <Linkedin className="w-6 h-6" /> },
  { label: "Resume", href: "/Mohd-Ali-CV.pdf", icon: <FileText className="w-6 h-6" /> },
  { label: "Email", href: "mailto:mohdali2112@gmail.com", icon: <Mail className="w-6 h-6" /> },
];

const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      <GradientBackground />
      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-6 sm:space-y-8">
        {/* Subtle backdrop for text readability - seamlessly blended */}
        <div className="hero-backdrop-blur pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            variant="secondary" 
            className="bg-secondary/50 backdrop-blur-sm border-border/50 hover:bg-secondary/70 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
            Open to New Opportunities
          </Badge>
        </motion.div>
        
        <motion.div 
          className="space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span style={{ color: 'hsl(155, 100%, 84%)' }}>Mohammed Ali Abdul Basheer</span>.
          </h1>
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90">
            A dedicated Software Engineer.
          </h2>
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
           Full-stack developer specializing in AI-powered solutions and automation. I build scalable web applications with modern frameworks and integrate machine learning to solve real-world problems.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <a 
                href={link.label === "Resume" ? getAssetPath(link.href) : link.href} 
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                download={link.label === "Resume" ? true : undefined}
                aria-label={link.label}
                className="keycap keycap--icon select-none"
              >
                {link.icon}
              </a>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="keycap keycap--cta tracking-[0.22em] uppercase select-none"
            >
              <span>Explore Projects</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
