import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum – Vollmer Objektmöbel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Impressum</h1>

          <h2 className="font-display text-2xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="font-serif text-muted-foreground space-y-1 mb-10">
            <p className="font-display text-foreground">Vollmer Objektmöbel</p>
            <p>Maurice Vollmer</p>
            <p>Schusters Garten 4</p>
            <p>50374 Erftstadt</p>
            <p>Deutschland</p>
          </div>

          <h2 className="font-display text-2xl text-foreground mb-4">Kontakt</h2>
          <div className="font-serif text-muted-foreground space-y-2 mb-10">
            <p>Tel: <a href="tel:+491788576150" className="text-primary hover:underline">+49 178 8576150</a></p>
            <p>E-Mail: <a href="mailto:office@vollmer-objektmoebel.com" className="text-primary hover:underline">office@vollmer-objektmoebel.com</a></p>
            <p>Web: <a href="https://www.vollmer-objektmoebel.com" className="text-primary hover:underline">www.vollmer-objektmoebel.com</a></p>
          </div>

          <h2 className="font-display text-2xl text-foreground mb-4">Umsatzsteuer-ID</h2>
          <p className="font-serif text-muted-foreground">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <span className="text-foreground font-medium">DE 123513601</span>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Impressum;
