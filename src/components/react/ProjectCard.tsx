import { useRef } from "react";
import { FiGithub, FiExternalLink, FiGlobe } from "react-icons/fi";
import type { Project } from "@/types/components";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const renderTechTags = (technologies: string[], maxVisible = 3) => {
    const visibleTech = technologies.slice(0, maxVisible);
    const remainingCount = technologies.length - maxVisible;
    return { visibleTech, remainingCount };
  };

  const { visibleTech, remainingCount } = renderTechTags(project.technologies || []);

  return (
    <div
      ref={cardRef}
      className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col cursor-pointer hover:border-purple-400/60"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
          {((project.liveUrl && project.liveUrl !== "#") || (project.websiteUrl && project.websiteUrl !== "#") || (project.githubUrl && project.githubUrl !== "#")) ? (
            <a
              href={
                project.liveUrl && project.liveUrl !== "#"
                  ? project.liveUrl
                  : project.websiteUrl && project.websiteUrl !== "#"
                  ? project.websiteUrl
                  : project.githubUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.title} - sitio`}
              className="absolute inset-0 block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </a>
          ) : (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </>
          )}
        </div>
      
      <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex-1 flex flex-col">
        <div className="mb-3 sm:mb-4 md:mb-5">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light text-left">
            {project.description}
          </p>
        </div>

        <div className="mb-4 sm:mb-5 md:mb-6 flex-1">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 justify-start">
            {visibleTech.map((tech, techIndex) => (
              <span
                key={`${tech}-${techIndex}`}
                className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/40 hover:bg-purple-500/30 hover:text-purple-100 transition-all font-medium"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span
                className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/40 hover:bg-gray-500/30 hover:text-gray-200 transition-all font-medium group/tooltip relative"
                title={`Otras tecnologías: ${(project.technologies || []).slice(visibleTech.length).join(', ')}`}
              >
                +{remainingCount} más
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 whitespace-nowrap z-50 border border-white/20">
                  {(project.technologies || []).slice(visibleTech.length).join(', ')}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
                </div>
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-xs sm:text-sm font-medium group/github w-full sm:w-auto"
            >
              <FiGithub className="h-3 w-3 sm:h-4 sm:w-4 group-hover/github:scale-110 transition-transform duration-200" />
              Código
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-white rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-400/50 transition-all duration-300 text-xs sm:text-sm font-medium group/demo w-full sm:w-auto"
            >
              <FiExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/demo:scale-110 transition-transform duration-200" />
              Demo
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/website w-full sm:w-auto"
              aria-label="Visitar sitio web"
            >
              <FiGlobe className="h-3 w-3 sm:h-4 sm:w-4 group-hover/website:scale-110 transition-transform duration-200" />
              <span className="text-xs sm:text-sm font-medium">Web</span>
            </a>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
