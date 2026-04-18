# Auto-Deploy: GitHub → Hostinger via FTP

Bei jedem Push auf `main` baut GitHub Actions automatisch die Seite und lädt sie via FTP nach Hostinger hoch.

---

## Einmalige Einrichtung (ca. 5 Minuten)

### 1. FTP-Zugangsdaten aus Hostinger holen

1. In Hostinger einloggen → **hPanel**
2. Links im Menü: **Dateien → FTP-Konten**
3. Dort siehst du:
   - **FTP-Hostname** (z. B. `ftp.deine-domain.de` oder `145.14.xxx.xxx`)
   - **FTP-Benutzername** (z. B. `u123456789.deinedomain`)
   - **FTP-Passwort** — falls unbekannt: „Passwort ändern" und neues setzen
4. Notiere dir auch den **Zielordner**: meistens `/public_html/`. Bei Subdomains oder Addon-Domains z. B. `/domains/deine-domain.de/public_html/`

### 2. Secrets in GitHub anlegen

In deinem GitHub-Repo:

1. **Settings → Secrets and variables → Actions → New repository secret**
2. Lege folgende **vier** Secrets an:

| Secret-Name | Wert |
|---|---|
| `FTP_SERVER` | FTP-Hostname von Hostinger (z. B. `ftp.deine-domain.de`) |
| `FTP_USERNAME` | FTP-Benutzername |
| `FTP_PASSWORD` | FTP-Passwort |
| `FTP_SERVER_DIR` | Zielordner inkl. führendem & abschließendem Slash, z. B. `/public_html/` |

⚠️ **Wichtig:** Bei `FTP_SERVER_DIR` immer mit `/` anfangen und enden, sonst landet alles im falschen Ordner.

### 3. Push auf `main` → fertig

Sobald du eine Änderung pushst (oder im Lovable-Editor speicherst), läuft der Workflow:
- Auf GitHub: **Actions**-Tab → siehst du den laufenden Build
- Nach 1–2 Min ist die Seite live auf deiner Domain

Du kannst den Workflow auch **manuell** starten: GitHub → Actions → „Deploy to Hostinger" → **Run workflow**.

---

## Was passiert genau?

Der Workflow `.github/workflows/deploy-hostinger.yml`:
1. Checkt deinen Code aus
2. Installiert Node.js + Dependencies (`npm ci`)
3. Baut die Seite (`npm run build`) → Ergebnis liegt in `dist/`
4. Lädt **alle Dateien aus `dist/`** (inkl. `.htaccess`) per FTP nach Hostinger
5. Vergleicht vorher, was sich geändert hat → es werden nur **geänderte Dateien** übertragen (deutlich schneller bei Updates)

## SPA-Routing

Die Datei `public/.htaccess` wird beim Build mit nach `dist/` kopiert und sorgt dafür, dass Deep-Links wie `/referenzen` oder `/unternehmen` auch nach Reload funktionieren.

## Troubleshooting

**„530 Login authentication failed":** Falsche FTP-Credentials → in Hostinger Passwort neu setzen.

**Dateien werden hochgeladen, Seite zeigt aber alten Stand:** Browser-Cache leeren (Strg+F5).

**Deep-Link `/referenzen` zeigt 404:** `.htaccess` fehlt im Zielordner. Prüfe im Hostinger-Dateimanager (oben rechts „Versteckte Dateien anzeigen").

**Workflow lädt nichts hoch:** Im GitHub Actions-Log prüfen, ob `FTP_SERVER_DIR` korrekt ist (mit `/` am Anfang und Ende).
