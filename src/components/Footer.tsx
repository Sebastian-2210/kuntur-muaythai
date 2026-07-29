import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/Container";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clubes", href: "#clubes" },
  { label: "Galería", href: "#galeria" },
  { label: "Eventos", href: "#eventos" },
  { label: "Documentación", href: "#documentacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-black text-yellow-400">
              KUNTUR
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Liga Oficial de Muaythai de Cundinamarca dedicada al
              fortalecimiento del deporte, la formación de atletas y la
              promoción de competencias oficiales.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Navegación
            </h3>

            <nav className="space-y-3">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-400 transition hover:text-yellow-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Contacto
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Cundinamarca, Colombia
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                contacto@kunturmuaythai.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +57 300 000 0000
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2026 Liga de Muaythai de Cundinamarca. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}