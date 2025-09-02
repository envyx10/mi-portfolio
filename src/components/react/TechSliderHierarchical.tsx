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
      <section className="w-full mt-16">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-800/50 rounded animate-pulse mb-2 max-w-xs mx-auto"></div>
          <div className="h-4 bg-gray-800/30 rounded animate-pulse max-w-md mx-auto"></div>
        </div>
        <div className="w-full h-32 bg-gray-800/20 rounded animate-pulse"></div>
      </section>
    );
  }

  return (
    <section className="w-full mt-16">
      {/* Título del slider */}
      <div ref={titleRef} className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-4">
          Mi Stack Tecnológico
        </h3>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Tecnologías organizadas por especialización y experiencia
        </p>
      </div>

      {/* Grid de grupos de tecnologías */}
      <div ref={sliderRef} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              {/* Título del grupo */}
              <div className="text-center">
                <h4 className={`text-lg font-semibold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                  {group.title}
                </h4>
              </div>
              
              {/* Tecnologías del grupo */}
              <div className="space-y-3">
                {group.techs.map((tech) => {
                  const { IconComponent } = tech;
                  
                  return (
                    <div 
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent 
                          className={`w-6 h-6 group-hover:scale-110 transition-transform duration-300 ${getOfficialColorClass(tech.name)}`}
                        />
                      </div>
                      <span className="text-white font-medium text-sm group-hover:text-purple-200 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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
