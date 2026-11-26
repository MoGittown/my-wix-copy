import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const PORT = 4173; // Standard-Vite-Preview-Port
const BASE_URL = `http://localhost:${PORT}`;

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
  { path: '/kuechen-rhein-erft-kreis', output: 'kuechen-rhein-erft-kreis.html' },
  { path: '/kuechenstudio-koeln', output: 'kuechenstudio-koeln.html' },
  { path: '/kuechenstudio-bonn', output: 'kuechenstudio-bonn.html' },
  { path: '/kuechenstudio-bruehl', output: 'kuechenstudio-bruehl.html' },
  { path: '/teekueche-buero', output: 'teekueche-buero.html' },
];

console.log('🔧 Starte Full-HTML-Prerendering mit Playwright...');

// Preview-Server starten
let previewServer;
function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log(`🚀 Starte Vite-Preview-Server auf Port ${PORT}...`);
    previewServer = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      stdio: 'pipe',
      cwd: path.resolve(__dirname, '..'),
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) reject(new Error('Preview-Server konnte nicht gestartet werden'));
    }, 30000);

    previewServer.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes(`${PORT}`)) {
        if (!started) {
          started = true;
          clearTimeout(timeout);
          console.log('✅ Preview-Server läuft');
          // Warte kurz, damit der Server vollständig bereit ist
          setTimeout(() => resolve(), 1000);
        }
      }
    });

    previewServer.stderr.on('data', (data) => {
      console.error(`Preview-Server-Fehler: ${data}`);
    });

    previewServer.on('error', reject);
  });
}

function stopPreviewServer() {
  if (previewServer) {
    previewServer.kill();
    console.log('🛑 Preview-Server gestoppt');
  }
}

// Funktion zum Rendern einer einzelnen Route
async function prerenderRoute(page, route) {
  try {
    const url = `${BASE_URL}${route.path}`;
    console.log(`🔄 Rendere ${route.path}...`);
    
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Warte auf React-Hydration und Lazy-Loading (länger für Code-Split-Routen)
    await page.waitForTimeout(3000);
    
    // Zusätzliche Prüfung: Warte, bis tatsächlich Content im #root div ist
    // (nicht nur Toast-/Notification-Container)
    try {
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          if (!root) return false;
          // Prüfe, ob es mindestens ein sichtbares Element mit Text-Content gibt
          const hasVisibleContent = root.querySelector('h1, h2, main, section.py-16, section.py-12');
          return hasVisibleContent !== null;
        },
        { timeout: 10000 }
      );
    } catch (e) {
      console.warn(`⚠️  Content-Check Timeout für ${route.path}, fahre trotzdem fort`);
    }
    
    // Nochmal kurz warten für finale Helmet-Updates
    await page.waitForTimeout(500);
    
    // Hole das vollständige HTML (inkl. <head> mit Helmet-Updates und <body> mit gerendertem Content)
    const html = await page.content();
    
    // Datei schreiben
    const outputPath = path.join(distDir, route.output);
    const outputDir = path.dirname(outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✅ ${route.path} → ${route.output}`);
  } catch (error) {
    console.error(`❌ Fehler beim Rendern von ${route.path}:`, error.message);
  }
}

// Hauptfunktion
async function main() {
  try {
    await startPreviewServer();
    
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Alle Routen prerendern
    for (const route of routes) {
      await prerenderRoute(page, route);
    }
    
    // 404.html erstellen
    console.log('🔄 Erstelle 404.html...');
    await page.goto(`${BASE_URL}/diese-seite-existiert-nicht-404`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    
    try {
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          if (!root) return false;
          const hasVisibleContent = root.querySelector('h1, h2, main, section');
          return hasVisibleContent !== null;
        },
        { timeout: 10000 }
      );
    } catch (e) {
      console.warn(`⚠️  Content-Check Timeout für 404, fahre trotzdem fort`);
    }
    
    await page.waitForTimeout(500);
    
    let html404 = await page.content();
    
    // Noindex-Meta-Tag hinzufügen (falls nicht schon vorhanden)
    if (!html404.includes('noindex')) {
      html404 = html404.replace('</head>', '<meta name="robots" content="noindex,nofollow"></head>');
    }
    
    fs.writeFileSync(path.join(distDir, '404.html'), html404, 'utf-8');
    console.log('✅ 404 → 404.html');
    
    await browser.close();
    console.log('✨ Full-HTML-Prerendering abgeschlossen!');
  } catch (error) {
    console.error('❌ Prerendering-Fehler:', error);
    process.exit(1);
  } finally {
    stopPreviewServer();
  }
}

main();
