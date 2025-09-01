import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface TechSliderProps {
  technologies: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
}

export function TechSlider({ technologies }: TechSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out"
        }
      );
    }
  }, []);

  // Creamos múltiples copias para un scroll verdaderamente infinito
  const infiniteTechnologies = [
    ...technologies, 
    ...technologies, 
    ...technologies, 
    ...technologies
  ];

  return (
    <div ref={sliderRef} className="w-full overflow-hidden mt-16 opacity-0 translate-y-[30px]">
      <div className="flex animate-scroll-infinite w-fit">
        {infiniteTechnologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-6 whitespace-nowrap flex-shrink-0"
          >
            <div className="text-white">{tech.logo}</div>
            <span className="text-white font-medium text-base">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
