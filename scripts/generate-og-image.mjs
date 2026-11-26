import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const outputPath = path.join(publicDir, 'og-image.jpg');

console.log('🎨 Generiere OG-Image als 1200×630 JPG...');

// SVG-String für das OG-Image (entspricht og-image.svg Design)
const svgContent = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#1a1a1a"/>
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle">
    Vollmer Objektmöbel
  </text>
  <text x="600" y="340" font-family="Arial, sans-serif" font-size="28" fill="#cccccc" text-anchor="middle">
    Küchenstudio · Praxiseinrichtung · Büroeinrichtung
  </text>
  <text x="600" y="400" font-family="Arial, sans-serif" font-size="24" fill="#999999" text-anchor="middle">
    Erftstadt · Köln · Bonn · Brühl
  </text>
</svg>
`.trim();

// Versuch 1: Mit sharp (wenn verfügbar)
try {
  const sharp = await import('sharp');
  await sharp.default(Buffer.from(svgContent))
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(outputPath);
  console.log('✅ OG-Image generiert mit sharp → public/og-image.jpg');
  process.exit(0);
} catch (sharpError) {
  console.log('⚠️  sharp nicht verfügbar, versuche Playwright...');
}

// Versuch 2: Mit Playwright (wenn verfügbar)
try {
  const playwright = await import('playwright');
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; }
        #og { width: 1200px; height: 630px; }
      </style>
    </head>
    <body>
      <div id="og">${svgContent}</div>
    </body>
    </html>
  `);
  
  await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
  await browser.close();
  
  console.log('✅ OG-Image generiert mit Playwright → public/og-image.jpg');
  process.exit(0);
} catch (playwrightError) {
  console.log('⚠️  Playwright nicht verfügbar, erstelle Fallback...');
}

// Versuch 3: Fallback - Canvas-basiert
try {
  const { createCanvas } = await import('canvas');
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Hintergrund
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, 1200, 630);

  // Haupttitel
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Vollmer Objektmöbel', 600, 280);

  // Untertitel
  ctx.fillStyle = '#cccccc';
  ctx.font = '28px Arial, sans-serif';
  ctx.fillText('Küchenstudio · Praxiseinrichtung · Büroeinrichtung', 600, 340);

  // Standorte
  ctx.fillStyle = '#999999';
  ctx.font = '24px Arial, sans-serif';
  ctx.fillText('Erftstadt · Köln · Bonn · Brühl', 600, 400);

  // Als JPEG speichern
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ OG-Image generiert mit canvas → public/og-image.jpg');
  process.exit(0);
} catch (canvasError) {
  console.error('❌ Keine Methode zum Generieren des OG-Images verfügbar');
  console.error('   Installiere: npm install sharp ODER npm install canvas');
  process.exit(1);
}
