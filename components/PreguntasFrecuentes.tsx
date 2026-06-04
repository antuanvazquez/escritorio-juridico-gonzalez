import { SectionHeading } from "@/components/SectionHeading";
import { preguntasFrecuentes } from "@/lib/faq";

export function PreguntasFrecuentes() {
  return (
    <section id="preguntas-frecuentes" className="bg-gray-light section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Información útil"
          title="Preguntas frecuentes"
          description="Respuestas a consultas comunes sobre trámites legales en Valencia, Estado Carabobo."
        />
        <dl className="mt-10 space-y-4">
          {preguntasFrecuentes.map((item) => (
            <div
              key={item.question}
              className="card-elevated p-5 sm:p-6"
            >
              <dt className="font-serif text-base font-semibold text-navy sm:text-lg">
                {item.question}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-[15px]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
