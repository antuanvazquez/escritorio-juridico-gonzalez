import { GraduationCap, MessageCircle, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const credentials = [
  {
    icon: GraduationCap,
    label: "Formación académica",
    value: `Abogado titulado · ${site.university}, ${site.graduationYear}`,
  },
  {
    icon: MessageCircle,
    label: "Enfoque de trabajo",
    value:
      "Comunicación clara, liderazgo y acompañamiento personalizado en cada caso",
  },
  {
    icon: MapPin,
    label: "Oficina",
    value: site.address,
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="bg-white section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Conoce al abogado"
          title="Sobre mí"
          align="left"
        />
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-navy/75 sm:text-base">
          <p>
            Abogado egresado de la {site.university} ({site.graduationYear}).
            Atiendo asuntos legales en Valencia, Estado Carabobo, con enfoque
            claro, cercano y orientado a resolver trámites de forma práctica.
          </p>
          <p>
            Mi experiencia también incluye gestión comercial y atención al
            cliente, lo que me permite acompañarte con comunicación directa
            durante todo el proceso.
          </p>
        </div>

        <ul className="mt-10 space-y-4">
          {credentials.map((item) => (
            <li
              key={item.label}
              className="card-elevated flex gap-4 p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream">
                <item.icon className="h-5 w-5 text-gold-dark" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/80">
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
