import { useState, useEffect } from "react";
import {
  ACTIVE_SECTION_OFFSET,
  BOTTOM_THRESHOLD,
} from "@/constants/ui-constants";

export function useActiveSection(sections: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string>(sections[0] || "home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Si estamos cerca del final de la página
      if (scrollPosition + windowHeight >= documentHeight - BOTTOM_THRESHOLD) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          setActiveSection(lastSection);
        }
        return;
      }

      let currentSection = sections[0] || "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;

        if (scrollPosition >= elementTop - ACTIVE_SECTION_OFFSET) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
}
