import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";

const Kontakt = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Kontakt | Vollmer Objektmöbel Erftstadt — Beratungstermin"
        description="Kontakt zum Küchenstudio Vollmer in Erftstadt: Telefon 0178 8576150, office@vollmer-objektmoebel.com. Unverbindliche Beratung für Kunden in Köln, Bonn, Brühl."
        path="/kontakt"
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Kontakt</h1>
          <p className="font-serif text-lg text-muted-foreground mb-10">
            Unverbindliche Beratung vereinbaren — persönlich, telefonisch oder per Formular. Wir melden uns zeitnah zurück.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 font-serif">
              <div>
                <h2 className="font-display text-xl text-foreground mb-2">Vollmer Objektmöbel</h2>
                <p className="text-muted-foreground">Maurice Vollmer</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-muted-foreground">
                  <p>Schusters Garten 4</p>
                  <p>50374 Erftstadt</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-muted-foreground">
                  <a href="tel:+491788576150" className="block hover:text-primary">0178 8576150</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:office@vollmer-objektmoebel.com" className="text-primary hover:underline break-all">office@vollmer-objektmoebel.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mo–Fr 08:00–17:00 Uhr</p>
                  <p className="text-sm">Termine nach Vereinbarung</p>
                </div>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  title="Standort Vollmer Objektmöbel"
                  src="https://www.google.com/maps?q=Schusters+Garten+4,+50374+Erftstadt&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-foreground mb-4">Ihre Anfrage</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Kontakt;