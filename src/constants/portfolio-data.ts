import type { Skill, Experience, Project } from "@/types/components";

export const SKILLS: Skill[] = [
  {
    iconType: "FiCode",
    title: "Frontend Development",
    description:
      "Construyo interfaces reactivas y accesibles con atención al detalle. Componentización limpia, state management y rendimiento optimizado.",
    tags: ["React", "Next.js", "Svelte", "TypeScript", "Tailwind CSS", "Astro"],
    accent: "blue",
  },
  {
    iconType: "FiLayers",
    title: "UI/UX & Diseño",
    description:
      "Mi background en diseño gráfico me permite crear productos donde la funcionalidad y la estética van de la mano. Prototipado, sistemas de diseño y pixel-perfect.",
    tags: ["Figma", "Photoshop", "Design Systems", "Prototyping"],
    accent: "purple",
  },
  {
    iconType: "FiServer",
    title: "Backend & Bases de Datos",
    description:
      "APIs robustas, arquitectura de datos y lógica de negocio. Desarrollo fullstack con enfoque en código mantenible y bien estructurado.",
    tags: ["Python", "Django", "Laravel", "PHP", "MySQL", "MariaDB"],
    accent: "emerald",
  },
  {
    iconType: "FiZap",
    title: "AI & Automatización",
    description:
      "Integro herramientas de IA para acelerar flujos de trabajo, generar contenido y automatizar tareas repetitivas en el desarrollo.",
    tags: ["Prompt Engineering", "AI Tools", "Automation"],
    accent: "amber",
  },
] as const;

export const EXPERIENCES: Experience[] = [
  {
    company: "Bettergy",
    position: "Fullstack Developer",
    period: "feb. 2026 - actualidad",
    location: "Málaga, Andalucía, España",
    description:
      "Desarrollo fullstack de productos digitales, combinando desarrollo frontend y backend para construir soluciones completas y escalables.",
    websiteUrl: "https://www.bettergy.es",
  },
  {
    company: "Freepik",
    position: "Frontend Engineer Intern",
    period: "mar. 2025 - jun. 2025 · 4 meses",
    location: "Málaga, Andalucía, España · Híbrido",
    description:
      "Desarrollo de dashboards técnicos con React, Next.js y Tailwind CSS. Creación de sistemas de comparación y filtrado, refactorización de componentes legacy y propuestas de nuevas funcionalidades.",
    websiteUrl: "https://www.freepik.com",
  },
  {
    company: "VS Gamers",
    position: "Técnico informático",
    period: "oct. 2017 - feb. 2023 · 5 años 5 meses",
    location: "Málaga y alrededores, España",
    description:
      "Resolución de problemas de hardware informático, mantenimiento de sistemas y soporte técnico especializado para equipos gaming y multimedia.",
    websiteUrl: "https://www.vsgamers.es",
  },
  {
    company: "ATLAS INFORMÁTICA S.L.",
    position: "Técnico informático",
    period: "ene. 2017 - feb. 2023 · 6 años 2 meses",
    location: "Málaga y alrededores, España",
    description:
      "Mantenimiento informático integral, resolución de problemas de hardware y software, y gestión de infraestructura tecnológica empresarial.",
    websiteUrl: "https://www.atlasinformatica.com",
  },
  {
    company: "OZONE GAMING",
    position: "Diseñador gráfico creativo",
    period: "dic. 2014 - dic. 2016 · 2 años 1 mes",
    location: "Málaga y alrededores, España · Presencial",
    description:
      "Diseño de productos y materiales gráficos utilizando Adobe Photoshop y herramientas de diseño digital para proyectos creativos y comerciales.",
    websiteUrl: "https://ozonegaming.com",
  },
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Pixela",
    description:
      "Plataforma de series y películas de reseñas y valoraciones desarrollada para mi TFG en desarrollo de aplicaciones web",
    image: "/1.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Laravel",
      "MariaDB",
    ],
    githubUrl: "https://github.com/envyx10/Pixela",
    websiteUrl: "https://pixela-seven.vercel.app/",
  },
  {
    title: "Freepik",
    description:
      "Desarrollo de aplicación interna para Freepik en mi periodo de prácticas como Frontend Engineer",
    image: "/2.png",
    technologies: ["React", "TypeScript", "NextJS", "Tailwind"],
    websiteUrl: "https://www.freepik.es/",
  },
  {
    title: "Pixela Figma Design",
    description:
      "Diseño completo del proyecto Pixela en Figma, incluyendo prototipos interactivos y sistema de diseño",
    image: "/3.png",
    technologies: ["Figma", "UI/UX"],
    websiteUrl:
      "https://www.figma.com/design/CPQe3LpPHQXKW1AWTYJhOG/PROYECTO-PIXELA.IO?node-id=0-1&p=f&t=xpIvV40gZcN5Tr4q-0",
  },
] as const;
