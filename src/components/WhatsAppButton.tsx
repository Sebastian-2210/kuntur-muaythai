"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "573000000000"; // Cambiar por el número oficial

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}