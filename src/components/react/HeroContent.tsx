import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  const leftContentRef = useRef<HTMLDivElement>(null);

  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={leftContentRef} className="space-y-6 md:space-y-8 text-center max-w-4xl px-4 sm:px-6">
      {/* Profile Image - Responsive sizes */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="relative">
          <img
            src="/yo.jpg"
            alt="Pablo Gil Díaz"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Desarrollador Web FrontEnd
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-4">
          <b>Frontend Developer</b> con background en diseño gráfico, web e
          informática. Apasionado por crear interfaces funcionales,
          estéticas y accesibles. Trabajo con React, Next.js, TypeScript y
          exploro la integración de IA en proyectos. Buscando un equipo
          donde <b>crecer, aportar y construir con propósito desde cero.</b>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 md:pt-6">
        <Button
          size="lg"
          className="group border-white/20 bg-white/5 text-white px-6 sm:px-8 py-3 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          onClick={handleProjectsClick}
        >
          <span className="flex items-center justify-center gap-2">
            Ver mis proyectos
            <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white px-6 sm:px-8 w-full sm:w-auto"
          asChild
        >
          <a href="/CV_PabloGilDiaz.pdf" download="CV_PabloGilDiaz.pdf">
            Descargar CV
          </a>
        </Button>
      </div>
    </div>
  );
}
