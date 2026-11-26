import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  { q: "Habt ihr ein Küchenstudio in Bonn?", a: "Unser Standort ist in Erftstadt, aber wir sind regelmäßig in Bonn und Umgebung unterwegs — für Vor-Ort-Aufmaß, Beratung und schlüsselfertige Montage." },
  { q: "Plant ihr auch für Bad Godesberg, Beuel oder den Rhein-Sieg-Kreis?", a: "Ja, wir sind im gesamten Bonner Stadtgebiet und im Rhein-Sieg-Kreis unterwegs — von Siegburg über Sankt Augustin bis nach Bad Honnef, soweit es sich um größere Projekte oder günstig gelegene Privatkunden handelt." },
  { q: "Wie läuft die Küchenplanung in Bonn ab?", a: "Nach einem ersten Telefonat vereinbaren wir einen Vor-Ort-Termin bei Ihnen. Dort nehmen wir das Aufmaß, klären Ihre Wünsche und erstellen eine 3D-Planung. Nach Freigabe bestellen wir die Küche und montieren sie schlüsselfertig." },
  { q: "Übernehmt ihr auch die Koordination von Handwerkern?", a: "Ja, wir koordinieren auf Wunsch alle Gewerke — Elektrik, Sanitär, Maler, Fliesenleger — aus unserem Netzwerk und stellen einen Bauzeitenplan auf." },
  { q: "Plant ihr auch Objektküchen für Praxen in Bonn?", a: "Ja, wir planen und montieren Teeküchen und Personalküchen für Arztpraxen, Kanzleien und Büros in Bonn — robust, hygienisch und langlebig." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Küchenstudio Bonn — Vor-Ort-Aufmaß, 3D-Planung, schlüsselfertig",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Bonn",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bonn",
        "addressCountry": "DE"
      }
    },
    { "@type": "City", "name": "Bad Godesberg" },
    { "@type": "City", "name": "Beuel" },
    { "@type": "AdministrativeArea", "name": "Rhein-Sieg-Kreis" }
  ],
  "serviceType": "Küchenplanung, Küchenmontage, 3D-Visualisierung",
  "description": "Küchenstudio für Bonn: Vor-Ort-Aufmaß, 3D-Planung, Markenküchen und schlüsselfertige Montage aus Erftstadt."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vollmer-objektmoebel.com/" },
    { "@type": "ListItem", "position": 2, "name": "Küchenstudio Bonn", "item": "https://vollmer-objektmoebel.com/kuechenstudio-bonn" }
  ]
};

const KuechenstudioBonn = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Küchenstudio Bonn | Vor-Ort-Aufmaß, 3D-Planung, schlüsselfertig — Vollmer"
        description="Küchenstudio für Bonn: Vor-Ort-Aufmaß, 3D-Planung, Markenküchen von Nobilia/Häcker/Next125, Einbaugeräte Siemens/Miele/NEFF/BORA — aus Erftstadt."
        path="/kuechenstudio-bonn"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Küchenstudio Bonn
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            Vor-Ort-Aufmaß, 3D-Planung und schlüsselfertige Montage — aus Erftstadt für Bonn
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Sie suchen ein Küchenstudio in Bonn, das zu Ihnen kommt, statt Sie ins Möbelhaus zu locken? Wir planen und montieren Küchen für Bonner Privathaushalte, Praxen und Unternehmen — von der Bonner Innenstadt über Bad Godesberg und Beuel bis in den Rhein-Sieg-Kreis.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Unser Standort ist in Erftstadt, aber für Sie spielt das keine Rolle: Wir kommen zu Ihnen, nehmen das exakte Aufmaß in Ihrem Zuhause oder Ihrer Praxis, entwickeln eine 3D-Küchenplanung und montieren die Küche schlüsselfertig — inklusive aller Elektro- und Sanitäranschlüsse.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Persönliche Vor-Ort-Planung statt Ausstellungsküchen
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Viele Küchenstudios in Bonn setzen auf große Ausstellungsflächen. Das wirkt eindrucksvoll — aber Ihre Küche steht nicht in einer Ausstellungshalle, sondern in Ihrer Bonner Gründerzeitwohnung, Ihrem Reihenhaus in Poppelsdorf oder Ihrem Neubau in Duisdorf.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Wir kommen direkt zu Ihnen, sehen Ihren echten Raum mit seinen echten Lichtverhältnissen und Anschlüssen — und planen eine Küche, die perfekt passt. Das spart Ihnen die Fahrten ins Ausstellungshaus und uns die Kosten für teure Showrooms — die wir an Sie weitergeben.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Unsere Leistungen für Bonn und Umgebung
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Kostenfreies Erstgespräch und Vor-Ort-Aufmaß in Bonn und Rhein-Sieg-Kreis</li>
            <li>3D-Küchenplanung — Ihre Küche vor dem Kauf realistisch erleben</li>
            <li>Markenküchen von Nobilia, Häcker, Next125</li>
            <li>Einbaugeräte von Siemens, Miele, NEFF, BORA</li>
            <li>Arbeitsplatten: Granit, Quarzkomposit, Keramik, Melaminharz</li>
            <li>Spritzschutz aus Glas oder Naturstein</li>
            <li>Komplette Montage inkl. Elektro- und Sanitäranschluss</li>
            <li>Koordination weiterer Gewerke (Maler, Fliesenleger, Elektriker)</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Küchen für Bonner Praxen und Büros
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Neben privaten Küchen planen und montieren wir auch Objektküchen für Bonner Praxen, Kanzleien und Unternehmen — Teeküchen für Büros, Personalküchen für Arztpraxen, robuste Küchen für Coworking-Spaces.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Objektküchen planen wir mit Fokus auf Langlebigkeit, einfache Reinigung und hohe Nutzungsintensität. Mehr dazu auf unserer Seite <Link to="/teekueche-buero" className="text-primary hover:underline">Teeküche & Büroküche</Link> und <Link to="/praxiseinrichtung" className="text-primary hover:underline">Praxiseinrichtung</Link>.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Typische Bonner Küchenprojekte
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Gründerzeitwohnungen:</strong> Hohe Decken, Stuck, oft verwinkelte Grundrisse — wir planen Küchen, die zum Charakter des Hauses passen.
            </p>
            <p>
              <strong className="text-foreground">Reihenhäuser:</strong> Von Poppelsdorf bis Duisdorf — oft enge Küchen, die clever geplant werden wollen. Wir holen das Maximum aus Ihrem Raum.
            </p>
            <p>
              <strong className="text-foreground">Neubauwohnungen:</strong> Offene Wohnküchen mit Kochinsel — hier können wir das volle Programm zeigen: große Quarz-Arbeitsplatten, Miele-Geräte, BORA-Kochfelder mit integriertem Dunstabzug.
            </p>
            <p>
              <strong className="text-foreground">Praxis- und Büroküchen:</strong> Von der kleinen Teeküche für eine Zahnarztpraxis bis zur Coworking-Küche — wir planen langlebig und funktional.
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zu unserem Küchenstudio für Bonn
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
              <Link to="/kuechenstudio-bruehl" className="text-primary hover:underline">Küchenstudio Brühl</Link>
              {" · "}
              <Link to="/kuechen-rhein-erft-kreis" className="text-primary hover:underline">Küchen Rhein-Erft-Kreis</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default KuechenstudioBonn;
