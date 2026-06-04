import { Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-navy px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Contacto</h2>
        <p className="mt-4 text-base text-white/70">
          Escríbenos por WhatsApp o correo. Te respondemos con la mayor brevedad
          posible.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/50 hover:bg-white/10"
          >
            <Phone className="h-8 w-8 text-gold" />
            <span className="text-sm font-semibold text-white">WhatsApp</span>
            <span className="text-sm text-white/70">{site.whatsappDisplay}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/50 hover:bg-white/10"
          >
            <Mail className="h-8 w-8 text-gold" />
            <span className="text-sm font-semibold text-white">Correo</span>
            <span className="text-sm text-white/70">{site.email}</span>
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/50 hover:bg-white/10"
          >
            <MapPin className="h-8 w-8 text-gold" />
            <span className="text-sm font-semibold text-white">Ubicación</span>
            <span className="text-sm text-white/70">{site.location}</span>
          </a>
        </div>
        <p className="mt-8 text-sm text-white/50">{site.address}</p>
      </div>
    </section>
  );
}
