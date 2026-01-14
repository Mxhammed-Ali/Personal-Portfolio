import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasReset, setHasReset] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasVisible = isVisible;
          const nowVisible = entry.isIntersecting;
          
          setIsVisible(nowVisible);
          
          // Only reset when transitioning from visible to completely out of view
          if (wasVisible && !nowVisible && !hasReset) {
            // Section is completely out of view, reset animation
            setHasReset(true);
            setKey((prev) => prev + 1);
          }
          
          // When section comes back into view, allow reset again
          if (nowVisible && hasReset) {
            setHasReset(false);
          }
        });
      },
      {
        threshold: 0, // Completely out of view when threshold is 0
        rootMargin: "100px 0px", // Add margin to detect when fully scrolled away
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Handle hash changes - only reset if navigating to a different section
    const handleHashChange = () => {
      if (ref.current) {
        const section = ref.current.closest("section");
        const currentHash = window.location.hash.slice(1);
        
        // If navigating to this section, reset
        if (section?.id && currentHash === section.id) {
          setTimeout(() => {
            setKey((prev) => prev + 1);
            setHasReset(false);
          }, 100);
        } else if (section?.id && currentHash !== section.id) {
          // If navigating away from this section, mark for reset
          setHasReset(false);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isVisible, hasReset]);

  return (
    <motion.div
      ref={ref}
      key={key}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.2, type: "spring", stiffness: 80, damping: 15 }}
      className={`mb-8 md:mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
