"use client"

import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGit,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiDocker
} from "react-icons/si"
import { useGsapScrollAnimation } from "@/hooks/use-gsap-scroll"

export function TechSlider() {
  const sliderRef = useGsapScrollAnimation()

  const technologies = [
    {
      name: "TypeScript",
      logo: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    },
    {
      name: "JavaScript",
      logo: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
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
      name: "Node.js",
      logo: <SiNodedotjs className="w-8 h-8 text-[#8CC84B]" />,
    },
    {
      name: "Tailwind CSS",
      logo: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    },
    {
      name: "HTML5",
      logo: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      logo: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
    },
    {
      name: "Python",
      logo: <SiPython className="w-8 h-8 text-[#3776AB]" />,
    },
    {
      name: "Git",
      logo: <SiGit className="w-8 h-8 text-[#F05032]" />,
    },
    {
      name: "Figma",
      logo: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
    },
    {
      name: "MongoDB",
      logo: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
    },
    {
      name: "PostgreSQL",
      logo: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
    },
    {
      name: "Docker",
      logo: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    },
  ]

  return (
    <div ref={sliderRef} className="w-full overflow-hidden mt-16">
      <div className="flex animate-scroll">{/* First set */}
        {technologies.map((tech, index) => (
          <div key={`first-${index}`} className="flex items-center gap-3 mx-8 whitespace-nowrap">
            <div className="text-white">{tech.logo}</div>
            <span className="text-white font-medium text-lg">{tech.name}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {technologies.map((tech, index) => (
          <div key={`second-${index}`} className="flex items-center gap-3 mx-8 whitespace-nowrap">
            <div className="text-white">{tech.logo}</div>
            <span className="text-white font-medium text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
