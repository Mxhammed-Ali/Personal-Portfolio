import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, GraduationCap, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/types";

const personalProjects: Project[] = [
  {
    id: "1",
    title: "WhatsApp Open Source AI Chatbot for Household Budgeting",
    description: "Developed an AI chatbot for budgeting services capable of parsing any relevant data from a WhatsApp group. Implemented a local secure instance of Deepseek LLM meant for direct user interaction.",
    course: "Personal Project",
    year: "Dec 2024 - Feb 2025",
    technologies: ["Python", "Selenium", "Ollama", "Deepseek R1"],
    githubUrl: "https://github.com/Mxhammed-Ali",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "2",
    title: "Camp Management System",
    description: "Built a scalable desktop app for comprehensive camp management. Features real-time visualization of camp layout, occupancy, inventory and maintenance statistics. Architected key operational flows for check-in/check-out, inventory, utility tracking, & maintenance cycles. Optimized workflows leading to 10% decrease in utility costs.",
    course: "Personal Project",
    year: "Sep 2025 - Oct 2025",
    technologies: ["React", "Next.js", "Tauri", "SQL"],
    githubUrl: "https://github.com/Mxhammed-Ali",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
];

const academicProjects: Project[] = [
  {
    id: "1",
    title: "Gaze Tracking & Mimicking for Robotic Head Control",
    description: "Designed a novel approach for gaze tracking using bio-inspired neural networks which mimic human infants gaze-learning patterns. Integrated learning-based control for robotic eye and head movement using Promethe neural simulator. Achieved 92–93% accuracy on 420 unseen images by leveraging salient-point features and tuned exclusion windows—demonstrating strong generalization from small datasets (30 training images).",
    course: "Senior Project",
    year: "2024",
    technologies: ["Promethe Simulator", "Pololu", "C++", "Python"],
    githubUrl: "https://github.com/Mxhammed-Ali",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "2",
    title: "Diamond Grading & Price Estimation using Multi Output Neural Networks",
    description: "Developed a multi-output 2D convolutional neural network to grade diamonds by cut, clarity, color & price. Achieved up to 82% accuracy in estimating diamond grades for cut, clarity, color & price from a single image.",
    course: "Neural Networks",
    year: "2024",
    technologies: ["Python", "Keras", "TensorFlow", "Pandas"],
    githubUrl: "https://github.com/Mxhammed-Ali",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "3",
    title: "University Food Delivery Web Application",
    description: "Developed a web-based application to cater to university food delivery services with full order management, user authentication, and real-time tracking capabilities.",
    course: "Database Management System",
    year: "2024",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubUrl: "https://github.com/Mxhammed-Ali",
    images: ["/placeholder.svg"]
  },
  {
    id: "4",
    title: "Temperature Monitoring System with Observer Pattern",
    description: "Implemented real-time updates across multiple zones using thread synchronization via the Executor framework. Integrated the system with Raspberry Pi 3B for sensor-based temperature tracking.",
    course: "Software Design",
    year: "2024",
    technologies: ["Java", "Raspberry Pi", "Observer Pattern"],
    githubUrl: "https://github.com/Mxhammed-Ali",
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
];

type TabType = "personal" | "academic";

export const Projects = () => {
  const [hoveredTab, setHoveredTab] = useState<TabType | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [showSecondSet, setShowSecondSet] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!secondSetRef.current) return;
      
      const secondSetRect = secondSetRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Show second set when it's 70% into viewport
      if (secondSetRect.top < viewportHeight * 0.7) {
        setShowSecondSet(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (type: TabType) => {
    if (type === "personal" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (type === "academic" && secondSetRef.current) {
      secondSetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderProjectCard = (project: Project, index: number, IconComponent: typeof Code2) => (
    <AnimatedCard 
      key={project.id}
      delay={index * 0.1}
      className="overflow-hidden"
    >
      {/* Project Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <motion.div 
                    className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm" />
                <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm" />
              </>
            )}
          </Carousel>
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs sm:text-sm">
              {project.year}
            </Badge>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-xs sm:text-sm text-primary">{project.course}</p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 sm:gap-3 pt-2">
          {project.githubUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-border/50 hover:bg-secondary/50 text-xs sm:text-sm"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Code
                </a>
              </Button>
            </motion.div>
          )}
          {project.demoUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-border/50 hover:bg-secondary/50 text-xs sm:text-sm"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Demo
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedCard>
  );

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 gradient-bg relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with Tab Navigation */}
        <div className="flex items-start gap-4 mb-8 sm:mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap relative pb-2">
              <button
                onClick={() => scrollToSection("academic")}
                onMouseEnter={() => setHoveredTab("academic")}
                onMouseLeave={() => setHoveredTab(null)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all relative z-10 text-muted-foreground/40 hover:text-muted-foreground/60"
              >
                Academic
              </button>
              
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground/40">/</span>
              
              <button
                onClick={() => scrollToSection("personal")}
                onMouseEnter={() => setHoveredTab("personal")}
                onMouseLeave={() => setHoveredTab(null)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all relative z-10 text-muted-foreground/40 hover:text-muted-foreground/60"
              >
                Personal
              </button>
              
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">Projects</span>
              
              {/* Single sliding highlight */}
              <motion.div
                className="absolute -bottom-1 h-1.5 bg-primary/80 backdrop-blur-sm rounded-full shadow-lg shadow-primary/20"
                initial={false}
                animate={{
                  opacity: hoveredTab ? 1 : 0,
                  x: hoveredTab === "academic" ? "0%" : hoveredTab === "personal" ? "calc(100% + 3rem + 0.75rem)" : "0%",
                  width: "clamp(100px, 13%, 180px)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              A showcase of my development work
            </p>
          </div>
        </div>

        {/* Navigation Arrows - Only visible when in view */}
        {isInView && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollToSection("personal")}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollToSection("academic")}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* First Set - Personal Projects */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {personalProjects.map((project, index) => renderProjectCard(project, index, Code2))}
          </div>
        </div>

        {/* Spacer and Second Set - Academic Projects */}
        <div ref={secondSetRef} className="min-h-[50vh] pt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: showSecondSet ? 1 : 0,
              y: showSecondSet ? 0 : 50
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Academic Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {academicProjects.map((project, index) => renderProjectCard(project, index, GraduationCap))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
