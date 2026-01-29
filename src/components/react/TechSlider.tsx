import { useEffect, useState } from "react";
import { TechGrid } from "./TechGrid";
import { TechCarousel } from "./TechCarousel";

export function TechSlider() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return (
      <section className="w-full mt-6 sm:mt-8">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-800/50 rounded animate-pulse mb-2 max-w-xs mx-auto" />
          <div className="h-4 bg-gray-800/30 rounded animate-pulse max-w-md mx-auto" />
        </div>
        <div className="w-full h-32 bg-gray-800/20 rounded animate-pulse" />
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Mi Stack Tecnológico
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Las tecnologías que me ayudan a construir interfaces de usuario
          modernas y funcionales. En constante aprendizaje de nuevas
          herramientas.
        </p>
      </div>

      <div className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <TechGrid />
        <TechCarousel
          currentGroup={currentGroup}
          onGroupChange={setCurrentGroup}
        />
      </div>
    </section>
  );
}
