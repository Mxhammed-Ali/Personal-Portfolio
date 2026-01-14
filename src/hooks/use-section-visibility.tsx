import { useEffect, useState, useRef } from "react";

export const useSectionVisibility = (sectionId: string) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Get section element
    const section = document.getElementById(sectionId);
    if (!section) return;

    sectionRef.current = section;

    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Reset animation key when section becomes visible
            setAnimationKey((prev) => prev + 1);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: "-50px 0px", // Trigger slightly before section enters viewport
      }
    );

    observer.observe(section);

    // Handle hash changes (navbar navigation)
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === sectionId) {
        // Small delay to ensure scroll completes
        setTimeout(() => {
          setAnimationKey((prev) => prev + 1);
        }, 100);
      }
    };

    // Check initial hash
    if (window.location.hash.slice(1) === sectionId) {
      setTimeout(() => {
        setAnimationKey((prev) => prev + 1);
      }, 100);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [sectionId]);

  return { isVisible, animationKey };
};





