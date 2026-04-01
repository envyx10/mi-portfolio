import { FiArrowRight, FiLinkedin, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const techStack = ["React", "Next.js", "TypeScript", "JavaScript", "Svelte", "Node.js", "TailwindCSS"];

export function HeroContent() {
  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-14">

      {/* ── Left: Code card + chips ── */}
      <div className="relative flex-[2] hidden sm:flex flex-col gap-4">

        {/* Glow */}
        <div className="absolute -inset-6 bg-gradient-to-br from-purple-600/15 to-blue-600/15 blur-3xl rounded-3xl pointer-events-none" />

        {/* Code card */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0d0d0f]/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
          {/* Window bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-gray-500 font-mono">pablo.ts</span>
          </div>

          {/* Code */}
          <div className="p-5 font-mono text-[13px] leading-[1.7] select-none">
            <div>
              <span className="text-blue-400">const</span>
              <span className="text-white"> pablo </span>
              <span className="text-gray-500">= {"{"}</span>
            </div>
            <div className="pl-5">
              <span className="text-purple-300">name</span>
              <span className="text-gray-500">: </span>
              <span className="text-green-300">"Pablo Gil Díaz"</span>
              <span className="text-gray-500">,</span>
            </div>
            <div className="pl-5">
              <span className="text-purple-300">role</span>
              <span className="text-gray-500">: </span>
              <span className="text-green-300">"Fullstack Dev"</span>
              <span className="text-gray-500">,</span>
            </div>
            <div className="pl-5">
              <span className="text-purple-300">company</span>
              <span className="text-gray-500">: </span>
              <span className="text-green-300">"Bettergy"</span>
              <span className="text-gray-500">,</span>
            </div>
            <div className="pl-5">
              <span className="text-purple-300">stack</span>
              <span className="text-gray-500">: [</span>
            </div>
            <div className="pl-10">
              <span className="text-green-300">"React"</span>
              <span className="text-gray-500">, </span>
              <span className="text-green-300">"Next.js"</span>
              <span className="text-gray-500">,</span>
            </div>
            <div className="pl-10">
              <span className="text-green-300">"TypeScript"</span>
              <span className="text-gray-500">, </span>
              <span className="text-green-300">"Svelte"</span>
              <span className="text-gray-500">,</span>
            </div>
            <div className="pl-5">
              <span className="text-gray-500">],</span>
            </div>
            <div className="pl-5">
              <span className="text-purple-300">passion</span>
              <span className="text-gray-500">: </span>
              <span className="text-green-300">"UI Design"</span>
              <span className="text-gray-500">,</span>
            </div>
            <div>
              <span className="text-gray-500">{"}"}</span>
            </div>
            <div className="mt-3">
              <span className="text-blue-400">export default</span>
              <span className="text-white"> pablo</span>
              <span className="text-gray-500">;</span>
            </div>
            <div className="mt-1 flex items-center">
              <span className="text-gray-600">{">"}</span>
              <span className="inline-block w-2 h-[15px] bg-purple-400/70 ml-1.5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── Right: Text content ── */}
      <div className="flex-[3] text-center lg:text-left flex flex-col gap-6 lg:gap-7 lg:pt-2">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-widest uppercase self-center lg:self-start">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Product Engineer · Bettergy
        </div>

        {/* Headline */}
        <div>
          <p className="text-sm text-gray-400 mb-4">
            Hola, soy <strong className="text-white">Pablo</strong> —
          </p>
          <h1 className="font-bold tracking-tight leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl text-white">Desarrollador</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Fullstack & UI
            </span>
          </h1>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-3 text-gray-400 text-sm sm:text-base leading-relaxed max-w-prose mx-auto lg:mx-0">
          <p>
            Construyo productos digitales combinando{" "}
            <strong className="text-white font-semibold">desarrollo Fullstack</strong> con
            sensibilidad de <strong className="text-white font-semibold">diseño</strong>.
          </p>
          <p>
            Mi background en <strong className="text-white font-semibold">diseño gráfico</strong> me
            permite crear interfaces funcionales y estéticamente cuidadas.
          </p>
          <p>
            Actualmente como <strong className="text-white font-semibold">Product Engineer</strong>{" "}
            en <strong className="text-white font-semibold">Bettergy</strong>.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 justify-center lg:justify-start">
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold text-white leading-none">2+</div>
            <div className="text-xs text-gray-500 tracking-wide mt-1">años exp.</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold text-white leading-none">10+</div>
            <div className="text-xs text-gray-500 tracking-wide mt-1">proyectos</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold text-white leading-none">7</div>
            <div className="text-xs text-gray-500 tracking-wide mt-1">tecnologías</div>
          </div>
        </div>

        {/* Buttons + Social */}
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mt-auto">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 px-6 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            onClick={handleProjectsClick}
          >
            Ver proyectos
            <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/15 bg-transparent hover:bg-white/5 hover:border-white/30 text-white px-6 text-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="/CV_PabloGilDiaz.pdf" download="CV_PabloGilDiaz.pdf">
              Descargar CV
            </a>
          </Button>
          <div className="flex items-center gap-2 sm:ml-1">
            <a
              href="https://www.linkedin.com/in/envyx10/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/envyx10"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
