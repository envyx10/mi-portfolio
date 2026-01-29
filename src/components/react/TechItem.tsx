import type { Technology } from "@/types/components";
import { getTechColorClass } from "@/constants/technologies";

interface TechItemProps {
  tech: Technology;
  variant?: "desktop" | "mobile";
}

export function TechItem({ tech, variant = "desktop" }: TechItemProps) {
  const { IconComponent, name } = tech;

  if (variant === "mobile") {
    return (
      <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer min-h-[80px]">
        <div className="flex-shrink-0">
          <IconComponent
            className={`w-8 h-8 group-hover:scale-110 transition-transform duration-300 ${getTechColorClass(
              name
            )}`}
          />
        </div>
        <span className="text-white font-semibold text-sm text-center leading-tight group-hover:text-purple-200 transition-colors duration-300">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer">
      <div className="flex-shrink-0">
        <IconComponent
          className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300 ${getTechColorClass(
            name
          )}`}
        />
      </div>
      <span className="text-white font-semibold text-sm sm:text-base group-hover:text-purple-200 transition-colors duration-300 text-left">
        {name}
      </span>
    </div>
  );
}
