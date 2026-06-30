/**
 * Configuración base del sitio.
 *
 * Centraliza lo que necesita la capa de metadata/SEO (layout.tsx,
 * sitemap.ts, robots.ts cuando se creen). No es contenido de negocio
 * (eso vive en src/data/ — ver arquitectura, punto 9): esto es
 * configuración de infraestructura del sitio.
 *
 * `url` se lee de una variable de entorno para que el dominio real de
 * producción no quede hardcodeado en el código fuente.
 */
export const siteConfig = {
  name: "Kuntur Muaythai",
  fullName: "Liga de Muaythai de Cundinamarca – Kuntur Muaythai",
  shortDescription: "Disciplina. Honor. Fuerza Departamental.",
  description:
    "Liga oficial de Muaythai de Cundinamarca, reconocida mediante Resolución Mindeporte N.º 001289 de 2024. Formación deportiva, alto rendimiento, calendario de torneos, ranking de deportistas y clubes afiliados.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kunturmuaythai.com",
  locale: "es_CO",
  themeColor: "#0D0D0D",
  keywords: [
    "Muaythai Cundinamarca",
    "Liga de Muaythai",
    "Kuntur Muaythai",
    "Muay Thai Colombia",
    "Artes marciales Cundinamarca",
    "Federación Colombiana de Muaythai",
  ],
  ogImage: "/images/og/og-default.jpg",
} as const;

export type SiteConfig = typeof siteConfig;
