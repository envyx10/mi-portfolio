import type { Project } from "@/types/components";
import { getProjectPrimaryUrl } from "@/lib/project-utils";
import { TechTags } from "./TechTags";
import { ProjectActions } from "./ProjectActions";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryUrl = getProjectPrimaryUrl(project);

  const renderImage = () => {
    const imageElement = (
      <>
        <img
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </>
    );

    if (primaryUrl) {
      return (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${project.title}`}
          className="absolute inset-0 block"
        >
          {imageElement}
        </a>
      );
    }

    return imageElement;
  };

  return (
    <article className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col cursor-pointer hover:border-purple-400/60">
      <div className="relative z-10 h-full flex flex-col">
        <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
          {renderImage()}
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
            <TechTags technologies={project.technologies} />
          </div>

          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}
