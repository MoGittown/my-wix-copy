import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://vollmer-objektmoebel.com";

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const entries: Entry[] = [
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
      (e) =>
        `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n` +
        (e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>\n` : "") +
        (e.priority ? `    <priority>${e.priority}</priority>\n` : "") +
        `  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);