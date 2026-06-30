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
      "Consulta y descarga la Resolución de Reconocimiento Deportivo emitida para la Liga de Muaythai de Cundinamarca.",
    file: "https://drive.google.com/drive/folders/1E8qzZpn970J9XN0agvO6Ts5kxYPfzHGU",
  },
  {
    id: 2,
    title: "DIAN 2025",
    description:
      "Documentación tributaria correspondiente al año 2025.",
    file: "https://drive.google.com/drive/folders/1ER4BTJdLEfDzhN0tcaN4yoSNLnRPNAYd",
  },
  {
    id: 3,
    title: "DIAN 2026",
    description:
      "Documentación tributaria correspondiente al año 2026.",
    file: "https://drive.google.com/drive/folders/1y21rrxNundUzJa6zlRk1W17e1v6Y6d7C",
  },
];