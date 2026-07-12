## Ziel
Bestehendes Design beibehalten, Seite technisch und inhaltlich für lokale Google-Sichtbarkeit ausbauen — 6 Leistungsseiten, 4 Referenz-Detailseiten, FAQ, Kontakt, sauberes Head-/Schema-Setup, Sitemap/Robots, Redirects.

## Umfang & Reihenfolge

### 1. Technisches Fundament
- `react-helmet-async` installieren, `HelmetProvider` in `main.tsx` einhängen
- `index.html`: Sitewide Title/Description, Organization + LocalBusiness JSON-LD, GA4 Placeholder-Snippet (Kommentar mit `G-XXXXXXX`)
- `public/robots.txt` mit `Sitemap:`-Verweis erweitern
- `scripts/generate-sitemap.ts` + `predev`/`prebuild` in `package.json`; alle neuen Routen eintragen
- Redirect-Routen in `App.tsx`: `/kontakt` (Legacy) → neue `/kontakt`-Seite (existiert dann), `/datenschutzerklärung` bleibt (bereits vorhanden)

### 2. Neue Seiten (jede mit `<Helmet>`: Title, Description, Canonical, og:*, Service/FAQ JSON-LD wo passend)

**Leistungsseiten** (`src/pages/leistungen/*.tsx`), Route-Slugs wie gebrieft:
- `/kuechenstudio-erftstadt`
- `/praxiseinrichtung`
- `/bueroeinrichtung`
- `/objektmoebel`
- `/stahlkuechen`
- `/projektbegleitung`

Aufbau je Seite: H1 mit Keyword+Ort, 3–4 Absätze (~800 Wörter), Bullet-Liste, CTA-Box (Tel + Link zu `/kontakt`), 1–2 Referenzbilder aus vorhandenem Wix-CDN-Bestand, FAQ-Accordion (3–5 Fragen mit FAQPage-Schema).

**Referenz-Detailseiten** (`src/pages/referenzen/[slug].tsx` als 4 statische Komponenten):
- `/referenzen/wohn-kueche-naturstein`
- `/referenzen/business-club-coworking`
- `/referenzen/buero-kueche-theke`
- `/referenzen/krankenhausausstattung`

Jede: H1, 200+ Wörter Beschreibung, 3–5 Bilder aus bestehendem Datensatz, Leistungs-Tags, CTA.

**FAQ** (`/faq`): 15–20 Q&A als Accordion (shadcn), FAQPage JSON-LD.

**Kontakt** (`/kontakt`): Formular (Name, E-Mail, Telefon, Leistung-Dropdown, Nachricht) — reines Frontend mit `mailto:`-Fallback (keine Backend-Änderung, außer der User will Cloud aktivieren), Google-Maps `<iframe>` Embed für Schusters Garten 4, Öffnungszeiten, Adresse, CTA-Buttons.

### 3. Bestandsseiten aktualisieren
- `Index.tsx`: H1 „Küchenstudio & Objekteinrichtung in Erftstadt — Köln, Bonn, Brühl", 6 Leistungs-Karten mit Links zu den neuen Seiten, Maps-Embed im Kontakt-Bereich, `<Helmet>`-Meta
- `Unternehmen.tsx`: Local Keywords, „Seit 2017" ergänzen, Meta
- `Impressum.tsx` / `Datenschutz.tsx`: nur `<Helmet>` ergänzen
- `SiteHeader.tsx`: Dropdown „Leistungen" mit 6 Einträgen, sticky Tel-Button auf Mobile
- `SiteFooter.tsx`: Adresse/Tel/Mail, alle Leistungs-Links, Rechts-Links, Social-Placeholders
- `NotFound.tsx`: `<Helmet>` `noindex`

### 4. Bilder & Performance
- Bereits bestehende Wix-Bilder liefern automatisch WebP/AVIF via `enc_auto` — belassen
- Neue `<img>`-Elemente: `loading="lazy"`, `decoding="async"`, sprechende `alt`-Texte mit Keywords
- Lokale Hero-Assets: erstes Bild `fetchpriority="high"` bleibt

### 5. Telefonnummer
Vereinheitlichen auf **02235 9765401** (Haupt) — Mobil 0178 8576150 als Sekundär anzeigen. Betrifft `Index.tsx`, `Impressum.tsx`, `Datenschutz.tsx`, Header, Footer, neue Seiten. (Überschreibt die frühere „nur Mobil"-Änderung wie hier ausdrücklich gebrieft.)

### 6. Nicht enthalten (Rückfrage nötig, falls gewünscht)
- Echte GA4/Search-Console-IDs — bleiben Platzhalter mit `<!-- TODO -->`
- Kontaktformular-Versand: derzeit `mailto:`. Für echten SMTP-Versand (Resend o. ä.) müsste **Lovable Cloud** aktiviert werden — sag Bescheid, wenn ich das mit einrichten soll.
- Cookie-Banner ist bereits vorhanden; DSGVO-konforme Consent-Steuerung für GA4 baue ich mit ein, sobald die GA4-ID kommt.

## Technischer Kern
```text
src/
  components/
    SiteHeader.tsx        (Leistungen-Dropdown, Tel-CTA)
    SiteFooter.tsx        (erweitert)
    ServiceLayout.tsx     (neu — gemeinsames Layout Hero/Body/FAQ/CTA)
    FaqAccordion.tsx      (neu — inkl. JSON-LD)
    ContactForm.tsx       (neu — mailto)
  pages/
    Index.tsx             (überarbeitet)
    Kontakt.tsx           (neu)
    Faq.tsx               (neu)
    leistungen/
      Kuechenstudio.tsx
      Praxiseinrichtung.tsx
      Buero.tsx
      Objektmoebel.tsx
      Stahlkuechen.tsx
      Projektbegleitung.tsx
    referenzen/
      WohnKuecheNaturstein.tsx
      BusinessClub.tsx
      BueroKuecheTheke.tsx
      Krankenhaus.tsx
scripts/generate-sitemap.ts
public/robots.txt         (Sitemap-Zeile)
index.html                (LocalBusiness JSON-LD, GA4-Placeholder)
src/App.tsx               (neue Routes, /kontakt Redirect vom alten Hash)
```

## Umfang-Warnung
Das ist ein **großer Batch** (ca. 15 neue Dateien, viel Copy). Ich schreibe die Inhalte selbst nach dem Briefing (Sie-Form, echte Fakten aus dem Text oben), keine Lorem-Ipsum-Platzhalter. Rechne mit mehreren Tool-Runden.

Soll ich so loslegen?