import Image from "next/image";
import { GraduationCap, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre-mi" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/jorge-gonzalez.webp"
            alt={`Retrato de ${site.lawyer}`}
            width={400}
            height={400}
            className="h-80 w-80 rounded-2xl border-2 border-gold/30 object-cover object-top shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Sobre mí</h2>
          <p className="mt-6 text-base leading-relaxed text-navy/80">
            Abogado egresado de la {site.university} ({site.graduationYear}).
            Atiendo asuntos legales en Valencia, Estado Carabobo, con enfoque
            claro, cercano y orientado a resolver trámites de forma práctica.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/80">
            Mi experiencia también incluye gestión comercial y atención al
            cliente, lo que me permite acompañarte con comunicación directa
            durante todo el proceso.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-navy/80">
                Abogado titulado · {site.university}, {site.graduationYear}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-navy/80">
                Comunicación clara, liderazgo y acompañamiento personalizado
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-navy/80">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
