"use client"

import { useRef } from "react"
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi"
import { useGsapInitialAnimation } from "@/hooks/use-gsap-initial"
import Link from 'next/link'

export function SocialSidebar() {
  const sidebarRef = useGsapInitialAnimation(0) // Sin delay adicional - aparece con el header

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="h-5 w-5" />,
      href: "https://github.com/tu-usuario",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/tu-perfil",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <FiMail className="h-5 w-5" />,
      href: "mailto:tu-email@ejemplo.com",
      color: "hover:text-purple-400",
    },
    {
      name: "Twitter",
      icon: <FiTwitter className="h-5 w-5" />,
      href: "https://twitter.com/tu-usuario",
      color: "hover:text-cyan-400",
    },
  ]

  return (
    <div className="fixed left-[5%] xl:left-[8%] 2xl:left-[12%] top-[28%] z-50 hidden lg:block">
      <div ref={sidebarRef} className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 ${link.color} transition-all duration-300 hover:scale-125 transform relative group`}
            title={link.name}
          >
            {link.icon}
            
            {/* Tooltip sutil */}
            <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {link.name}
            </span>
          </Link>
        ))}
        
        {/* Línea decorativa extendida que va desde los iconos hasta abajo */}
        <div className="w-px h-[70vh] bg-gradient-to-b from-gray-600 via-gray-700/50 to-transparent mx-auto"></div>
      </div>
    </div>
  )
}
