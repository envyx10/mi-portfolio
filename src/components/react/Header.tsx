import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 animate-fade-in">
      <nav
        className={`max-w-3xl mx-auto transition-all duration-500 px-6 py-2.5 rounded-2xl md:rounded-full ${
          isScrolled || isMenuOpen
            ? "backdrop-blur-2xl bg-white/[0.07] border border-white/[0.08] shadow-lg shadow-black/20"
            : "backdrop-blur-sm bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold text-zinc-200 tracking-tight hover:text-white transition-colors">
            Envdev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-white/[0.08]"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex items-center justify-center text-white hover:bg-white/10 rounded-lg h-8 w-8 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <FiX className="h-4 w-4" />
            ) : (
              <FiMenu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/[0.06] pb-1">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-white/[0.08]"
                      : "text-zinc-500 hover:text-white hover:bg-white/[0.04]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
