import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animación para el título
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }

    // Animación para el slider
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out"
        }
      );
    }
  }, [isVisible]);

  // Creamos múltiples copias para un scroll verdaderamente infinito
  const infiniteTechnologies = [
    ...technologies, 
    ...technologies, 
    ...technologies, 
    ...technologies
  ];

  if (!isVisible) {
    return (
      <section className="w-full mt-16">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-800/50 rounded animate-pulse mb-2 max-w-xs mx-auto"></div>
          <div className="h-4 bg-gray-800/30 rounded animate-pulse max-w-md mx-auto"></div>
        </div>
        <div className="w-full h-16 bg-gray-800/20 rounded animate-pulse"></div>
      </section>
    );
  }

  return (
    <section className="w-full mt-16">
      {/* Título del slider */}
      <div ref={titleRef} className="text-right mb-8 opacity-0">
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-2">
          Tecnologías que uso
        </h3>
        <p className="text-gray-400 text-base md:text-lg">
          Stack tecnológico con el que trabajo día a día
        </p>
      </div>

      {/* Slider de tecnologías */}
      <div ref={sliderRef} className="w-full overflow-hidden opacity-0">
        <div className="flex animate-scroll-infinite w-fit">
          {infiniteTechnologies.map((tech, index) => {
            const { IconComponent } = tech;
            
            return (
              <div 
                key={`${tech.name}-${index}`} 
                className="flex items-center gap-3 px-6 whitespace-nowrap flex-shrink-0 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-white group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300">
                  <IconComponent 
                    className={`w-8 h-8 ${getIconColorClass(tech.name)}`}
                  />
                </div>
                <span className="text-white font-medium text-base group-hover:text-purple-200 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Función auxiliar para obtener las clases de color
function getIconColorClass(name: string): string {
  const colorMap: Record<string, string> = {
    'HTML5': 'text-orange-500',
    'CSS3': 'text-blue-500', 
    'JavaScript': 'text-yellow-400',
    'TypeScript': 'text-blue-600',
    'React': 'text-cyan-400',
    'Next.js': 'text-white',
    'Node.js': 'text-green-500',
    'Tailwind CSS': 'text-cyan-400',
    'MongoDB': 'text-green-600',
    'MySQL': 'text-blue-700',
    'Laravel': 'text-red-500',
    'Docker': 'text-blue-500',
    'Git': 'text-orange-600',
    'Figma': 'text-pink-500',
  };
  
  return colorMap[name] || 'text-white';
}
