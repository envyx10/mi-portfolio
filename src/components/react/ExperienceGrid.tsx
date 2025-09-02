import type React from "react";
import { useState, useEffect, useRef } from "react";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  iconType: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
}

interface ExperienceGridProps {
  experiences: Experience[];
}

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  const [isClient, setIsClient] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient) return;
    
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "FiBriefcase":
        return <FiBriefcase className="h-8 w-8" />;
      default:
        return <FiBriefcase className="h-8 w-8" />;
    }
  };

  return (
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {experiences.map((job, index) => (
        <div
          key={index}
          className="experience-card relative group cursor-pointer p-[2px] rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10 card-mouse-tracker"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 card-gradient-effect"></div>

          <Card className="relative bg-black/40 border-transparent backdrop-blur-sm hover:bg-black/30 transition-all duration-300 h-full rounded-lg">
            <CardContent className="p-5 sm:p-6">
              <div className="text-purple-400 mb-3 sm:mb-4 flex justify-center">{renderIcon(job.iconType)}</div>
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white">{job.company}</h3>
                <h4 className="text-sm sm:text-md font-semibold text-purple-300">{job.position}</h4>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                  <FiCalendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="leading-tight">{job.period}</span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                  <FiMapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="leading-tight">{job.location}</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">{job.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
