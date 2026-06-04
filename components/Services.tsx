import {
  Building2,
  HeartHandshake,
  Scale,
  Briefcase,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Scale,
    title: "Asesoría jurídica corporativa y general",
    items: [
      "Derecho civil",
      "Derecho mercantil",
      "Derecho notarial",
      "Derecho laboral",
      "Derecho penal",
      "Propiedad horizontal",
      "Permisología y más",
    ],
  },
  {
    icon: Building2,
    title: "Registro y formalización de empresas",
    items: [
      "PYMES",
      "Firma personal",
      "Compañía anónima",
      "Sellado de libros",
      "Actualización de documentos societarios",
    ],
  },
  {
    icon: Briefcase,
    title: "Divorcio y derecho de familia",
    items: [
      "Divorcio por desafecto",
      "Divorcio por mutuo acuerdo",
      "Divorcio contencioso",
      "Régimen de convivencia",
      "Liquidación de bienes y más",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Protección y derecho de familia",
    items: [
      "Curatelas",
      "Permisos de viaje",
      "Cesión de la patria potestad",
      "Colocación familiar",
      "Privación de la patria potestad",
      "Obligación de manutención",
      "Régimen de convivencia y más",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-cream section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Áreas de práctica"
          title="Nuestros servicios"
          description="Asesoría legal para familias y emprendedores en Valencia y el estado Carabobo."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-elevated group border-l-4 border-l-gold p-6 sm:p-7"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5 transition group-hover:bg-navy group-hover:text-gold-light">
                  <service.icon
                    className="h-5 w-5 text-gold-dark transition group-hover:text-gold-light"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="pt-1 font-serif text-lg font-semibold leading-snug text-navy">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2.5 pl-[3.75rem]">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-navy/75"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
