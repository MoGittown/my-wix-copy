import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  { q: "Habt ihr ein Küchenstudio in Köln?", a: "Unser Standort ist in Erftstadt, aber wir sind regelmäßig in Köln vor Ort — für Aufmaß, Beratung und Montage. Sie müssen nicht zu uns ins Studio kommen, wir kommen zu Ihnen." },
  { q: "In welchen Kölner Stadtteilen seid ihr aktiv?", a: "Wir sind im gesamten Kölner Stadtgebiet unterwegs — von Lindenthal über Ehrenfeld bis nach Porz und Kalk. Auch für gewerbliche Projekte im Kölner Büromarkt sind wir erfahren." },
  { q: "Plant ihr auch Objektküchen für Büros in Köln?", a: "Ja, wir planen und montieren Teeküchen, Büroküchen und Coworking-Küchen für Unternehmen in Köln — langlebig, funktional und auf hohe Nutzungsintensität ausgelegt." },
  { q: "Mit welchen Marken arbeitet ihr?", a: "Wir planen Küchen von Nobilia, Häcker und Next125. Bei den Einbaugeräten setzen wir auf Siemens, Miele, NEFF und BORA." },
  { q: "Was kostet eine Küche in Köln?", a: "Das hängt stark von Größe, Ausstattung und Marken ab. Nach dem Vor-Ort-Termin erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Küchenstudio Köln — 3D-Planung & Montage",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Köln",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Köln",
      "addressCountry": "DE"
    }
  },
  "serviceType": "Küchenplanung, Küchenmontage, 3D-Visualisierung, Objektküchen",
  "description": "Küchenstudio für Köln: Persönliche Vor-Ort-Beratung, 3D-Küchenplanung, Markenküchen und schlüsselfertige Montage aus Erftstadt."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vollmer-objektmoebel.com/" },
    { "@type": "ListItem", "position": 2, "name": "Küchenstudio Köln", "item": "https://vollmer-objektmoebel.com/kuechenstudio-koeln" }
  ]
};

const KuechenstudioKoeln = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Küchenstudio Köln | 3D-Planung & Montage aus Erftstadt — Vollmer"
        description="Küchenstudio für Köln: Persönliche Vor-Ort-Beratung, 3D-Küchenplanung, Nobilia/Häcker/Next125, Siemens/Miele/NEFF/BORA — schlüsselfertige Montage aus Erftstadt."
        path="/kuechenstudio-koeln"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Küchenstudio Köln
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            3D-Küchenplanung, Vor-Ort-Aufmaß und schlüsselfertige Montage — aus Erftstadt für Köln
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Sie suchen ein Küchenstudio in Köln, das zu Ihnen nach Hause kommt, statt Sie ins Möbelhaus zu locken? Dann sind Sie bei uns richtig. Wir planen und montieren Küchen für Kölner Privathaushalte und Unternehmen — von Lindenthal über Ehrenfeld bis nach Porz.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Unser Standort ist in Erftstadt, aber für Sie macht das keinen Unterschied: Wir kommen zu Ihnen, nehmen vor Ort Maß, entwickeln eine 3D-Küchenplanung und montieren Ihre neue Küche schlüsselfertig — inklusive aller Elektro- und Sanitäranschlüsse.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Warum kein klassisches Küchenstudio mit Ausstellung?
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Viele Küchenstudios in Köln setzen auf große Ausstellungsflächen mit dutzenden Musterküchen. Das ist eindrucksvoll — aber für Ihre konkrete Küche wenig hilfreich. Denn Ihre Küche steht nicht in einer 500 m² großen Halle, sondern in Ihrer Kölner Altbauwohnung, Ihrem Reihenhaus in Rodenkirchen oder Ihrem Neubau in Niehl.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Wir kommen direkt zu Ihnen, sehen Ihren echten Raum, die Lichtverhältnisse, die Anschlüsse — und planen die Küche so, dass sie perfekt passt. Das spart Ihnen die Fahrten ins Ausstellungshaus, die Parkplatzsuche und die Zeit. Und uns die Kosten für teure Showrooms — die wir an Sie weitergeben.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Unsere Leistungen für Köln
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Kostenfreies Erstgespräch und Vor-Ort-Aufmaß in Köln</li>
            <li>3D-Küchenplanung — Ihre Küche vor dem Kauf realistisch erleben</li>
            <li>Markenküchen von Nobilia, Häcker, Next125</li>
            <li>Einbaugeräte von Siemens, Miele, NEFF, BORA</li>
            <li>Arbeitsplatten: Granit, Quarzkomposit, Keramik, Melaminharz</li>
            <li>Spritzschutz aus Glas oder Naturstein</li>
            <li>Komplette Montage inkl. Elektro- und Sanitäranschluss</li>
            <li>Koordination weiterer Gewerke (Maler, Fliesenleger) aus unserem Netzwerk</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Objektküchen für Kölner Büros und Coworking-Spaces
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Neben privaten Küchen planen und montieren wir auch Objektküchen für Unternehmen in Köln — Teeküchen für Büros, Pantries für Coworking-Spaces, Küchen für Praxen und Kanzleien. Wir haben Erfahrung mit gewerblichen Projekten im Kölner Raum, darunter eine <Link to="/referenzen/buero-kueche-theke" className="text-primary hover:underline">moderne Büroküche mit Theke</Link> für einen Unternehmenskunden.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Objektküchen planen wir mit Fokus auf Langlebigkeit, einfache Reinigung und hohe Nutzungsintensität. Mehr dazu auf unserer Seite <Link to="/teekueche-buero" className="text-primary hover:underline">Teeküche & Büroküche</Link>.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Typische Kölner Küchenprojekte
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Altbauwohnungen:</strong> Hohe Decken, oft verwinkelte Grundrisse, historische Anschlüsse — wir planen Küchen, die den Charme bewahren und trotzdem modern sind.
            </p>
            <p>
              <strong className="text-foreground">Reihenhäuser:</strong> Von Rodenkirchen bis Worringen — oft enge Küchen, die clever geplant werden wollen. Wir holen das Maximum aus Ihrem Raum.
            </p>
            <p>
              <strong className="text-foreground">Neubauwohnungen:</strong> Offene Wohnküchen mit Kochinsel — hier können wir das volle Programm ausspielen: große Arbeitsplatten, Miele-Geräte, BORA-Kochfelder mit integriertem Dunstabzug.
            </p>
            <p>
              <strong className="text-foreground">Büroküchen:</strong> Von der kleinen Teeküche für zehn Mitarbeitende bis zur Coworking-Küche für 100 Personen — wir planen robust, funktional und langlebig.
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zu unserem Küchenstudio für Köln
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
              <Link to="/kuechenstudio-bonn" className="text-primary hover:underline">Küchenstudio Bonn</Link>
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

export default KuechenstudioKoeln;
