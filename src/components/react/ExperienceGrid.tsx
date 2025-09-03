import { useRef } from "react";
import { FiCalendar, FiMapPin, FiGlobe } from "react-icons/fi";
import type { Experience } from "@/types/components";
import { BaseCard } from "./BaseCard";

interface ExperienceGridProps {
  experiences: Experience[];
}

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto lg:grid-rows-2 lg:auto-rows-fr">
      {experiences.map((job, index) => (
        <BaseCard key={index} cardType="experience">
          <div className="text-left h-full flex flex-col">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{job.company}</h3>
                {job.websiteUrl && (
                  <a
                    href={job.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-2 py-1.5 backdrop-blur-sm bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/website text-xs font-medium ml-3"
                    aria-label={`Visitar sitio web de ${job.company}`}
                  >
                    <FiGlobe className="h-3 w-3 group-hover/website:scale-110 transition-transform duration-200" />
                    <span className="hidden sm:inline">Web</span>
                  </a>
                )}
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-2 sm:mb-3">{job.position}</h4>
              <div className="flex items-center justify-start gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
                <FiCalendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-purple-400/70" />
                <span className="leading-tight font-light">{job.period}</span>
              </div>
              <div className="flex items-center justify-start gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">
                <FiMapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-purple-400/70" />
                <span className="leading-tight font-light">{job.location}</span>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-light">{job.description}</p>
            </div>
          </div>
        </BaseCard>
      ))}
    </div>
  );
}
