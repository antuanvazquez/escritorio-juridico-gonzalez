import {
  Building2,
  HeartHandshake,
  Scale,
  Briefcase,
} from "lucide-react";

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
    <section id="servicios" className="bg-gray-light px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-base text-navy/70">
            Áreas de práctica basadas en las necesidades reales de familias y
            emprendedores en Valencia y el estado Carabobo.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-navy p-3">
                <service.icon className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-navy">{service.title}</h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-navy/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
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
