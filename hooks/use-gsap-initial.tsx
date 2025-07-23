"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

// Hook para animación inicial unificada - todos los componentes aparecen al mismo tiempo
export const useGsapInitialAnimation = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const element = ref.current
    if (!element) return

    // Establecer estado inicial inmediatamente
    gsap.set(element, {
      opacity: 0,
      y: 30,
    })

    // Animación unificada para todos los componentes
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6 + delay, // Base delay de 0.6s + delay específico del componente
    })

    return () => {
      // No cleanup necesario para animaciones simples
    }
  }, [delay])

  return ref
}
