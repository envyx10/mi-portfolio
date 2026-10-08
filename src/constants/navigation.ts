export const CONTACT_EMAIL = "pabloinfodesign95@gmail.com";
export const CV_PATH = "/CV_PabloGilDiaz.pdf";
export const CV_FILENAME = "CV_PabloGilDiaz.pdf";

/** Secciones enlazables. `short` y `num` son la versión compacta de la cabecera. */
export const NAV_ITEMS = [
  { href: "#about", label: "Sobre mí", short: "Info", num: "02" },
  { href: "#projects", label: "Proyectos", short: "Index", num: "04" },
  { href: "#contact", label: "Contacto", short: "Contacto", num: "05" },
] as const;

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/envyx10", label: "Perfil de GitHub" },
  { name: "GitLab", href: "https://gitlab.com/envyx10", label: "Perfil de GitLab" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/envyx10/", label: "Perfil de LinkedIn" },
] as const;
