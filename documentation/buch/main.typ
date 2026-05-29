// NEW SKILLS — KI im Designprozess
// Einstiegspunkt. Mit Tinymist/Typst Preview in VS Code live anzeigen.
// CLI:  typst compile main.typ

#import "styles/book.typ": book

#show: book.with(
  title: "NEW SKILLS — KI im Designprozess",
  author: "Felix Guder & Studierende",
)

#include "00-titelei/kapitel.typ"
#include "01-danksagung/kapitel.typ"
#include "02-vorwort/kapitel.typ"
#include "03-einfuehrung/kapitel.typ"
#include "04-ki-im-designprozess/kapitel.typ"
#include "05-semesterprojekt-doku/kapitel.typ"
#include "06-kritische-betrachtung/kapitel.typ"
#include "07-erlebnisberichte/kapitel.typ"
#include "08-ausblick/kapitel.typ"
#include "09-das-team/kapitel.typ"
#include "10-abbildungen/kapitel.typ"
#include "11-referenzen-glossar/kapitel.typ"
