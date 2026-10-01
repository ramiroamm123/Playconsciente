# 💙 PlayConsciente

Landing page del proyecto de investigación *"Análisis de los efectos
conductuales del uso de videojuegos en la población entre 4 y 12 años del
Colegio Jerusalem"* — Barranquilla, 2025-2026.

## Stack

- **Next.js 14** (App Router) + React 18 + JavaScript
- **Tailwind CSS**, con una paleta de diseño estrictamente en tonos de azul
- **Framer Motion** para las animaciones (scroll, acordeones, tarjetas flip)
- **Lenis** para scroll suave
- **Recharts** para las gráficas de la sección de encuestas
- Componentes UI propios en `components/ui`, con la misma filosofía de
  composición de **shadcn/ui** (no se usó el CLI de shadcn porque este
  entorno no tiene acceso a internet para descargar su registro de
  componentes; si luego quieres los componentes oficiales, corre
  `npx shadcn@latest init` en tu máquina y podrás reemplazar
  `components/ui/*` sin tocar el resto del código)

## Cómo ejecutar el proyecto en tu computador

1. Descomprime este `.zip` — te quedará una carpeta `playconsciente-landing`.
2. Instala [Node.js 18+](https://nodejs.org) si no lo tienes.
3. Abre una terminal **dentro de la carpeta del proyecto** (revisa que al
   escribir `dir` o `ls` veas `package.json`, `app`, `components`, etc.) y
   corre:

   ```bash
   npm install
   npm run dev
   ```

4. Abre `http://localhost:3000` en tu navegador.

Cada vez que quieras volver a verlo, solo repite el paso 3 (ya no hace
falta `npm install` de nuevo, solo `npm run dev`).

## Cómo subirlo a GitHub y desplegarlo en Vercel

1. Crea un repositorio nuevo en GitHub (vacío, sin README).
2. En la carpeta del proyecto:

   ```bash
   git init
   git add .
   git commit -m "Landing: PlayConsciente"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

3. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub,
   **Add New → Project**, elige el repositorio y dale a **Deploy**. Vercel
   detecta Next.js automáticamente.

## Estructura del proyecto

```
app/
  layout.js        → fuentes y providers globales
  page.js           → ensambla las 8 secciones en orden
  globals.css       → estilos base y utilidades
components/
  Nav.js            → barra de navegación fija
  ProgressRail.js   → riel de progreso lateral (elemento distintivo)
  CustomCursor.js   → cursor personalizado: el logo de PlayConsciente
                      (corazón + control) siguiendo al mouse
  SmoothScrollProvider.js → integración de Lenis
  Hero.js            → Sección 1: encabezado principal
  WhatIsSection.js   → Sección 2: ¿Qué es PlayConsciente?
  Objectives.js       → Sección 3: nuestra finalidad
  Team.js             → Sección 4: el equipo
  Surveys.js          → Sección 5: nuestras encuestas + conclusión crítica
  Solution.js         → Sección 6: por qué y cómo creamos PlayConsciente
  TheorySupport.js     → Sección 7: sustento teórico + glosario
  LegalFramework.js    → Sección 8: marco legal
  Footer.js
  ui/                 → primitivos reutilizables (SectionHeading, Callout, Badge)
lib/
  utils.js            → helper cn() para clases de Tailwind
  chapters.js          → metadata compartida entre Nav y ProgressRail
```

## Sistema de diseño (estrictamente azul)

| Token | Valor | Uso |
|---|---|---|
| `deep` | `#0B2545` | texto y fondos oscuros (footer, tarjetas de énfasis) |
| `ocean` | `#145DA0` | acento principal / CTA |
| `sky` | `#4CA6E8` | acentos secundarios y estados de "beneficio" |
| `steel` | `#3D5A80` | acentos de precaución / teoría |
| `powder` | `#B8DFF7` | resaltados suaves |
| `mist` | `#EAF4FC` | fondo general de la página |
| `paper` | `#FFFFFF` | tarjetas |

Toda la paleta se mantiene dentro de la gama de azules, tal como pediste,
para transmitir confianza, calma y tecnología — sin usar colores de otras
familias (ni siquiera para distinguir "riesgo" de "beneficio": eso se logra
con distintas intensidades de azul, no con otro color).

Tipografías: **Space Grotesk** (títulos), **Source Serif 4** (cuerpo de
texto), **JetBrains Mono** (datos, etiquetas, glosario).

## El cursor y el riel de progreso

El cursor personalizado dibuja el propio logo de PlayConsciente descrito en
tu monografía: un corazón que envuelve un control de videojuegos. El riel
lateral de progreso (visible en pantallas grandes) se llena como una barra
de avance mientras recorres las 7 secciones numeradas de contenido,
reforzando la idea de "acompañar paso a paso" que es el espíritu del
proyecto.

## Imágenes

El logo de PlayConsciente (la ilustración de una familia formando un
corazón alrededor de un control de videojuegos) ya está incluido y activo
en el proyecto, en `public/assets/images/logo-playconsciente.png`. Aparece
en tres lugares: la barra de navegación, el encabezado principal (Hero) y
el pie de página.

Si más adelante quieres **reemplazarlo por otra versión** del logo, solo
tienes que sobrescribir ese mismo archivo (manteniendo el nombre
`logo-playconsciente.png`) — no necesitas tocar nada del código.

Si quieres agregar otras fotos (del colegio, de los folletos impresos, etc.), el proceso es el
mismo: guárdalas en `public/assets/images/`, e insértalas con
`<Image src="/assets/images/NOMBRE.jpg" alt="..." width={800} height={600} />`
usando el componente `Image` de `next/image` (ya está importado en varios
componentes, así que puedes copiar ese mismo patrón).

## Notas de accesibilidad y rendimiento

- Se respeta `prefers-reduced-motion`: si el usuario tiene animaciones
  reducidas activadas en su sistema, Lenis y las transiciones se
  desactivan automáticamente.
- El cursor personalizado se oculta en pantallas táctiles.
- Todo el layout es responsive (`sm`, `md`, `lg` de Tailwind).
