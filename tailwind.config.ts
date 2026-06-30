import type { Config } from "tailwindcss";

/**
 * Tailwind config — Kuntur Muaythai
 *
 * Paleta institucional (ver documento de contenidos):
 *  - brand.blue   #00A3E0  Azul celeste de Cundinamarca → fondos institucionales, headers, filetes
 *  - brand.yellow #FFC72C  Amarillo de Cundinamarca      → CTAs principales, acentos, destacados
 *  - brand.red    #D32F2F  Rojo Cundinamarca/Muaythai     → botones de urgencia/energía, "EN VIVO"
 *  - brand.black  #0D0D0D  Negro                          → tipografía, fondos deportivos, headers
 *  - brand.white  #FFFFFF  Blanco                         → espacios, legibilidad en mobile
 *
 * Combinación sugerida por el documento institucional: header negro con filete
 * azul celeste, CTAs en amarillo con texto negro (alto contraste mobile) y
 * acentos rojos en elementos de impacto (ranking, torneos, contenido en vivo).
 *
 * No se declaran valores hex sueltos en componentes: todo color de marca se
 * consume a través de estos tokens (bg-brand-yellow, text-brand-black, etc.).
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    // Breakpoints explícitos, mobile-first. `xs` cubre teléfonos pequeños,
    // donde el documento institucional pone especial énfasis (CTAs grandes,
    // menú hamburguesa, tarjetas apiladas en vez de tablas).
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          blue: "#00A3E0",
          yellow: "#FFC72C",
          red: "#D32F2F",
          black: "#0D0D0D",
          white: "#FFFFFF",
        },
      },
      // Las familias reales se inyectan como variables CSS desde
      // src/lib/fonts.ts (next/font) y se aplican en el <html> del layout raíz.
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        // Animación base disponible a nivel utilitario. Las animaciones de
        // scroll/entrada reales se centralizan en src/lib/animations
        // (Framer Motion) cuando se construyan las secciones.
        "fade-in": "fadeIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
