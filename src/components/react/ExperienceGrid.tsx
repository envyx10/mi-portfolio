import { useState } from "react";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import type { Experience } from "@/types/components";

interface ExperienceGridProps {
  experiences: Experience[];
}

const VISIBLE_COUNT = 3;

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? experiences : experiences.slice(0, VISIBLE_COUNT);
  const hiddenCount = experiences.length - VISIBLE_COUNT;

  return (
    <div className="w-full max-w-2xl mx-auto lg:mx-0">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />

        <div className="space-y-8">
          {visible.map((job, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-zinc-700 bg-black group-hover:border-purple-500/60 transition-colors duration-300">
                <div className="absolute inset-[3px] rounded-full bg-zinc-700 group-hover:bg-purple-400/60 transition-colors duration-300" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {job.company}
                  </h3>
                  {job.websiteUrl && (
                    <a
                      href={job.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
                      aria-label={`Visitar ${job.company}`}
                    >
                      <FiGlobe className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-sm font-medium text-purple-400/80">{job.position}</p>
                <p className="text-xs text-zinc-600">{job.period} · {job.location}</p>
                <p className="text-sm text-zinc-500 leading-relaxed pt-1">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {hiddenCount > 0 && (
        <div className="flex justify-start pl-8 mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group inline-flex items-center gap-2 text-zinc-600 text-sm font-medium hover:text-zinc-300 transition-colors duration-200"
          >
            {expanded ? (
              <>
                Ocultar
                <FiChevronDown className="h-4 w-4 rotate-180 transition-transform duration-200" />
              </>
            ) : (
              <>
                +{hiddenCount} experiencia{hiddenCount > 1 ? "s" : ""} más
                <FiChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-200" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
