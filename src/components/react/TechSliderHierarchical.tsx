import { useRef, useEffect, useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiDocker,
  SiMysql,
  SiLaravel,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

interface Technology {
  name: string;
  IconComponent: React.ComponentType<{ className?: string }>;
  color: string;
}

const technologies: Technology[] = [
  // Frontend Core (más importantes para tu perfil)
  { name: "React", IconComponent: SiReact, color: "#61DAFB" },
  { name: "Next.js", IconComponent: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", IconComponent: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", IconComponent: SiJavascript, color: "#F7DF1E" },

  // Styling & Design
  { name: "Tailwind CSS", IconComponent: SiTailwindcss, color: "#06B6D4" },
  { name: "CSS3", IconComponent: SiCss3, color: "#1572B6" },
  { name: "HTML5", IconComponent: SiHtml5, color: "#E34F26" },
  { name: "Figma", IconComponent: SiFigma, color: "#F24E1E" },

  // Backend & Database
  { name: "Node.js", IconComponent: SiNodedotjs, color: "#339933" },
  { name: "Laravel", IconComponent: SiLaravel, color: "#FF2D20" },
  { name: "MongoDB", IconComponent: SiMongodb, color: "#47A248" },
  { name: "MySQL", IconComponent: SiMysql, color: "#4479A1" },

  // DevOps & Tools
  { name: "Git", IconComponent: SiGit, color: "#F05032" },
  { name: "Docker", IconComponent: SiDocker, color: "#2496ED" },
];

export function TechSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Organizamos las tecnologías en grupos para mejor visualización
  const techGroups = [
    {
      title: "Frontend",
      techs: technologies.slice(0, 4), // React, Next.js, TypeScript, JavaScript
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Styling",
      techs: technologies.slice(4, 8), // Tailwind, CSS3, HTML5, Figma
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Backend",
      techs: technologies.slice(8, 12), // Node.js, Laravel, MongoDB, MySQL
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Tools",
      techs: technologies.slice(12, 14), // Git, Docker
      gradient: "from-orange-400 to-red-500"
    }
  ];

  if (!isVisible) {
    return (
      <section className="w-full mt-6 sm:mt-8">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-800/50 rounded animate-pulse mb-2 max-w-xs mx-auto"></div>
          <div className="h-4 bg-gray-800/30 rounded animate-pulse max-w-md mx-auto"></div>
        </div>
        <div className="w-full h-32 bg-gray-800/20 rounded animate-pulse"></div>
      </section>
    );
  }

  return (
    <section className="w-full mt-6 sm:mt-8">
      {/* Título del slider */}
      <div ref={titleRef} className="text-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
          Mi Stack Tecnológico
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Tecnologías organizadas por especialización y experiencia
        </p>
      </div>

      {/* Grid de grupos de tecnologías - Desktop / Carrusel Mobile */}
      <div ref={sliderRef} className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        {/* Desktop: Grid normal */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 md:gap-6">
          {techGroups.map((group) => (
            <div key={group.title} className="space-y-3 sm:space-y-4">
              {/* Título del grupo */}
              <div className="text-center">
                <h4 className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                  {group.title}
                </h4>
              </div>

              {/* Tecnologías del grupo - Desktop */}
              <div className="space-y-2 sm:space-y-3">
                {group.techs.map((tech) => {
                  const { IconComponent } = tech;

                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent
                          className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300 ${getOfficialColorClass(tech.name)}`}
                        />
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base group-hover:text-purple-200 transition-colors duration-300 text-left">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Carrusel horizontal */}
        <div className="lg:hidden">
          {/* Grupo actual */}
          <div className="mb-6">
            <div className="text-center mb-4">
              <h4 className={`text-lg font-semibold bg-gradient-to-r ${techGroups[currentGroup]?.gradient} bg-clip-text text-transparent`}>
                {techGroups[currentGroup]?.title}
              </h4>
            </div>

            {/* Grid compacto de tecnologías */}
            <div className="grid grid-cols-2 gap-3">
              {techGroups[currentGroup]?.techs.map((tech) => {
                const { IconComponent } = tech;

                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer min-h-[80px]"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent
                        className={`w-8 h-8 group-hover:scale-110 transition-transform duration-300 ${getOfficialColorClass(tech.name)}`}
                      />
                    </div>
                    <span className="text-white font-semibold text-sm text-center leading-tight group-hover:text-purple-200 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicadores del carrusel */}
          <div className="flex justify-center gap-2">
            {techGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroup(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentGroup === index
                    ? 'bg-purple-400 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ver grupo ${_.title}`}
              />
            ))}
          </div>

          {/* Navegación por flechas */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentGroup(prev => prev > 0 ? prev - 1 : techGroups.length - 1)}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300"
              aria-label="Grupo anterior"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-sm text-gray-400">
              {currentGroup + 1} de {techGroups.length}
            </span>

            <button
              onClick={() => setCurrentGroup(prev => prev < techGroups.length - 1 ? prev + 1 : 0)}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300"
              aria-label="Grupo siguiente"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Función para obtener los colores oficiales de cada tecnología
function getOfficialColorClass(name: string): string {
  const colorMap: Record<string, string> = {
    // Frontend
    'React': 'text-cyan-400', // #61DAFB
    'Next.js': 'text-white', // #000000 (logo negro, usamos blanco para contraste)
    'TypeScript': 'text-blue-600', // #3178C6
    'JavaScript': 'text-yellow-400', // #F7DF1E

    // Styling & Design
    'Tailwind CSS': 'text-teal-400', // #06B6D4
    'CSS3': 'text-blue-500', // #1572B6
    'HTML5': 'text-orange-500', // #E34F26
    'Figma': 'text-purple-500', // #F24E1E (ajustado para mejor contraste)

    // Backend & Database
    'Node.js': 'text-green-500', // #339933
    'Laravel': 'text-red-500', // #FF2D20
    'MongoDB': 'text-green-600', // #47A248
    'MySQL': 'text-blue-600', // #4479A1

    // DevOps & Tools
    'Git': 'text-orange-600', // #F05032
    'Docker': 'text-blue-500', // #2496ED
  };

  return colorMap[name] || 'text-white';
}