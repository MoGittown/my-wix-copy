import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  {
    q: "Richtet ihr Arztpraxen in Köln, Bonn und Erftstadt ein?",
    a: "Ja. Wir planen und montieren Praxiseinrichtungen für Arztpraxen, Zahnarztpraxen, Physiotherapie-Praxen, medizinische Versorgungszentren und Therapiepraxen in Köln, Bonn, Brühl, Erftstadt und dem gesamten Rhein-Erft-Kreis — vom Empfang bis zum Behandlungsraum.",
  },
  {
    q: "Welche Oberflächen eignen sich für Behandlungsräume?",
    a: "Für Behandlungsräume und Arbeitsplätze setzen wir auf desinfektionsmittelbeständige, fugenarme Oberflächen — etwa Quarzkomposit und Edelstahl. So bleiben Schränke und Arbeitsplatten hygienisch, leicht zu reinigen und alltagstauglich im Praxisbetrieb.",
  },
  {
    q: "Können Sie die Montage außerhalb der Sprechzeiten durchführen?",
    a: "Ja. Auf Wunsch montieren wir auch außerhalb der Sprechzeiten — abends oder am Wochenende —, damit Ihr Praxisbetrieb möglichst wenig beeinträchtigt wird. Den Ablauf stimmen wir im Vor-Ort-Termin mit Ihnen ab.",
  },
  {
    q: "Übernehmen Sie auch Elektrik, Sanitär und weitere Gewerke?",
    a: "Ja. Über unsere <a href='/projektbegleitung'>Projektbegleitung</a> koordinieren wir Elektrik, Sanitär, Bodenleger und Maler und begleiten Ihr Projekt bis zur schlüsselfertigen Übergabe — mit einem festen Ansprechpartner.",
  },
  {
    q: "Haben Sie ein Showroom für Praxismöbel?",
    a: "Nein. Wir kommen zu Ihnen in die Praxis, nehmen vor Ort Maß und planen in 3D — auf Basis Ihrer echten Räume, Laufwege und Anforderungen. Das Erstgespräch und das Aufmaß sind unverbindlich. Kontakt: 0178 8576150 oder <a href='/kontakt'>Kontaktformular</a>.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Praxiseinrichtung Köln, Bonn & Erftstadt",
  provider: {
    "@type": "LocalBusiness",
    name: "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business",
  },
  areaServed: [
    { "@type": "City", name: "Köln" },
    { "@type": "City", name: "Bonn" },
    { "@type": "City", name: "Brühl" },
    { "@type": "City", name: "Erftstadt" },
    { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
  ],
  serviceType:
    "Praxiseinrichtung, Empfangstresen, Wartezonenmöbel, Behandlungsraum-Einrichtung, Schwesternküche",
  description:
    "Praxiseinrichtung für Arzt-, Zahnarzt- und Therapiepraxen in Köln, Bonn, Brühl und Erftstadt: Empfang, Wartezone, Behandlungsräume, desinfektionsmittelbeständige Oberflächen, 3D-Planung und Gewerke-Koordination.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vollmer-objektmoebel.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Praxiseinrichtung",
      item: "https://vollmer-objektmoebel.com/praxiseinrichtung",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Praxiseinrichtung Köln, Bonn & Erftstadt",
      item: "https://vollmer-objektmoebel.com/praxiseinrichtung-koeln-bonn",
    },
  ],
};

const PraxiseinrichtungKoelnBonn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Praxiseinrichtung Köln, Bonn & Erftstadt | Vollmer Objektmöbel"
        description="Praxiseinrichtung für Arzt-, Zahnarzt- und Therapiepraxen in Köln, Bonn, Brühl und Erftstadt: Empfang, Wartezone, Behandlungsräume, 3D-Planung und Montage außerhalb der Sprechzeiten."
        path="/praxiseinrichtung-koeln-bonn"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Praxiseinrichtung Köln, Bonn & Erftstadt
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            Empfang, Wartezone und Behandlungsräume — geplant und montiert für Praxen in Köln, Bonn, Brühl und dem Rhein-Erft-Kreis
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Sie richten eine Arztpraxis, Zahnarztpraxis, Physiotherapie-Praxis oder ein medizinisches Versorgungszentrum in Köln, Bonn, Brühl oder Erftstadt ein? Dann brauchen Sie Einrichtung, die hygienisch, funktional und zugleich einladend wirkt — und einen Partner, der Planung, Gewerke und Montage zusammenhält.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Vollmer Objektmöbel aus Erftstadt plant und montiert{" "}
            <Link to="/praxiseinrichtung" className="text-primary hover:underline">
              Praxiseinrichtungen
            </Link>{" "}
            vor Ort: Empfangstresen, Wartezonenmöbel, Behandlungsraum-Schränke und Arbeitsplatten, Schwestern- und Personalküchen. Wir kommen zu Ihnen, nehmen Maß und entwickeln eine 3D-Planung — ohne Showroom, ohne Umwege.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Was wir für Ihre Praxis umsetzen
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Empfangstresen — repräsentativ, ergonomisch und auf Ihre Abläufe zugeschnitten</li>
            <li>Wartezonenmöbel mit robusten, leicht zu reinigenden Oberflächen</li>
            <li>Behandlungsraum-Schränke und Arbeitsplatten für den täglichen Praxisbetrieb</li>
            <li>Desinfektionsmittelbeständige, fugenarme Oberflächen (Quarzkomposit, Edelstahl)</li>
            <li>Schwestern- und Personalküchen für Ihr Praxisteam</li>
            <li>3D-Planung und Aufmaß vor Ort in Ihrer Praxis</li>
            <li>
              Gewerke-Koordination &amp;{" "}
              <Link to="/projektbegleitung" className="text-primary hover:underline">
                Projektbegleitung
              </Link>{" "}
              (Elektrik, Sanitär, Bodenleger, Maler)
            </li>
            <li>Montage auch außerhalb der Sprechzeiten möglich</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Für Praxen in Köln, Bonn und dem Rhein-Erft-Kreis
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Köln:</strong> Von der Neugründung bis zur Modernisierung bestehender Räume — wir planen Praxiseinrichtungen im gesamten Stadtgebiet und stimmen Montagezeiten auf Ihren Sprechzeitenplan ab.
            </p>
            <p>
              <strong className="text-foreground">Bonn:</strong> Arzt-, Zahnarzt- und Therapiepraxen in Bonn und Umgebung begleiten wir von der ersten Skizze bis zur Übergabe — inkl. Abstimmung mit weiteren Gewerken.
            </p>
            <p>
              <strong className="text-foreground">Brühl, Erftstadt &amp; Rhein-Erft-Kreis:</strong> Unser Standort in Erftstadt liegt mittendrin. Für Praxen in Brühl, Erftstadt und dem Rhein-Erft-Kreis sind wir kurzfristig vor Ort für Aufmaß, Beratung und Montage.
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Hygiene, Funktion und ruhiger Praxisbetrieb
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            In der Praxis zählen kurze Wege, klare Abläufe und Oberflächen, die der täglichen Desinfektion standhalten. Deshalb planen wir Behandlungsräume und Nebenbereiche mit fugenarmen Materialien und Stauraum, der wirklich genutzt wird — nicht nur gut aussieht.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Ein Einblick in unsere Arbeit im medizinischen Umfeld: unsere Referenz zur{" "}
            <Link to="/referenzen/krankenhausausstattung" className="text-primary hover:underline">
              Krankenhausausstattung
            </Link>
            . Weitere Projekte finden Sie unter{" "}
            <Link to="/referenzen" className="text-primary hover:underline">
              Referenzen
            </Link>
            . Ausführliche Antworten zu Planung und Montage auch in unserer{" "}
            <Link to="/faq" className="text-primary hover:underline">
              FAQ
            </Link>
            .
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Von der 3D-Planung bis zur schlüsselfertigen Übergabe
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Nach dem Erstgespräch kommen wir in Ihre Praxis, nehmen Aufmaß und klären Anforderungen an Empfang, Wartezone und Behandlungsräume. Anschließend erhalten Sie eine 3D-Planung und ein transparentes Festpreisangebot.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Bei der Umsetzung koordinieren wir auf Wunsch alle beteiligten Gewerke und montieren so, dass Ihr Betrieb weiterlaufen kann — auch außerhalb der Sprechzeiten. Sie haben einen festen Ansprechpartner von Maurice Vollmer und dem Team Vollmer Objektmöbel (gegründet 2017, mehr als 10 Jahre Berufserfahrung).
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zur Praxiseinrichtung in Köln, Bonn &amp; Erftstadt
          </h2>
          <FaqAccordion items={faqs} />

          <div className="mt-12">
            <CtaBox />
          </div>

          <div className="mt-10 p-6 bg-muted/30 border border-border">
            <p className="font-serif text-sm text-muted-foreground">
              <strong className="text-foreground">Weitere Seiten:</strong>{" "}
              <Link to="/praxiseinrichtung" className="text-primary hover:underline">
                Praxiseinrichtung
              </Link>
              {" · "}
              <Link to="/projektbegleitung" className="text-primary hover:underline">
                Projektbegleitung
              </Link>
              {" · "}
              <Link to="/bueroeinrichtung-rhein-erft-kreis" className="text-primary hover:underline">
                Büroeinrichtung Rhein-Erft-Kreis
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

export default PraxiseinrichtungKoelnBonn;
