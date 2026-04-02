import { TECHNOLOGIES, getTechColorClass } from "@/constants/technologies";
import type { Technology } from "@/types/components";

function MarqueeRow({ techs, reverse = false }: { techs: Technology[]; reverse?: boolean }) {
  const items = techs.map((tech, i) => (
    <div
      key={`${tech.name}-${i}`}
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2 rounded-xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 group cursor-default"
    >
      <tech.IconComponent
        className={`w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${getTechColorClass(tech.name)}`}
      />
      <span className="text-sm text-zinc-500 group-hover:text-zinc-200 font-medium whitespace-nowrap transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  ));

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-52 sm:w-72 lg:w-96 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-52 sm:w-72 lg:w-96 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div
        className={`flex w-max hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        <div className="flex">{items}</div>
        <div className="flex" aria-hidden="true">{items}</div>
      </div>
    </div>
  );
}

export function TechMarquee() {
  const mid = Math.ceil(TECHNOLOGIES.length / 2);
  const row1 = TECHNOLOGIES.slice(0, mid);
  const row2 = TECHNOLOGIES.slice(mid);

  return (
    <div className="w-full space-y-4">
      <MarqueeRow techs={row1} />
      <MarqueeRow techs={row2} reverse />
    </div>
  );
}
