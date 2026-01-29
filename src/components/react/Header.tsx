import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { HEADER_SCROLL_THRESHOLD } from "@/constants/ui-constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6 animate-fade-in">
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
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 flex items-center ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="w-2 flex justify-center mr-2">
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
                    )}
                  </div>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
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
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
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
