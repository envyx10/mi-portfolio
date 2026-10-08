<div align="center">

# endev.portfolio

**Portfolio personal de Pablo Gil Diaz** - Fullstack Developer

Construido con Astro y Three.js.

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Three.js](https://img.shields.io/badge/Three.js-r186-000?logo=threedotjs&logoColor=white)](https://threejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Deploy](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel)](https://vercel.com)

</div>

---

## Vista previa

> Suizo × brutalista / WebGL / Responsive / Single Page / WCAG 2.1 AA

| Hero | Trayectoria | Proyectos |
|------|-------------|-----------|
| Esfera de partículas deformada con simplex noise (GLSL) | Timeline tipo Gantt calculado desde las fechas | Índice interactivo con vista previa (tarjetas en móvil) |

---

## Stack

| Capa | Tecnologias |
|------|------------|
| **Framework** | Astro 5 (SSG), sin framework de UI |
| **3D** | Three.js + shaders GLSL |
| **Estilos** | CSS propio (scoped por componente + `globals.css`) |
| **Tipografia** | Archivo (variable, condensada) + JetBrains Mono |
| **Lenguaje** | TypeScript 5 |
| **Deploy** | Vercel |

---

## Secciones

- **Header** - Celdas monoespaciadas con hora local de Malaga y navegacion
- **Hero** - Esfera WebGL, tarjeta de intro, nombre a todo el ancho y ticker del stack
- **Sobre mi** - Intro, timeline de experiencia y habilidades en cartel naranja
- **Proyectos** - Indice con vista previa en marco de navegador
- **Footer** - CTA de contacto con copiar email, perfiles, CV y cierre con el nombre

---

## Estructura del proyecto

```
src/
├── components/           # ExternalLink + sections/ (secciones de la pagina, Astro + CSS scoped)
├── constants/            # Datos del portfolio, navegacion y stack
├── layouts/              # Layout base HTML (fuentes, favicon, ruido de fondo, reloj)
├── lib/                  # period.ts (fechas del timeline) + tests
├── pages/                # index.astro (entry point)
├── scripts/              # sphere.ts (Three.js)
├── styles/               # globals.css (tokens, reset, utilidades)
└── types/                # Interfaces TypeScript
```

Los datos del portfolio (experiencia, proyectos, skills) estan centralizados en `src/constants/portfolio-data.ts`. Cada experiencia lleva `from`/`to` (`"YYYY-MM"`): de ahi salen el timeline y el texto del periodo. El perfil (nombre, rol, empresa...) esta en `PROFILE`.

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
| `bun run test` | Tests unitarios (bun test) |
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
| `src/constants/technologies.ts` | Tecnologias del ticker |
| `src/constants/navigation.ts` | Links de navegacion y redes sociales |
| `public/` | CV en PDF, imagenes de proyectos, favicon |

---

## Licencia

Revisa el archivo [LICENSE](./LICENSE) para mas detalles.
