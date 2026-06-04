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
  address:
    "Av. Las Ferias, entre Díaz Moreno y Monte de Oca, Edificio Don Guillermo, Torre A, piso 3, apt. 3-1, Valencia, Estado Carabobo",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Las+Ferias+Valencia+Carabobo+Venezuela",
  university: "Universidad José Antonio Páez",
  graduationYear: "2012",
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
