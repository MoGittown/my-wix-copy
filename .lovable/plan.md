

## Ziel
Ein **Export-Button** im Admin-Modus auf `/referenzen`, der mit einem Klick deine komplette aktuelle Sortierung (Projekt-Reihenfolge + Bild-Zuordnung) in die Zwischenablage kopiert. Du fügst sie hier in den Chat ein → ich übernehme sie fest in den Code.

## Warum gab es das nicht?
Beim Bau des Admin-Modus habe ich nur an Speichern (`localStorage`) gedacht, nicht an einen Weg, die Daten **wieder rauszubekommen**. Das hole ich jetzt nach.

## Änderungen in `src/pages/Referenzen.tsx`

**1. Export-Button hinzufügen** (oben in der Admin-Toolbar, neben dem bestehenden Hinweistext)
- Label: „Sortierung exportieren"
- onClick: liest `imagesMap` + `projectIds` aus dem aktuellen State, baut JSON, kopiert via `navigator.clipboard.writeText(...)`, zeigt Toast „In Zwischenablage kopiert"

**2. JSON-Format** (kompakt, direkt von mir verwertbar):
```json
{
  "order": ["projekt-slug-1", "projekt-slug-2", ...],
  "images": {
    "projekt-slug-1": ["bild1.jpg", "bild2.jpg"],
    "projekt-slug-2": [...]
  }
}
```

**3. Zusätzlich „Als Datei herunterladen"-Button** (Fallback, falls Clipboard blockiert ist) — erzeugt `referenzen-sortierung.json` als Download.

## Workflow danach

1. Du klickst auf `/referenzen` im Admin-Modus → **„Sortierung exportieren"**
2. JSON ist in deiner Zwischenablage
3. Du fügst es hier im Chat ein
4. Ich übernehme die Sortierung fest in das `projects`-Array und entferne (auf deinen Wunsch) den kompletten Admin-Modus + DnD-Code

## Umfang
- 1 Datei betroffen: `src/pages/Referenzen.tsx`
- ~30 Zeilen Code dazu (2 Buttons + Handler)
- Keine neuen Dependencies

