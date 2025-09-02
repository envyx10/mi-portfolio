import { useRef } from "react";
import { FiGithub, FiExternalLink, FiGlobe } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  website?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const renderTechTags = (technologies: string[], maxVisible = 3) => {
    const visibleTech = technologies.slice(0, maxVisible);
    const remainingCount = technologies.length - maxVisible;
    return { visibleTech, remainingCount };
  };

  const { visibleTech, remainingCount } = renderTechTags(project.tech);

  return (
    <div
      ref={cardRef}
      className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col cursor-pointer hover:border-purple-400/60"
    >
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
              <span 
                className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full border border-gray-500/30 hover:bg-gray-500/30 transition-colors group/tooltip relative"
                title={`Otras tecnologías: ${project.tech.slice(visibleTech.length).join(', ')}`}
              >
                +{remainingCount} más
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 whitespace-nowrap z-50 border border-white/20">
                  {project.tech.slice(visibleTech.length).join(', ')}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
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
