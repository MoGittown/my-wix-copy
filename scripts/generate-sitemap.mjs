import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE_URL = "https://vollmer-objektmoebel.com";

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/unternehmen", changefreq: "monthly", priority: "0.8" },
  { path: "/referenzen", changefreq: "monthly", priority: "0.8" },
  { path: "/kontakt", changefreq: "monthly", priority: "0.9" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/kuechenstudio-erftstadt", changefreq: "monthly", priority: "0.9" },
  { path: "/praxiseinrichtung", changefreq: "monthly", priority: "0.9" },
  { path: "/bueroeinrichtung", changefreq: "monthly", priority: "0.9" },
  { path: "/objektmoebel", changefreq: "monthly", priority: "0.9" },
  { path: "/stahlkuechen", changefreq: "monthly", priority: "0.9" },
  { path: "/projektbegleitung", changefreq: "monthly", priority: "0.9" },
  { path: "/referenzen/wohn-kueche-naturstein", changefreq: "yearly", priority: "0.6" },
  { path: "/referenzen/business-club-coworking", changefreq: "yearly", priority: "0.6" },
  { path: "/referenzen/buero-kueche-theke", changefreq: "yearly", priority: "0.6" },
  { path: "/referenzen/krankenhausausstattung", changefreq: "yearly", priority: "0.6" },
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
];

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${BASE_URL}${entry.path}</loc>\n    <lastmod>${today}</lastmod>\n` +
        (entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>\n` : "") +
        (entry.priority ? `    <priority>${entry.priority}</priority>\n` : "") +
        `  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);