import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import type { WorkItem } from "@/types";

const workExperience: WorkItem[] = [
  {
    id: "1",
    company: "GulfTainer",
    role: "Full-Stack Developer",
    type: "Internship",
    duration: "Jun 2025 - Aug 2025",
    description: "Developed enterprise-grade web applications including a Cost Optimization Revenue Enhancement Platform with React, Next.js, and FastAPI. Built a mobile-first Leave Management System for frontline workforce with device-level security and role-based approvals. Architected CI/CD pipelines to streamline deployment processes.",
    technologies: ["React", "Next.js", "FastAPI", "Azure", "SQL", "MySQL", "Python", "Entra ID"],
    images: [
      "/assets/Work/intern 1/intern1-dashboard.png",
      "/assets/Work/intern 1/intern1-analytics.png",
      "/assets/Work/intern 1/intern1-reports.png",
      "/assets/Work/intern 1/intern1-settings.png",
      "/assets/Work/intern 1/intern1-interface-1.png",
      "/assets/Work/intern 1/intern1-interface-2.png",
      "/assets/Work/intern 1/intern1-interface-3.png"
    ],
    copyright: "© All rights reserved. Work completed during internship at GulfTainer. All intellectual property rights belong to GulfTainer."
  },
  {
    id: "2",
    company: "EzeeTech",
    role: "Full-Stack Engineer",
    type: "Internship",
    duration: "Jun 2024 - Sep 2024",
    description: "Designed, implemented and deployed over 6+ custom fullstack websites tailored to individual client needs. Helped train and deploy a proprietary Python-based deep learning model for network latency optimization. Led individual projects from gathering client requirements to cloud deployments.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "cPanel", "WordPress", "Elementor"],
    images: [
      "/assets/Work/intern 2/intern2-interface-4.png",
      "/assets/Work/intern 2/intern2-dashboard.png",
      "/assets/Work/intern 2/intern2-interface-1.png",
      "/assets/Work/intern 2/intern2-interface-2.png",
      "/assets/Work/intern 2/intern2-interface-3.png",
      
    ],
    copyright: "© All rights reserved. Work completed during internship at EzeeTech. All intellectual property rights belong to EzeeTech."
  }
];

export const WorkExperience = () => {
  return (
    <section id="experience" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Work Experience"
          subtitle="Professional journey through internships and freelance projects"
        />

        <div className="space-y-6 sm:space-y-8">
          {workExperience.map((work, index) => (
            <AnimatedCard 
              key={work.id}
              delay={index * 0.1}
              hoverScale={1.01}
              className="p-4 sm:p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Content */}
                <div className="space-y-4 order-2 lg:order-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-secondary/50">
                          {work.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">{work.role}</h3>
                      <p className="text-base sm:text-lg text-primary">{work.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{work.duration}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-border/50 text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {work.copyright && (
                    <div className="pt-3 border-t border-border/30 mt-3">
                      <p className="text-xs text-muted-foreground/70 italic">
                        {work.copyright}
                      </p>
                    </div>
                  )}
                </div>

                {/* Image Carousel */}
                <div className="relative order-1 lg:order-2">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {work.id === "1" ? (
                        // Group vertical images in pairs for Intern 1
                        Array.from({ length: Math.ceil(work.images.length / 2) }, (_, pairIdx) => {
                          const img1 = work.images[pairIdx * 2];
                          const img2 = work.images[pairIdx * 2 + 1];
                          return (
                            <CarouselItem key={pairIdx}>
                              <div className="aspect-[5/3] bg-secondary/30 rounded-lg overflow-hidden flex items-center justify-center gap-2 p-2">
                                <motion.img 
                                  src={img1} 
                                  alt={`${work.company} project ${pairIdx * 2 + 1}`}
                                  className="h-full w-auto object-contain"
                                  initial={{ scale: 1 }}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                />
                                {img2 && (
                                  <motion.img 
                                    src={img2} 
                                    alt={`${work.company} project ${pairIdx * 2 + 2}`}
                                    className="h-full w-auto object-contain"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                )}
                              </div>
                            </CarouselItem>
                          );
                        })
                      ) : (
                        // Regular single image per slide
                        work.images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <div className="aspect-[5/3] bg-secondary/30 rounded-lg overflow-hidden flex items-center justify-center">
                              <motion.img 
                                src={image} 
                                alt={`${work.company} project ${idx + 1}`}
                                className="max-w-full max-h-full object-contain"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                          </CarouselItem>
                        ))
                      )}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 sm:left-2 bg-background/80 backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10" />
                    <CarouselNext className="right-1 sm:right-2 bg-background/80 backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10" />
                  </Carousel>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
