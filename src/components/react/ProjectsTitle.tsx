import { useRef, useEffect } from "react";

export function ProjectsTitle() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={titleRef} className="text-center mb-16 opacity-0 translate-y-12 transition-all duration-1000 ease-out">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
        Mis Proyectos
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
        Una selección de proyectos que demuestran mis habilidades en desarrollo frontend,
        desde aplicaciones web completas hasta componentes interactivos.
      </p>
    </div>
  );
}
