import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            {heroData.badge}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            {heroData.title}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-yellow-400">
            {heroData.subtitle}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            {heroData.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={heroData.primaryButton.href}>
              {heroData.primaryButton.text}
            </CTAButton>

            <CTAButton
              href={heroData.secondaryButton.href}
              variant="outline"
            >
              {heroData.secondaryButton.text}
            </CTAButton>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-4xl font-bold text-yellow-400">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm uppercase tracking-wide text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}