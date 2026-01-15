import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Gauge, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { useState, useEffect, useRef } from "react";

const LocationMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mapStyle = "style=feature:all|element:geometry|color:0x1a1a1a&style=feature:all|element:labels.text.fill|color:0x8b8b8b&style=feature:all|element:labels.text.stroke|color:0x1a1a1a&style=feature:water|element:geometry|color:0x0d3d3d&style=feature:road|element:geometry|color:0x2d2d2d&style=feature:poi|element:geometry|color:0x252525";

  return (
    <motion.div 
      ref={mapRef}
      className="aspect-video bg-secondary/30 rounded-lg mb-3 overflow-hidden relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Loading map...</span>
          </div>
        </div>
      )}
      {isVisible && (
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828294949!2d54.89782!3d25.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890&${mapStyle}`}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dubai Location Map"
          className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          onLoad={() => setIsLoaded(true)}
        />
      )}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
    </motion.div>
  );
};

export const BentoGrid = () => {
  return (
    <section id="bento" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Featured work & info"
          subtitle="Quick insights about my work and interests"
        />
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <AnimatedCard delay={0.1} className="p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Location</h3>
            </div>
            <LocationMap />
            <p className="text-sm text-muted-foreground mt-auto">Dubai, UAE</p>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="p-4 sm:p-6 flex flex-col">
            <Badge variant="secondary" className="mb-3 text-xs sm:text-sm w-fit">Featured work</Badge>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Local LLM Chat Application</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Privacy-focused local LLM chat app running entirely on-device with modern interface.
            </p>
            <motion.a
              href="#projects"
              className="block bg-secondary/30 rounded-lg overflow-hidden cursor-pointer h-[200px] mt-auto"
            >
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative">
                <img 
                  src="/assets/Personal/4/llm-app-interface-6.png" 
                  alt="LLM Chat App"
                  className="w-auto h-full object-contain opacity-60 hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.a>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gauge className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Typing speed</h3>
            </div>
            <div className="text-center py-6 sm:py-8 flex-grow flex flex-col justify-center">
              <motion.div 
                className="text-5xl sm:text-6xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", duration: 1.2, delay: 0.5, stiffness: 80, damping: 15 }}
              >
                142
              </motion.div>
              <div className="text-muted-foreground text-sm sm:text-base">wpm</div>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-auto">
              <span>15s</span>
              <span>100%</span>
              <span>EN</span>
            </div>
          </AnimatedCard>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <AnimatedCard delay={0.4} className="p-4 sm:p-6 lg:flex-[1]">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Tech stack</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Next.js", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "FastAPI", "Rust"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Database</p>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MySQL", "SQLite"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Middleware & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Azure", "AWS", "CI/CD"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.5} className="p-4 sm:p-6 lg:flex-[1.5]">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Skills & Technologies</h3>
                <p className="text-xs text-muted-foreground">Technical expertise and tools I work with</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">Programming Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Java", "Rust"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">Frameworks & Libraries</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "Next.js", "React", "React Native", "Expo", "Tailwind CSS", "Tauri"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "Oracle SQL", "PostgreSQL", "SQLite"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3 lg:col-span-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">AI/ML & Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "Keras", "Deep Learning", "RAG Pipelines", "CNNs", "LanceDB", "FAISS", "Ollama", "Llama", "scikit-learn", "Pandas", "NumPy", "Azure", "Joget", "Git Actions", "Docker", "Git"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border/50 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
