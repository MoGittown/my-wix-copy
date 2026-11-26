import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  {
    q: "Richtet ihr Büros im Rhein-Erft-Kreis, in Köln und Bonn ein?",
    a: "Ja. Wir planen und montieren Büro- und Objekteinrichtungen für Unternehmen, Kanzleien, Coworking-Spaces, Business Clubs und Bauträger in Erftstadt, Hürth, Kerpen, Frechen, Wesseling, Brühl sowie in Köln und Bonn.",
  },
  {
    q: "Plant ihr auch Teeküchen und Büroküchen?",
    a: "Ja. Teeküchen und Büroküchen gehören zu unseren Schwerpunkten — von kompakten Pantries für 10–20 Mitarbeitende bis zu großen Coworking-Küchen für 100+ Personen. Details auf unserer Seite <a href='/teekueche-buero'>Teeküche & Büroküche</a>.",
  },
  {
    q: "Arbeiten Sie mit Architekten und Planern zusammen?",
    a: "Ja. Bei größeren Objektprojekten arbeiten wir regelmäßig mit Architekten und Planern zusammen — inklusive 3D-Planung und Ausschreibungsunterlagen. Die Ausführung begleiten wir über unsere <a href='/projektbegleitung'>Projektbegleitung</a>.",
  },
  {
    q: "Können Sie auch Co-Living und Micro-Apartments ausstatten?",
    a: "Ja. Für Bauträger und Betreiber planen wir skalierbare <a href='/objektmoebel'>Objektmöbel</a> für Co-Living und Micro-Apartments — mit robuster Qualität auch bei größeren Stückzahlen.",
  },
  {
    q: "Wie läuft die Planung ab — und haben Sie einen Showroom?",
    a: "Nein, wir haben keinen Showroom. Wir kommen zu Ihnen vor Ort, nehmen Aufmaß und planen in 3D. Das Erstgespräch und das Aufmaß sind unverbindlich. Termin unter 0178 8576150 oder über das <a href='/kontakt'>Kontaktformular</a>.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Büro- & Objekteinrichtung Rhein-Erft-Kreis, Köln & Bonn",
  provider: {
    "@type": "LocalBusiness",
    name: "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business",
  },
  areaServed: [
    { "@type": "City", name: "Erftstadt" },
    { "@type": "City", name: "Hürth" },
    { "@type": "City", name: "Kerpen" },
    { "@type": "City", name: "Frechen" },
    { "@type": "City", name: "Wesseling" },
    { "@type": "City", name: "Brühl" },
    { "@type": "City", name: "Köln" },
    { "@type": "City", name: "Bonn" },
    { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
  ],
  serviceType:
    "Büroeinrichtung, Coworking-Einrichtung, Teeküche, Empfangstheke, Objektmöbel, Schallschutz",
  description:
    "Büro- und Objekteinrichtung im Rhein-Erft-Kreis sowie in Köln und Bonn: Einzelbüros, Open Space, Meeting-Räume, Empfang, Coworking, Teeküchen, 3D-Planung und schlüsselfertige Montage.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vollmer-objektmoebel.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Büroeinrichtung",
      item: "https://vollmer-objektmoebel.com/bueroeinrichtung",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Büroeinrichtung Rhein-Erft-Kreis",
      item: "https://vollmer-objektmoebel.com/bueroeinrichtung-rhein-erft-kreis",
    },
  ],
};

const BueroeinrichtungRheinErftKreis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Büroeinrichtung Rhein-Erft-Kreis, Köln & Bonn | Vollmer Objektmöbel"
        description="Büro- & Objekteinrichtung im Rhein-Erft-Kreis sowie Köln und Bonn: Einzelbüros, Open Space, Meeting-Räume, Empfang, Coworking, Teeküchen — 3D-Planung und schlüsselfertige Montage."
        path="/bueroeinrichtung-rhein-erft-kreis"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Büro- &amp; Objekteinrichtung Rhein-Erft-Kreis, Köln &amp; Bonn
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            Einzelbüros, Open Space, Meeting-Räume und Teeküchen — geplant und montiert für Unternehmen in Erftstadt, Hürth, Kerpen, Frechen, Wesseling, Brühl, Köln und Bonn
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Sie richten ein Büro, eine Kanzlei, einen Coworking-Space oder einen Business Club im Rhein-Erft-Kreis oder in Köln und Bonn ein? Dann brauchen Sie Einrichtung, die produktiv, robust und zum Markenauftritt passt — und einen Partner, der Planung, Montage und Gewerke zusammenführt.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Vollmer Objektmöbel aus Erftstadt plant und montiert{" "}
            <Link to="/bueroeinrichtung" className="text-primary hover:underline">
              Büroeinrichtungen
            </Link>{" "}
            und{" "}
            <Link to="/objektmoebel" className="text-primary hover:underline">
              Objektmöbel
            </Link>{" "}
            vor Ort: Einzelbüros, Open-Space-Bereiche, Meeting-Räume, Empfangstheken, Coworking-Areas sowie Teeküchen und Büroküchen. Wir kommen zu Ihnen, nehmen Maß und planen in 3D — ohne Showroom.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Was wir für Büros und Objekte umsetzen
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Einzelbüros und Chefzimmer nach Maß</li>
            <li>Open-Space-Bereiche mit klaren Zonen und Aufenthaltsqualität</li>
            <li>Meeting-Räume und flexible Arbeitsbereiche</li>
            <li>Empfangstheken und repräsentative Eingangsbereiche</li>
            <li>Coworking-Areas für Business Clubs und Shared Offices</li>
            <li>
              Teeküchen &amp; Büroküchen — von 10–20 bis 100+ Mitarbeitenden (
              <Link to="/teekueche-buero" className="text-primary hover:underline">
                Teeküche &amp; Büroküche
              </Link>
              )
            </li>
            <li>Objektmöbel für Co-Living und Micro-Apartments</li>
            <li>Schallschutz-Lösungen für Open Space und Meeting-Zonen</li>
            <li>3D-Planung vor Ort und schlüsselfertige Montage inkl. Gewerke-Koordination</li>
            <li>Zusammenarbeit mit Architekten und Planern inkl. Ausschreibungsunterlagen</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Regelmäßig vor Ort im Rhein-Erft-Kreis, Köln und Bonn
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Rhein-Erft-Kreis:</strong> Erftstadt, Hürth, Kerpen, Frechen, Wesseling und Brühl — hier sind wir regelmäßig für Aufmaß, Beratung und Montage unterwegs. Unser Standort in Erftstadt macht kurze Wege und verlässliche Termine möglich.
            </p>
            <p>
              <strong className="text-foreground">Köln &amp; Bonn:</strong> Für Unternehmen, Kanzleien und Coworking-Betreiber in Köln und Bonn planen wir Büro- und Objekteinrichtungen vom Empfang bis zur Teeküche — abgestimmt auf Nutzungsintensität und Corporate Design.
            </p>
            <p>
              <strong className="text-foreground">Bauträger &amp; Architekten:</strong> Bei größeren Projekten liefern wir 3D-Planungen und Ausschreibungsunterlagen und koordinieren die Ausführung über unsere{" "}
              <Link to="/projektbegleitung" className="text-primary hover:underline">
                Projektbegleitung
              </Link>
              .
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Referenzen: Coworking und moderne Büroküche
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Für den Regus Business Club haben wir eine großzügige Coworking-Area mit Küche und Lounge-Bereichen geplant und montiert — siehe{" "}
            <Link to="/referenzen/business-club-coworking" className="text-primary hover:underline">
              Business Club Coworking
            </Link>
            . Eine weitere Referenz ist unsere{" "}
            <Link to="/referenzen/buero-kueche-theke" className="text-primary hover:underline">
              moderne Büro-Küche mit Theke
            </Link>
            .
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Mehr Projekte finden Sie unter{" "}
            <Link to="/referenzen" className="text-primary hover:underline">
              Referenzen
            </Link>
            . Allgemeine Fragen zu Büro, Objekt und Ablauf beantwortet unsere{" "}
            <Link to="/faq" className="text-primary hover:underline">
              FAQ
            </Link>
            .
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Von der 3D-Planung bis zur schlüsselfertigen Montage
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Nach dem Erstgespräch kommen wir in Ihre Räume, nehmen Aufmaß und klären Anforderungen an Arbeitsplätze, Meeting-Zonen, Empfang und Teeküche. Anschließend erhalten Sie eine 3D-Planung und ein transparentes Festpreisangebot.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Die Montage erfolgt schlüsselfertig — auf Wunsch inkl. Koordination weiterer Gewerke und außerhalb der Bürozeiten. Ihr Ansprechpartner ist Maurice Vollmer mit dem Team Vollmer Objektmöbel (gegründet 2017, mehr als 10 Jahre Berufserfahrung).
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zur Büroeinrichtung im Rhein-Erft-Kreis
          </h2>
          <FaqAccordion items={faqs} />

          <div className="mt-12">
            <CtaBox />
          </div>

          <div className="mt-10 p-6 bg-muted/30 border border-border">
            <p className="font-serif text-sm text-muted-foreground">
              <strong className="text-foreground">Weitere Seiten:</strong>{" "}
              <Link to="/bueroeinrichtung" className="text-primary hover:underline">
                Büroeinrichtung
              </Link>
              {" · "}
              <Link to="/teekueche-buero" className="text-primary hover:underline">
                Teeküche &amp; Büroküche
              </Link>
              {" · "}
              <Link to="/objektmoebel" className="text-primary hover:underline">
                Objektmöbel
              </Link>
              {" · "}
              <Link to="/praxiseinrichtung-koeln-bonn" className="text-primary hover:underline">
                Praxiseinrichtung Köln &amp; Bonn
              </Link>
              {" · "}
              <Link to="/kontakt" className="text-primary hover:underline">
                Kontakt
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BueroeinrichtungRheinErftKreis;
