/**
 * FluidGlassNavigation - A beautiful glass-morphism navigation bar
 * Uses CSS backdrop-filter for reliable glass effects across all devices
 */

import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Briefcase, FolderGit2, GraduationCap, Grid3x3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// =====================================================
// TypeScript Interfaces
// =====================================================

export interface NavItem {
  id: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

export interface FluidGlassNavigationProps {
  navItems?: NavItem[];
  className?: string;
}

// =====================================================
// Default Navigation Items
// =====================================================

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: 'home', href: '#home', icon: Home, label: 'Home' },
  { id: 'bento', href: '#bento', icon: Grid3x3, label: 'More' },
  { id: 'experience', href: '#experience', icon: Briefcase, label: 'Experience' },
  { id: 'projects', href: '#projects', icon: FolderGit2, label: 'Projects' },
  { id: 'education', href: '#education', icon: GraduationCap, label: 'Education' }
];

// =====================================================
// Main FluidGlassNavigation Component
// =====================================================

export const FallbackNavigation = memo(function FallbackNavigation({ 
  navItems 
}: { navItems: NavItem[] }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50"
      data-testid="fallback-nav"
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
});

export default function FluidGlassNavigation({
  navItems = DEFAULT_NAV_ITEMS,
  className = ''
}: FluidGlassNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>('home');

  const handleClick = (id: string, href: string) => {
    setActiveItem(id);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: 0.8, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 ${className}`}
      data-testid="fluid-glass-nav"
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 blur-xl scale-110" />
      
      {/* Glass container */}
      <div 
        className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
          `
        }}
      >
        {/* Inner highlight */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
          }}
        />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <motion.div
              key={item.id}
              className="relative"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Active/Hover background indicator */}
              {(isActive || isHovered) && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: isActive 
                      ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.4) 0%, rgba(6, 182, 212, 0.3) 100%)'
                      : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: isActive 
                      ? '0 0 20px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                      : 'none'
                  }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <motion.button
                onClick={() => handleClick(item.id, item.href)}
                className={`
                  relative z-10 flex items-center justify-center
                  w-10 h-10 sm:w-11 sm:h-11 rounded-full
                  transition-colors duration-200
                  ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Tooltip */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                  }}
                >
                  <span className="text-white/90">{item.label}</span>
                  {/* Tooltip arrow */}
                  <div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      borderRight: '1px solid rgba(255,255,255,0.2)',
                      borderBottom: '1px solid rgba(255,255,255,0.2)',
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}
