import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import { contactData } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-black py-24"
    >
      <Container>

        <SectionTitle
          title={contactData.title}
          subtitle={contactData.subtitle}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Información */}

          <div>

            <h3 className="text-2xl font-bold text-white">
              Información de contacto
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm uppercase tracking-widest text-yellow-400">
                  Correo
                </p>

                <p className="mt-2 text-gray-300">
                  {contactData.email}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-yellow-400">
                  Teléfono
                </p>

                <p className="mt-2 text-gray-300">
                  {contactData.phone}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-yellow-400">
                  Dirección
                </p>

                <p className="mt-2 text-gray-300">
                  {contactData.address}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-yellow-400">
                  Horario
                </p>

                <p className="mt-2 text-gray-300">
                  {contactData.schedule}
                </p>
              </div>

            </div>

          </div>

          {/* Formulario */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Asunto"
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <textarea
              rows={6}
              placeholder="Escribe tu mensaje..."
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <CTAButton href="#">
              Enviar mensaje
            </CTAButton>

          </form>

        </div>

      </Container>
    </section>
  );
}