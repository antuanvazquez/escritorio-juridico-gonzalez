"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#exterior", label: "Desde el exterior" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-navy/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:px-6">
          <a
            href="#"
            className="flex min-w-0 items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate font-serif text-sm font-semibold text-white sm:text-base">
                González & Asociados
              </p>
              <p className="hidden text-[11px] text-white/50 sm:block">
                Valencia, Carabobo
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={whatsappUrl("Hola, me gustaría recibir asesoría legal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !min-h-10 !px-4 !py-2 !text-xs sm:inline-flex"
            >
              Consultar
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute inset-x-0 top-[61px] border-b border-white/10 bg-navy px-5 py-6 shadow-2xl">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3.5 text-base text-white/90 transition hover:bg-white/8 hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl("Hola, me gustaría recibir asesoría legal.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Consultar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy px-5 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-serif text-lg font-semibold text-white">{site.name}</p>
        <p className="mt-2 text-sm text-white/60">
          {site.lawyer} · {site.location}
        </p>
        <div className="mt-4 space-y-1 text-sm leading-relaxed text-white/50">
          <p>{site.appointmentNote}</p>
          <p>
            <a
              href={`tel:${site.whatsapp}`}
              className="transition hover:text-gold-light"
            >
              {site.whatsappDisplay}
            </a>
            {" · "}
            <a
              href={`mailto:${site.email}`}
              className="transition hover:text-gold-light"
            >
              {site.email}
            </a>
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-md border-t border-white/8 pt-6">
          <p className="text-xs leading-relaxed text-white/40">
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
