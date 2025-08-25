"use client"

import { FiMail, FiLinkedin, FiPhone, FiGithub } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { useGsapScrollAnimation, useGsapCardAnimation } from "@/hooks/use-gsap-scroll"

export function Contact() {
  const titleRef = useGsapScrollAnimation()
  const cardsRef = useGsapCardAnimation(0.2)

  const contactMethods = [
    {
      icon: <FiMail className="h-8 w-8" />,
      title: "Email",
      description: "Escríbeme directamente",
      value: "correo@ejemplo.com",
      action: "mailto:correo@ejemplo.com",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:bg-purple-500/10 hover:border-purple-500/30"
    },
    {
      icon: <FiLinkedin className="h-8 w-8" />,
      title: "LinkedIn", 
      description: "Conectemos profesionalmente",
      value: "linkedin.com/in/tu-perfil",
      action: "https://linkedin.com/in/tu-perfil",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:bg-blue-500/10 hover:border-blue-500/30"
    },
    {
      icon: <FiPhone className="h-8 w-8" />,
      title: "Teléfono",
      description: "Hablemos directamente", 
      value: "+34 123 456 789",
      action: "tel:+34123456789",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:bg-green-500/10 hover:border-green-500/30"
    },
    {
      icon: <FiGithub className="h-8 w-8" />,
      title: "GitHub",
      description: "Revisa mi código",
      value: "github.com/tu-usuario",
      action: "https://github.com/tu-usuario",
      color: "from-gray-500 to-slate-500",
      hoverColor: "hover:bg-gray-500/10 hover:border-gray-500/30"
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hablemos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
            <br />
            <span className="text-purple-400">Elige el método que prefieras para contactarme:</span>
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${method.hoverColor} cursor-pointer transform hover:scale-105`}
              onClick={() => window.open(method.action, '_blank')}
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} bg-opacity-20 border border-white/10`}>
                  <div className={`bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                    {method.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-white font-mono text-sm break-all">
                    {method.value}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 group-hover:border-white/30 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(method.action, '_blank')
                  }}
                >
                  Contactar
                </Button>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            ¿Prefieres el email? Es mi método favorito para proyectos detallados
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3"
            onClick={() => window.open('mailto:correo@ejemplo.com', '_blank')}
          >
            <FiMail className="h-5 w-5 mr-2" />
            Escribir email
          </Button>
        </div>
      </div>
    </section>
  )
}
