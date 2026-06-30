export interface DocumentItem {
  id: number;
  title: string;
  description: string;
  file: string;
}

export const documents: DocumentItem[] = [
  {
    id: 1,
    title: "Resolución de Reconocimiento Deportivo",
    description:
      "Documento oficial emitido por Indeportes Cundinamarca.",
    file: "#",
  },
  {
    id: 2,
    title: "Registro Único Tributario (RUT)",
    description:
      "Documento tributario oficial de la Liga.",
    file: "#",
  },
  {
    id: 3,
    title: "Estatutos",
    description:
      "Normativa y reglamento institucional.",
    file: "#",
  },
];