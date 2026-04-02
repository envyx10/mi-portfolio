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
      <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group cursor-pointer min-h-[80px]">
        <div className="flex-shrink-0">
          <IconComponent
            className={`w-8 h-8 group-hover:scale-110 transition-transform duration-200 ${getTechColorClass(
              name
            )}`}
          />
        </div>
        <span className="text-zinc-400 font-medium text-sm text-center leading-tight group-hover:text-zinc-200 transition-colors duration-200">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group cursor-pointer">
      <div className="flex-shrink-0">
        <IconComponent
          className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200 ${getTechColorClass(
            name
          )}`}
        />
      </div>
      <span className="text-zinc-400 font-medium text-sm sm:text-base group-hover:text-zinc-200 transition-colors duration-200 text-left">
        {name}
      </span>
    </div>
  );
}
