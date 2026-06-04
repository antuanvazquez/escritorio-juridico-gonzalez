import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(184,148,63,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,22,40,0.4)_100%)]" />

      <div className="relative mx-auto max-w-6xl section-padding !pb-12 pt-24 sm:!pb-16 sm:pt-28 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_340px] lg:gap-14 xl:grid-cols-[1fr_380px]">
          {/* Portrait — first on mobile for immediate credibility */}
          <div className="order-first mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:order-last lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-light shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/jorge-gonzalez.webp"
                  alt={`Retrato de ${site.lawyer}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 280px, 380px"
                  className="object-cover object-[center_12%]"
                />
              </div>
              <div className="border-t border-white/10 bg-navy-light/90 px-5 py-4 text-center">
                <p className="font-serif text-lg font-semibold text-white">
                  {site.lawyer}
                </p>
                <p className="mt-1 text-xs text-gold-light">
                  Abogado · {site.university}
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-last text-center lg:order-first lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              {site.location}
            </p>
            <p className="mt-4 font-serif text-sm font-medium text-white/60 sm:text-base">
              Escritorio Jurídico
            </p>
            <h1 className="mt-1 font-serif text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              González & Asociados
            </h1>
            <p className="mt-4 text-lg text-gold-light sm:text-xl">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/80">
                Titulado {site.graduationYear}
              </span>
              <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/80">
                Valencia, Carabobo
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/70 lg:mx-0 lg:text-base">
              Asesoría jurídica clara y cercana. Atención a familias,
              emprendedores y venezolanos en el exterior.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappUrl(
                  "Hola Abog. González, deseo consultar sobre sus servicios."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Consultar por WhatsApp
              </a>
              <a href="#servicios" className="btn-secondary w-full sm:w-auto">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
