import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { site, whatsappUrl } from "@/lib/site";

const channels = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: whatsappUrl(),
    external: true,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: site.location,
    href: site.mapsUrl,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-navy section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contáctanos"
          title="¿Necesitas asesoría legal?"
          description="Escríbenos por WhatsApp o correo. Te respondemos con la mayor brevedad posible."
          light
        />

        <div className="mt-10 space-y-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-gold/30 hover:bg-white/8 sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                <channel.icon className="h-5 w-5 text-gold-light" />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {channel.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-white sm:text-base">
                  {channel.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-white/40 sm:text-sm">
          {site.address}
        </p>
      </div>
    </section>
  );
}
