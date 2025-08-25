import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-gray-400 text-sm">© 2024 Todos los derechos reservados</p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
              onClick={() => window.open('https://github.com/tu-usuario', '_blank')}
            >
              <FiGithub className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
              onClick={() => window.open('https://linkedin.com/in/tu-perfil', '_blank')}
            >
              <FiLinkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
              onClick={() => window.open('https://twitter.com/tu-usuario', '_blank')}
            >
              <FiTwitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
              onClick={() => window.open('mailto:tu-email@ejemplo.com', '_blank')}
            >
              <FiMail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
