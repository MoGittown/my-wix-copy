import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  { q: "Kommt ihr auch nach Hürth, Kerpen, Frechen oder Wesseling?", a: "Ja, der gesamte Rhein-Erft-Kreis gehört zu unserem Servicegebiet. Wir sind regelmäßig in Hürth, Kerpen, Frechen, Wesseling, Brühl und natürlich in Erftstadt vor Ort." },
  { q: "Wie läuft die Küchenplanung im Rhein-Erft-Kreis ab?", a: "Nach einem ersten Telefonat vereinbaren wir einen Vor-Ort-Termin bei Ihnen zu Hause. Dort nehmen wir das exakte Aufmaß, besprechen Ihre Wünsche und erstellen anschließend eine 3D-Küchenplanung. Nach Ihrer Freigabe bestellen wir die Küche und montieren sie schlüsselfertig." },
  { q: "Mit welchen Küchenmarken arbeitet ihr?", a: "Wir planen und montieren Küchen von Nobilia, Häcker und Next125. Bei den Einbaugeräten setzen wir auf Siemens, Miele, NEFF und BORA." },
  { q: "Was unterscheidet euch von großen Küchenstudios mit Ausstellung?", a: "Wir kommen direkt zu Ihnen und planen die Küche in Ihrem echten Raum — nicht in einer künstlichen Ausstellungsfläche. So sehen Sie von Anfang an, wie Ihre Küche tatsächlich wirkt. Außerdem sparen Sie die Kosten für große Showrooms." },
  { q: "Übernehmt ihr auch die Elektro- und Sanitäranschlüsse?", a: "Ja, alle Elektro- und Sanitäranschlüsse werden von unserem Team ausgeführt. Auf Wunsch koordinieren wir auch Maler, Fliesenleger und andere Gewerke aus unserem Netzwerk." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Küchenplanung im Rhein-Erft-Kreis",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business"
  },
  "areaServed": [
    { "@type": "City", "name": "Hürth" },
    { "@type": "City", "name": "Kerpen" },
    { "@type": "City", "name": "Frechen" },
    { "@type": "City", "name": "Wesseling" },
    { "@type": "City", "name": "Erftstadt" },
    { "@type": "City", "name": "Brühl" },
    { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" }
  ],
  "serviceType": "Küchenplanung, Küchenmontage, 3D-Visualisierung",
  "description": "Vor-Ort-Küchenplanung, 3D-Visualisierung und schlüsselfertige Montage im Rhein-Erft-Kreis — mit Markenküchen von Nobilia, Häcker, Next125."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vollmer-objektmoebel.com/" },
    { "@type": "ListItem", "position": 2, "name": "Küchen Rhein-Erft-Kreis", "item": "https://vollmer-objektmoebel.com/kuechen-rhein-erft-kreis" }
  ]
};

const KuechenRheinErftKreis = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Küchenplanung im Rhein-Erft-Kreis | Hürth, Kerpen, Frechen, Erftstadt"
        description="Küchenstudio für den Rhein-Erft-Kreis: Vor-Ort-Planung in Hürth, Kerpen, Frechen, Wesseling, Erftstadt — 3D-Visualisierung, Markenküchen, schlüsselfertige Montage."
        path="/kuechen-rhein-erft-kreis"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Küchenplanung im Rhein-Erft-Kreis
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            Hürth, Kerpen, Frechen, Wesseling, Erftstadt — wir planen und montieren Ihre Küche direkt vor Ort
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Als Küchenstudio in Erftstadt sind wir für Kunden im gesamten Rhein-Erft-Kreis unterwegs — von Hürth über Kerpen und Frechen bis nach Wesseling. Unser besonderer Service: Wir kommen zu Ihnen nach Hause, nehmen dort das exakte Aufmaß und entwickeln eine 3D-Küchenplanung, die Sie schon vor dem Kauf realistisch erleben können.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Sie müssen nicht zu uns ins Ausstellungshaus kommen — wir kommen zu Ihnen. Das spart Ihnen Zeit und ermöglicht es uns, die Küche von Anfang an perfekt auf Ihren echten Raum, Ihre Lichtverhältnisse und Ihre Familie zuzuschneiden. Keine künstliche Ausstellungsfläche, sondern Ihre reale Küche.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Unsere Leistungen für den Rhein-Erft-Kreis
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Kostenfreies Erstgespräch und Vor-Ort-Aufmaß bei Ihnen zu Hause</li>
            <li>3D-Küchenplanung — Ihre neue Küche vor dem Kauf realistisch erleben</li>
            <li>Markenküchen von Nobilia, Häcker, Next125</li>
            <li>Einbaugeräte von Siemens, Miele, NEFF, BORA</li>
            <li>Arbeitsplatten aus Granit, Quarzkomposit, Keramik oder Melaminharz</li>
            <li>Komplette Montage inkl. Elektro- und Sanitäranschluss</li>
            <li>Koordination weiterer Gewerke (Maler, Fliesenleger) aus unserem Netzwerk</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Regelmäßig vor Ort in diesen Städten
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Hürth:</strong> Von Efferen über Alt-Hürth bis Kalscheuren — wir sind regelmäßig in Hürth unterwegs und kennen die typischen Grundrisse der 60er-Jahre-Reihenhäuser ebenso wie moderne Neubauten.
            </p>
            <p>
              <strong className="text-foreground">Kerpen:</strong> Ob Sindorf, Horrem oder die Innenstadt — wir planen Küchen für Privathaushalte und Objekte in ganz Kerpen.
            </p>
            <p>
              <strong className="text-foreground">Frechen:</strong> Königsdorf, Bachem, Buschbell — Frechen gehört ebenso zu unserem Servicegebiet wie alle anderen Orte im Rhein-Erft-Kreis.
            </p>
            <p>
              <strong className="text-foreground">Wesseling:</strong> Keldenich, Urfeld — auch hier sind wir für Ihre Küchenplanung zuverlässig unterwegs.
            </p>
            <p>
              <strong className="text-foreground">Erftstadt:</strong> Unser Standort — hier finden Sie uns, aber Sie müssen nicht zu uns kommen. Wir kommen zu Ihnen.
            </p>
            <p>
              Für <Link to="/kuechenstudio-bruehl" className="text-primary hover:underline">Brühl</Link> haben wir eine eigene Seite, ebenso für größere Projekte in <Link to="/kuechenstudio-koeln" className="text-primary hover:underline">Köln</Link> und <Link to="/kuechenstudio-bonn" className="text-primary hover:underline">Bonn</Link>.
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Warum Vor-Ort-Planung besser ist als Ausstellungsküchen
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Viele Küchenstudios im Rhein-Erft-Kreis setzen auf große Ausstellungsflächen mit 30, 40 oder mehr Musterküchen. Das ist beeindruckend — aber für Ihre konkrete Küche oft wenig hilfreich. Denn Ihre Küche steht nicht in einer 400 m² großen Halle mit perfekter Beleuchtung, sondern in Ihrem Zuhause.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Wir kommen direkt zu Ihnen, messen vor Ort auf, sehen die Lichtverhältnisse, die Bodenbeschaffenheit, die Anschlüsse — und planen die Küche so, dass sie perfekt zu Ihrem echten Raum passt. Das spart Ihnen die Fahrten ins Ausstellungshaus und uns die Kosten für teure Showrooms — die wir an Sie weitergeben können.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zur Küchenplanung im Rhein-Erft-Kreis
          </h2>
          <FaqAccordion items={faqs} />

          <div className="mt-12">
            <CtaBox />
          </div>

          <div className="mt-10 p-6 bg-muted/30 border border-border">
            <p className="font-serif text-sm text-muted-foreground">
              <strong className="text-foreground">Weitere regionale Seiten:</strong>{" "}
              <Link to="/kuechenstudio-erftstadt" className="text-primary hover:underline">Küchenstudio Erftstadt</Link>
              {" · "}
              <Link to="/kuechenstudio-koeln" className="text-primary hover:underline">Küchenstudio Köln</Link>
              {" · "}
              <Link to="/kuechenstudio-bonn" className="text-primary hover:underline">Küchenstudio Bonn</Link>
              {" · "}
              <Link to="/kuechenstudio-bruehl" className="text-primary hover:underline">Küchenstudio Brühl</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default KuechenRheinErftKreis;
