import type { TitleProps } from "@/types/components";

export function SectionTitle({ title, description }: TitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
