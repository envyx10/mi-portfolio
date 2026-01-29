import { TECHNOLOGY_CATEGORIES } from "@/constants/technologies";
import { TechItem } from "./TechItem";

export function TechGrid() {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 gap-4 md:gap-6">
      {TECHNOLOGY_CATEGORIES.map((category) => (
        <div key={category.title} className="space-y-3 sm:space-y-4">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              {category.title}
            </h4>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {category.techs.map((tech) => (
              <TechItem key={tech.name} tech={tech} variant="desktop" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
