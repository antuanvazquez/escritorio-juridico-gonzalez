export const site = {
  name: "Escritorio Jurídico González & Asociados",
  siteUrl: "https://www.tramiteslegalesvalencia.com",
  lawyer: "Abog. Jorge González",
  lawyerFull: "Jorge Elias González Exarcheas",
  tagline: "La solución legal a tu alcance",
  location: "Valencia, Estado Carabobo",
  whatsapp: "584124436264",
  whatsappDisplay: "+58 412-4436264",
  email: "exarcheas16@gmail.com",
  appointmentNote:
    "Las consultas presenciales se atienden con cita previa. Escríbenos por WhatsApp para agendar.",
  university: "Universidad José Antonio Páez",
  graduationYear: "2012",
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
