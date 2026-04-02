import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, CV_PATH } from "@/constants/navigation";

const HERO_SOCIAL_LINKS = SOCIAL_LINKS.filter(link => link.name !== "Email");

export function HeroContent() {
  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center text-center gap-6 sm:gap-8">

      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[13px] text-zinc-400 font-medium tracking-wide">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        Fullstack Developer en Bettergy
      </div>

      {/* Headline */}
      <div className="space-y-5">
        <p className="text-sm sm:text-base text-zinc-500 tracking-wide">
          Hola, soy <span className="text-zinc-200 font-medium">Pablo</span>
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          <span className="text-white">Creando experiencias </span>
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">digitales</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-md mx-auto leading-relaxed font-light">
          Fullstack developer con background en&nbsp;diseño&nbsp;gráfico&nbsp;y&nbsp;web.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Button
          size="lg"
          className="group bg-white text-black hover:bg-zinc-200 border-0 px-7 text-sm font-medium transition-all duration-300 hover:scale-[1.02] rounded-full h-12 w-full sm:w-auto"
          onClick={handleProjectsClick}
        >
          Ver proyectos
          <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-zinc-800 bg-transparent hover:bg-white/[0.06] hover:border-zinc-600 text-zinc-400 hover:text-white px-7 text-sm transition-all duration-200 rounded-full h-12 w-full sm:w-auto"
          asChild
        >
          <a href={CV_PATH} download="CV_PabloGilDiaz.pdf">
            <FiDownload className="mr-2 h-4 w-4" />
            Descargar CV
          </a>
        </Button>
      </div>

      {/* Social */}
      <div className="flex items-center gap-1.5">
        {HERO_SOCIAL_LINKS.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-2.5 rounded-full text-zinc-600 ${link.hoverColor} hover:bg-white/[0.05] transition-all duration-200`}
            aria-label={link.ariaLabel}
          >
            <link.icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>
    </div>
  );
}
