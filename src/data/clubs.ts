export interface Club {
  id: number;
  name: string;
  city: string;
  coach: string;
  description: string;
  image: string;
  whatsapp: string;
}

export const clubs: Club[] = [
  {
    id: 1,
    name: "Kuntur Muaythai",
    city: "Bogotá D.C.",
    coach: "Juan Pérez",
    description:
      "Club enfocado en la formación integral de atletas de Muaythai para competencias nacionales e internacionales.",
    image: "/images/clubs/club-1.jpg",
    whatsapp: "#",
  },
  {
    id: 2,
    name: "Warrior Muaythai",
    city: "Soacha",
    coach: "Carlos Rodríguez",
    description:
      "Escuela deportiva dedicada al desarrollo técnico, físico y competitivo de nuevos practicantes.",
    image: "/images/clubs/club-2.jpg",
    whatsapp: "#",
  },
  {
    id: 3,
    name: "Golden Nak Muay",
    city: "Facatativá",
    coach: "Andrés Gómez",
    description:
      "Club afiliado orientado a la promoción del deporte y la preparación de atletas de alto rendimiento.",
    image: "/images/clubs/club-3.jpg",
    whatsapp: "#",
  },
];