// Template-Funktionen für das Buch.
// Aufruf in main.typ via:  #show: book.with(title: "...", author: "...")
// Titelei und Inhaltsverzeichnis werden NICHT automatisch erzeugt —
// das macht das Kapitel 00-titelei explizit.

#let book(
  title: "Untitled",
  author: "Anonym",
  body,
) = {
  set document(title: title, author: author)

  set page(
    paper: "a5",
    margin: (inside: 2.2cm, outside: 1.8cm, top: 2cm, bottom: 2cm),
    numbering: "1",
    number-align: center,
  )

  set text(
    font: "New Computer Modern",
    size: 10.5pt,
    lang: "de",
    hyphenate: true,
  )

  set par(
    justify: true,
    leading: 0.65em,
    first-line-indent: 1.2em,
  )

  set heading(numbering: "1.1")

  show heading.where(level: 1): it => {
    pagebreak(weak: true)
    v(2em)
    set text(size: 1.8em, weight: "bold")
    block(it)
    v(1em)
  }

  show heading.where(level: 2): it => {
    v(1em)
    set text(size: 1.2em, weight: "bold")
    block(it)
    v(0.4em)
  }

  body
}
