import Image from "next/image";
import { MapPin, User, MessageCircle } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { clubs } from "@/data/clubs";

export default function Clubs() {
  return (
    <section
      id="clubes"
      className="bg-black py-24"
    >
      <Container>
        <SectionTitle
          title="Clubes Afiliados"
          subtitle="Conoce algunos de los clubes que hacen parte de la Liga de Muaythai de Cundinamarca."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {clubs.map((club) => (
            <article
              key={club.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {club.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-gray-400">
                    <MapPin size={18} />
                    <span>{club.city}</span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-gray-400">
                    <User size={18} />
                    <span>{club.coach}</span>
                  </div>
                </div>

                <p className="leading-7 text-gray-300">
                  {club.description}
                </p>

                <a
                  href={club.whatsapp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
                >
                  <MessageCircle size={20} />
                  Contactar Club
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}