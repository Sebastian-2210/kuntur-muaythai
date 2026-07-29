import Image from "next/image";
import { Search } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          title="Galería"
          subtitle="Revive algunos de los mejores momentos de nuestra Liga."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-72 overflow-hidden rounded-3xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/50">
                <Search className="h-10 w-10 scale-0 text-white transition-transform duration-300 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CTAButton href="#contacto">
            Ver galería completa
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}