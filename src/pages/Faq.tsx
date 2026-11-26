import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd, type FaqItem } from "@/components/FaqAccordion";

const faqs: FaqItem[] = [
  { q: "Wie läuft eine Küchenplanung bei Ihnen ab?", a: "Nach einem kostenlosen Erstgespräch am Telefon vereinbaren wir einen Vor-Ort-Termin bei Ihnen zu Hause oder im Objekt. Dort messen wir auf, besprechen Ihre Wünsche und erstellen anschließend eine 3D-Planung. Nach Freigabe bestellen wir die Küche und montieren sie schlüsselfertig." },
  { q: "In welchen Regionen sind Sie tätig?", a: "Unser Standort ist Erftstadt. Wir sind regelmäßig in Köln, Bonn, Brühl und im gesamten Rhein-Erft-Kreis (Hürth, Kerpen, Frechen, Wesseling) unterwegs. Auf Anfrage übernehmen wir auch größere Objektprojekte darüber hinaus." },
  { q: "Haben Sie eine Küchenausstellung in Erftstadt?", a: "Nein, wir setzen bewusst auf Vor-Ort-Beratung bei Ihnen zu Hause statt auf ein klassisches Ausstellungshaus. Wir kommen zu Ihnen, messen in Ihrem echten Raum auf und planen die Küche dort — das ist für Sie bequemer und für uns effizienter. Sie sparen sich die Fahrt ins Möbelhaus, und wir die Kosten für teure Showrooms." },
  { q: "Mit welchen Küchenmarken arbeiten Sie?", a: "Wir planen und montieren Küchen von Nobilia, Häcker und Next125. Bei Einbaugeräten setzen wir auf Siemens, Miele, NEFF und BORA. Für Sonderwünsche haben wir zusätzliche Marken im Programm." },
  { q: "Übernehmen Sie auch Elektro- und Sanitäranschlüsse?", a: "Ja. Alle Elektro- und Sanitäranschlüsse rund um die Küche werden von unserem Team ausgeführt, sodass Sie Ihre Küche direkt in Betrieb nehmen können." },
  { q: "Koordinieren Sie auch andere Gewerke?", a: "Ja, aus unserem Netzwerk übernehmen wir bei Bedarf Maler, Fliesenleger, Bodenleger, Elektriker und Naturstein-Handwerker — inklusive Bauzeitenplan." },
  { q: "Was kostet eine Küchenplanung?", a: "Das Erstgespräch und das Vor-Ort-Aufmaß sind für Sie kostenlos. Wenn Sie sich für uns entscheiden, erhalten Sie ein transparentes Festpreisangebot." },
  { q: "Wie lange dauert es von der Planung bis zur Montage?", a: "Je nach Marke und Ausstattung liegen zwischen Auftragsbestätigung und Montage typischerweise 8–14 Wochen." },
  { q: "Wie lange dauert die Montage vor Ort?", a: "Eine durchschnittliche Einbauküche montieren wir in 2–4 Tagen — abhängig von Größe und Umfang. Größere Objekte oder komplexe Küchen können länger dauern." },
  { q: "Bieten Sie auch Stahlküchen an?", a: "Ja, wir planen Stahlküchen für Gastronomie, Kantinen, Coworking-Spaces und auch für Privathaushalte, die eine besonders langlebige Küche suchen." },
  { q: "Was ist eine Objektküche?", a: "Objektküchen sind Küchen für gewerbliche Nutzung — z. B. in Coworking-Spaces, Praxen, Büros oder Co-Living-Projekten. Sie sind auf hohe Nutzungsintensität und einfache Reinigung ausgelegt." },
  { q: "Plant ihr auch einzelne Teeküchen fürs Büro?", a: "Ja, wir planen und montieren einzelne Teeküchen und Büroküchen — vom kleinen Pantry für zehn Mitarbeitende bis zur großen Coworking-Küche für 100+ Personen." },
  { q: "Richten Sie auch Praxen und Büros ein?", a: "Ja. Wir planen komplette Praxen (Empfang, Warteraum, Behandlungsräume) und Büros (Einzelbüros, Coworking, Teeküchen) bis zur schlüsselfertigen Übergabe." },
  { q: "Bleibt die Praxis während der Montage geöffnet?", a: "In vielen Fällen können wir die Montage so organisieren, dass Ihre Praxis weiterarbeiten kann — z. B. durch Montage außerhalb der Sprechzeiten oder schrittweisen Umbau. Das besprechen wir im Vor-Ort-Termin." },
  { q: "Welche Materialien eignen sich für Praxismöbel?", a: "Für Praxen wählen wir fugenlose, desinfektionsmittelbeständige Oberflächen — z. B. Quarzkomposit für Arbeitsplatten, robuste Kunststoff- oder Edelstahlfronten, die den täglichen Reinigungsanforderungen standhalten." },
  { q: "Arbeiten Sie mit Architekten und Planern zusammen?", a: "Ja, bei größeren Objektprojekten arbeiten wir regelmäßig mit Architekten, Innenarchitekten und Projektentwicklern zusammen. Wir liefern 3D-Planungen, Ausschreibungsunterlagen und koordinieren die Ausführung." },
  { q: "Können Sie Micro-Apartments und Co-Living-Projekte umsetzen?", a: "Ja, für Bauträger und Betreiber realisieren wir skalierbare Einrichtungen für Micro-Apartments und Co-Living — mit konstanter Qualität auch bei großen Stückzahlen." },
  { q: "Was heißt Projektbegleitung genau?", a: "Wir übernehmen Bauleitung, Bauzeitenplan und Kommunikation aller Gewerke. Sie haben einen festen Ansprechpartner und einen Termin für die Übergabe." },
  { q: "Ab welcher Projektgröße lohnt sich Projektbegleitung?", a: "In der Regel ab drei beteiligten Gewerken. Bei einer reinen Küchenmontage ohne Umbau ist Projektbegleitung meistens nicht nötig." },
  { q: "Machen Sie auch 3D-Küchenplanungen?", a: "Ja, jede unserer Küchen wird in 3D geplant. So können Sie Ihre neue Küche schon vor dem Kauf realistisch erleben." },
  { q: "Kann ich meine bestehende Küche bei Ihnen umbauen lassen?", a: "In vielen Fällen ja — wir schauen uns die vorhandene Küche an und beraten ehrlich, ob Aufwertung, Teilerneuerung oder Neubau sinnvoller ist." },
  { q: "Wie kann ich einen Beratungstermin vereinbaren?", a: "Am einfachsten telefonisch unter 0178 8576150 oder über unser Kontaktformular. Wir melden uns zeitnah zurück." },
  { q: "Welche Arbeitsplatten sind möglich?", a: "Granit, Quarzkomposit, Keramik, Naturstein oder klassisch Melaminharz — wir beraten Sie zu Vor- und Nachteilen des jeweiligen Materials." },
  { q: "Gibt es Garantie auf die Möbel?", a: "Ja. Auf die Möbel gilt die Herstellergarantie (in der Regel 2–5 Jahre je nach Marke). Auf unsere Montage geben wir zusätzlich Gewährleistung nach BGB." },
];

const Faq = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="FAQ — Häufige Fragen zu Küchen & Objekteinrichtung | Vollmer"
        description="Antworten auf häufige Fragen zu Küchenplanung, Montage, Marken, Servicegebiet und Terminen — vom Küchenstudio Vollmer in Erftstadt."
        path="/faq"
        jsonLd={faqJsonLd(faqs)}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Häufige Fragen</h1>
          <p className="font-serif text-lg text-muted-foreground mb-10">
            Die wichtigsten Fragen rund um Küchenplanung, Objekteinrichtung und Projektbegleitung — kompakt beantwortet.
          </p>
          <FaqAccordion items={faqs} />
          <CtaBox />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Faq;