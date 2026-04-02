import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiGitlab } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    href: "https://github.com/envyx10",
    hoverColor: "hover:text-white",
    ariaLabel: "Visitar perfil de GitHub",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    href: "https://gitlab.com/envyx10",
    hoverColor: "hover:text-orange-400",
    ariaLabel: "Visitar perfil de GitLab",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/envyx10/",
    hoverColor: "hover:text-blue-400",
    ariaLabel: "Visitar perfil de LinkedIn",
  },
  {
    name: "Email",
    icon: FiMail,
    href: "mailto:pabloinfodesign95@gmail.com",
    hoverColor: "hover:text-purple-400",
    ariaLabel: "Enviar correo electrónico",
  },
] as const;

export const NAV_ITEMS = [
  { name: "Inicio", href: "#home", id: "home" },
  { name: "Sobre mí", href: "#about", id: "about" },
  { name: "Proyectos", href: "#projects", id: "projects" },
  { name: "Contacto", href: "#contact", id: "contact" },
] as const;

export const CONTACT_EMAIL = "pabloinfodesign95@gmail.com";
export const CV_PATH = "/CV_PabloGilDiaz.pdf";
