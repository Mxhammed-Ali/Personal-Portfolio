import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Gauge, Code2, BookMarked, Music } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";

export const BentoGrid = () => {
  return (
    <section id="bento" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Featured work & info"
          subtitle="Quick insights about my work and interests"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Location Card */}
          <AnimatedCard delay={0.1} className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Location</h3>
            </div>
            <motion.div 
              className="aspect-video bg-secondary/30 rounded-lg mb-3 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
            </motion.div>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          </AnimatedCard>

          {/* Featured Project */}
          <AnimatedCard delay={0.2} className="p-4 sm:p-6 sm:col-span-2 lg:col-span-2">
            <Badge variant="secondary" className="mb-3 text-xs sm:text-sm">Featured work</Badge>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Bookmarked</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Effortlessly save and organize your favorite tweets in Notion using a Telegram bot.
            </p>
            <motion.div 
              className="aspect-video bg-secondary/30 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <BookMarked className="w-12 h-12 sm:w-16 sm:h-16 text-primary/40" />
              </div>
            </motion.div>
          </AnimatedCard>

          {/* Typing Speed */}
          <AnimatedCard delay={0.3} className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gauge className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Typing speed</h3>
            </div>
            <div className="text-center py-6 sm:py-8">
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
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
              <span>15s</span>
              <span>100%</span>
              <span>EN</span>
            </div>
          </AnimatedCard>

          {/* Now Playing */}
          <AnimatedCard delay={0.4} className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Last played</h3>
            </div>
            <motion.div 
              className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg mb-3"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
            <p className="font-semibold text-sm sm:text-base">FOCUS</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Hearts2Hearts</p>
          </AnimatedCard>

          {/* Tech Stack */}
          <AnimatedCard delay={0.5} className="p-4 sm:p-6 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Tech stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 1.2, type: "spring", stiffness: 80, damping: 15 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="secondary" className="bg-secondary/50 text-xs sm:text-sm">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
