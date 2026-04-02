import { MAX_VISIBLE_TECH_TAGS } from "@/constants/technologies";

interface TechTagsProps {
  technologies: string[];
}

export function TechTags({ technologies }: TechTagsProps) {
  const visibleTech = technologies.slice(0, MAX_VISIBLE_TECH_TAGS);
  const remainingCount = technologies.length - MAX_VISIBLE_TECH_TAGS;
  const hiddenTechs = technologies.slice(MAX_VISIBLE_TECH_TAGS);

  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 justify-start">
      {visibleTech.map((tech, index) => (
        <span
          key={`${tech}-${index}`}
          className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-zinc-900 text-zinc-500 rounded border border-zinc-800/60 hover:border-zinc-700 hover:text-zinc-300 transition-colors font-mono"
        >
          {tech}
        </span>
      ))}

      {remainingCount > 0 && (
        <span
          className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-zinc-900 text-zinc-600 rounded border border-zinc-800/60 hover:border-zinc-700 hover:text-zinc-400 transition-colors font-mono group/tooltip relative"
          title={`Otras tecnologías: ${hiddenTechs.join(", ")}`}
        >
          +{remainingCount} más
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 whitespace-nowrap z-50 border border-white/20">
            {hiddenTechs.join(", ")}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90" />
          </div>
        </span>
      )}
    </div>
  );
}
