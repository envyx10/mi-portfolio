import type { Skill, Experience, Project } from "@/types/components";

export const SKILLS: Skill[] = [
  {
    iconType: "FiCode",
    title: "Desarrollo Frontend",
    description: "TypeScript, React, Next.js, Tailwind CSS, Angular, Astro",
  },
  {
    iconType: "FiZap",
    title: "Performance",
    description: "Optimización y mejores prácticas de rendimiento",
  },
  {
    iconType: "FiLayers",
    title: "UI/UX & Diseño Gráfico",
    description:
      "Diseño de interfaces y experiencia de usuario + creación de materiales visuales (Figma, Adobe Photoshop)",
  },
  {
    iconType: "FiServer",
    title: "Desarrollo Backend",
    description: "PHP, Laravel, MySQL, MariaDB",
  },
  {
    iconType: "FiTool",
    title: "Soporte Técnico",
    description:
      "Mantenimiento de sistemas, resolución de hardware, montaje y configuración de equipos",
  },
  {
    iconType: "FiZap",
    title: "Inteligencia Artificial",
    description:
      "Aplicación práctica de técnicas de IA para automatización, generación de contenidos y mejora de flujos de trabajo",
  },
] as const;

export const EXPERIENCES: Experience[] = [
  {
    iconType: "FiBriefcase",
    company: "Freepik",
    position: "Frontend Engineer Intern",
    period: "mar. 2025 - jun. 2025 · 4 meses",
    location: "Málaga, Andalucía, España · Híbrido",
    description:
      "Desarrollo de dashboards técnicos con React, Next.js y Tailwind CSS. Creación de sistemas de comparación y filtrado, refactorización de componentes legacy y propuestas de nuevas funcionalidades.",
    websiteUrl: "https://www.freepik.com",
  },
  {
    iconType: "FiBriefcase",
    company: "VS Gamers",
    position: "Técnico informático",
    period: "oct. 2017 - feb. 2023 · 5 años 5 meses",
    location: "Málaga y alrededores, España",
    description:
      "Resolución de problemas de hardware informático, mantenimiento de sistemas y soporte técnico especializado para equipos gaming y multimedia.",
    websiteUrl: "https://www.vsgamers.es",
  },
  {
    iconType: "FiBriefcase",
    company: "ATLAS INFORMÁTICA S.L.",
    position: "Técnico informático",
    period: "ene. 2017 - feb. 2023 · 6 años 2 meses",
    location: "Málaga y alrededores, España",
    description:
      "Mantenimiento informático integral, resolución de problemas de hardware y software, y gestión de infraestructura tecnológica empresarial.",
    websiteUrl: "https://www.atlasinformatica.com",
  },
  {
    iconType: "FiBriefcase",
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
