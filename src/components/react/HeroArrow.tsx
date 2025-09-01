import { useRef, useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";
import { gsap } from "gsap";

export function HeroArrow() {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <div className="text-center">
      <div ref={arrowRef} className="animate-bounce opacity-0 translate-y-[30px]">
        <FiArrowDown className="h-6 w-6 mx-auto text-gray-400" />
      </div>
    </div>
  );
}
