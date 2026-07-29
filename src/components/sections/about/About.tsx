import Image from "next/image";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-zinc-950 py-24"
    >
      <Container>

        <SectionTitle
          title={aboutData.title}
          subtitle={aboutData.subtitle}
        />

        {/* Contenido principal */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Imagen */}

          <div className="relative overflow-hidden rounded-3xl">

            <Image
              src="/images/about.jpg"
              alt="Liga de Muaythai"
              width={700}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Texto */}

          <div>

            <h3 className="text-4xl font-bold text-white">
              Construyendo el futuro del Muaythai
            </h3>

            <p className="mt-8 leading-8 text-gray-300">
              {aboutData.description}
            </p>

            {/* Logros */}

            <div className="mt-10 grid gap-4">

              {aboutData.achievements.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">

                    ✓

                  </div>

                  <span className="text-gray-200">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Misión y Visión */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-10">

            <h3 className="text-2xl font-bold text-yellow-400">

              Nuestra Misión

            </h3>

            <p className="mt-6 leading-8 text-gray-300">

              {aboutData.mission}

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-10">

            <h3 className="text-2xl font-bold text-yellow-400">

              Nuestra Visión

            </h3>

            <p className="mt-6 leading-8 text-gray-300">

              {aboutData.vision}

            </p>

          </div>

        </div>

        {/* Valores */}

        <div className="mt-24">

          <h3 className="text-center text-3xl font-bold text-white">

            Valores Institucionales

          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            {aboutData.values.map((value) => (

              <span
                key={value}
                className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-6 py-3 font-semibold text-yellow-400"
              >
                {value}
              </span>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}