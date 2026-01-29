import { TECHNOLOGY_CATEGORIES } from "@/constants/technologies";
import { TechItem } from "./TechItem";

interface TechCarouselProps {
  currentGroup: number;
  onGroupChange: (index: number) => void;
}

export function TechCarousel({ currentGroup, onGroupChange }: TechCarouselProps) {
  const currentCategory = TECHNOLOGY_CATEGORIES[currentGroup];

  if (!currentCategory) return null;

  return (
    <div className="lg:hidden">
      <div className="mb-6">
        <div className="text-center mb-4">
          <h4 className="text-lg font-semibold text-white">
            {currentCategory.title}
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {currentCategory.techs.map((tech) => (
            <TechItem key={tech.name} tech={tech} variant="mobile" />
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2">
        {TECHNOLOGY_CATEGORIES.map((_, index) => (
          <button
            key={index}
            onClick={() => onGroupChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentGroup === index
                ? "bg-purple-400 w-6"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Ver categoría ${_.title}`}
          />
        ))}
      </div>

      {/* Navegación */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() =>
            onGroupChange(
              currentGroup > 0
                ? currentGroup - 1
                : TECHNOLOGY_CATEGORIES.length - 1
            )
          }
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300"
          aria-label="Categoría anterior"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span className="text-sm text-gray-400">
          {currentGroup + 1} de {TECHNOLOGY_CATEGORIES.length}
        </span>

        <button
          onClick={() =>
            onGroupChange(
              currentGroup < TECHNOLOGY_CATEGORIES.length - 1
                ? currentGroup + 1
                : 0
            )
          }
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300"
          aria-label="Categoría siguiente"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
