import { useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

export function HeroContent() {
  const leftContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftContentRef.current) {
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, []);

  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={leftContentRef} className="space-y-8 opacity-0 translate-y-[30px] text-center max-w-4xl">
      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img
            src="/yo.jpg"
            alt="Pablo Gil Díaz"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Desarrollador Web FrontEnd
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          <b>Frontend Developer</b> con background en diseño gráfico, web e
          informática. Apasionado por crear interfaces funcionales,
          estéticas y accesibles. Trabajo con React, Next.js, TypeScript y
          exploro la integración de IA en proyectos. Buscando un equipo
          donde <b>crecer, aportar y construir con propósito desde cero.</b>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="group border-white/20 bg-white/5 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
          onClick={handleProjectsClick}
        >
          <span className="flex items-center gap-2">
            Ver mis proyectos
            <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white px-8"
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
