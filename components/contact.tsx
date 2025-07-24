"use client"

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useGsapFadeInLeft, useGsapFadeInRight, useGsapScrollAnimation } from "@/hooks/use-gsap-scroll"

export function Contact() {
  const titleRef = useGsapScrollAnimation()
  const leftContentRef = useGsapFadeInLeft()
  const rightContentRef = useGsapFadeInRight()

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={leftContentRef} className="space-y-8">{/* Contact info and content here */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <FiMail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">hola@miportfolio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <FiPhone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Teléfono</h3>
                  <p className="text-gray-400">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <FiMapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ubicación</h3>
                  <p className="text-gray-400">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>

          <Card ref={rightContentRef} className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Nombre"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Input placeholder="Asunto" className="bg-white/5 border-white/20 text-white placeholder:text-gray-400" />
              <Textarea
                placeholder="Tu mensaje..."
                rows={5}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none"
              />
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                size="lg"
              >
                Enviar mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
