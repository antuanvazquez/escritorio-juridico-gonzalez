import { site } from "@/lib/site";

export const preguntasFrecuentes = [
  {
    question: "¿Atienden clientes fuera de Venezuela?",
    answer:
      "Sí. Muchos de nuestros clientes viven en el exterior y necesitan orientación para trámites de divorcio, protección familiar, registro de empresas y otros asuntos legales en Venezuela. Te acompañamos por WhatsApp con comunicación clara durante todo el proceso.",
  },
  {
    question: "¿Qué tipos de divorcio tramitan en Valencia?",
    answer:
      "Tramitamos divorcio por desafecto, por mutuo acuerdo y contencioso, además de régimen de convivencia y liquidación de bienes, entre otros asuntos de derecho de familia en Valencia, Estado Carabobo.",
  },
  {
    question: "¿Cómo registro una empresa en Carabobo?",
    answer:
      "Asesoramos en el registro y formalización de PYMES, firma personal, compañía anónima, sellado de libros y actualización de documentos societarios, según los requisitos vigentes en Venezuela.",
  },
  {
    question: "¿Atienden consultas presenciales?",
    answer: `Atendemos en ${site.location}. Las reuniones con el abogado requieren cita previa; escríbenos por WhatsApp al ${site.whatsappDisplay} para coordinar día y hora.`,
  },
  {
    question: "¿Cómo agendo una consulta?",
    answer: `Puedes escribirnos por WhatsApp al ${site.whatsappDisplay} o por correo a ${site.email}. Te respondemos con la mayor brevedad posible.`,
  },
  {
    question: "¿Qué trámites legales realizan en Valencia?",
    answer:
      "Ofrecemos asesoría jurídica corporativa y general, registro de empresas, divorcio, protección familiar, curatelas, permisos de viaje, patria potestad, manutención y más áreas del derecho civil, mercantil, laboral y notarial.",
  },
] as const;
