# Deployment auf Hostinger

Diese Seite ist eine **statische Single-Page-App** (React + Vite). Du brauchst **kein PHP** und keine Datenbank – Hostinger liefert die fertigen Dateien einfach aus.

---

## 1. Build erstellen

Lokal im Projektordner ausführen:

```bash
npm install
npm run build
```

Danach gibt es einen Ordner **`dist/`** mit allen fertigen Dateien:
- `index.html`
- `.htaccess` (für SPA-Routing – wird automatisch aus `public/` mitkopiert)
- `assets/` (JS, CSS, Bilder)

## 2. Auf Hostinger hochladen

1. In Hostinger einloggen → **hPanel** → **Dateien** → **Dateimanager**
2. In den Ordner **`public_html/`** wechseln (das ist der Web-Root deiner Domain)
3. Den **gesamten Inhalt** des `dist/`-Ordners dort hochladen
   - Wichtig: nicht den Ordner `dist` selbst, sondern den **Inhalt** (`index.html`, `.htaccess`, `assets/` …)
4. Falls die `.htaccess` nicht sichtbar ist: im Dateimanager oben rechts **„Versteckte Dateien anzeigen"** aktivieren

## 3. Fertig prüfen

- `https://deine-domain.de/` → Startseite
- `https://deine-domain.de/referenzen` → muss direkt funktionieren (auch nach Reload)
- `https://deine-domain.de/unternehmen`, `/impressum`, `/datenschutz`

Wenn ein Deep-Link einen **404** liefert, fehlt die `.htaccess` oder mod_rewrite ist nicht aktiv (bei Hostinger standardmäßig an).

---

## Updates später

Jedes Mal wenn du etwas änderst:
1. `npm run build`
2. Inhalt von `dist/` erneut nach `public_html/` hochladen (überschreiben)

> Tipp: Du kannst auch alles in `dist/` als ZIP hochladen und im Hostinger-Dateimanager direkt entpacken – das ist deutlich schneller als einzelne Dateien.

---

## PHP / Kontaktformular?

Aktuell hat die Seite **kein** Backend-Formular. Wenn du ein PHP-Kontaktformular willst (z. B. `kontakt.php` mit `mail()`-Funktion), sag Bescheid – das kann ich separat bauen, läuft dann parallel zur React-App im selben `public_html/`.
