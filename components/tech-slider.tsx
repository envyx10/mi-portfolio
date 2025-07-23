"use client"

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
  SiLaravel
} from "react-icons/si"
import { useGsapInitialAnimation } from "@/hooks/use-gsap-initial"

export function TechSlider() {
  const sliderRef = useGsapInitialAnimation(0.3) // Aparece después del hero

  const technologies = [
    {
      name: "HTML5",
      logo: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      logo: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
    },
    {
      name: "JavaScript",
      logo: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    },
    {
      name: "TypeScript",
      logo: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    },
    {
      name: "React",
      logo: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      logo: <SiNextdotjs className="w-8 h-8 text-white" />,
    },
    {
      name: "Tailwind CSS",
      logo: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    },
    {
      name: "Figma",
      logo: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
    },
    {
      name: "MySQL",
      logo: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
    },
    {
      name: "Laravel",
      logo: <SiLaravel className="w-8 h-8 text-[#FF2D20]" />,
    },
    {
      name: "Docker",
      logo: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    },
    {
      name: "Git",
      logo: <SiGit className="w-8 h-8 text-[#F05032]" />,
    },
  ]

  // Duplicamos las tecnologías para crear un array largo sin cortes
  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <div ref={sliderRef} className="w-full overflow-hidden mt-16">
      <div className="flex animate-scroll w-fit">
        {duplicatedTechnologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-6 whitespace-nowrap flex-shrink-0"
          >
            <div className="text-white">{tech.logo}</div>
            <span className="text-white font-medium text-base">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
