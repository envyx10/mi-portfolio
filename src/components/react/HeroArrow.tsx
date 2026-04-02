import { FiArrowDown } from "react-icons/fi";

export function HeroArrow() {
  const handleClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={handleClick}
      className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/[0.04] transition-colors"
      aria-label="Ir a experiencia y habilidades"
    >
      <FiArrowDown className="h-5 w-5 text-zinc-600" />
    </button>
  );
}
