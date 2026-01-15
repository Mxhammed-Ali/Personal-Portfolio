import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, FolderGit2, GraduationCap, Grid3x3 } from "lucide-react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { id: "home", href: "home", icon: Home, label: "Home" },
  { id: "bento", href: "bento", icon: Grid3x3, label: "More" },
  { id: "experience", href: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", href: "projects", icon: FolderGit2, label: "Projects" },
  { id: "education", href: "education", icon: GraduationCap, label: "Education" }
];

export const Navigation = () => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setMouseX(x);
      }
    };

    const handleMouseLeave = () => {
      setMouseX(null);
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('mousemove', handleMouseMove);
      navElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener('mousemove', handleMouseMove);
        navElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const getItemOffset = (index: number) => {
    if (mouseX === null) return 0;
    
    const itemElement = itemRefs.current[index];
    if (!itemElement) return 0;

    const rect = itemElement.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    if (!navRect) return 0;

    const itemCenter = rect.left - navRect.left + rect.width / 2;
    const distance = Math.abs(mouseX - itemCenter);
    const maxDistance = 150; // Distance at which effect starts
    
    if (distance > maxDistance) return 0;
    
    // Calculate wave effect with fluid dip
    const influence = 1 - (distance / maxDistance);
    const maxOffset = -20; // Maximum float height
    
    // Create a curve that dips adjacent items slightly
    // Items very close (but not at center) dip down before rising
    let offset;
    if (distance < 30) {
      // Center item - highest point
      offset = maxOffset * influence;
    } else if (distance < 80) {
      // Adjacent items - create a slight dip
      const dipInfluence = (distance - 30) / 50; // 0 to 1
      const dipAmount = 5; // How much to dip down
      offset = (maxOffset * influence) + (dipAmount * Math.sin(dipInfluence * Math.PI));
    } else {
      // Outer items - smooth wave
      offset = maxOffset * influence;
    }
    
    return offset;
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <div 
        ref={navRef}
        className="relative flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 p-1 sm:p-1.5 md:p-2 rounded-full bg-background/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/5"
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const offset = getItemOffset(index);
          
          return (
            <motion.div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative"
            >
              <motion.a
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex flex-col items-center gap-0.5 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-full transition-colors relative z-10"
                animate={{ 
                  y: offset
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 180, 
                  damping: 12,
                  mass: 0.6
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-foreground/70" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-foreground/60 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};
