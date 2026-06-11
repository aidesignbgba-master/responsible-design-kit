# Responsible Design Kit

Ein Coach für barrierefreie, inklusive und gendergerechte digitale Produkte —
zur Nutzung in Projekten mit Claude Code.

> RDK ist kein Linter und kein Compliance-Werkzeug. Es ist ein Coach, der bei
> der Arbeit zuhört, mitfragt und Alternativen vorschlägt. Manchmal unbequem,
> immer ehrlich.

---

## Was du bekommst

Drei Skills, die deine Coding-Assistenz kontextabhängig aktiviert:

- **`accessibility`** — Barrierefreiheit nach WCAG 2.2, BFSG, EN 301 549
- **`user-centricity`** — Nutzerzentrierung, Inklusion, Ausschluss-Analyse
- **`gender-equity`** — Geschlechtergerechtigkeit in Sprache, Bild, Daten

Plus eine **Haltung**, die der Assistenz vorgibt, wie sie sich verhält — klar
fordernd, respektvoll, mit Alternativen statt Verboten.

## Voraussetzungen

- [Claude Code](https://docs.claude.com/claude-code) installiert und eingerichtet
- Ein bestehendes Projekt, in dem du arbeitest
- Node.js (für den Installationsbefehl)

## Installation

Im Wurzelverzeichnis deines Projekts:

```bash
npx degit aidesignbgba-master/responsible-design-kit/kit .claude
```

Das kopiert den `kit/`-Ordner aus diesem Repo in `.claude/` deines Projekts.

Danach enthält dein Projekt:

```
.claude/
├── CLAUDE.md          ← Projekt-Instruktionen für die Assistenz
├── rdk-charta.md      ← Werte und Selbstverständnis des Kits
└── skills/
    ├── accessibility/SKILL.md
    ├── user-centricity/SKILL.md
    └── gender-equity/SKILL.md
```

## Was dann passiert

**In deiner nächsten Claude-Code-Session** meldet sich die Assistenz von sich
aus, etwa so:

> Ich habe gerade das Responsible Design Kit geladen. RDK ist ein Coach für
> Barrierefreiheit, Inklusion und Gendergerechtigkeit — kein Pflichtenheft.
>
> Das wird teilweise fordernd. Ich werde Fragen stellen, die unbequem sind. Am
> Ende ist die Qualität besser.
>
> Möchtest du, dass ich dein Projekt jetzt einmal mit den Skills durchsehe? Ich
> liefere einen Überblick — drei bis fünf Befunde je Skill, nach Priorität
> sortiert.

Du entscheidest. Wenn du zustimmst, gibt es einen kompakten Audit-Report. Wenn
nicht, bleiben die Skills im Hintergrund aktiv und greifen, sobald sie in der
Arbeit relevant werden — beim Schreiben von UI-Code, beim Formulieren von
Texten, beim Modellieren von Daten.

## Was du als Erfahrung erwartet

- **Rückfragen statt stiller Änderungen.** Die Assistenz fragt nach, bevor sie
  Dateien anfasst.
- **Explizite Konflikte.** Wenn dein Vorschlag gegen ein RDK-Prinzip läuft,
  wird der Konflikt benannt — nicht weggelächelt.
- **Alternativen, nicht Verbote.** Zu jedem Befund mindestens ein konkreter
  Vorschlag.
- **Markierte Annahmen.** „Das setzt ein modernes Smartphone voraus" — solche
  Sätze werden Teil der Arbeit.

## Pausieren

Wenn das Kit in einer bestimmten Sitzung zu viel wird, sag der Assistenz, sie
soll pausieren. Sie respektiert das und erinnert am Ende der Sitzung, dass die
Prüfungen aus waren.

## Skills aktualisieren

Wenn neue Versionen der Skills im RDK-Repo erscheinen, denselben Befehl noch
einmal ausführen:

```bash
npx degit --force aidesignbgba-master/responsible-design-kit/kit .claude
```

⚠ **Vorsicht**: `--force` überschreibt lokale Änderungen in `.claude/`. Wenn du
die Skills oder die CLAUDE.md angepasst hast, vorher sichern oder gezielt nur
die Skills aktualisieren.

## Mitarbeiten

Dieses Kit entsteht im Rahmen des Kurses **KI im Designprozess** (BGBA SS 2026,
Felix Guder & Team). Beiträge willkommen — siehe [CONTRIBUTING.md](CONTRIBUTING.md).

## Lizenz

TBD.
