"use client";

import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#exterior", label: "Desde el exterior" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-white">
              González & Asociados
            </p>
            <p className="text-xs text-gold">Valencia, Carabobo</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl("Hola, me gustaría recibir asesoría legal.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:bg-yellow"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-4 py-8 text-center text-sm text-white/70 sm:px-6">
      <p className="font-semibold text-white">{site.name}</p>
      <p className="mt-1">{site.lawyer} · {site.location}</p>
      <p className="mt-4 text-xs">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
