import { useRef } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import type { Experience } from "@/types/components";
import { BaseCard } from "./BaseCard";

interface ExperienceGridProps {
  experiences: Experience[];
}

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {experiences.map((job, index) => (
        <BaseCard key={index} cardType="experience">
          <div className="text-left space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{job.company}</h3>
            <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">{job.position}</h4>
            <div className="flex items-center justify-start gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 mb-2">
              <FiCalendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-purple-400/70" />
              <span className="leading-tight font-light">{job.period}</span>
            </div>
            <div className="flex items-center justify-start gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 mb-4">
              <FiMapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-purple-400/70" />
              <span className="leading-tight font-light">{job.location}</span>
            </div>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-light">{job.description}</p>
          </div>
        </BaseCard>
      ))}
    </div>
  );
}
