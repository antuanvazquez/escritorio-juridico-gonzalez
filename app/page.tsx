import { Header, Footer } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AbroadBanner } from "@/components/AbroadBanner";
import { About } from "@/components/About";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AbroadBanner />
        <About />
        <PreguntasFrecuentes />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
