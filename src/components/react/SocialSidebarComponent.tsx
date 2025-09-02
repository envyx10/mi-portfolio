import { useRef, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function SocialSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      setTimeout(() => {
        sidebarRef.current?.classList.remove('opacity-0', 'translate-y-[30px]');
      }, 100);
    }
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="h-6 w-6" />,
      href: "https://github.com/envyx10",
      color: "hover:text-white hover:scale-110",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/pablo-gil-diaz",
      color: "hover:text-blue-400 hover:scale-110",
    },
    {
      name: "Email",
      icon: <FiMail className="h-6 w-6" />,
      href: "mailto:pablogil.dev@gmail.com",
      color: "hover:text-purple-400 hover:scale-110",
    },
  ];

  return (
    <div className="fixed left-[2%] sm:left-[3%] md:left-[4%] xl:left-[6%] 2xl:left-[8%] top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div ref={sidebarRef} className="flex flex-col items-center opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
        {/* Línea decorativa superior que va hasta arriba */}
        <div className="w-px h-[35vh] sm:h-[38vh] md:h-[40vh] bg-gradient-to-b from-transparent via-gray-500/40 to-gray-500/60"></div>
        
        {/* Contenedor de iconos sociales */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 py-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transition-all duration-300 transform relative group`}
              title={link.name}
            >
              {link.icon}
              
              {/* Tooltip mejorado pero sutil - Responsive position */}
              <span className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                {link.name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Línea decorativa inferior que va hasta abajo */}
        <div className="w-px h-[35vh] sm:h-[38vh] md:h-[40vh] bg-gradient-to-b from-gray-500/60 via-gray-600/40 to-transparent"></div>
      </div>
    </div>
  );
}
