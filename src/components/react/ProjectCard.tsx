import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink, FiGlobe } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  website?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const renderTechTags = (technologies: string[], maxVisible = 3) => {
    const visibleTech = technologies.slice(0, maxVisible);
    const remainingCount = technologies.length - maxVisible;
    return { visibleTech, remainingCount };
  };

  const { visibleTech, remainingCount } = renderTechTags(project.tech);

  return (
    <div
      ref={cardRef}
      className={`relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col ${
        isHovered ? 'border-purple-400/60' : ''
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-xl opacity-30 pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.3), transparent 60%)`
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col">
        <div className="relative overflow-hidden h-64 md:h-72 lg:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mb-6 flex-1">
          <div className="flex flex-wrap gap-2">
            {visibleTech.map((tech, techIndex) => (
              <span
                key={`${tech}-${techIndex}`}
                className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full border border-gray-500/30">
                +{remainingCount} más
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm font-medium group/github"
            >
              <FiGithub className="h-4 w-4 group-hover/github:scale-110 transition-transform duration-200" />
              Código
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-white rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-400/50 transition-all duration-300 text-sm font-medium group/demo"
            >
              <FiExternalLink className="h-4 w-4 group-hover/demo:scale-110 transition-transform duration-200" />
              Demo
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-sm bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/website"
              aria-label="Visitar sitio web"
            >
              <FiGlobe className="h-4 w-4 group-hover/website:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Web</span>
            </a>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
