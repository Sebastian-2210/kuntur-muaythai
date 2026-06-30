import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import { documents } from "@/data/documents";

export default function Documents() {
  return (
    <section
      id="documentacion"
      className="bg-zinc-950 py-24"
    >
      <Container>

        <SectionTitle
          title="Documentación Oficial"
          subtitle="Consulta y descarga los documentos institucionales de la Liga de Muaythai de Cundinamarca."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {documents.map((document) => (

            <Card key={document.id}>

              <div className="mb-4 text-5xl">
                📄
              </div>

              <h3 className="text-xl font-bold text-white">
                {document.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {document.description}
              </p>

              <CTAButton
                href={document.file}
                className="mt-8 w-full"
              >
                Ver documentos
              </CTAButton>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}