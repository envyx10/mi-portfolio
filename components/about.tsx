"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FiBriefcase, FiCalendar, FiMapPin, FiCode, FiEdit3, FiZap } from "react-icons/fi"
import { Card, CardContent } from "@/components/ui/card"
import { useGsapScrollAnimation, useGsapStaggerAnimation, useGsapCardAnimation } from "@/hooks/use-gsap-scroll"

export function About() {
  const [isClient, setIsClient] = useState(false)
  const titleRef = useGsapScrollAnimation()
  const experienceGridRef = useGsapCardAnimation(0.2)
  const skillsTitleRef = useGsapScrollAnimation()
  const skillsGridRef = useGsapCardAnimation(0.2)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const experience = [
    {
      icon: <FiBriefcase className="h-8 w-8" />,
      company: "Tech Solutions Inc.",
      position: "Frontend Developer Senior",
      period: "2022 - Presente",
      location: "Madrid, España",
      description: "Desarrollo de aplicaciones web con React, Next.js y TypeScript. Liderazgo de equipo frontend de 4 desarrolladores.",
    },
    {
      icon: <FiBriefcase className="h-8 w-8" />,
      company: "Digital Agency",
      position: "Desarrollador Frontend",
      period: "2020 - 2022",
      location: "Barcelona, España",
      description: "Creación de interfaces responsivas y optimizadas. Implementación de diseños complejos con CSS avanzado.",
    },
    {
      icon: <FiBriefcase className="h-8 w-8" />,
      company: "StartUp Innovadora",
      position: "Junior Frontend Developer",
      period: "2019 - 2020",
      location: "Valencia, España",
      description: "Primeros pasos en desarrollo web profesional. Aprendizaje de frameworks modernos y metodologías ágiles.",
    },
  ]

  const skills = [
    {
      icon: <FiCode className="h-8 w-8" />,
      title: "Desarrollo Frontend",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: <FiZap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimización y mejores prácticas de rendimiento",
    },
    {
      icon: <FiEdit3 className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Diseño de interfaces modernas y funcionales",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient) return
    
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient) return
    
    const card = e.currentTarget
    card.style.setProperty("--mouse-x", "50%")
    card.style.setProperty("--mouse-y", "50%")
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Mi Experiencia</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Con más de 4 años de experiencia en desarrollo frontend, he trabajado en diversos proyectos desde startups hasta empresas consolidadas, siempre enfocado en crear soluciones innovadoras y escalables.
          </p>
        </div>

        <div ref={experienceGridRef} className="grid md:grid-cols-3 gap-8">{experience.map((job, index) => (
            <div
              key={index}
              className="relative group cursor-pointer p-[2px] rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={
                {
                  "--mouse-x": "50%",
                  "--mouse-y": "50%",
                } as React.CSSProperties
              }
            >
              {/* Gradient border effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(147, 51, 234, 0.15), rgba(168, 85, 247, 0.08) 50%, transparent 80%)`,
                }}
              ></div>

              <Card className="relative bg-black/40 border-transparent backdrop-blur-sm hover:bg-black/30 transition-all duration-300 h-full rounded-lg">
                <CardContent className="p-6">
                  <div className="text-purple-400 mb-4 flex justify-center">{job.icon}</div>
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-bold text-white">{job.company}</h3>
                    <h4 className="text-md font-semibold text-purple-300">{job.position}</h4>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <FiCalendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <FiMapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">{job.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div ref={skillsTitleRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Las tecnologías y áreas de expertise en las que me especializo para crear soluciones digitales innovadoras.
            </p>
          </div>

          <div ref={skillsGridRef} className="grid md:grid-cols-3 gap-8">{skills.map((skill, index) => (
              <div
                key={index}
                className="relative group cursor-pointer p-[2px] rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={
                  {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as React.CSSProperties
                }
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(147, 51, 234, 0.15), rgba(168, 85, 247, 0.08) 50%, transparent 80%)`,
                  }}
                ></div>

                <Card className="relative bg-black/40 border-transparent backdrop-blur-sm hover:bg-black/30 transition-all duration-300 h-full rounded-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-purple-400 mb-4 flex justify-center">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
