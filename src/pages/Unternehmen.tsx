import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Unternehmen = () => {
  useEffect(() => {
    document.title = "Unternehmen – Vollmer Objektmöbel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über das Unternehmen</h1>
          <p className="text-xl text-muted-foreground mb-8">Vollmer Objektmöbel stellt sich vor</p>
          <p className="text-foreground leading-relaxed mb-10">
            Willkommen bei Vollmer Objektmöbel, Ihrem zuverlässigen Partner in Sachen Küchenplanung und Objekteinrichtung!
            Der Weg zu ihrer Traumküche oder dem perfekt eingerichteten Büro beginnt.
          </p>

          <img
            src="https://static.wixstatic.com/media/81b6c4_f6091a239a244506abda8c64f9469116~mv2.jpg/v1/fill/w_1745,h_1124,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b6c4_f6091a239a244506abda8c64f9469116~mv2.jpg"
            alt="Moderne Küche von Vollmer Objektmöbel"
            className="w-full rounded-lg shadow-lg mb-12"
            loading="lazy"
          />

          <h2 className="text-3xl font-bold mb-4">Unsere Geschichte</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Als Küchenstudio in Erftstadt sind wir auch für unsere Kunden im Raum Köln, Bonn und Brühl aktiv. Neben erstklassigen Küchen bieten wir auch weitere Objekteinrichtungen an, wie zum Beispiel Büroeinrichtungen und Praxiseinrichtungen. Auch in den Segmenten Co-Working und Co-Living Spaces sowie Micro-Appartements können Sie sich auf unsere jahrzehntelange Erfahrung verlassen. Planungssicherheit, Zuverlässigkeit und ein Streben nach perfekter Handwerkskunst und Kundenzufriedenheit zeichnen unsere Arbeit aus.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Küchen vom Profi – Objektmöbel Vollmer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bei uns kaufen Sie ihre Küche. Und zwar nicht von der Stange, denn Küchenplanung und Küchenmontage sind ebenso Teil unserer Leistungen wie die Auswahl qualitativ hochwertiger und optisch ansprechender Produkte unserer handerlesenen Partner. Unser besonderer Service ist die Vor-Ort-Planung ihrer Küche bei Ihnen zu Hause. Beratung durch unsere Küchenexperten mit Aufmaß-Service direkt in Ihrer Küche. Wir stellen Ihnen eine Küchenplanung in 3D zur Verfügung. Mit Hilfe dieses Modells lassen sich Planung und Veranschaulichung vereinfachen. Wir haben verschiedene Küchenmarken und Hersteller in Programm, die wir passgenau planen und einbauen. Auch in Sachen Küchengeräten und Küchenausstattung haben wir eine vielfältige Auswahl.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sie kaufen Ihre Küche bei uns in Erftstadt und wir liefern und montieren sie auch im Raum Köln und Bonn. Zum Service gehört es auch, dass wir alle Elektro- und Sanitäranschlüsse für Sie erledigen, damit sie Ihre Küche direkt in Betrieb nehmen können. Gerne koordinieren wir auch andere Gewerke wie Maler oder Fliesenleger aus unserem weitreichenden Netzwerk für Sie. Aus unserem Netzwerk können wir ihnen auch Arbeitsplatten aus Granit, aus Quarzkomposit, aus Keramik oder ganz klassisch aus Melaminharz anbieten. Weiter können wir mit unseren Partnern auch Spritzschutz aus Glas anbieten.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Objekteinrichtung und Objektmöbel nach Maß in Köln, Bonn und Erftstadt</h2>
          <p className="text-muted-foreground leading-relaxed">
            Auch unsere Gewerbekunden finden bei uns Ihre Objekteinrichtung. Planen und gestalten Sie mit uns Büros, Praxen, Co-Working-Spaces und weitere Objekte. Profitieren Sie von unserer mehr als 10-jährigen Erfahrung auf diesem Gebiet – für Planungssicherheit und perfekte Kundenzufriedenheit. Erstklassige Empfangsbereiche, Wartezonen und Objektküchen für Büros, Praxen und Co-Working-Bereiche.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Gut geplant ist halb gebaut</h2>
          <p className="text-muted-foreground leading-relaxed">
            Egal ob Küche, Praxis oder Büro: Wenn bei der Auswahl, Planung und Vorbereitung der Einrichtung die richtigen Entscheidungen getroffen werden, kann man unnötigen Ärger, Verzögerungen und Überraschungen bei der Rechnung vermeiden. Kommunikation ist deswegen der Schlüssel zum Erfolg. Gerne besprechen wir bei einem Vor-Ort-Termin mit unseren Kunden die Projekte und können gegebenenfalls direkt Maß nehmen am Objekt. Vollmer Objektmöbel ist für Kunden in Erftstadt, Köln, Bonn und Brühl gerne und zuverlässig unterwegs. Vereinbaren Sie jetzt einen Beratungstermin per Telefon oder nutzen Sie das Kontaktformular, und wir melden uns zeitnah zurück.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Projektbegleitung</h2>
          <p className="text-muted-foreground leading-relaxed">
            Einrichtungsideen unserer Kunden setzen wir nicht nur gerne um, sondern stehen auch beratend zur Seite. Unsere Expertise kann Ideen ergänzen und zu einem Plan bzw. einem Projekt werden lassen. Auch bei der Projektbegleitung ist eine gute Absprache von hoher Wichtigkeit, denn wir haben uns zum Ziel gesetzt, Ihre Vorstellungen zur besten Zufriedenheit umzusetzen. Rufen Sie jetzt an und lassen Sie sich unverbindlich beraten.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Unternehmen;
