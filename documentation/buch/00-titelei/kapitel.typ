// 00 — Titelei
// Inhalt: Titelseite, Impressum, Widmung, Inhaltsverzeichnis.
// Dieses Kapitel erscheint NICHT im automatischen Inhaltsverzeichnis.

// --- Titelseite ---
#page(numbering: none, margin: (top: 5cm, bottom: 3cm, x: 2cm))[
  #align(center)[
    #text(size: 2.4em, weight: "bold")[NEW SKILLS]
    #v(0.6em)
    #text(size: 1.3em, style: "italic")[KI im Designprozess]
    #v(2em)
    #text(size: 1.1em)[Felix Guder & Studierende]
    #v(0.4em)
    #text(size: 1.0em)[BGBA SS 2026]
  ]
]

// --- Impressum ---
#page(numbering: none)[
  #v(1fr)
  #text(size: 0.9em)[
    *NEW SKILLS — KI im Designprozess* \
    BGBA Sommersemester 2026 \
    Herausgegeben von Felix Guder \
    #v(0.6em)
    Berlin, 2026 \
    #v(0.6em)
    Satz: Typst \
    Lizenz: TBD \
  ]
]

// --- Widmung (optional) ---
#page(numbering: none)[
  #v(1fr)
  #align(center, text(style: "italic")[
    // Widmung hier einfügen.
  ])
  #v(1fr)
]

// --- Inhaltsverzeichnis ---
#outline(title: [Inhalt], indent: auto)
#pagebreak()
