import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiDocker,
  SiMysql,
  SiLaravel,
  SiPhp,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiVercel,
  SiGithub,
  SiNodedotjs,
  SiAstro,
  SiClaude,
} from "react-icons/si";
import type { Technology } from "@/types/components";

export const MAX_VISIBLE_TECH_TAGS = 3;

export const TECH_COLOR_MAP: Record<string, string> = {
  // Frontend
  "Next.js": "text-white",
  React: "text-cyan-400",
  Svelte: "text-orange-500",
  TypeScript: "text-blue-600",
  JavaScript: "text-yellow-400",
  Astro: "text-orange-400",
  // Backend
  Python: "text-yellow-400",
  Django: "text-emerald-500",
  Laravel: "text-red-500",
  PHP: "text-violet-500",
  "Node.js": "text-green-500",
  Supabase: "text-emerald-400",
  MySQL: "text-blue-600",
  // Design
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  Tailwind: "text-teal-400",
  Figma: "text-pink-400",
  // Tools
  Vercel: "text-white",
  Git: "text-orange-600",
  GitHub: "text-gray-200",
  Docker: "text-blue-500",
  "Claude Code": "text-amber-400",
} as const;

export const TECHNOLOGIES: Technology[] = [
  // Row 1
  { name: "React", IconComponent: SiReact, color: "#61DAFB" },
  { name: "Next.js", IconComponent: SiNextdotjs, color: "#000000" },
  { name: "Svelte", IconComponent: SiSvelte, color: "#FF3E00" },
  { name: "TypeScript", IconComponent: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", IconComponent: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", IconComponent: SiTailwindcss, color: "#06B6D4" },
  { name: "Astro", IconComponent: SiAstro, color: "#FF5D01" },
  { name: "HTML", IconComponent: SiHtml5, color: "#E34F26" },
  { name: "CSS", IconComponent: SiCss, color: "#1572B6" },
  { name: "Node.js", IconComponent: SiNodedotjs, color: "#339933" },
  // Row 2
  { name: "Python", IconComponent: SiPython, color: "#3776AB" },
  { name: "Django", IconComponent: SiDjango, color: "#092E20" },
  { name: "Laravel", IconComponent: SiLaravel, color: "#FF2D20" },
  { name: "PHP", IconComponent: SiPhp, color: "#777BB4" },
  { name: "MySQL", IconComponent: SiMysql, color: "#4479A1" },
  { name: "Supabase", IconComponent: SiPostgresql, color: "#3ECF8E" },
  { name: "Docker", IconComponent: SiDocker, color: "#2496ED" },
  { name: "Git", IconComponent: SiGit, color: "#F05032" },
  { name: "Figma", IconComponent: SiFigma, color: "#F24E1E" },
  { name: "Vercel", IconComponent: SiVercel, color: "#000000" },
  { name: "GitHub", IconComponent: SiGithub, color: "#181717" },
  { name: "Claude Code", IconComponent: SiClaude, color: "#D4A574" },
];

export function getTechColorClass(name: string): string {
  return TECH_COLOR_MAP[name] || "text-white";
}
