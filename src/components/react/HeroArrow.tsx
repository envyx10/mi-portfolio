import { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export function HeroArrow() {
  const arrowRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-center">
      <div ref={arrowRef} className="animate-bounce">
        <FiArrowDown className="h-6 w-6 mx-auto text-gray-400" />
      </div>
    </div>
  );
}
