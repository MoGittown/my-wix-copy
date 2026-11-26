import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const serverEntry = path.resolve(distDir, 'server', 'entry-server.js');

// Alle Routen für Prerendering
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
  { path: '/kuechen-rhein-erft-kreis', output: 'kuechen-rhein-erft-kreis.html' },
  { path: '/kuechenstudio-koeln', output: 'kuechenstudio-koeln.html' },
  { path: '/kuechenstudio-bonn', output: 'kuechenstudio-bonn.html' },
  { path: '/kuechenstudio-bruehl', output: 'kuechenstudio-bruehl.html' },
  { path: '/teekueche-buero', output: 'teekueche-buero.html' },
  { path: '/praxiseinrichtung-koeln-bonn', output: 'praxiseinrichtung-koeln-bonn.html' },
  { path: '/bueroeinrichtung-rhein-erft-kreis', output: 'bueroeinrichtung-rhein-erft-kreis.html' },
];

console.log('🔧 Starte SSR Prerendering...');

// Template HTML laden
const templatePath = path.join(distDir, 'index.html');
let template = fs.readFileSync(templatePath, 'utf-8');

// Server-Rendering-Funktion dynamisch laden
const { render } = await import(serverEntry);

// Alle Routen prerendern
for (const route of routes) {
  try {
    console.log(`⚙️  Rendering ${route.path}...`);
    
    const { html, helmetContext } = render(route.path);
    const { helmet } = helmetContext;

    // HTML mit gerendertem Body + Helmet-Metadaten zusammenbauen
    let renderedHtml = template;

    // Body-Content einsetzen (in <div id="root">)
    renderedHtml = renderedHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Helmet-Tags einsetzen - entferne alte und füge neue ein
    if (helmet) {
      // Title ersetzen
      if (helmet.title) {
        renderedHtml = renderedHtml.replace(
          /<title[^>]*>.*?<\/title>/,
          helmet.title.toString()
        );
      }
      
      // Entferne alte dynamische Meta-Tags (description, canonical, og:*, twitter:*)
      renderedHtml = renderedHtml.replace(
        /<meta name="description"[^>]*>/,
        ''
      );
      renderedHtml = renderedHtml.replace(
        /<link rel="canonical"[^>]*>/,
        ''
      );
      renderedHtml = renderedHtml.replace(
        /<meta property="og:[^"]*"[^>]*>/g,
        ''
      );
      renderedHtml = renderedHtml.replace(
        /<meta name="twitter:[^"]*"[^>]*>/g,
        ''
      );
      
      // Füge Helmet Meta-Tags ein
      if (helmet.meta) {
        const metaString = helmet.meta.toString();
        renderedHtml = renderedHtml.replace(
          '</head>',
          `${metaString}\n</head>`
        );
      }
      
      if (helmet.link) {
        const linkString = helmet.link.toString();
        renderedHtml = renderedHtml.replace(
          '</head>',
          `${linkString}\n</head>`
        );
      }
      
      if (helmet.script) {
        const scriptString = helmet.script.toString();
        renderedHtml = renderedHtml.replace(
          '</head>',
          `${scriptString}\n</head>`
        );
      }
    }

    // Datei schreiben
    const outputPath = path.join(distDir, route.output);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, renderedHtml, 'utf-8');
    console.log(`✅ ${route.path} → ${route.output}`);
  } catch (error) {
    console.error(`❌ Fehler bei ${route.path}:`, error.message);
    process.exit(1);
  }
}

/**
 * Apache/LiteSpeed: Wenn sowohl `route.html` als auch Verzeichnis `route/`
 * existieren (z. B. referenzen.html + referenzen/*.html), liefert der Server
 * oft das Verzeichnis — ohne index.html → 403. Deshalb denselben HTML-Stand
 * zusätzlich als `route/index.html` spiegeln.
 */
function mirrorHtmlBesideDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    // server/ und assets/ nicht anfassen
    if (entry.name === 'server' || entry.name === 'assets') continue;

    const childDir = path.join(dir, entry.name);
    mirrorHtmlBesideDirs(childDir);

    const siblingHtml = path.join(dir, `${entry.name}.html`);
    if (!fs.existsSync(siblingHtml)) continue;

    const indexPath = path.join(childDir, 'index.html');
    fs.copyFileSync(siblingHtml, indexPath);
    const relative = path.relative(distDir, indexPath);
    console.log(`📁 Mirror ${entry.name}.html → ${relative}`);
  }
}

mirrorHtmlBesideDirs(distDir);

// 404.html mit NotFound-Seite rendern
try {
  console.log('⚙️  Rendering 404...');
  const { html, helmetContext } = render('/404-not-found-page');
  const { helmet } = helmetContext;

  let notFoundHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  if (helmet) {
    if (helmet.title) {
      notFoundHtml = notFoundHtml.replace(
        /<title[^>]*>.*?<\/title>/,
        '<title>404 — Seite nicht gefunden | Vollmer Objektmöbel</title>'
      );
    }
    if (helmet.meta) {
      const metaString = helmet.meta.toString();
      notFoundHtml = notFoundHtml.replace(
        '</head>',
        `${metaString}\n<meta name="robots" content="noindex,nofollow">\n</head>`
      );
    }
  }

  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');
  console.log('✅ 404 → 404.html');
} catch (error) {
  console.error('❌ Fehler bei 404.html:', error.message);
  process.exit(1);
}

console.log('✨ SSR Prerendering abgeschlossen!');
