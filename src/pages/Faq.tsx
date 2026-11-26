import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";

// FAQ-Kategorien mit klarem Fokus auf das volle Leistungsspektrum
const faqServiceRange: FaqItem[] = [
  { 
    q: "Macht Vollmer Objektmöbel nur Küchen?", 
    a: "Nein, Küchen sind nur ein Teil unseres Leistungsspektrums. Wir sind Vollausstatter für gewerbliche und private Räume: Praxiseinrichtung (Arztpraxen, Empfangstheken, Behandlungsräume), Büro- und Coworking-Einrichtung, Teeküchen und Objektküchen für Büros, Objektmöbel für Co-Living und Micro-Apartments, Stahlküchen sowie schlüsselfertige Projektbegleitung mit Gewerke-Koordination. Einbauküchen für Privathaushalte sind dabei ein wichtiger Bereich, aber längst nicht der einzige."
  },
  { 
    q: "Richten Sie auch Praxen und Büros ein?", 
    a: "Ja, Praxiseinrichtung und Büroeinrichtung gehören zu unseren Schwerpunkten. Wir planen komplette Arzt- und Zahnarztpraxen (Empfangstresen, Wartezonen, Behandlungsräume) sowie Büros (Einzelbüros, Coworking-Areas, Teeküchen, Meeting-Räume) — maßgefertigt, funktional und bis zur schlüsselfertigen Übergabe." 
  },
  { 
    q: "Was ist eine Objektküche, und für wen ist sie gedacht?", 
    a: "Objektküchen sind Küchen für gewerbliche Nutzung — in Coworking-Spaces, Büros, Praxen, Co-Living-Projekten oder Kantinen. Sie sind auf hohe Nutzungsintensität, einfache Reinigung und Langlebigkeit ausgelegt — mit robusten Fronten, fugenlosen Arbeitsplatten und Geräten für den Dauereinsatz." 
  },
];

const faqPlanungAblauf: FaqItem[] = [
  { 
    q: "Wie läuft eine Planung (Küche, Praxis oder Büro) bei Ihnen ab?", 
    a: "Nach einem kostenlosen Erstgespräch am Telefon vereinbaren wir einen Vor-Ort-Termin bei Ihnen zu Hause, in Ihrer Praxis oder im Büro. Dort messen wir auf, besprechen Ihre Anforderungen und erstellen anschließend eine 3D-Planung. Nach Freigabe bestellen wir die Möbel und Geräte und montieren alles schlüsselfertig — inklusive Elektro- und Sanitäranschlüssen." 
  },
  { 
    q: "Haben Sie eine Ausstellung in Erftstadt?", 
    a: "Nein, wir setzen bewusst auf Vor-Ort-Beratung bei Ihnen statt auf ein klassisches Ausstellungshaus. Wir kommen zu Ihnen, messen in Ihrem echten Raum auf und planen dort — das ist für Sie bequemer und für uns effizienter. Sie sparen sich die Fahrt ins Möbelhaus, und wir die Kosten für teure Showrooms." 
  },
  { 
    q: "Machen Sie auch 3D-Planungen?", 
    a: "Ja, jede unserer Küchen und Einrichtungen wird in 3D geplant. So können Sie Ihre neue Küche, Praxis oder Büro-Einrichtung schon vor dem Kauf realistisch erleben." 
  },
  { 
    q: "Was kostet eine Planung?", 
    a: "Das Erstgespräch und das Vor-Ort-Aufmaß sind für Sie kostenlos. Wenn Sie sich für uns entscheiden, erhalten Sie ein transparentes Festpreisangebot." 
  },
];

const faqRegionMontage: FaqItem[] = [
  { 
    q: "In welchen Regionen sind Sie tätig?", 
    a: "Unser Standort ist Erftstadt. Wir sind regelmäßig in Köln, Bonn, Brühl und im gesamten Rhein-Erft-Kreis (Hürth, Kerpen, Frechen, Wesseling) unterwegs. Auf Anfrage übernehmen wir auch größere Objektprojekte darüber hinaus." 
  },
  { 
    q: "Wie lange dauert es von der Planung bis zur Montage?", 
    a: "Je nach Marke und Ausstattung liegen zwischen Auftragsbestätigung und Montage typischerweise 8–14 Wochen." 
  },
  { 
    q: "Wie lange dauert die Montage vor Ort?", 
    a: "Eine durchschnittliche Einbauküche montieren wir in 2–4 Tagen — abhängig von Größe und Umfang. Größere Objekte (Praxen, Büros, Coworking-Areas) oder komplexe Küchen können länger dauern." 
  },
  { 
    q: "Übernehmen Sie auch Elektro- und Sanitäranschlüsse?", 
    a: "Ja. Alle Elektro- und Sanitäranschlüsse rund um Küche, Praxis oder Büro werden von unserem Team ausgeführt, sodass Sie Ihre Einrichtung direkt in Betrieb nehmen können." 
  },
  { 
    q: "Bleibt die Praxis während der Montage geöffnet?", 
    a: "In vielen Fällen können wir die Montage so organisieren, dass Ihre Praxis weiterarbeiten kann — z. B. durch Montage außerhalb der Sprechzeiten oder schrittweisen Umbau. Das besprechen wir im Vor-Ort-Termin." 
  },
];

const faqKuechenMarken: FaqItem[] = [
  { 
    q: "Mit welchen Küchenmarken arbeiten Sie?", 
    a: "Wir planen und montieren Küchen von Nobilia, Häcker und Next125. Bei Einbaugeräten setzen wir auf Siemens, Miele, NEFF und BORA. Für Sonderwünsche haben wir zusätzliche Marken im Programm." 
  },
  { 
    q: "Welche Arbeitsplatten sind möglich?", 
    a: "Granit, Quarzkomposit, Keramik, Naturstein oder klassisch Melaminharz — wir beraten Sie zu Vor- und Nachteilen des jeweiligen Materials." 
  },
  { 
    q: "Bieten Sie auch Stahlküchen an?", 
    a: "Ja, wir planen Stahlküchen für Gastronomie, Kantinen, Coworking-Spaces und auch für Privathaushalte, die eine besonders langlebige, hygienische und robuste Küche suchen." 
  },
  { 
    q: "Kann ich meine bestehende Küche bei Ihnen umbauen lassen?", 
    a: "In vielen Fällen ja — wir schauen uns die vorhandene Küche an und beraten ehrlich, ob Aufwertung, Teilerneuerung oder Neubau sinnvoller ist." 
  },
];

const faqPraxisBueroObjekt: FaqItem[] = [
  { 
    q: "Planen Sie auch einzelne Teeküchen fürs Büro?", 
    a: "Ja, wir planen und montieren einzelne Teeküchen und Büroküchen — vom kleinen Pantry für zehn Mitarbeitende bis zur großen Coworking-Küche für 100+ Personen. Weitere Infos finden Sie auf unserer <a href='/teekueche-buero'>Teeküchen-Seite</a>." 
  },
  { 
    q: "Welche Materialien eignen sich für Praxismöbel?", 
    a: "Für Praxen wählen wir fugenlose, desinfektionsmittelbeständige Oberflächen — z. B. Quarzkomposit für Arbeitsplatten, robuste Kunststoff- oder Edelstahlfronten, die den täglichen Reinigungsanforderungen standhalten. Mehr dazu auf unserer <a href='/praxiseinrichtung'>Praxiseinrichtungs-Seite</a>." 
  },
  { 
    q: "Können Sie Micro-Apartments und Co-Living-Projekte umsetzen?", 
    a: "Ja, für Bauträger und Betreiber realisieren wir skalierbare Einrichtungen für Micro-Apartments und Co-Living — mit konstanter Qualität auch bei großen Stückzahlen. Details unter <a href='/objektmoebel'>Objektmöbel</a>." 
  },
  { 
    q: "Arbeiten Sie mit Architekten und Planern zusammen?", 
    a: "Ja, bei größeren Objektprojekten arbeiten wir regelmäßig mit Architekten, Innenarchitekten und Projektentwicklern zusammen. Wir liefern 3D-Planungen, Ausschreibungsunterlagen und koordinieren die Ausführung." 
  },
];

const faqProjektbegleitungService: FaqItem[] = [
  { 
    q: "Was heißt Projektbegleitung genau?", 
    a: "Wir übernehmen Bauleitung, Bauzeitenplan und Kommunikation aller Gewerke. Sie haben einen festen Ansprechpartner und einen Termin für die Übergabe. Mehr Infos: <a href='/projektbegleitung'>Projektbegleitung</a>." 
  },
  { 
    q: "Ab welcher Projektgröße lohnt sich Projektbegleitung?", 
    a: "In der Regel ab drei beteiligten Gewerken. Bei einer reinen Küchen- oder Möbelmontage ohne Umbau ist Projektbegleitung meistens nicht nötig." 
  },
  { 
    q: "Koordinieren Sie auch andere Gewerke?", 
    a: "Ja, aus unserem Netzwerk übernehmen wir bei Bedarf Maler, Fliesenleger, Bodenleger, Elektriker und Naturstein-Handwerker — inklusive Bauzeitenplan." 
  },
  { 
    q: "Wie kann ich einen Beratungstermin vereinbaren?", 
    a: "Am einfachsten telefonisch unter 0178 8576150 oder über unser <a href='/kontakt'>Kontaktformular</a>. Wir melden uns zeitnah zurück." 
  },
  { 
    q: "Gibt es Garantie auf die Möbel?", 
    a: "Ja. Auf die Möbel gilt die Herstellergarantie (in der Regel 2–5 Jahre je nach Marke). Auf unsere Montage geben wir zusätzlich Gewährleistung nach BGB." 
  },
];

// Alle FAQs für JSON-LD
const allFaqs = [
  ...faqServiceRange,
  ...faqPlanungAblauf,
  ...faqRegionMontage,
  ...faqKuechenMarken,
  ...faqPraxisBueroObjekt,
  ...faqProjektbegleitungService,
];

const Faq = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="FAQ — Küchen, Praxis, Büro, Objektmöbel & Projektbegleitung | Vollmer"
        description="Häufige Fragen zu Einbauküchen, Praxiseinrichtung, Büro- & Coworking-Ausstattung, Objektmöbel, Stahlküchen und Projektbegleitung — beantwortet von Vollmer Objektmöbel aus Erftstadt."
        path="/faq"
        jsonLd={faqJsonLd(allFaqs)}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Häufige Fragen</h1>
          <p className="font-serif text-lg text-muted-foreground mb-10">
            Antworten zu <strong>Einbauküchen, Praxiseinrichtung, Büro- & Coworking-Ausstattung, Objektmöbel, Stahlküchen und Projektbegleitung</strong> — kompakt beantwortet von Vollmer Objektmöbel aus Erftstadt für Köln, Bonn, Brühl und den Rhein-Erft-Kreis.
          </p>

          {/* Leistungsspektrum — prominent an erster Stelle */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Leistungsspektrum — Mehr als nur Küchen</h2>
            <FaqAccordion items={faqServiceRange} />
            <p className="font-serif text-sm text-muted-foreground mt-4">
              → Weitere Infos: <Link to="/kuechenstudio-erftstadt" className="text-primary hover:underline">Küchen</Link>, <Link to="/praxiseinrichtung" className="text-primary hover:underline">Praxiseinrichtung</Link>, <Link to="/bueroeinrichtung" className="text-primary hover:underline">Büroeinrichtung</Link>, <Link to="/objektmoebel" className="text-primary hover:underline">Objektmöbel</Link>, <Link to="/stahlkuechen" className="text-primary hover:underline">Stahlküchen</Link>, <Link to="/projektbegleitung" className="text-primary hover:underline">Projektbegleitung</Link>
            </p>
          </div>

          {/* Planung & Ablauf */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Planung & Ablauf</h2>
            <FaqAccordion items={faqPlanungAblauf} />
          </div>

          {/* Region, Montage & Termine */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Region, Montage & Termine</h2>
            <FaqAccordion items={faqRegionMontage} />
            <p className="font-serif text-sm text-muted-foreground mt-4">
              → Regional: <Link to="/kuechenstudio-koeln" className="text-primary hover:underline">Köln</Link>, <Link to="/kuechenstudio-bonn" className="text-primary hover:underline">Bonn</Link>, <Link to="/kuechenstudio-bruehl" className="text-primary hover:underline">Brühl</Link>, <Link to="/kuechen-rhein-erft-kreis" className="text-primary hover:underline">Rhein-Erft-Kreis</Link>
            </p>
          </div>

          {/* Küchen: Marken & Materialien */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Küchen: Marken & Materialien</h2>
            <FaqAccordion items={faqKuechenMarken} />
          </div>

          {/* Praxis, Büro & Objektmöbel */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Praxis, Büro & Objektmöbel</h2>
            <FaqAccordion items={faqPraxisBueroObjekt} />
          </div>

          {/* Projektbegleitung & Service */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Projektbegleitung & Service</h2>
            <FaqAccordion items={faqProjektbegleitungService} />
          </div>

          <CtaBox />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Faq;