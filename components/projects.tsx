"use client"

import { FiExternalLink, FiGithub } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useGsapScrollAnimation, useGsapStaggerAnimation } from "@/hooks/use-gsap-scroll"

export function Projects() {
  const titleRef = useGsapScrollAnimation()
  const projectsGridRef = useGsapStaggerAnimation(0.3)

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con React, Next.js y Stripe",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Next.js", "Stripe", "Tailwind", "TypeScript", "MongoDB", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con drag & drop y colaboración en tiempo real",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "TypeScript", "Socket.io", "MongoDB", "Express", "Redis"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con visualizaciones interactivas y pronósticos",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "D3.js", "API Integration", "CSS3", "Chart.js"],
      github: "#",
      demo: "#",
    },
  ]

  const renderTechTags = (technologies: string[], maxVisible = 3) => {
    const visibleTech = technologies.slice(0, maxVisible)
    const remainingCount = technologies.length - maxVisible

    return (
      <div className="flex flex-wrap gap-2">
        {visibleTech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="px-3 py-1 text-xs bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30 whitespace-nowrap">
            +{remainingCount}
          </span>
        )}
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Mis Proyectos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        <div ref={projectsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4 min-h-[2.5rem] flex items-start">{renderTechTags(project.tech)}</div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white flex-1"
                  >
                    <FiGithub className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 flex-1"
                  >
                    <FiExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
