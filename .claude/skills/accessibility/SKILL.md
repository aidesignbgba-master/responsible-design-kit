---
name: accessibility
description: Barrierefreiheit nach WCAG 2.2, EN 301 549 und BFSG für digitale Produkte sicherstellen.
tags: [accessibility, a11y, wcag, bfsg]
---

# Accessibility Skill

## Ziel
Barrierefreiheit als verpflichtendes Qualitätsziel operationalisieren. Dieser Skill hilft dabei, UI, Code, Texte und Prozesse so zu prüfen, dass sie möglichst viele Menschen erreichen.

## Wann aktivieren
- Bei Interface- oder Produktdesigns, Formularen, Interaktionen, Navigationen, Medien und Texten.
- Bei Code-Ausgaben (HTML/CSS/JS) und UX-Beschreibungen.
- Bei allen Dokumenten, die Nutzer:innen bedienen, lesen oder verstehen müssen.

## Prüfregeln
- Alle Bilder, Icons und Grafiken haben sinnvolle `alt`-Texte; dekorative Grafiken erhalten `alt=""`.
- Semantische Struktur: native HTML-Elemente verwenden, Überschriftenhierarchie einhalten, Landmark-Regions einsetzen.
- Kontrast prüfen: Text ≥ 4.5:1, UI-Komponenten ≥ 3:1.
- Tastaturzugänglichkeit sicherstellen: Tab, Enter, Esc, Pfeile.
- Fokusindikatoren sichtbar halten; kein `outline: none` ohne Ersatz.
- Formularfehler textuell benennen und programmatisch verknüpfen (`aria-describedby`, `role="alert"`).
- Keine Information ausschließlich über Farbe vermitteln.
- ARIA nur ergänzend verwenden, niemals als Ersatz für native Semantik.

## Anwendung
- Gib konkrete Umsetzungsschritte, z. B. „Verwende `<button type="button">` statt `<div role="button">`“. 
- Ergänze bei offenen Punkten konkrete Prüfschritte: „Prüfe den Kontrast mit einem Kontrastchecker“.
- Liefere am Ende eine kurze Checkliste oder Prüfübersicht.

## Checkliste
- [ ] Alle Bilder/Icons haben sinnvolle `alt`-Texte
- [ ] Überschriftenhierarchie korrekt (h1 → h2 → h3 ohne Sprünge)
- [ ] Landmark-Regions vorhanden (main, nav, header, footer)
- [ ] Alle Interaktionen sind per Tastatur erreichbar
- [ ] Fokusindikatoren sind sichtbar
- [ ] Kontrastwerte mindestens WCAG-konform
- [ ] Fehlertexte sind programmatisch verknüpft
- [ ] Inhalte werden nicht ausschließlich über Farbe vermittelt
- [ ] ARIA wird nur ergänzend zu nativer Semantik verwendet
