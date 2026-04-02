import { FiCode, FiEdit3, FiZap, FiServer, FiLayers } from "react-icons/fi";
import type { Skill } from "@/types/components";

interface SkillsGridProps {
  skills: Skill[];
}

const ACCENT_STYLES: Record<string, { icon: string; tag: string; glow: string; border: string }> = {
  blue: {
    icon: "text-blue-400",
    tag: "bg-blue-500/[0.08] text-blue-400/80 border-blue-500/[0.08]",
    glow: "from-blue-500/[0.05] to-transparent",
    border: "group-hover:border-blue-500/20",
  },
  purple: {
    icon: "text-purple-400",
    tag: "bg-purple-500/[0.08] text-purple-400/80 border-purple-500/[0.08]",
    glow: "from-purple-500/[0.05] to-transparent",
    border: "group-hover:border-purple-500/20",
  },
  emerald: {
    icon: "text-emerald-400",
    tag: "bg-emerald-500/[0.08] text-emerald-400/80 border-emerald-500/[0.08]",
    glow: "from-emerald-500/[0.05] to-transparent",
    border: "group-hover:border-emerald-500/20",
  },
  amber: {
    icon: "text-amber-400",
    tag: "bg-amber-500/[0.08] text-amber-400/80 border-amber-500/[0.08]",
    glow: "from-amber-500/[0.05] to-transparent",
    border: "group-hover:border-amber-500/20",
  },
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  const renderIcon = (iconType: string, accentClass: string) => {
    const cls = `h-5 w-5 ${accentClass}`;
    switch (iconType) {
      case "FiCode": return <FiCode className={cls} />;
      case "FiZap": return <FiZap className={cls} />;
      case "FiEdit3": return <FiEdit3 className={cls} />;
      case "FiServer": return <FiServer className={cls} />;
      case "FiLayers": return <FiLayers className={cls} />;
      default: return <FiCode className={cls} />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {skills.map((skill, index) => {
        const styles = ACCENT_STYLES[skill.accent] || ACCENT_STYLES.blue;

        return (
          <div
            key={index}
            className={`group relative p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300 ${styles.border}`}
          >
            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                {renderIcon(skill.iconType, styles.icon)}
                <h3 className="text-[15px] font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-500 text-[13px] leading-relaxed mb-3 flex-1">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 content-start min-h-[2.75rem]">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-zinc-900 text-zinc-500 rounded border border-zinc-800/60 hover:border-zinc-700 hover:text-zinc-300 transition-colors font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
