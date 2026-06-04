import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,39,0.15),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gold">
            {site.location}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl text-yellow">{site.tagline}</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
            Asesoría jurídica clara y cercana en Valencia. Atención a familias,
            emprendedores y venezolanos en el exterior que necesitan resolver
            trámites legales con confianza.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Hola Abog. González, deseo consultar sobre sus servicios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-semibold text-navy transition hover:bg-yellow"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-gold to-yellow opacity-60 blur-sm" />
            <Image
              src="/jorge-gonzalez.webp"
              alt={`Retrato de ${site.lawyer}`}
              width={320}
              height={320}
              priority
              className="relative h-72 w-72 rounded-full border-4 border-gold object-cover object-top sm:h-80 sm:w-80"
            />
            <p className="mt-4 text-center text-lg font-semibold text-white">
              {site.lawyer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
