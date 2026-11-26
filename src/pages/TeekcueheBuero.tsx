import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";
import { Link } from "react-router-dom";

const faqs: FaqItem[] = [
  { q: "Plant ihr auch einzelne Teeküchen fürs Büro?", a: "Ja, wir planen und montieren einzelne Teeküchen — vom kleinen Pantry für zehn Mitarbeitende bis zur großen Coworking-Küche für 100+ Personen." },
  { q: "Wie unterscheidet sich eine Büroküche von einer Privatküche?", a: "Büroküchen müssen höhere Nutzungsintensität aushalten, leicht zu reinigen sein und oft mehr als eine Person gleichzeitig bedienen können. Wir wählen robustere Materialien, langlebigere Beschläge und funktionale Grundrisse." },
  { q: "Welche Geräte sind für eine Teeküche sinnvoll?", a: "Typischerweise: Kühlschrank, Spülmaschine, Mikrowelle, Kaffeemaschine oder Vollautomat, Quooker (Heißwasserhahn) für Tee. Herdfelder sind oft nicht nötig — außer bei größeren Kantinen." },
  { q: "Wie lange dauert die Montage einer Büroküche?", a: "Eine kleine Teeküche montieren wir typischerweise in 1–2 Tagen. Größere Coworking-Küchen können 3–5 Tage dauern — abhängig von Umfang und Gewerke-Koordination." },
  { q: "Bleibt das Büro während der Montage geöffnet?", a: "In vielen Fällen ja — wir stimmen die Montage so ab, dass andere Bereiche des Büros weiterarbeiten können. Bei Bedarf arbeiten wir auch am Wochenende oder nach Feierabend." },
  { q: "Plant ihr auch für Coworking-Spaces?", a: "Ja, wir haben Erfahrung mit Coworking-Küchen — zum Beispiel für den Regus Business Club. Wir planen robust, funktional und so, dass viele Personen gleichzeitig entspannt die Küche nutzen können." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Teeküche & Büroküche für Büros & Coworking",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vollmer Objektmöbel",
    "@id": "https://vollmer-objektmoebel.com/#business"
  },
  "areaServed": [
    { "@type": "City", "name": "Köln" },
    { "@type": "City", "name": "Bonn" },
    { "@type": "City", "name": "Erftstadt" },
    { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" }
  ],
  "serviceType": "Teeküche, Büroküche, Objektküche, Coworking-Küche",
  "description": "Teeküchen und Büroküchen für Büros, Coworking-Spaces und Unternehmen — langlebig, funktional, schlüsselfertig montiert."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vollmer-objektmoebel.com/" },
    { "@type": "ListItem", "position": 2, "name": "Teeküche & Büroküche", "item": "https://vollmer-objektmoebel.com/teekueche-buero" }
  ]
};

const TeekcueheBuero = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Teeküche & Büroküche für Büros & Coworking | Köln, Bonn, Erftstadt"
        description="Teeküchen und Büroküchen für Büros, Coworking-Spaces und Unternehmen in Köln, Bonn, Erftstadt — langlebig, funktional, schlüsselfertig montiert."
        path="/teekueche-buero"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Teeküche & Büroküche
          </h1>
          <p className="font-serif text-xl text-muted-foreground mb-10">
            Für Büros, Coworking-Spaces und Unternehmen in Köln, Bonn, Erftstadt & Rhein-Erft-Kreis
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Eine gute Teeküche ist das Herzstück jedes Büros — der Ort, an dem sich Kolleginnen und Kollegen begegnen, Kaffee holen, kurz durchatmen. Wir planen und montieren Büroküchen, die diesen Anspruch erfüllen: funktional, langlebig, robust — und trotzdem einladend.
          </p>

          <p className="font-serif text-foreground leading-relaxed mb-6">
            Ob kleine Pantry für zehn Mitarbeitende oder große Coworking-Küche für 100+ Personen — wir haben Erfahrung mit Objektküchen aller Größen. Wir planen Grundrisse, in denen mehrere Personen gleichzeitig entspannt arbeiten können, wählen Materialien, die jahrelang durchhalten, und montieren die Küche schlüsselfertig — inklusive aller Geräte und Anschlüsse.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Was unterscheidet eine Büroküche von einer Privatküche?
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Büroküchen müssen höhere Nutzungsintensität aushalten. 20, 50 oder 100 Personen nutzen täglich die gleiche Küche — oft mehrmals. Das stellt andere Anforderungen:
          </p>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li><strong className="text-foreground">Robuste Materialien:</strong> Arbeitsplatten aus Quarzkomposit oder Keramik statt Melaminharz; kratzfeste Fronten; langlebige Scharniere und Schubladen</li>
            <li><strong className="text-foreground">Funktionale Grundrisse:</strong> Genug Platz für mehrere Personen gleichzeitig; gut erreichbare Spülmaschine, Kühlschrank, Kaffeemaschine</li>
            <li><strong className="text-foreground">Leicht zu reinigen:</strong> Fugenlose Arbeitsplatten, abwaschbare Fronten, keine versteckten Ecken</li>
            <li><strong className="text-foreground">Professionelle Geräte:</strong> Spülmaschinen mit Kurzprogramm, große Kühlschränke, Quooker (Heißwasserhahn) für Tee, Vollautomaten statt einfacher Kaffeemaschinen</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Unsere Leistungen für Büroküchen
          </h2>
          <ul className="font-serif text-muted-foreground leading-relaxed space-y-3 mb-10 list-disc list-inside">
            <li>Vor-Ort-Aufmaß und Bedarfsanalyse (Anzahl Mitarbeitende, typische Nutzung)</li>
            <li>3D-Planung — Ihre Büroküche vor dem Kauf realistisch erleben</li>
            <li>Langlebige Materialien: Quarzkomposit, Keramik, robuste Fronten</li>
            <li>Professionelle Geräte: Kühlschrank, Spülmaschine, Mikrowelle, Quooker, Vollautomaten</li>
            <li>Komplette Montage inkl. Elektro- und Sanitäranschluss</li>
            <li>Montage auch außerhalb der Bürozeiten (Wochenende, Feierabend) möglich</li>
            <li>Koordination weiterer Gewerke (Elektriker, Bodenleger) aus unserem Netzwerk</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Typische Büroküchen-Projekte
          </h2>
          <div className="font-serif text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              <strong className="text-foreground">Kleine Teeküche (10–20 Mitarbeitende):</strong> Kompakte Küche mit Kühlschrank, Spülmaschine, Mikrowelle, Kaffeevollautomat, Quooker. Typischerweise 3–4 Meter Länge, 1–2 Tage Montage.
            </p>
            <p>
              <strong className="text-foreground">Mittlere Büroküche (20–50 Mitarbeitende):</strong> Größere Küche mit zwei Kühlschränken, großer Spülmaschine, Theke zum Abstellen, Essbereich. Oft mit Kochinsel oder U-Form. 2–3 Tage Montage.
            </p>
            <p>
              <strong className="text-foreground">Coworking-Küche (50+ Mitarbeitende):</strong> Großzügige Küche mit mehreren Arbeitsbereichen, langer Theke, Lounge-Ecke. Professionelle Geräte, robuste Materialien. Ein solches Projekt haben wir für den <Link to="/referenzen/business-club-coworking" className="text-primary hover:underline">Regus Business Club</Link> umgesetzt. 3–5 Tage Montage.
            </p>
            <p>
              <strong className="text-foreground">Praxis-Personalküche:</strong> Kleine, hygienische Küche für Praxisteams — oft mit Edelstahl-Elementen, leicht zu reinigen, DIN-konform. Mehr dazu auf unserer Seite <Link to="/praxiseinrichtung" className="text-primary hover:underline">Praxiseinrichtung</Link>.
            </p>
          </div>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Referenz: Business Club Coworking-Area
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Für den Regus Business Club haben wir eine großzügige Coworking-Küche mit freistehender Kochinsel, Lounge-Bereichen und professionellen Geräten geplant und montiert. Das Projekt zeigt, was in großen Objekten möglich ist — sehen Sie sich die <Link to="/referenzen/business-club-coworking" className="text-primary hover:underline">Referenz im Detail</Link> an.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Eine weitere Referenz ist unsere <Link to="/referenzen/buero-kueche-theke" className="text-primary hover:underline">Büroküche mit Theke</Link> für einen Unternehmenskunden im Raum Köln — modern, funktional, langlebig.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Von der Planung bis zur Übergabe
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed mb-6">
            Nach einem ersten Gespräch kommen wir zu Ihnen ins Büro, nehmen das Aufmaß, klären die Nutzung (Anzahl Mitarbeitende, typische Anforderungen) und entwickeln eine 3D-Planung.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-10">
            Nach Ihrer Freigabe bestellen wir die Küche und koordinieren die Montage — auf Wunsch auch außerhalb der Bürozeiten, am Wochenende oder nach Feierabend, damit Ihr Betrieb weiterlaufen kann. Wir übergeben Ihnen eine fertige Küche, in der Ihr Team direkt arbeiten kann.
          </p>

          <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
            Häufige Fragen zu Teeküchen und Büroküchen
          </h2>
          <FaqAccordion items={faqs} />

          <div className="mt-12">
            <CtaBox />
          </div>

          <div className="mt-10 p-6 bg-muted/30 border border-border">
            <p className="font-serif text-sm text-muted-foreground">
              <strong className="text-foreground">Weitere Themen:</strong>{" "}
              <Link to="/bueroeinrichtung" className="text-primary hover:underline">Büroeinrichtung</Link>
              {" · "}
              <Link to="/objektmoebel" className="text-primary hover:underline">Objektmöbel</Link>
              {" · "}
              <Link to="/praxiseinrichtung" className="text-primary hover:underline">Praxiseinrichtung</Link>
              {" · "}
              <Link to="/stahlkuechen" className="text-primary hover:underline">Stahlküchen</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default TeekcueheBuero;
