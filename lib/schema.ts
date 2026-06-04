import { preguntasFrecuentes } from "@/lib/faq";
import { site } from "@/lib/site";

const geoCoordinates = {
  latitude: 10.1706,
  longitude: -67.9981,
};

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
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Av. Las Ferias, entre Díaz Moreno y Monte de Oca, Edificio Don Guillermo, Torre A, piso 3, apt. 3-1",
        addressLocality: "Valencia",
        addressRegion: "Carabobo",
        addressCountry: "VE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: geoCoordinates.latitude,
        longitude: geoCoordinates.longitude,
      },
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
