import type { FaqItem } from "@/components/FaqAccordion";

export interface Service {
  slug: string;
  navLabel: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  images: { file: string; alt: string }[];
  faqs: FaqItem[];
}

const wix = (file: string) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_1200,h_800,q_85,enc_auto/${file}`;

export const services: Service[] = [
  {
    slug: "kuechenstudio-erftstadt",
    navLabel: "Küchenstudio",
    h1: "Küchenstudio Erftstadt — Küchenplanung & Montage",
    title: "Küchenstudio Erftstadt | 3D-Küchenplanung & Montage — Vollmer",
    description:
      "Küchenstudio in Erftstadt für Köln, Bonn & Brühl: Vor-Ort-Aufmaß, 3D-Planung, Marken wie Nobilia, Häcker, Next125, Siemens, Miele, NEFF, BORA. Jetzt beraten lassen.",
    intro:
      "Als Küchenstudio in Erftstadt planen und montieren wir Ihre neue Küche schlüsselfertig — von der Idee bis zum ersten Kochabend. Wir kommen zu Ihnen nach Hause, nehmen Maß, entwickeln eine 3D-Planung und liefern eine Küche, die exakt zu Ihrem Raum und Alltag passt.",
    paragraphs: [
      "Unsere Küchen sind keine Küchen von der Stange. Wir arbeiten ausschließlich mit erstklassigen Herstellern wie Nobilia, Häcker und Next125 zusammen und kombinieren sie mit hochwertigen Einbaugeräten von Siemens, Miele, NEFF und BORA. So entsteht eine Einbauküche, die langlebig, funktional und individuell auf Ihre Wünsche zugeschnitten ist — ob klassische L-Küche, offene Wohnküche mit Kochinsel oder eine kompakte Zweizeiler-Küche.",
      "Der Ablauf ist bei uns transparent: Nach einem ersten kostenlosen Beratungsgespräch machen wir einen Vor-Ort-Termin bei Ihnen zu Hause. Dort nehmen wir das exakte Aufmaß, prüfen Anschlüsse für Strom und Wasser, klären Ihre Wünsche zu Materialien, Arbeitsplatten und Geräten und entwickeln daraus eine 3D-Küchenplanung, die Sie schon vor dem Kauf realistisch begehen können.",
      "Zur Montage rücken wir mit unserem eigenen Team an. Wir übernehmen Lieferung, Aufbau, alle Elektro- und Sanitäranschlüsse sowie die Feinjustierung. Auf Wunsch koordinieren wir zusätzlich Maler, Fliesenleger und Elektriker aus unserem Netzwerk. Für die Arbeitsplatte stehen Granit, Quarzkomposit, Keramik oder Melaminharz zur Auswahl — passend ergänzt durch Spritzschutz aus Glas oder Naturstein.",
      "Unser Servicegebiet umfasst Erftstadt, Köln, Bonn, Brühl und den gesamten Rhein-Erft-Kreis. Rufen Sie uns unter 0178 8576150 an oder senden Sie uns eine Nachricht — wir melden uns zeitnah zurück und vereinbaren Ihren Beratungstermin.",
    ],
    bullets: [
      "Vor-Ort-Aufmaß und persönliche Beratung bei Ihnen zu Hause",
      "3D-Küchenplanung — Ihre Küche vor dem Kauf realistisch erleben",
      "Marken: Nobilia, Häcker, Next125 · Geräte: Siemens, Miele, NEFF, BORA",
      "Arbeitsplatten aus Granit, Quarzkomposit, Keramik oder Melaminharz",
      "Komplette Montage inkl. Elektro- und Sanitäranschluss",
      "Koordination weiterer Gewerke aus unserem Netzwerk",
    ],
    images: [
      { file: "81b6c4_46a9aebeb77d41c0b2871d3465386966~mv2_d_3500_2625_s_4_2.jpeg", alt: "Moderne Einbauküche geplant vom Küchenstudio Vollmer in Erftstadt" },
      { file: "81b6c4_fc0c64b0444540659460b3d56d09bfb4~mv2_d_4000_3000_s_4_2.jpg", alt: "Küchenplanung mit Naturstein-Arbeitsplatte und Kochinsel" },
    ],
    faqs: [
      { q: "Wie läuft eine Küchenplanung bei Ihnen ab?", a: "Nach einem kostenlosen Erstgespräch vereinbaren wir einen Vor-Ort-Termin bei Ihnen zu Hause. Dort messen wir auf, klären Ihre Wünsche und erstellen eine 3D-Planung. Nach Ihrer Freigabe bestellen wir die Küche und montieren sie schlüsselfertig." },
      { q: "Für welche Regionen sind Sie tätig?", a: "Wir sind in Erftstadt ansässig und betreuen Kunden im gesamten Rhein-Erft-Kreis, in Köln, Bonn, Brühl und Umgebung." },
      { q: "Mit welchen Küchenmarken arbeiten Sie?", a: "Wir planen und montieren Küchen von Nobilia, Häcker und Next125. Bei den Einbaugeräten setzen wir auf Siemens, Miele, NEFF und BORA." },
      { q: "Übernehmen Sie auch Elektro- und Wasseranschlüsse?", a: "Ja. Wir schließen alle Geräte an, sodass Sie Ihre Küche direkt nach der Montage nutzen können. Auf Wunsch koordinieren wir auch Maler oder Fliesenleger aus unserem Netzwerk." },
      { q: "Was kostet eine geplante Küche?", a: "Das hängt stark von Größe, Ausstattung und Marken ab. Nach dem Vor-Ort-Termin erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten." },
    ],
  },
  {
    slug: "praxiseinrichtung",
    navLabel: "Praxiseinrichtung",
    h1: "Praxiseinrichtung Köln, Bonn & Erftstadt",
    title: "Praxiseinrichtung | Empfang, Wartezone, Behandlungsraum — Vollmer",
    description:
      "Moderne Praxiseinrichtung für Ärzte, Zahnärzte & Therapeuten in Erftstadt, Köln und Bonn. Empfangstheken, Wartebereiche und Behandlungsräume — maßgefertigt.",
    intro:
      "Vollmer Objektmöbel plant und liefert Praxiseinrichtungen für Arzt-, Zahnarzt-, Therapie- und Heilpraktiker-Praxen. Vom repräsentativen Empfang über die Wartezone bis zum funktionalen Behandlungsraum — alles aus einer Hand und passgenau auf Ihre Räume zugeschnitten.",
    paragraphs: [
      "Der Empfang ist die Visitenkarte Ihrer Praxis. Wir gestalten Empfangstheken, die Ihren Mitarbeitenden ergonomisches Arbeiten ermöglichen und gleichzeitig auf Patientinnen und Patienten einladend wirken. Materialien, Farben und Beleuchtung stimmen wir auf Ihre Corporate Identity ab.",
      "In der Wartezone kombinieren wir bequeme Sitzmöbel mit robusten, leicht zu reinigenden Oberflächen — hygienisch, DGUV-konform und optisch stimmig. Auf Wunsch integrieren wir Info-Displays, Getränkestationen und Kinderecken.",
      "Behandlungsräume planen wir mit Fokus auf Funktion: Unterschränke mit hygienegerechten Fronten, Waschplätze, Materialschränke und individuelle Stauraumlösungen. Wir arbeiten mit Herstellern zusammen, die Möbel speziell für den Medizinbereich fertigen — inklusive der passenden Waschtische und Arbeitsflächen.",
      "Sie profitieren von unserer langjährigen Erfahrung mit Praxen und Kliniken. Für die Referenz eines vollständigen Klinikbereichs schauen Sie sich unser Projekt zur Krankenhausausstattung an.",
    ],
    bullets: [
      "Empfangstheken repräsentativ und ergonomisch",
      "Wartebereiche mit hygienischen, langlebigen Oberflächen",
      "Behandlungsräume: Waschplätze, Unterschränke, Materialschränke",
      "Corporate-Design-konforme Materialien und Farben",
      "Vollständige Bauleitung und Gewerke-Koordination auf Wunsch",
    ],
    images: [
      { file: "81b6c4_19e898634e5d4d6e998c6ef5bdc52841~mv2_d_3477_2332_s_2.jpeg", alt: "Moderne Praxiseinrichtung mit Empfangstheke geplant von Vollmer Objektmöbel" },
      { file: "81b6c4_1eefbab6cc074d468b27bed68d898a1e~mv2.jpg", alt: "Empfangsbereich im Klinikprojekt – hell und funktional" },
    ],
    faqs: [
      { q: "Für welche Praxen planen Sie Einrichtungen?", a: "Wir arbeiten für Arzt-, Zahnarzt-, Kieferorthopädie-, Physiotherapie- und Heilpraktiker-Praxen sowie für kleinere Kliniken." },
      { q: "Erfüllen Ihre Möbel Hygiene-Anforderungen?", a: "Ja, wir arbeiten mit Materialien und Herstellern, die für den Medizinbereich zugelassen sind — fugenarm, desinfektionsmittelbeständig und leicht zu reinigen." },
      { q: "Übernehmen Sie auch die Bauleitung?", a: "Auf Wunsch koordinieren wir alle Gewerke — Elektrik, Sanitär, Maler, Bodenleger — und stellen einen Bauzeitenplan auf. Mehr Details finden Sie unter Projektbegleitung." },
      { q: "Wie lange dauert eine Praxiseinrichtung?", a: "Vom Auftrag bis zur Übergabe liegen typischerweise 8–14 Wochen — abhängig von Umfang und Lieferzeiten der Möbel." },
    ],
  },
  {
    slug: "bueroeinrichtung",
    navLabel: "Büroeinrichtung",
    h1: "Büroeinrichtung in Erftstadt, Köln & Bonn",
    title: "Büroeinrichtung Köln, Bonn, Erftstadt | Singlebüro, Coworking",
    description:
      "Büroeinrichtung nach Maß: Einzelbüros, Coworking-Areas, Teeküchen und Meeting-Räume — professionell geplant, montiert und schlüsselfertig übergeben.",
    intro:
      "Wir richten Büros ein, in denen produktiv gearbeitet wird — vom Home-Office und Einzelbüro bis zum Coworking-Space. Dabei planen wir Möbel, Teeküchen, Empfangsbereiche und Meeting-Zonen als zusammenhängendes Gesamtkonzept.",
    paragraphs: [
      "Einzelbüros und Chefzimmer statten wir mit hochwertigen Schreibtischen, individuellen Regallösungen und passenden Sideboards aus. Die Materialien wählen wir so, dass sie zur Architektur und zum Markenauftritt Ihres Unternehmens passen — von warmem Nussbaum bis zu klarem Weiß-Grau.",
      "In Coworking-Umgebungen und Open-Space-Büros geht es um Akustik, Flexibilität und Aufenthaltsqualität. Wir planen Meeting-Booths, Copy-Points, Sitznischen und Lounges — inklusive der Teeküche als sozialer Treffpunkt. Ein solches Projekt haben wir für den Regus Business Club umgesetzt.",
      "Teeküchen und kleine Bürokäufen sind unsere Spezialität: Wir planen Grundrisse, in denen mehrere Personen gleichzeitig entspannt Kaffee holen können, wählen langlebige Arbeitsplatten (Keramik, Quarz) und statten sie mit Quooker, Kühl- und Spülgeräten aus.",
      "Wenn Sie ein neues Bürogebäude beziehen oder Ihre bestehenden Räume umgestalten möchten, begleiten wir Sie vom ersten Grundriss bis zur schlüsselfertigen Übergabe.",
    ],
    bullets: [
      "Einzel- und Chefzimmer nach Maß",
      "Coworking-Areas mit Meeting-Booths und Lounges",
      "Teeküchen mit hochwertigen Geräten und Arbeitsplatten",
      "Empfangs- und Wartebereiche mit Corporate-Design",
      "Akustik- und Trennwandlösungen für Open-Space-Büros",
    ],
    images: [
      { file: "81b6c4_a39ec49f754b4e87871417e45a09abf3~mv2_d_5760_3840_s_4_2.jpeg", alt: "Coworking-Bereich mit Bürokäufe und Sitznischen von Vollmer Objektmöbel" },
      { file: "81b6c4_892b027834a94efdab23ef8343158d8c~mv2_d_4000_3000_s_4_2.jpg", alt: "Business-Club Lounge mit Teeküche" },
    ],
    faqs: [
      { q: "Planen Sie auch kleinere Büros?", a: "Ja, wir planen alles vom Home-Office bis zu Coworking-Spaces mit über 100 Arbeitsplätzen." },
      { q: "Bieten Sie auch Akustik-Lösungen an?", a: "Ja, wir integrieren Akustik-Trennwände, gedämmte Meeting-Booths und schallabsorbierende Wandpaneele." },
      { q: "Kann ich einzelne Möbelstücke bestellen?", a: "Unser Fokus liegt auf ganzheitlichen Einrichtungskonzepten. Sprechen Sie uns bei einzelnen Sondermöbeln gerne an — wir prüfen, ob es passt." },
    ],
  },
  {
    slug: "objektmoebel",
    navLabel: "Objektmöbel",
    h1: "Objektmöbel für Coworking, Co-Living & Micro-Apartments",
    title: "Objektmöbel Erftstadt | Coworking, Co-Living, Micro-Apartments",
    description:
      "Objektmöbel nach Maß für Coworking, Co-Living und Micro-Apartments in NRW. Langlebige Einrichtungen mit hoher Nutzungsintensität — vom Konzept bis zur Montage.",
    intro:
      "Coworking, Co-Living und Micro-Apartments sind unser Zuhause. Für Betreiber und Bauherren planen wir Möbel, die täglich hohen Nutzungsdruck aushalten — und dabei trotzdem hochwertig, wohnlich und effizient bleiben.",
    paragraphs: [
      "Coworking-Spaces brauchen Flexibilität: Arbeitsplätze, die morgens Einzelplatz sind und nachmittags Team-Table werden, dazu Meeting-Räume, Phone-Booths und eine großzügige Küche als Herzstück. Wir liefern das komplette Möbelprogramm aus einer Hand.",
      "In Co-Living- und Micro-Apartment-Projekten planen wir Einbauküchen im kleinen Format, kompakte Bad- und Schlafmöbel und modulare Stauraumlösungen. Ziel ist, auf 20–35 m² ein vollwertiges Zuhause zu schaffen — mit Materialien, die einer täglichen Reinigung durch das Betreiber-Team standhalten.",
      "Für Bauträger und Betreiber ist Skalierbarkeit entscheidend: Wir liefern gleiche Einheiten in großer Stückzahl mit konstanter Qualität. Bei Bedarf koordinieren wir alle Gewerke bis zur schlüsselfertigen Übergabe.",
    ],
    bullets: [
      "Coworking-Areas mit Bürokäufe, Lounges und Meeting-Booths",
      "Co-Living: Einbauküchen, Badmöbel, Schlafraumlösungen",
      "Micro-Apartments modular und skalierbar",
      "Betreiberfreundliche Materialien — langlebig und leicht zu reinigen",
      "Skalierung auf große Stückzahlen mit konstanter Qualität",
    ],
    images: [
      { file: "81b6c4_892b027834a94efdab23ef8343158d8c~mv2_d_4000_3000_s_4_2.jpg", alt: "Objektmöbel Coworking Area mit freistehender Küche" },
      { file: "81b6c4_4a6f00f080fe47e4b9cd83d387ef5bca~mv2_d_3000_4000_s_4_2.jpg", alt: "Business-Club Möbel für Coworking" },
    ],
    faqs: [
      { q: "Welche Stückzahlen können Sie liefern?", a: "Wir haben Erfahrung mit Projekten von einzelnen Micro-Apartments bis zu über 100 gleichartigen Einheiten." },
      { q: "Übernehmen Sie auch die Bauleitung?", a: "Ja, für größere Objekte bieten wir vollständige Projektbegleitung inkl. Bauzeitenplan und Gewerke-Koordination." },
      { q: "Wie langlebig sind die Möbel?", a: "Wir wählen Kanten, Beschläge und Oberflächen bewusst für hohe Nutzungsintensität — mit einer typischen Lebensdauer von 10+ Jahren." },
    ],
  },
  {
    slug: "stahlkuechen",
    navLabel: "Stahlküchen",
    h1: "Stahlküchen — langlebig für Objekt und Privat",
    title: "Stahlküchen Erftstadt | robust, hygienisch, langlebig — Vollmer",
    description:
      "Stahlküchen für Gastronomie, Objekt und Privat: absolut hygienisch, kratzfest und praktisch unverwüstlich. Planung und Montage in Erftstadt, Köln, Bonn.",
    intro:
      "Eine Stahlküche ist die dauerhafteste Küche, die Sie kaufen können. Wir planen Stahlküchen sowohl für Objekte mit hoher Nutzungsintensität — Gastronomie, Kantinen, Coworking — als auch für Privathaushalte, die eine wirklich langlebige Küche suchen.",
    paragraphs: [
      "Edelstahl ist absolut hygienisch, hitze- und wasserresistent, kratzfest und altert würdig. Anders als lackierte Fronten wird Edelstahl nicht mit den Jahren „aus der Mode“ — er entwickelt eine natürliche Patina und wirkt in jedem Jahrzehnt zeitgemäß.",
      "Für Objektküchen in Gastronomie, Kantinen oder Coworking-Spaces sind Stahlküchen praktisch alternativlos: Sie halten den täglichen Einsatz aus, sind mit gewerblichen Reinigungsmitteln kompatibel und erfüllen jede Hygiene-Vorschrift.",
      "Auch privat wird die Stahlküche immer beliebter. Wir kombinieren Edelstahl-Fronten mit Holz-Akzenten (z. B. Nussbaum-Regalen), Naturstein-Arbeitsplatten und hochwertigen Geräten von Miele, BORA oder Siemens. Ergebnis: eine Küche mit Charakter, die eine Generation überdauert.",
    ],
    bullets: [
      "Hygienisch — DIN-konform für Gastronomie und Objekt",
      "Kratzfest, hitzebeständig, wasserresistent",
      "Kombinierbar mit Naturstein, Holz und Glas",
      "Für Privatküchen, Gastronomie und Kantinen",
      "Lebensdauer 20+ Jahre",
    ],
    images: [
      { file: "81b6c4_fc0c64b0444540659460b3d56d09bfb4~mv2_d_4000_3000_s_4_2.jpg", alt: "Objektküche mit Edelstahl-Elementen" },
      { file: "81b6c4_92e92c169bba4c9bb0086c284f135594~mv2_d_4000_3000_s_4_2.jpg", alt: "Küche mit Edelstahl-Fronten und Naturstein-Arbeitsplatte" },
    ],
    faqs: [
      { q: "Ist eine Stahlküche laut?", a: "Moderne Stahlküchen sind rückseitig gedämmt — Sie hören keinen Unterschied zu einer klassischen Einbauküche." },
      { q: "Wird der Edelstahl matt oder bleibt er glänzend?", a: "Beides ist möglich. Gebürsteter Edelstahl wirkt matt und zeigt Fingerabdrücke kaum; polierter Edelstahl bleibt hochglänzend." },
      { q: "Ist eine Stahlküche teurer als eine normale Einbauküche?", a: "Bei vergleichbarer Ausstattung liegt eine Stahlküche etwa 20–40 % über einer klassischen Küche mit Kunststoff-Fronten — dafür halten sie deutlich länger." },
    ],
  },
  {
    slug: "projektbegleitung",
    navLabel: "Projektbegleitung",
    h1: "Projektbegleitung — Bauleitung, Gewerke, Bauzeitenplan",
    title: "Projektbegleitung Erftstadt | Bauleitung & Gewerke-Koordination",
    description:
      "Bauleitung, Gewerke-Koordination und Bauzeitenplan für Einrichtungsprojekte in Erftstadt, Köln, Bonn und Brühl. Alles aus einer Hand — mit einem festen Ansprechpartner.",
    intro:
      "Bei größeren Einrichtungsprojekten wollen Sie nicht mit fünf Gewerken telefonieren. Wir übernehmen die vollständige Projektbegleitung: Bauleitung, Terminkoordination, Bauzeitenplan und Kommunikation zwischen allen Beteiligten.",
    paragraphs: [
      "Nach dem Vor-Ort-Termin erstellen wir einen realistischen Bauzeitenplan. Darin sind alle Gewerke — Elektrik, Sanitär, Maler, Bodenleger, Fliesenleger, Montage — mit Anfangs- und Endterminen verzeichnet. So wissen Sie und alle Beteiligten jederzeit, was als Nächstes ansteht.",
      "Auf der Baustelle sind wir Ihr fester Ansprechpartner. Wir stimmen ab, prüfen die Ausführung, dokumentieren Fortschritt und Mängel und sorgen dafür, dass die Übergabe pünktlich stattfindet.",
      "Aus unserem Netzwerk können wir alle Gewerke stellen — vom Küchenbauer über den Elektriker bis zum Naturstein-Handwerker. Sie haben einen Vertrag, einen Ansprechpartner und einen Termin für die schlüsselfertige Übergabe.",
    ],
    bullets: [
      "Realistischer Bauzeitenplan mit allen Gewerken",
      "Ein fester Ansprechpartner für Ihr Projekt",
      "Netzwerk aus Elektrik, Sanitär, Maler, Fliesenleger, Naturstein",
      "Regelmäßige Baustellen-Begehungen und Dokumentation",
      "Schlüsselfertige Übergabe zum vereinbarten Termin",
    ],
    images: [
      { file: "81b6c4_f6d1c59b161d4864abf8d1cbf3735b70~mv2_d_4500_3000_s_4_2.jpeg", alt: "Projektbegleitung und Bauleitung durch Vollmer Objektmöbel" },
      { file: "81b6c4_eb2215591c3b41ea98020f9561599b18~mv2_d_4000_3000_s_4_2.jpg", alt: "Wohn-Küche schlüsselfertig übergeben" },
    ],
    faqs: [
      { q: "Ab welcher Projektgröße lohnt sich Projektbegleitung?", a: "In der Regel ab drei beteiligten Gewerken. Bei einer reinen Küchenmontage ohne Umbau ist es meistens nicht nötig." },
      { q: "Berechnen Sie Projektbegleitung separat?", a: "Ja, wir kalkulieren die Projektbegleitung transparent nach Aufwand — Sie erhalten vorab ein Festpreisangebot." },
      { q: "Können Sie auch Ausschreibungen begleiten?", a: "Ja, bei größeren Objektprojekten unterstützen wir Sie bei Ausschreibung, Vergabe und Abnahme." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const withImageUrl = (file: string) => wix(file);