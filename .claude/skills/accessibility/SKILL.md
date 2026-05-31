---
name: accessibility
description: Barrierefreiheit nach WCAG 2.2, EN 301 549 und BFSG für digitale Produkte sicherstellen.
tags: [accessibility, a11y, wcag, bfsg]
---

# Accessibility Skill

## Ziel
Barrierefreiheit als verpflichtendes Qualitätsziel operationalisieren. Dieser Skill beschreibt konkrete Prüfungen und Umsetzungsregeln für UI, Texte, Code und Prozesse.

## Wann aktivieren
- Bei Interface- oder Produktdesigns, Formularen, Interaktionen, Navigationen, Medien und Texten.
- Bei Code-Ausgaben (HTML/CSS/JS), Komponentenbibliotheken und Designsystemen.
- Bei Dokumentationen, Schulungsunterlagen und Nutzungsanleitungen.

## Pflichtprüfungen
- `alt`-Texte: Alle dekorativen Bilder `alt=""`, alle informativen Bilder eine präzise Beschreibung.
- Semantik: native HTML-Elemente verwenden, Überschriftenhierarchie einhalten, Landmark-Regions (`main`, `nav`, `header`, `footer`, `aside`) definieren.
- Kontrast: Text 4.5:1, UI-Elemente 3:1; farbige Statusanzeigen immer zusätzlich textuell kennzeichnen.
- Tastatur: Tab-Reihenfolge sauber, aktive Elemente per Enter/Esc erreichbar, modale Dialoge mit Fokus-Trap.
- Fokus: sichtbarer Fokusring, kein `outline: none` ohne ersatzweise visuelles Feedback.
- Formulare: jedes Feld hat ein verknüpftes Label, Fehlertexte sind mit `aria-describedby` verbunden.
- Sprache: keine rein farbcodierten Informationen, erklärende Beschriftungen und Statusmeldungen.
- ARIA: nur ergänzend, niemals als Ersatz für native Semantik.

## Detaillierte Regeln
### 1. Bilder & Medien
- `<img>` mit `alt`-Text beschreiben: z. B. `alt="Formularfehler: Bitte gib eine gültige E-Mail-Adresse ein."`
- Icons nur bei Inhalt verwenden, wenn die Bedeutung klar bleibt; sonst zusätzlich textuelle Labels.
- Videos: Untertitel, Audiodeskription oder Transkription bereitstellen.

### 2. Navigation & Struktur
- Überschriftenfolge: `h1` → `h2` → `h3`; keine Sprünge wie `h2` → `h4` ohne Zwischenebene.
- Hinterlege Landmark-Regionen: `<main id="main">`, `<nav>`, `<header>`, `<footer>`.
- Biete einen Skip-Link an: `<a href="#main" class="skip-link">Zum Hauptinhalt springen</a>`.

### 3. Kontrast & Farbgebrauch
- Primärtext: mindestens 4.5:1.
- UI-Komponenten, Buttons und Icons: mindestens 3:1.
- Warnungen und Statusinfos nicht nur über Farbe vermitteln; ergänze z. B. `error`, `success` oder Icons.

### 4. Keyboard und Fokus
- Jede Schaltfläche, jeder Link und jedes Formularfeld ist per Tastatur erreichbar.
- Modale Dialoge: Fokus bleibt im Dialog, ESC schließt den Dialog, Schließen-Button fokussierbar.
- Custom Controls: `role`, `aria-expanded`, `aria-controls` verwenden, wenn native Alternativen fehlen.

### 5. Formulare & Fehler
- Je Feld ein Label, z. B. `<label for="email">E-Mail-Adresse</label>`.
- Fehlertext im DOM halten und mit `aria-describedby` verbinden.
- Beispiel:
  ```html
  <input id="email" aria-describedby="email-error" aria-invalid="true">
  <span id="email-error" role="alert">Bitte gib eine gültige E-Mail-Adresse ein.</span>
  ```

## Beispiele: Was nicht tun
- `div role="button" tabindex="0"` statt `<button>`
- `outline: none` ohne sichtbaren Ersatz
- Informationen nur über Farbe wie „Rot bedeutet Fehler“
- Tooltip-only-Hilfetexte ohne sichtbare Alternative

## Anwendung
- Beschreibe konkrete Umsetzungsschritte, z. B. „Verwende `<button type="button">` statt `<div role="button">`“.
- Ergänze bei offenen Punkten konkrete Prüfschritte: „Prüfe den Kontrast mit einem Kontrastchecker“.
- Nenne die Prüfmethoden: Farbkontrast-Tool, Screenreader-Test, Tastatur-Schritt-für-Schritt.

## Checkliste
- [ ] Alle Bilder/Icons haben sinnvolle `alt`-Texte
- [ ] Überschriftenhierarchie korrekt (h1 → h2 → h3 ohne Sprünge)
- [ ] Landmark-Regions vorhanden (main, nav, header, footer)
- [ ] Skip-Link oder alternative Navigation vorhanden
- [ ] Alle Interaktionen sind per Tastatur erreichbar
- [ ] Fokusindikatoren sind sichtbar
- [ ] Kontrastwerte mindestens WCAG-konform
- [ ] Fehlertexte sind programmatisch verknüpft
- [ ] Inhalte werden nicht ausschließlich über Farbe vermittelt
- [ ] ARIA wird nur ergänzend zu nativer Semantik verwendet
- [ ] Medien haben Untertitel oder Transkription, falls relevant
