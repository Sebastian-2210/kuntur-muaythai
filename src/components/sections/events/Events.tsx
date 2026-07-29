import { CalendarDays, Clock3, MapPin } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section
      id="eventos"
      className="bg-black py-24"
    >
      <Container>
        <SectionTitle
          title="Próximos Eventos"
          subtitle="Mantente informado sobre competencias, seminarios y actividades oficiales de la Liga."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40"
            >
              <div className="flex items-center gap-3 text-yellow-400">
                <CalendarDays size={22} />
                <span className="font-semibold">{event.date}</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {event.title}
              </h3>

              <p className="mt-5 text-gray-300">
                {event.description}
              </p>

              <div className="mt-8 space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {event.city}
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={18} />
                  {event.time}
                </div>
              </div>

              <CTAButton
                href={event.link}
                className="mt-8 w-full"
              >
                Más información
              </CTAButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}