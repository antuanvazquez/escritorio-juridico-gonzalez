import { preguntasFrecuentes } from "@/lib/faq";
import { site } from "@/lib/site";

export function getStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.siteUrl,
      inLanguage: "es-VE",
      description:
        "Trámites legales y asesoría jurídica en Valencia, Estado Carabobo, Venezuela.",
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: site.name,
      url: site.siteUrl,
      inLanguage: "es-VE",
      description:
        "Asesoría jurídica en Valencia: divorcio, registro de empresas, protección familiar y trámites legales para venezolanos en el exterior.",
      telephone: site.whatsappDisplay,
      email: site.email,
      image: `${site.siteUrl}/og-image.jpg`,
      areaServed: [
        {
          "@type": "City",
          name: "Valencia",
          containedInPlace: {
            "@type": "State",
            name: "Carabobo",
          },
        },
        {
          "@type": "Country",
          name: "Venezuela",
        },
      ],
      employee: {
        "@type": "Person",
        name: site.lawyerFull,
        jobTitle: "Abogado",
        worksFor: {
          "@type": "LegalService",
          name: site.name,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "es-VE",
      mainEntity: preguntasFrecuentes.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
