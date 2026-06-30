/**
 * Placeholder temporal de la ruta "/".
 *
 * Esto NO es la sección Hero ni ningún bloque de contenido de la landing
 * (eso se construye en la siguiente fase, ver components/sections/home).
 * Solo confirma que el proyecto compila y corre con `npm run dev`.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-3xl font-semibold uppercase tracking-tight text-brand-black sm:text-4xl">
        Kuntur Muaythai
      </h1>
      <p className="max-w-md text-sm text-brand-black/70 sm:text-base">
        Base del proyecto lista. Las secciones de la landing page se
        construyen en la siguiente fase.
      </p>
    </main>
  );
}
