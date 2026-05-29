# Landingpage-Konzept · responsible-design-kit

**AP 2 – Projektwebseite | Micropage**
Konzeptdokument auf Basis der Anforderungen aus `AP2-Anforderungen-JTBD_4.xlsx`

---

## 1. Zielsetzung & Leitidee

Die Seite ist eine **Single-Page Micropage** mit einem klaren Auftrag: Eine besuchende Person soll in unter zwei Minuten verstehen, *was* das Kit tut, *für wen* es ist und *wie* man es installiert — und dabei selbst erleben, dass die Seite genau die Prinzipien einhält, die das Kit propagiert.

Die zentrale Leitidee ist **reflexiv**: Die Seite ist nicht nur Werbung für das Kit, sondern ihr erster Beweis. Sie *ist* das „echte Beispiel" aus Anforderung 2. Wer prüfen will, ob das Kit seine Versprechen hält (Anforderung 10), muss nur die Seite selbst inspizieren. Diese Doppelrolle — Marketing *und* Demonstration — prägt jede Designentscheidung.

Daraus folgen zwei Anforderungsebenen, die das Konzept getrennt behandelt:

- **Inhaltsebene** (JTBD 1–6): Was steht wo, in welcher Reihenfolge, mit welchem Ziel.
- **Beweisebene** (JTBD 7–10): Querschnittsqualitäten, die nicht in *einer* Section leben, sondern in der gesamten Umsetzung — Tastaturbedienbarkeit, Mobil-Tauglichkeit, Kontrast, inklusive Sprache & semantisches HTML.

---

## 2. Zielgruppen (aus JTBD abgeleitet)

| Gruppe | Wer | Primäres Bedürfnis |
|---|---|---|
| **Primär** | Designer:innen & Entwickler:innen, die KI-gestützt bauen | Schnell entscheiden, ob das Kit den eigenen Prozess verbessert, und es ohne Umwege installieren |
| **Sekundär** | Kommiliton:innen, neugierige Erstbesuchende | Das Projekt und die drei Skills auf einen Blick einordnen |
| **Prüfende** | Menschen mit Hilfstechnologie, Skeptiker:innen | Die Seite vollständig nutzen *und* verifizieren, dass sie ihre eigenen Versprechen hält |

Wichtig: Die **Primär**-Gruppe ist nicht zwingend barrierefreiheits-erfahren („Du brauchst kein Vorwissen"). Das Konzept verbietet daher durchgehend ungeklärten Fachjargon im Fließtext (Anforderung 1) — Fachbegriffe wie WCAG 2.2 AA werden eingeführt, nicht vorausgesetzt.

---

## 3. Informationsarchitektur (Section-Reihenfolge)

Die Reihenfolge folgt der Entscheidungsreise der Primärzielgruppe — von „Was ist das?" über „Löst das mein Problem?" und „Ist das für mich?" bis „Wie fange ich an?":

```
┌─────────────────────────────────────────┐
│ 0. Skip-Link + Header / Nav              │  ← Beweisebene (Tastatur)
├─────────────────────────────────────────┤
│ 1. HERO                                  │  ← JTBD 1, 6  + CTA (3, 4)
│    Headline · Subline · 2 CTAs           │
├─────────────────────────────────────────┤
│ 2. DAS PROBLEM (kurz)                    │  ← JTBD 6, 2
├─────────────────────────────────────────┤
│ 3. DIE DREI SKILLS                       │  ← JTBD 5, 2
│    user-centricity · accessibility ·     │
│    gender-equity                         │
├─────────────────────────────────────────┤
│ 4. FÜR WEN                               │  ← JTBD 1
├─────────────────────────────────────────┤
│ 5. INSTALLATION  (Anker #installation)   │  ← JTBD 3, 4
├─────────────────────────────────────────┤
│ 6. HINTERGRUND                           │  ← JTBD 6, 5
├─────────────────────────────────────────┤
│ 7. FOOTER                                │  ← JTBD 4, 10
└─────────────────────────────────────────┘
```

**Begründung der Reihenfolge:** Wer überzeugt ist, springt per Hero-CTA direkt zur Installation (Anker `#installation`) und überspringt 2–4. Wer noch zweifelt, liest sequenziell. Beide Pfade führen zum Ziel — das bedient die hohe Priorität von Anforderung 3 (Installation sofort finden), ohne die erklärenden Sections zu opfern.

---

## 4. Section-für-Section-Konzept

Jede Section ist dokumentiert mit: **(a)** den Texten aus deinem Arbeitsdokument, **(b)** der/den erfüllten JTBD-Anforderung(en), **(c)** Layout- und Design-Hinweisen.

---

### Section 1 — Hero

**Erfüllt:** JTBD 1 (sofort verstehen, ohne Fachbegriffe · *Hoch*), JTBD 6 (in zwei Sätzen verstehen · *Mittel*), JTBD 3 & 4 (CTAs zu Installation und Repository)

**Texte:**
- **Headline:** *Verantwortungsvolles Design. Als Default.*
- **Subline:** *KI-Tools bauen, was sie gefragt werden — ohne Rücksicht auf Barrierefreiheit, Nutzervielfalt oder Gendergerechtigkeit. Das responsible-design-kit ändert den Default.*
- **CTA primär:** „Jetzt installieren" → Anker `#installation`
- **CTA sekundär:** „GitHub Repository →" → `https://github.com/responsible-design-kit/responsible-design-kit`

**Layout & Design:**
- Die Headline trägt die Kernaussage allein; die Subline liefert in genau zwei Sätzen das „Was & Warum" — das erfüllt Anforderung 6 bereits oberhalb der Falz (above the fold).
- **Zwei sichtbar unterschiedlich gewichtete CTAs:** Primär-Button (gefüllt, hoher Kontrast) für Installation, Sekundär-Button (Outline/Text-Link) für GitHub. Der visuelle Vorrang spiegelt die Priorität (Installation *Hoch* > Repo *Mittel*).
- Kein Hero-Bild zwingend nötig; falls eines genutzt wird, ist es rein dekorativ (`alt=""`), damit Screenreader nicht durch Schmuckgrafik aufgehalten werden.
- „responsible-design-kit" konsequent klein geschrieben — als bewusster Markenname behandeln, nicht als Tippfehler.

---

### Section 2 — Das Problem (kurz)

**Erfüllt:** JTBD 6 (warum das Kit existiert · *Mittel*), JTBD 2 (Problemkontext, an den später das Beispiel andockt · *Hoch*)

**Texte:**
> KI-Coding-Tools optimieren für das, was gefragt wird. Niemand fragt sie: Für wen? Zu wessen Lasten?
>
> Ohne expliziten Kontext arbeiten diese Systeme mit impliziten Annahmen — der statistische Durchschnitt der Trainingsdaten: jung, gesund, sehend, technisch versiert. Barrierefreiheit, Nutzerzentrierung und Genderinklusion entstehen so nicht von selbst. Sie entstehen nur, wenn jemand explizit danach fragt — oder wenn das System so eingerichtet ist, dass es automatisch fragt.
>
> Das zweite ist der Ansatz dieses Projekts.

**Layout & Design:**
- Bewusst kurz und textfokussiert. Die zwei rhetorischen Fragen („Für wen? Zu wessen Lasten?") visuell hervorheben (z. B. größer, eigene Zeile) — sie sind der emotionale Kern.
- Schlusszeile „Das zweite ist der Ansatz dieses Projekts." als Übergang zu Section 3 (Skills). Sie verbindet Problem und Lösung und macht die Skills-Section zur Antwort.
- Eine ruhige, eng gesetzte Textspalte (max. ~65 Zeichen Zeilenlänge) — Lesbarkeit ist hier selbst ein Accessibility-Statement.

---

### Section 3 — Die drei Skills

**Erfüllt:** JTBD 5 (drei Skills + Funktion auf einen Blick · *Mittel*), JTBD 2 (wie das Kit Probleme konkret löst · *Hoch*)

**Einleitungstext:**
> Ein Skill ist eine Instruktionsdatei, die einem KI-Tool sagt, wann es aktiv wird, was es prüft und wie es antwortet. Kein Prompt. Keine Checkliste. Ein strukturierter Default.

**Drei gleichwertige Karten / Blöcke:**

**① user-centricity** — *Nutzende als Menschen — nicht als abstrakten „User"*
> Wer nutzt das? In welcher Situation? Was wird übersehen?
> Der Skill erzwingt, dass diese Fragen vor jedem generierten Output beantwortet werden. Edge Cases werden Required Input. Personas werden einbezogen, bevor Code entsteht.
> **Relevant für:** UX-Design, Interface-Entwicklung, partizipative Systeme.

**② accessibility** — *WCAG 2.2 AA — als Ausgangspunkt, nicht als Nachbesserung*
> Barrierefreiheit ist seit Juni 2025 gesetzlich gefordert (EU Accessibility Act, BFSG). Trotzdem entsteht sie in KI-generierten Interfaces selten von selbst.
> Der Skill prüft automatisch: Kontrastverhältnisse, Tastaturnavigation, semantisches HTML, ARIA-Labels, Focus-Styles. Probleme werden markiert — bevor sie im Code landen.
> **Relevant für:** Alle digitalen Interfaces, öffentliche Dienste, Apps mit gesetzlicher Barrierefreiheitspflicht.

**③ gender-equity** — *Inklusive Sprache und Bias-Bewusstsein als Default*
> KI-Systeme übernehmen Annahmen aus Trainingsdaten — über Sprache, Formulare, Datensätze. Dieser Skill macht diese Annahmen sichtbar und verändert den Default.
> Genderinklusive Sprache, keine binären Pflichtfelder, Bias-Hinweise bei datensensitiven Systemen. Relevant für Systeme unter EU AI Act High-Risk-Klassifikation.
> **Relevant für:** Medizinische Interfaces, HR-Systeme, öffentliche Plattformen.

**Layout & Design:**
- **Drei gleich große, parallel aufgebaute Karten** (Titel · Claim · Was es tut · „Relevant für"). Die identische Struktur erlaubt „auf einen Blick erfassen" (Anforderung 5).
- Desktop: drei Spalten nebeneinander. Mobil: untereinander gestapelt, volle Breite (Anforderung 8).
- Jede Karte als semantisches Element (`<article>` mit eigener Überschrift `<h3>`), damit Screenreader-Nutzende per Überschriften-Navigation direkt zwischen den Skills springen können (zahlt auf Anforderung 7 ein).
- **Empfehlung zur Stärkung von JTBD 2 („an einem echten Beispiel"):** Die reine Beschreibung „was der Skill prüft" ist gut, aber die überzeugendste Demonstration ist die Seite selbst. Daher: in der `accessibility`-Karte (oder als kleiner Hinweis am Ende der Section) explizit auf den reflexiven Beweis verweisen — z. B. „Diese Seite wurde mit dem Kit gebaut. Prüf sie." Optional ein Mini-Beispiel (vorher/nachher-Snippet eines Form-Felds) als ausklappbares Detail, ohne die Übersicht zu überladen. *(Designvorschlag — kein Pflichttext.)*
- Code-/Fachbegriffe (Required Input, ARIA-Labels) sind hier zulässig, weil die Section bereits tiefer im Trichter liegt; trotzdem aus dem Kontext verständlich halten.

---

### Section 4 — Für wen

**Erfüllt:** JTBD 1 (entscheiden, ob das Kit für mich/meinen Prozess passt · *Hoch*)

**Texte:**
> Das responsible-design-kit ist für alle, die KI-gestützt entwerfen oder entwickeln:
> - Designer:innen, die mit Cline, Cursor oder Claude Code arbeiten
> - Entwickler:innen, die Designverantwortung tragen
> - Teams, die Responsible AI nicht nur als Compliance, sondern als Qualitätsmerkmal verstehen
>
> Du brauchst kein Vorwissen über Barrierefreiheit, Gender Studies oder Nutzerforschung. Das Kit bringt das Wissen mit.

**Layout & Design:**
- Liste als echte `<ul>` — drei klar abgegrenzte Zielprofile, damit man sich schnell selbst wiederfindet.
- Der Schlusssatz „Du brauchst kein Vorwissen …" ist die wichtigste Hürdensenkung der Seite und sollte typografisch leicht hervorgehoben werden — er adressiert direkt die Sorge der Primärgruppe, nicht „qualifiziert genug" zu sein.
- Die genannten Tools (Cline, Cursor, Claude Code) tauchen hier *und* in der Installation auf — konsistent halten.

---

### Section 5 — Installation `#installation`

**Erfüllt:** JTBD 3 (Installationskommando sofort finden & kopieren · *Hoch*), JTBD 4 (Repository-Link · *Mittel*)

**Texte:**
- Codeblock:
  ```bash
  npx responsible-design-kit init
  ```
- > Das war es. Der Befehl kopiert `.claude/` mit `CLAUDE.md` und den drei `SKILL.md`-Dateien in dein Projektverzeichnis. Ab dem nächsten Prompt arbeitet dein KI-Tool mit den Skills.
- > **Voraussetzung:** Node.js installiert · Cline (VS Code), Cursor oder Claude Code als KI-Tool
- > **Alternativ:** Dateien direkt aus dem GitHub Repository kopieren. Kein npm nötig.

**Layout & Design:**
- **Sprungziel der Hero-CTA** — daher der Anker `#installation`. Beim Klick muss der Fokus tatsächlich auf diese Section springen (Fokus-Management), nicht nur visuell scrollen — sonst landen Tastatur-Nutzende nach dem CTA im Nichts (Anforderung 7).
- **„Copy"-Button am Codeblock** ist der wichtigste Interaktionspunkt der Section (Anforderung 3: „kopieren können"). Der Button braucht: sichtbaren Fokus-Style, ein zugängliches Label (z. B. `aria-label="Befehl kopieren"`) und eine wahrnehmbare Erfolgs-Rückmeldung (Text *und* nicht nur Farbe, z. B. „Kopiert ✓").
- Der Codeblock ist auch ohne JS per Tastatur markierbar — der Copy-Button ist Komfort, keine Voraussetzung (Progressive Enhancement).
- „GitHub Repository" als klar beschrifteter Link (Anforderung 4) — Linktext aussagekräftig, nicht „hier klicken".
- Voraussetzungen und Alternative bewusst *nach* dem Kommando — wer es eilig hat, sieht zuerst den Befehl.

---

### Section 6 — Hintergrund

**Erfüllt:** JTBD 6 (warum das Projekt existiert · *Mittel*), JTBD 5 (Einordnung für Kommiliton:innen · *Mittel*)

**Texte:**
> Das responsible-design-kit ist ein Open-Source-Semesterprojekt der BGBA University of Cooperative Education Hanau, entstanden im Modul *KI im Designprozess* (SS 2026).
>
> Es untersucht zwei Fragen: Verbessert sich der Output messbar, wenn ein Skill installiert ist? Und: Erhöht ein reduzierter gefühlter Aufwand die Bereitschaft, verantwortungsvolle Anforderungen überhaupt umzusetzen?
>
> Die Antworten entstehen gerade. Die Ergebnisse werden hier und im GitHub Repository dokumentiert.

**Layout & Design:**
- Ruhiger, sekundärer Abschnitt — visuell zurückgenommen gegenüber Hero/Skills, da niedrigere Priorität.
- Die zwei Forschungsfragen typografisch absetzen; sie ordnen das Projekt für Kommiliton:innen ein (Anforderung 5) und erklären den wissenschaftlichen Zweck (Anforderung 6).
- „Die Antworten entstehen gerade" signalisiert ehrlich den laufenden Status — passt zum Status „Offen" aller Anforderungen.

---

### Section 7 — Footer

**Erfüllt:** JTBD 4 (Repository- & Doku-Link · *Mittel*), JTBD 10 (sichtbarer Beweis für inklusive Sprache & sauberes HTML · *Mittel*)

**Texte:**
> responsible-design-kit — Open Source · MIT License
> BGBA SS 2026 · Felix Guder & Architects
> GitHub · Dokumentation

**Links:**
- GitHub → `https://github.com/responsible-design-kit/responsible-design-kit`
- Dokumentation → `…/blob/main/README.md`

**Layout & Design:**
- Footer als `<footer>`-Landmark; Links aussagekräftig beschriftet (Anforderung 4).
- Lizenz, Trägerschaft (BGBA, SS 2026) und Autorenschaft transparent — Open-Source-Glaubwürdigkeit.
- Der Footer ist zugleich der letzte Ort, an dem Anforderung 10 sichtbar wird: konsequente Doppelnennung/Genderform im gesamten Seitentext gipfelt hier in der Quellenangabe.

---

## 5. Querschnitt: „Die Seite als Beweis" (JTBD 7–10)

Diese vier Anforderungen sind keine eigene Section, sondern **Qualitätskriterien für die gesamte Seite**. Sie sind das Alleinstellungsmerkmal des Konzepts: Ein Kit für verantwortungsvolles Design verliert jede Glaubwürdigkeit, wenn seine eigene Seite die Prinzipien verletzt.

### 7 — Tastatur & Screenreader (*Hoch*)
*„Alle Inhalte und Funktionen ohne Maus erreichen."*

- **Skip-Link** als allererstes fokussierbares Element („Zum Hauptinhalt springen").
- Logische **DOM-/Fokusreihenfolge** = Lesereihenfolge; nichts nur per CSS umsortiert.
- Eine **`<h1>`** (Headline), darunter saubere Hierarchie `<h2>`/`<h3>` — Screenreader-Nutzende navigieren per Überschrift.
- Semantische **Landmarks:** `<header> <main> <footer>`, jede Section ein `<section>` mit zugeordneter Überschrift.
- **Jedes interaktive Element** (beide CTAs, Copy-Button, alle Links) per Tab erreichbar, per Enter/Space auslösbar, mit **deutlich sichtbarem Focus-Style** (kein `outline:none` ohne Ersatz).
- Anker-CTA „Jetzt installieren" verschiebt bei Aktivierung den **Fokus** in die Installations-Section.

### 8 — Mobil / Responsive (*Hoch*)
*„Alle Inhalte ohne horizontales Scrollen, alle Buttons bedienbar."*

- **Mobile-first**, flüssiges Layout; **kein horizontales Scrollen** bei 320 px Breite.
- Skill-Karten und „Für wen"-Liste stapeln vertikal auf volle Breite.
- **Touch-Ziele ≥ 44 × 44 px** für CTAs und Copy-Button.
- Codeblock auf kleinen Screens scrollbar/umbruchsicher, ohne die ganze Seite zu sprengen.
- Schrift relativ skalierbar; bis 200 % Zoom ohne Inhaltsverlust nutzbar.

### 9 — Kontrast (*Hoch*)
*„Texte und UI-Elemente klar vom Hintergrund unterscheiden (≥ 4,5:1)."*

- **Fließtext ≥ 4,5 : 1**, große Headlines ≥ 3 : 1 (WCAG 2.2 AA).
- **UI-Komponenten & Fokus-Indikatoren ≥ 3 : 1** gegen ihre Umgebung.
- Farbpalette vorab gegen die Kontrastformel prüfen — gilt auch für Button-States (Hover/Aktiv/Disabled) und Code-Syntax-Highlighting.
- **Information nie allein über Farbe** transportieren (z. B. „Kopiert ✓" mit Symbol + Text, nicht nur Grün).

### 10 — Inklusive Sprache & sauberes HTML, sichtbar (*Mittel*)
*„Sehen, dass die Seite selbst genderinklusive Sprache und barrierefreies HTML verwendet."*

- Durchgängig **genderinklusive Sprache** (Designer:innen, Entwickler:innen, Kommiliton:innen, Nutzende) — bereits im gelieferten Text angelegt, konsequent halten.
- **Lesbares, semantisches HTML** für jeden, der per „Quelltext anzeigen" prüft: korrekte Elemente, `lang="de"`, sinnvolle `alt`-Texte, beschriftete Links.
- Die Skills-Section *benennt* die Prinzipien, der Quelltext *belegt* sie — Versprechen und Umsetzung decken sich. Das ist der Vertrauensanker (Anforderung 2 + 10).

---

## 6. Anforderungs-Abdeckungsmatrix

Vollständiger Nachweis, dass jede der 10 Anforderungen verortet ist:

| # | Job | Priorität | Erfüllt in | Wie |
|---|---|---|---|---|
| 1 | Sofort verstehen, ohne Fachbegriffe | Hoch | Hero · Für wen | Headline + 2-Satz-Subline; jargonfreier Fließtext; „kein Vorwissen nötig" |
| 2 | Lösung an echtem Beispiel sehen | Hoch | Skills · gesamte Seite | „Was der Skill prüft" + reflexiver Beweis: die Seite selbst |
| 3 | Installationskommando finden & kopieren | Hoch | Installation · Hero-CTA | `npx`-Block mit Copy-Button; Hero-CTA springt direkt dorthin |
| 4 | Repository-Link finden | Mittel | Hero · Installation · Footer | Klar beschrifteter „GitHub Repository"-Link an drei Stellen |
| 5 | Drei Skills auf einen Blick erfassen | Mittel | Skills | Drei parallel strukturierte Karten |
| 6 | In zwei Sätzen verstehen, was/warum | Mittel | Hero-Subline · Problem · Hintergrund | Subline = Was; Problem/Hintergrund = Warum |
| 7 | Ohne Maus nutzbar (Tastatur/SR) | Hoch | Querschnitt | Skip-Link, Semantik, Fokus-Styles, Fokus-Management |
| 8 | Mobil ohne H-Scroll, Buttons bedienbar | Hoch | Querschnitt | Mobile-first, gestapeltes Layout, Touch-Ziele ≥ 44 px |
| 9 | Kontrast ≥ 4,5 : 1 | Hoch | Querschnitt | AA-konforme Palette, Nicht-nur-Farbe-Prinzip |
| 10 | Inklusive Sprache & sauberes HTML sichtbar | Mittel | Querschnitt · Footer | Durchgängige Genderform + semantischer, prüfbarer Quelltext |

---

## 7. Visuelle Leitlinien (Empfehlung)

Keine Pflicht aus den Anforderungen, aber stimmig zum Projekt:

- **Tonalität:** ruhig, sachlich, technisch-glaubwürdig. Die Seite soll wie ein verlässliches Werkzeug wirken, nicht wie eine laute Kampagne.
- **Typografie:** eine gut lesbare Sans-Serif für Fließtext, Monospace für Code. Großzügige Zeilenhöhe, begrenzte Zeilenlänge — Lesbarkeit ist hier Teil der Botschaft.
- **Farbe:** reduzierte Palette mit *einer* Akzentfarbe für CTAs/Links, die den AA-Kontrast sicher besteht. Lieber wenige, geprüfte Farben als viele riskante.
- **Whitespace:** großzügig — die Micropage darf atmen; Dichte würde der „kein Vorwissen / leicht zu erfassen"-Haltung widersprechen.
- **Bilder:** sparsam. Wenn überhaupt, dann funktional (z. B. ein Vorher/Nachher-Snippet), nicht dekorative Stockfotos.

---

## 8. Offene Punkte / Empfehlungen

1. **JTBD 2 stärken:** Das „echte Beispiel" lebt bisher implizit (die Seite selbst). Empfehlung: einen *expliziten* kleinen Beweis ergänzen — etwa einen ausklappbaren Vorher/Nachher-Vergleich in der `accessibility`-Karte oder einen sichtbaren Hinweis „Diese Seite ist mit dem Kit gebaut — prüf den Quelltext." Macht den abstrakten Nutzen greifbar, ohne neuen Pflichttext.
2. **CTA-Konsistenz:** Der Repository-Link erscheint dreimal (Hero, Installation, Footer). Einheitlicher Linktext und Ziel-URL festlegen.
3. **Copy-Button-Fallback:** Verhalten ohne JavaScript definieren — der Befehl muss auch dann markier- und kopierbar bleiben.
4. **Markenschreibweise:** „responsible-design-kit" durchgängig klein; im Fließtext am Satzanfang bewusst entscheiden, ob Ausnahme oder konsequent klein.
5. **Prüfung vor Launch:** Da die Seite ihr eigener Beweis ist, vor Veröffentlichung mit Tastatur-only, Screenreader und einem Kontrast-Checker gegen WCAG 2.2 AA testen — sonst untergräbt ein einziger Fehler die gesamte Glaubwürdigkeit.
