import { Globe } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function AbroadBanner() {
  return (
    <section id="exterior" className="bg-yellow px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Globe className="h-12 w-12 text-navy" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Si te encuentras en el extranjero, podemos ayudarte
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-navy/80">
          Muchos de nuestros clientes viven fuera de Venezuela y necesitan
          orientación para trámites de divorcio, protección familiar, registro
          de empresas y otros asuntos legales. Te acompañamos con comunicación
          clara y seguimiento por WhatsApp.
        </p>
        <a
          href={whatsappUrl(
            "Hola, me encuentro en el extranjero y necesito asesoría legal en Venezuela."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-navy px-6 py-3 text-base font-semibold text-white transition hover:bg-navy/90"
        >
          Consultar desde el exterior
        </a>
      </div>
    </section>
  );
}
