import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

// Alle Routen, die prerendert werden sollen
const routes = [
  { path: '/', output: 'index.html' },
  { path: '/unternehmen', output: 'unternehmen.html' },
  { path: '/referenzen', output: 'referenzen.html' },
  { path: '/kontakt', output: 'kontakt.html' },
  { path: '/faq', output: 'faq.html' },
  { path: '/kuechenstudio-erftstadt', output: 'kuechenstudio-erftstadt.html' },
  { path: '/praxiseinrichtung', output: 'praxiseinrichtung.html' },
  { path: '/bueroeinrichtung', output: 'bueroeinrichtung.html' },
  { path: '/objektmoebel', output: 'objektmoebel.html' },
  { path: '/stahlkuechen', output: 'stahlkuechen.html' },
  { path: '/projektbegleitung', output: 'projektbegleitung.html' },
  { path: '/impressum', output: 'impressum.html' },
  { path: '/datenschutz', output: 'datenschutz.html' },
  { path: '/referenzen/wohn-kueche-naturstein', output: 'referenzen/wohn-kueche-naturstein.html' },
  { path: '/referenzen/business-club-coworking', output: 'referenzen/business-club-coworking.html' },
  { path: '/referenzen/buero-kueche-theke', output: 'referenzen/buero-kueche-theke.html' },
  { path: '/referenzen/krankenhausausstattung', output: 'referenzen/krankenhausausstattung.html' },
  // Neue regionale Seiten
  { path: '/kuechen-rhein-erft-kreis', output: 'kuechen-rhein-erft-kreis.html' },
  { path: '/kuechenstudio-koeln', output: 'kuechenstudio-koeln.html' },
  { path: '/kuechenstudio-bonn', output: 'kuechenstudio-bonn.html' },
  { path: '/kuechenstudio-bruehl', output: 'kuechenstudio-bruehl.html' },
  { path: '/teekueche-buero', output: 'teekueche-buero.html' },
];

// Metadaten für jede Route
const routeMeta = {
  '/': {
    title: 'Vollmer Objektmöbel | Küchenstudio Erftstadt — Köln, Bonn, Brühl',
    description: 'Maßküchen, Praxiseinrichtung & Objektmöbel in Erftstadt. 3D-Küchenplanung, Vor-Ort-Aufmaß, schlüsselfertige Montage. Jetzt beraten lassen!',
  },
  '/unternehmen': {
    title: 'Unternehmen — Vollmer Objektmöbel aus Erftstadt',
    description: 'Seit 2017 planen und montieren wir Küchen und Objektmöbel in Erftstadt, Köln, Bonn und Brühl — mit mehr als 10 Jahren Berufserfahrung.',
  },
  '/referenzen': {
    title: 'Referenzen | Küchen & Objekteinrichtung — Vollmer',
    description: 'Einblicke in unsere Arbeit: Wohnküchen, Business-Clubs, Büroküchen und Krankenhäuser — alles aus einer Hand geplant und montiert.',
  },
  '/kontakt': {
    title: 'Kontakt | Jetzt Beratungstermin vereinbaren — Vollmer',
    description: 'Rufen Sie uns an unter 0178 8576150 oder schreiben Sie uns — wir melden uns zeitnah für Ihren Beratungstermin zurück.',
  },
  '/faq': {
    title: 'FAQ — Häufige Fragen zu Küchen & Objekteinrichtung | Vollmer',
    description: 'Antworten auf häufige Fragen zu Küchenplanung, Montage, Marken, Servicegebiet und Terminen — vom Küchenstudio Vollmer in Erftstadt.',
  },
  '/kuechenstudio-erftstadt': {
    title: 'Küchenstudio Erftstadt | 3D-Küchenplanung & Montage — Vollmer',
    description: 'Küchenstudio in Erftstadt für Köln, Bonn & Brühl: Vor-Ort-Aufmaß, 3D-Planung, Marken wie Nobilia, Häcker, Next125, Siemens, Miele, NEFF, BORA. Jetzt beraten lassen.',
  },
  '/praxiseinrichtung': {
    title: 'Praxiseinrichtung | Empfang, Wartezone, Behandlungsraum — Vollmer',
    description: 'Moderne Praxiseinrichtung für Ärzte, Zahnärzte & Therapeuten in Erftstadt, Köln und Bonn. Empfangstheken, Wartebereiche und Behandlungsräume — maßgefertigt.',
  },
  '/bueroeinrichtung': {
    title: 'Büroeinrichtung Köln, Bonn, Erftstadt | Singlebüro, Coworking',
    description: 'Büroeinrichtung nach Maß: Einzelbüros, Coworking-Areas, Teeküchen und Meeting-Räume — professionell geplant, montiert und schlüsselfertig übergeben.',
  },
  '/objektmoebel': {
    title: 'Objektmöbel Erftstadt | Coworking, Co-Living, Micro-Apartments',
    description: 'Objektmöbel nach Maß für Coworking, Co-Living und Micro-Apartments in NRW. Langlebige Einrichtungen mit hoher Nutzungsintensität — vom Konzept bis zur Montage.',
  },
  '/stahlkuechen': {
    title: 'Stahlküchen Erftstadt | robust, hygienisch, langlebig — Vollmer',
    description: 'Stahlküchen für Gastronomie, Objekt und Privat: absolut hygienisch, kratzfest und praktisch unverwüstlich. Planung und Montage in Erftstadt, Köln, Bonn.',
  },
  '/projektbegleitung': {
    title: 'Projektbegleitung Erftstadt | Bauleitung & Gewerke-Koordination',
    description: 'Bauleitung, Gewerke-Koordination und Bauzeitenplan für Einrichtungsprojekte in Erftstadt, Köln, Bonn und Brühl. Alles aus einer Hand — mit einem festen Ansprechpartner.',
  },
  '/impressum': {
    title: 'Impressum — Vollmer Objektmöbel',
    description: 'Impressum und rechtliche Angaben von Vollmer Objektmöbel, Maurice Vollmer, Schusters Garten 4, 50374 Erftstadt.',
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung — Vollmer Objektmöbel',
    description: 'Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten auf vollmer-objektmoebel.com.',
  },
  '/referenzen/wohn-kueche-naturstein': {
    title: 'Wohn-Küche mit Naturstein | Referenz — Vollmer',
    description: 'Wohnküche mit Naturstein-Arbeitsplatte San Sebastian, Nussbaumfronten, Kochinsel und Spiegelrückwand — geplant und montiert von Vollmer.',
  },
  '/referenzen/business-club-coworking': {
    title: 'Business Club Coworking-Area | Referenz — Vollmer',
    description: 'Coworking-Einrichtung für Regus Business Club mit freistehender Küche, Lounges und Meeting-Bereichen — schlüsselfertig übergeben.',
  },
  '/referenzen/buero-kueche-theke': {
    title: 'Büroküche mit Theke Köln | Referenz — Vollmer',
    description: 'Moderne Büroküche mit Theke für einen Unternehmenskunden im Raum Köln — hochwertig und funktional.',
  },
  '/referenzen/krankenhausausstattung': {
    title: 'Krankenhausausstattung | Referenz — Vollmer',
    description: 'Vollständige Ausstattung eines Krankenhausbereichs: Patientenzimmer, Stationstresen, Personalküchen, Wandpaneele und Sitzbänke.',
  },
  '/kuechen-rhein-erft-kreis': {
    title: 'Küchenplanung im Rhein-Erft-Kreis | Hürth, Kerpen, Frechen, Erftstadt',
    description: 'Küchenstudio für den Rhein-Erft-Kreis: Vor-Ort-Planung in Hürth, Kerpen, Frechen, Wesseling, Erftstadt — 3D-Visualisierung, Markenküchen, schlüsselfertige Montage.',
  },
  '/kuechenstudio-koeln': {
    title: 'Küchenstudio Köln | 3D-Planung & Montage aus Erftstadt — Vollmer',
    description: 'Küchenstudio für Köln: Persönliche Vor-Ort-Beratung, 3D-Küchenplanung, Nobilia/Häcker/Next125, Siemens/Miele/NEFF/BORA — schlüsselfertige Montage aus Erftstadt.',
  },
  '/kuechenstudio-bonn': {
    title: 'Küchenstudio Bonn | Vor-Ort-Aufmaß, 3D-Planung, schlüsselfertig — Vollmer',
    description: 'Küchenstudio für Bonn: Vor-Ort-Aufmaß, 3D-Planung, Markenküchen von Nobilia/Häcker/Next125, Einbaugeräte Siemens/Miele/NEFF/BORA — aus Erftstadt.',
  },
  '/kuechenstudio-bruehl': {
    title: 'Küche Brühl | Küchenplanung & Montage — Vollmer Objektmöbel',
    description: 'Küchenstudio für Brühl: Küchenplanung, Vor-Ort-Aufmaß, 3D-Visualisierung, Markenküchen und schlüsselfertige Montage — aus dem benachbarten Erftstadt.',
  },
  '/teekueche-buero': {
    title: 'Teeküche & Büroküche für Büros & Coworking | Köln, Bonn, Erftstadt',
    description: 'Teeküchen und Büroküchen für Büros, Coworking-Spaces und Unternehmen in Köln, Bonn, Erftstadt — langlebig, funktional, schlüsselfertig montiert.',
  },
};

console.log('🔧 Starte Prerendering...');

// Lese die base index.html
const baseHtml = fs.readFileSync(indexPath, 'utf-8');

// Erstelle prerenderte HTML-Dateien für jede Route
routes.forEach((route) => {
  const meta = routeMeta[route.path];
  if (!meta) {
    console.warn(`⚠️  Keine Metadaten für ${route.path} gefunden`);
    return;
  }

  const dom = new JSDOM(baseHtml);
  const doc = dom.window.document;

  // Update title
  const titleEl = doc.querySelector('title');
  if (titleEl) titleEl.textContent = meta.title;

  // Update meta description
  const descEl = doc.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', meta.description);

  // Update canonical
  const canonicalUrl = `https://vollmer-objektmoebel.com${route.path}`;
  const canonicalEl = doc.querySelector('link[rel="canonical"]');
  if (canonicalEl) canonicalEl.setAttribute('href', canonicalUrl);

  // Update OG tags
  const ogUrlEl = doc.querySelector('meta[property="og:url"]');
  if (ogUrlEl) ogUrlEl.setAttribute('content', canonicalUrl);
  
  const ogTitleEl = doc.querySelector('meta[property="og:title"]');
  if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);
  
  const ogDescEl = doc.querySelector('meta[property="og:description"]');
  if (ogDescEl) ogDescEl.setAttribute('content', meta.description);

  // Update Twitter tags
  const twitterTitleEl = doc.querySelector('meta[name="twitter:title"]');
  if (twitterTitleEl) twitterTitleEl.setAttribute('content', meta.title);
  
  const twitterDescEl = doc.querySelector('meta[name="twitter:description"]');
  if (twitterDescEl) twitterDescEl.setAttribute('content', meta.description);

  // Schreibe die Datei
  const outputPath = path.join(distDir, route.output);
  const outputDir = path.dirname(outputPath);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, dom.serialize(), 'utf-8');
  console.log(`✅ ${route.path} → ${route.output}`);
});

// Erstelle 404.html
const notFoundMeta = {
  title: '404 — Seite nicht gefunden | Vollmer Objektmöbel',
  description: 'Die gesuchte Seite wurde nicht gefunden. Zurück zur Startseite oder direkt zum Küchenstudio Erftstadt.',
};

const dom = new JSDOM(baseHtml);
const doc = dom.window.document;

const titleEl = doc.querySelector('title');
if (titleEl) titleEl.textContent = notFoundMeta.title;

const descEl = doc.querySelector('meta[name="description"]');
if (descEl) descEl.setAttribute('content', notFoundMeta.description);

const robotsEl = doc.querySelector('meta[name="robots"]');
if (robotsEl) {
  robotsEl.setAttribute('content', 'noindex,nofollow');
} else {
  const metaRobots = doc.createElement('meta');
  metaRobots.setAttribute('name', 'robots');
  metaRobots.setAttribute('content', 'noindex,nofollow');
  doc.head.appendChild(metaRobots);
}

fs.writeFileSync(path.join(distDir, '404.html'), dom.serialize(), 'utf-8');
console.log('✅ 404 → 404.html');

console.log('✨ Prerendering abgeschlossen!');
