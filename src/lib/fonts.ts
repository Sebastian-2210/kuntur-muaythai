import { Inter, Oswald } from "next/font/google";

/**
 * Tipografías institucionales — Kuntur Muaythai
 *
 * `fontDisplay` (Oswald): condensada y de trazo fuerte, pensada para
 * titulares, banners de sección y el tono "deportivo agresivo" que el
 * documento institucional pide explícitamente para Ranking/Scoreboard.
 *
 * `fontSans` (Inter): cuerpo de texto. Prioriza legibilidad en mobile y
 * buen soporte de tildes/eñes para contenido en español.
 *
 * Ambas se exponen como variables CSS (--font-display / --font-sans) y se
 * aplican una sola vez en el <html> de src/app/layout.tsx. Tailwind las
 * consume mediante fontFamily.sans / fontFamily.display en tailwind.config.ts.
 * next/font se encarga de self-host, preload y evitar layout shift.
 */
export const fontDisplay = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
