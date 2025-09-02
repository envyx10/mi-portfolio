import type React from "react";
import { useState, useEffect, useRef } from "react";
import { FiCode, FiEdit3, FiZap, FiServer, FiTool, FiLayers } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  iconType: string;
  title: string;
  description: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
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
    <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-card relative group cursor-pointer p-[2px] rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10 card-mouse-tracker"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 card-gradient-effect"></div>

          <Card className="relative bg-black/40 border-transparent backdrop-blur-sm hover:bg-black/30 transition-all duration-300 h-full rounded-lg overflow-hidden">
            <CardContent className="p-8 text-center relative z-10">
              <div className="text-purple-400 mb-4 flex justify-center">{renderIcon(skill.iconType)}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">{skill.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
