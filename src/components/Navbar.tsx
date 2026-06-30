"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Container from "./Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-white"
          >
            KUNTUR
            <span className="ml-2 text-yellow-400">
              MUAYTHAI
            </span>
          </Link>

          {/* Desktop */}

          <nav className="hidden gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/10 py-5 md:hidden">

            <div className="flex flex-col gap-5">

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-yellow-400"
                >
                  {item.name}
                </a>
              ))}

            </div>

          </nav>
        )}
      </Container>
    </header>
  );
}