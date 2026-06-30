# Kuntur Muaythai — Landing Page

Sitio web oficial de la **Liga de Muaythai de Cundinamarca – Kuntur Muaythai**.

Stack: **Next.js 15 (App Router) · React 19 · TypeScript · TailwindCSS · Framer Motion · Lucide Icons**.
Sin Bootstrap, sin Material UI, sin Redux, sin backend, sin base de datos.

## Estado actual del proyecto

Este repositorio contiene **únicamente la base técnica**: configuración, layout raíz, metadata SEO, tipografías, paleta de colores institucional y la estructura completa de carpetas de la arquitectura. Ninguna sección de la landing (Hero, Nosotros, Clubes, Calendario, Ranking, etc.) está implementada todavía — esas carpetas existen vacías (`.gitkeep`) listas para recibir contenido en la siguiente fase.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Arranque

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Deberías ver una pantalla placeholder confirmando que el proyecto compila correctamente.

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # ESLint
```

## Variables de entorno

Copiar `.env.example` a `.env.local` y ajustar:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_SITE_URL` se usa en la metadata SEO (Open Graph, `metadataBase`). Las variables de CMS/API quedan comentadas y reservadas para cuando se conecte una fuente de datos externa (ver arquitectura, punto 10).

## Estructura del proyecto

```
src/
├── app/            # Rutas (App Router). Solo orquestación, sin contenido hardcodeado.
├── components/
│   ├── ui/             # Primitivos visuales (Button, Card, Input...) — pendiente
│   ├── layout/          # Header, Footer, MobileNav... — pendiente
│   ├── motion/           # Wrappers de Framer Motion — pendiente
│   ├── icons/             # Registro de íconos Lucide por nombre string — pendiente
│   └── sections/          # Bloques de contenido por dominio (home, about, ranking...) — pendiente
├── data/            # Contenido institucional tipado — pendiente
├── lib/
│   ├── repositories/    # Capa de acceso a datos (hoy lee data/, mañana CMS/API)
│   ├── services/         # Ej. envío del formulario de contacto
│   ├── animations/       # Variantes de Framer Motion centralizadas
│   ├── validations/      # Esquemas de validación de formularios
│   ├── utils/             # Utilidades genéricas
│   └── fonts.ts          # ✅ Configuración de tipografías (next/font)
├── types/           # Contratos TypeScript del contenido — pendiente
└── config/
    └── site.ts       # ✅ Configuración base del sitio (nombre, URL, SEO)
```

Convenciones de nombres, justificación de cada carpeta y la estrategia de preparación para CMS/API están documentadas en el documento de arquitectura del proyecto.

## Paleta institucional

| Token Tailwind | Hex | Uso |
|---|---|---|
| `brand-blue` | `#00A3E0` | Fondos institucionales, headers, filetes |
| `brand-yellow` | `#FFC72C` | CTAs principales, acentos |
| `brand-red` | `#D32F2F` | Botones de urgencia/energía, "EN VIVO" |
| `brand-black` | `#0D0D0D` | Tipografía, fondos deportivos |
| `brand-white` | `#FFFFFF` | Espacios, legibilidad mobile |

## Tipografía

- **Oswald** (`font-display`) — titulares, banners, scoreboard de ranking.
- **Inter** (`font-sans`) — cuerpo de texto, alta legibilidad en mobile.

## Próximos pasos

1. Definir `types/` y `data/` para todas las secciones.
2. Construir primitivos de `components/ui/` y `components/layout/`.
3. Implementar páginas en orden de prioridad: Inicio → Nosotros → Contacto → resto.
4. Aplicar animaciones de `components/motion/` sobre componentes ya funcionales.
