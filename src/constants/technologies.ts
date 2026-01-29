import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiDocker,
  SiMysql,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import type { Technology } from "@/types/components";

export const MAX_VISIBLE_TECH_TAGS = 3;

export const TECH_COLOR_MAP: Record<string, string> = {
  // Frontend
  "Next.js": "text-white",
  React: "text-cyan-400",
  TypeScript: "text-blue-600",
  JavaScript: "text-yellow-400",
  // Backend
  Laravel: "text-red-500",
  PHP: "text-violet-500",
  Supabase: "text-emerald-400",
  MySQL: "text-blue-600",
  // Design
  HTML: "text-orange-500",
  CSS3: "text-blue-500",
  Tailwind: "text-teal-400",
  Figma: "text-pink-400",
  // Tools
  Vercel: "text-white",
  Git: "text-orange-600",
  GitHub: "text-gray-200",
  Docker: "text-blue-500",
} as const;

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: "Next.js", IconComponent: SiNextdotjs, color: "#000000" },
  { name: "React", IconComponent: SiReact, color: "#61DAFB" },
  { name: "TypeScript", IconComponent: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", IconComponent: SiJavascript, color: "#F7DF1E" },
  // Backend
  { name: "Laravel", IconComponent: SiLaravel, color: "#FF2D20" },
  { name: "PHP", IconComponent: SiPhp, color: "#777BB4" },
  { name: "Supabase", IconComponent: SiPostgresql, color: "#3ECF8E" },
  { name: "MySQL", IconComponent: SiMysql, color: "#4479A1" },
  // Design
  { name: "HTML", IconComponent: SiHtml5, color: "#E34F26" },
  { name: "CSS3", IconComponent: SiCss3, color: "#1572B6" },
  { name: "Tailwind", IconComponent: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", IconComponent: SiFigma, color: "#F24E1E" },
  // Tools
  { name: "Vercel", IconComponent: SiVercel, color: "#000000" },
  { name: "Git", IconComponent: SiGit, color: "#F05032" },
  { name: "GitHub", IconComponent: SiGithub, color: "#181717" },
  { name: "Docker", IconComponent: SiDocker, color: "#2496ED" },
];

const TECH_CATEGORY_INDICES = {
  FRONTEND_START: 0,
  FRONTEND_END: 4,
  BACKEND_START: 4,
  BACKEND_END: 8,
  DESIGN_START: 8,
  DESIGN_END: 12,
  TOOLS_START: 12,
  TOOLS_END: 16,
} as const;

export const TECHNOLOGY_CATEGORIES = [
  {
    title: "Frontend",
    techs: TECHNOLOGIES.slice(
      TECH_CATEGORY_INDICES.FRONTEND_START,
      TECH_CATEGORY_INDICES.FRONTEND_END
    ),
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "Backend",
    techs: TECHNOLOGIES.slice(
      TECH_CATEGORY_INDICES.BACKEND_START,
      TECH_CATEGORY_INDICES.BACKEND_END
    ),
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "Design",
    techs: TECHNOLOGIES.slice(
      TECH_CATEGORY_INDICES.DESIGN_START,
      TECH_CATEGORY_INDICES.DESIGN_END
    ),
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Tools",
    techs: TECHNOLOGIES.slice(
      TECH_CATEGORY_INDICES.TOOLS_START,
      TECH_CATEGORY_INDICES.TOOLS_END
    ),
    gradient: "from-orange-400 to-red-500",
  },
] as const;

export function getTechColorClass(name: string): string {
  return TECH_COLOR_MAP[name] || "text-white";
}
