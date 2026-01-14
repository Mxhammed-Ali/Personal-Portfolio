import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, FolderGit2, GraduationCap, Grid3x3 } from "lucide-react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { id: "home", href: "#home", icon: Home, label: "Home" },
  { id: "bento", href: "#bento", icon: Grid3x3, label: "More" },
  { id: "experience", href: "#experience", icon: Briefcase, label: "Experience" },
  { id: "projects", href: "#projects", icon: FolderGit2, label: "Projects" },
  { id: "education", href: "#education", icon: GraduationCap, label: "Education" }
];

export const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative flex gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.href}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-secondary/50 transition-all relative h-9 w-9 sm:h-10 sm:w-10"
                asChild
              >
                <a href={item.href} aria-label={item.label}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              
              {/* Tooltip */}
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border/50 rounded-md text-xs whitespace-nowrap"
                >
                  {item.label}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};
