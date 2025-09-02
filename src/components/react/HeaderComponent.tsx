import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setTimeout(() => {
        headerRef.current?.classList.remove('opacity-0', '-translate-y-[30px]');
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa con mejor lógica
      const sections = ["home", "about", "projects"];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Si estamos cerca del final de la página, activar projects
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("projects");
        return;
      }
      
      let currentSection = "home"; // Default
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          
          // Si el elemento está visible en el viewport superior
          if (scrollPosition >= elementTop - 300) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#home", id: "home" },
    { name: "Sobre mí", href: "#about", id: "about" },
    { name: "Proyectos", href: "#projects", id: "projects" },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-4 py-6 opacity-0 -translate-y-[30px] transition-all duration-1200 ease-out">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4"
            : "backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-6 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 flex items-center ${
                    activeSection === item.id 
                      ? "text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {/* Contenedor fijo para el indicador - siempre ocupa espacio */}
                  <div className="w-2 flex justify-center mr-2">
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium py-2 transition-all duration-300 ${
                    activeSection === item.id 
                      ? "text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    {/* Indicador visual para sección activa en móvil */}
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                    )}
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
