import type { NextConfig } from "next";

/**
 * Configuración base de Next.js para Kuntur Muaythai.
 *
 * `images.remotePatterns` queda vacío y comentado a propósito: hoy todas las
 * imágenes se sirven desde /public (estáticas). Cuando se conecte un CMS o un
 * storage externo (S3, Cloudinary, Sanity, etc.), el dominio correspondiente
 * se agrega aquí sin tocar ningún componente — ver arquitectura, punto 10.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Ejemplo para cuando exista una fuente de imágenes externa:
      // { protocol: "https", hostname: "cdn.ejemplo.com" },
    ],
  },
};

export default nextConfig;
