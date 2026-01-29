import type { Project } from "@/types/components";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { hasValidUrl } from "@/lib/project-utils";

interface ProjectActionsProps {
  project: Project;
}

export function ProjectActions({ project }: ProjectActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-3">
      {hasValidUrl(project.githubUrl) && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-xs sm:text-sm font-medium group/github w-full sm:w-auto"
          aria-label={`Ver código de ${project.title} en GitHub`}
        >
          <FiGithub className="h-3 w-3 sm:h-4 sm:w-4 group-hover/github:scale-110 transition-transform duration-200" />
          Código
        </a>
      )}

      {hasValidUrl(project.liveUrl) && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-white rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-400/50 transition-all duration-300 text-xs sm:text-sm font-medium group/demo w-full sm:w-auto"
          aria-label={`Ver demo de ${project.title}`}
        >
          <FiExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/demo:scale-110 transition-transform duration-200" />
          Demo
        </a>
      )}

      {hasValidUrl(project.websiteUrl) && (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/website w-full sm:w-auto"
          aria-label={`Visitar sitio web de ${project.title}`}
        >
          <FiExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/website:scale-110 transition-transform duration-200" />
          <span className="text-xs sm:text-sm font-medium">Sitio</span>
        </a>
      )}
    </div>
  );
}
