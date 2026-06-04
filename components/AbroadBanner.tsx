import { Globe } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function AbroadBanner() {
  return (
    <section
      id="exterior"
      className="relative overflow-hidden bg-navy-light section-padding"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,148,63,0.12),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
          <Globe className="h-7 w-7 text-gold-light" aria-hidden="true" />
        </div>
        <h2 className="font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
          Si te encuentras en el extranjero, podemos ayudarte
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">
          Muchos de nuestros clientes viven fuera de Venezuela y necesitan
          orientación para trámites de divorcio, protección familiar, registro
          de empresas y otros asuntos legales.
        </p>
        <a
          href={whatsappUrl(
            "Hola, me encuentro en el extranjero y necesito asesoría legal en Venezuela."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-2"
        >
          Consultar desde el exterior
        </a>
      </div>
    </section>
  );
}
