import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  { q: "Habt ihr ein Küchenstudio in Brühl?", a: "Unser Standort ist im benachbarten Erftstadt — nur wenige Kilometer von Brühl entfernt. Wir sind regelmäßig in Brühl vor Ort für Aufmaß, Beratung und Montage." },
  { q: "Wie schnell könnt ihr nach Brühl kommen?", a: "Brühl liegt direkt neben Erftstadt — wir sind bei Ihnen in unter 15 Minuten. Für einen Beratungstermin vereinbaren Sie einfach telefonisch oder per E-Mail einen Wunschtermin." },
  { q: "Plant ihr auch für Brühl-Mitte, Vochem, Badorf oder Pingsdorf?", a: "Ja, wir sind in allen Brühler Stadtteilen unterwegs — von der Innenstadt über Vochem und Badorf bis nach Pingsdorf." },
  { q: "Übernehmt ihr auch die Montage?", a: "Ja, wir montieren Ihre Küche schlüsselfertig — inklusive aller Elektro- und Sanitäranschlüsse. Auf Wunsch koordinieren wir auch Maler, Fliesenleger und andere Gewerke." },
  { q: "Mit welchen Küchenmarken arbeitet ihr?", a: "Wir planen Küchen von Nobilia, Häcker und Next125. Bei den Einbaugeräten setzen wir auf Siemens, Miele, NEFF und BORA." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Küche Brühl — Küchenplanung & Montage",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Brühl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brühl",
      "addressRegion": "NRW",
      "addressCountry": "DE"
    }
  },
  "serviceType": "Küchenplanung, Küchenmontage, 3D-Visualisierung",
  "description": "Küchenstudio für Brühl: Küchenplanung, Vor-Ort-Aufmaß, 3D-Visualisierung und schlüsselfertige Montage — aus dem benachbarten Erftstadt."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vollmer-objektmoebel.com/" },
    { "@type": "ListItem", "position": 2, "name": "Küchenstudio Brühl", "item": "https://vollmer-objektmoebel.com/kuechenstudio-bruehl" }
  ]
};

const KuechenstudioBruehl = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Küche Brühl | Küchenplanung & Montage — Vollmer Objektmöbel"
        description="Küchenstudio für Brühl: Küchenplanung, Vor-Ort-Aufmaß, 3D-Visualisierung, Markenküchen und schlüsselfertige Montage — aus dem benachbarten Erftstadt."
        path="/kuechenstudio-bruehl"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Küche Brühl
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            Küchenplanung, 3D-Visualisierung und schlüsselfertige Montage — aus dem benachbarten Erftstadt
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Sie suchen ein Küchenstudio für Brühl? Wir sind Ihr direkter Nachbar — unser Standort ist in Erftstadt, nur wenige Kilometer von Brühl entfernt. Für Sie bedeutet das: kurze Wege, schnelle Reaktionszeiten und persönliche Betreuung.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Wir planen und montieren Küchen für Brühler Privathaushalte — von der Innenstadt über Vochem und Badorf bis nach Pingsdorf. Unser Service: Wir kommen zu Ihnen nach Hause, nehmen dort das exakte Aufmaß und entwickeln eine 3D-Küchenplanung, die Sie schon vor dem Kauf realistisch erleben können.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Warum aus Erftstadt für Brühl?
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Brühl und Erftstadt liegen direkt nebeneinander — wir sind bei Ihnen in unter 15 Minuten. Sie müssen nicht zu uns ins Studio kommen, wir kommen zu Ihnen. Das ist für Sie bequemer, für uns effizienter — und ermöglicht es uns, Ihre Küche von Anfang an in Ihrem echten Raum zu planen, nicht in einer künstlichen Ausstellungsfläche.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Viele Küchenstudios in Brühl oder Köln setzen auf große Ausstellungen mit dutzenden Musterküchen. Das ist beeindruckend — aber für Ihre konkrete Küche oft wenig hilfreich. Wir setzen auf Vor-Ort-Planung: Wir sehen Ihre Lichtverhältnisse, Ihre Anschlüsse, Ihre Raumhöhe — und planen eine Küche, die perfekt passt.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Unsere Leistungen für Brühl
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Kostenfreies Erstgespräch und Vor-Ort-Aufmaß in Brühl</li>
            <li>3D-Küchenplanung — Ihre Küche vor dem Kauf realistisch erleben</li>
            <li>Markenküchen von Nobilia, Häcker, Next125</li>
            <li>Einbaugeräte von Siemens, Miele, NEFF, BORA</li>
            <li>Arbeitsplatten: Granit, Quarzkomposit, Keramik, Melaminharz</li>
            <li>Spritzschutz aus Glas oder Naturstein</li>
            <li>Komplette Montage inkl. Elektro- und Sanitäranschluss</li>
            <li>Koordination weiterer Gewerke (Maler, Fliesenleger) aus unserem Netzwerk</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Typische Brühler Küchenprojekte
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Reihenhäuser:</strong> Brühl hat viele klassische Reihenhäuser aus den 60er bis 90er Jahren — oft mit engen Küchen, die clever geplant werden wollen. Wir holen das Maximum aus Ihrem Raum.
            </p>
            <p>
              <strong className="text-foreground">Einfamilienhäuser:</strong> Von Vochem bis Pingsdorf — größere Küchen mit offenen Grundrissen, in denen wir mit Kochinseln, großen Arbeitsplatten und hochwertigen Geräten arbeiten können.
            </p>
            <p>
              <strong className="text-foreground">Neubauwohnungen:</strong> Offene Wohnküchen mit viel Licht — hier können wir das volle Programm zeigen: große Quarz-Arbeitsplatten, Miele-Geräte, BORA-Kochfelder mit integriertem Dunstabzug.
            </p>
            <p>
              <strong className="text-foreground">Altbauwohnungen:</strong> Brühl hat auch schöne Altbauten — hohe Decken, oft verwinkelte Grundrisse. Wir planen Küchen, die den Charakter bewahren und trotzdem modern sind.
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Von der Planung bis zur Übergabe
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Nach dem Vor-Ort-Termin bei Ihnen in Brühl entwickeln wir eine 3D-Küchenplanung, die Sie vorab realistisch erleben können. Sie sehen Ihre neue Küche, bevor Sie kaufen — und können jedes Detail anpassen.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Nach Ihrer Freigabe bestellen wir die Küche bei Nobilia, Häcker oder Next125. Die Lieferzeit beträgt typischerweise 8–14 Wochen. Dann rücken wir mit unserem Team an, bauen die Küche auf, schließen alle Geräte an — und übergeben Ihnen eine fertige Küche, in der Sie direkt kochen können.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zu unserem Küchenstudio für Brühl
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
              <Link to="/kuechen-rhein-erft-kreis" className="text-primary hover:underline">Küchen Rhein-Erft-Kreis</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default KuechenstudioBruehl;
