<div align="center">

# endev.portfolio

**Portfolio personal de Pablo Gil Diaz** - Fullstack Developer

Construido con Astro, React y Tailwind CSS.

[![Astro](https://img.shields.io/badge/Astro-5.17-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Deploy](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel)](https://vercel.com)

</div>

---

## Vista previa

> Dark theme / Animaciones fluidas / Responsive / Single Page

| Hero | Tech Marquee | Projects |
|------|-------------|----------|
| Gradient orbs animados, CTA y enlaces sociales | Scroll infinito bidireccional con 22 tecnologias | Grid responsive con hover zoom y tags de color |

---

## Stack

| Capa | Tecnologias |
|------|------------|
| **Framework** | Astro 5 (SSG) + React 18 (islands) |
| **Estilos** | Tailwind CSS 3 + tailwindcss-animate |
| **Lenguaje** | TypeScript 5 |
| **UI** | shadcn/ui (CVA + Radix) |
| **Iconos** | react-icons |
| **Deploy** | Vercel |

---

## Secciones

- **Header** - Navegacion fija con deteccion de scroll, backdrop blur, menu hamburguesa en movil
- **Hero** - Badge de estado, CTAs (ver proyectos / descargar CV), enlaces sociales (GitHub, GitLab, LinkedIn)
- **Tech Stack** - Marquee animado con 22 tecnologias en dos filas con direcciones opuestas
- **About** - Timeline de experiencia expandible (5 posiciones) + grid de skills con 4 categorias
- **Projects** - Cards con imagen, tags de tecnologias y enlaces a repo/demo
- **Footer** - Email con copy-to-clipboard, redes sociales, copyright dinamico

---

## Estructura del proyecto

```
src/
├── components/
│   ├── react/            # Componentes interactivos (React islands)
│   ├── sections/         # Secciones de la pagina (Astro)
│   └── ui/               # Componentes base (shadcn/ui)
├── constants/            # Datos del portfolio, navegacion, tecnologias
├── hooks/                # useActiveSection (scroll tracking)
├── layouts/              # Layout base HTML
├── lib/                  # Utilidades
├── pages/                # index.astro (entry point)
├── styles/               # globals.css + animations.css
└── types/                # Interfaces TypeScript
```

Los datos del portfolio (experiencia, proyectos, skills) estan centralizados en `src/constants/portfolio-data.ts` para facilitar su edicion.

---

## Inicio rapido

```bash
# Clonar
git clone https://github.com/envyx10/mi-portfolio.git
cd mi-portfolio

# Instalar dependencias
bun install

# Desarrollo
bun run dev

# Build
bun run build

# Preview del build
bun run preview
```

El servidor de desarrollo arranca en `http://localhost:4321`.

---

## Scripts

| Comando | Descripcion |
|---------|------------|
| `bun run dev` | Servidor de desarrollo con HMR |
| `bun run build` | Type-check + build estatico a `dist/` |
| `bun run preview` | Previsualizar el build local |
| `bun run check` | Verificar tipos con Astro check |
| `bun run clean` | Limpiar `.astro` y `dist` |

---

## Despliegue

### Vercel (recomendado)

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Astro se detecta automaticamente - sin configuracion extra necesaria
3. Push a `main` para desplegar

### Alternativas

- **Netlify** - Build: `bun run build` / Publish: `dist`
- **Cloudflare Pages** - Build: `bun run build` / Output: `dist`

---

## Personalizar contenido

Para adaptar el portfolio con tu informacion, edita estos archivos:

| Archivo | Que contiene |
|---------|-------------|
| `src/constants/portfolio-data.ts` | Experiencia laboral, proyectos y skills |
| `src/constants/technologies.ts` | Tecnologias del marquee (icono + color) |
| `src/constants/navigation.ts` | Links de navegacion y redes sociales |
| `public/` | CV en PDF, imagenes de proyectos, favicon |

---

## Licencia

Revisa el archivo [LICENSE](./LICENSE) para mas detalles.
