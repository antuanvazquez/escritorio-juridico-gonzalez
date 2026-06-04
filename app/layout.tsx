import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const title = `Abogado en Valencia, Carabobo | ${site.name}`;
const description =
  "Asesoría jurídica en Valencia: divorcio, registro de empresas, protección familiar y más. Atención a venezolanos en el exterior. Consulta por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://escritorio-juridico-gonzalez.vercel.app"),
  openGraph: {
    title,
    description,
    locale: "es_VE",
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.lawyer} - ${site.location}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-VE"
      className={`${inter.variable} ${sourceSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
