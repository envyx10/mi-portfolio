"use client"

import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { TechSlider } from "@/components/tech-slider"
import { useGsapFadeInLeft, useGsapFadeInRight } from "@/hooks/use-gsap-scroll"
import Image from 'next/image'

export function Hero() {
  const leftContentRef = useGsapFadeInLeft()
  const rightContentRef = useGsapFadeInRight()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-600/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text content */}
          <div ref={leftContentRef} className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Hola, soy
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Desarrollador Web FrontEnd
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                Creo experiencias digitales excepcionales con código limpio y diseño moderno
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white"
              >
                <FiGithub className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white"
              >
                <FiLinkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white"
              >
                <FiMail className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group border-white/20 bg-white/5 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
              >
                <span className="flex items-center gap-2">
                  Ver mis proyectos
                  <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 hover:text-white text-white px-8"
              >
                Descargar CV
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div ref={rightContentRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <Image 
                  src="/yo.jpg" 
                  alt="Profile" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech slider */}
        <div className="mb-16 mt-32">
          <TechSlider />
        </div>

        <div className="text-center">
          <div className="animate-bounce">
            <FiArrowDown className="h-6 w-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
