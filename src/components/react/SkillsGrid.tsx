import { useRef } from "react";
import { FiCode, FiEdit3, FiZap, FiServer, FiTool, FiLayers } from "react-icons/fi";
import type { Skill } from "@/types/components";
import { BaseCard } from "./BaseCard";

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "FiCode":
        return <FiCode className="h-8 w-8" />;
      case "FiZap":
        return <FiZap className="h-8 w-8" />;
      case "FiEdit3":
        return <FiEdit3 className="h-8 w-8" />;
      case "FiServer":
        return <FiServer className="h-8 w-8" />;
      case "FiTool":
        return <FiTool className="h-8 w-8" />;
      case "FiLayers":
        return <FiLayers className="h-8 w-8" />;
      default:
        return <FiCode className="h-8 w-8" />;
    }
  };

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {skills.map((skill, index) => (
        <BaseCard key={index} cardType="skill">
          <div className="text-left relative z-10">
            <div className="text-purple-400 mb-4 sm:mb-5 md:mb-6 flex justify-left">
              {renderIcon(skill.iconType)}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">{skill.title}</h3>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-light">{skill.description}</p>
          </div>
        </BaseCard>
      ))}
    </div>
  );
}
