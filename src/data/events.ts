export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  city: string;
  description: string;
  link: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Campeonato Departamental",
    date: "15 Agosto 2026",
    time: "8:00 AM",
    city: "Bogotá D.C.",
    description:
      "Competencia oficial organizada por la Liga de Muaythai de Cundinamarca.",
    link: "#",
  },
  {
    id: 2,
    title: "Seminario Nacional",
    date: "20 Septiembre 2026",
    time: "9:00 AM",
    city: "Soacha",
    description:
      "Capacitación dirigida a entrenadores y deportistas afiliados.",
    link: "#",
  },
  {
    id: 3,
    title: "Festival Deportivo",
    date: "18 Octubre 2026",
    time: "10:00 AM",
    city: "Facatativá",
    description:
      "Encuentro deportivo para promover el Muaythai en el departamento.",
    link: "#",
  },
];