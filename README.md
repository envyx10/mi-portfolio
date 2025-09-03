# Portfolio 

Este repositorio contiene mi portfolio personal: una web estática para mostrar proyectos, experiencia y formas de contacto. Está construida con Astro, React y Tailwind, y pensada para publicarse fácilmente en plataformas como Vercel o Netlify.

El objetivo es ofrecer una landing rápida y accesible donde presentar trabajos, enlaces a repos y un CV descargable.

## Contenido
- `src/` - código fuente (páginas, componentes, estilos)
- `public/` - activos estáticos (imágenes, favicon, svg)
- `dist/` - salida de build (generada, no se debe versionar)
- `components.json` - configuración del generador shadcn/ui (tooling)
- `astro.config.mjs` - configuración de Astro
- `package.json` - comandos y dependencias

## Requisitos
- Node.js 18+ (recomendado)
- pnpm (v7+ recomendado)

## Comandos locales (PowerShell)
```powershell
# instalar dependencias
pnpm install

# modo desarrollo (dev server)
pnpm dev

# construir sitio estático
pnpm build

# previsualizar build local
pnpm preview
```
## Despliegue rápido
Recomiendo Vercel (configuración automática para proyectos Astro). Pasos generales:

- Conecta el repositorio en Vercel.
- Selecciona la rama `main` o `develop` que quieres desplegar.
- Build command: `pnpm build`
- Output directory: `dist`

Alternativas:
- Netlify: build command `pnpm build`, publish directory `dist`
- GitHub Pages: usar una acción que construya y publique `dist/` (no es la opción más cómoda para Astro)

## Notas sobre dependencias y seguridad
- Se han aplicado overrides de `pnpm` para actualizar `devalue` y se añadió `esbuild` en `devDependencies` para evitar una vulnerabilidad transitoria. Si usas `pnpm`, mantén actualizado `pnpm-lock.yaml` y corre `pnpm audit` periódicamente.

## Sobre `components.json`
El archivo `components.json` es una configuración del generador `shadcn/ui`. No es necesario para ejecutar el sitio, pero sí útil si vas a usar su CLI para generar/actualizar componentes. Si no usas ese flujo, puedes mantenerlo como referencia o eliminarlo.

## Contribuir
Si quieres publicar o contribuir:
1. Crea una rama desde `develop` (o `main`) con un nombre descriptivo.
2. Haz cambios y prueba localmente con `pnpm dev`.
3. Abre un PR describiendo los cambios.

## Problemas comunes
- Puerto en uso al iniciar `pnpm dev`: cierra el proceso que usa el puerto o ejecuta `pnpm dev -- --port 4322`.
- Errores relacionados con `esbuild` o `vite`: asegúrate de tener versiones actualizadas en `package.json` y ejecuta `pnpm install`.

## Licencia
Este repositorio incluye un archivo `LICENSE` en la raíz. Revisa ese archivo para más detalles.

---

