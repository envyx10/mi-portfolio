import { useRef } from "react";
import { FiArrowRight, FiLinkedin, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  const leftContentRef = useRef<HTMLDivElement>(null);

  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // openMail removed: contact actions are handled elsewhere or via static badge

  return (
    <div
      ref={leftContentRef}
      className="space-y-4 sm:space-y-6 md:space-y-8 text-center max-w-4xl px-2 sm:px-4 md:px-6"
    >
      {/* Profile Image - Responsive sizes */}
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 md:mb-8">
        <div className="relative">
          <img
            src="/yo.jpg"
            alt="Pablo Gil Díaz"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 sm:border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Badge estático verde - indicador visual (no clickable) */}
        <div
          role="note"
          className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/18 border border-emerald-600 text-emerald-50 text-sm font-medium backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-emerald-700" aria-hidden="true" />
          <span>En busca de trabajo</span>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
          <span className="block">Hola, soy Pablo</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Desarrollador web
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto px-1 sm:px-2 md:px-4">
          Soy <b>Desarrollador</b> Frontend Junior <b>apasionado</b> por
          construir interfaces web funcionales, estéticas y accesibles. Gracias a mi experiencia en Freepik y mi background en diseño gráfico, tengo una visión especial para el detalle y la estética, lo que me permite crear interfaces funcionales y agradables. Me especializo en 
          <b> React, Next.js y TypeScript</b>, y estoy en constante aprendizaje,
          explorando tecnologías como Angular e inteligencia artificial.
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 pt-3 sm:pt-4 md:pt-6">
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start flex-1 lg:flex-initial">
            <Button
              size="lg"
              className="group border-white/20 bg-white/5 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              onClick={handleProjectsClick}
            >
              <span className="flex items-center justify-center gap-2">
                Ver mis proyectos
                <FiArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white px-4 sm:px-6 md:px-8 w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3"
              asChild
            >
              <a href="/CV_PabloGilDiaz.pdf" download="CV_PabloGilDiaz.pdf">
                Descargar CV
              </a>
            </Button>
            {/* ...existing code... */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-end items-center gap-4 sm:gap-6 md:gap-8">
            {/* ...existing code... */}

            <a
              href="https://www.linkedin.com/in/envyx10/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-110"
              aria-label="Visitar LinkedIn"
            >
              <FiLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>

            <a
              href="https://github.com/envyx10"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-110"
              aria-label="Visitar GitHub"
            >
              <FiGithub className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
