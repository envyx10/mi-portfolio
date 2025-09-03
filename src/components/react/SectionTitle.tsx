import type { TitleProps } from "@/types/components";

export function SectionTitle({ title, description }: TitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
