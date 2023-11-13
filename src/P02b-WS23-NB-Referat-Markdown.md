---
marp: true
theme: panda
# size: 4:3
paginate: true
header: ''
footer: ''
---

# Kurzreferat **<span class="dim">\#</span> Markdown** im Kurs `P02b-WS23` bei *Prof. Dr. V. Köppen*,<br>and der FH-Potsdam

von *Nicolai Bach*

---

## Themen und Ablauf

<div class="columns">
<div>

### Präsentation (10 Min.)

- Entstehung & Definitionen
- Weiterentwicklung & Verbreitung
- Die Syntax
- Funktionsweise
- Markdown und Ich

</div>
<div>

### Übung (~ 5 Min.)

Ein Dokument mit Markdown formatieren.

</div>
</div>

---

<!--
John: Informatiker, Blogger, Web Designer …
John Grubers Setup. Warum hat er MD *erfunden* und welche Probleme wollte er damit lösen.
Schreiben in BBEdit, Blogging mit Movable Type …
Er findet HTML einfach. Trotzdem:
Das ist ihm alles zu umständlich.
-->

<div class="columns">
<div>

## John Gruber war unzufrieden

> Eventually, it dawned on me: *this is madness*. The primary advantage to using a computer for writing is the immediacy of editing. Write, read, revise, all in the same window, all in the same mode.

John Gruber (2004), Dive Into Markdown
https://daringfireball.net/2004/03/dive_into_markdown

</div>
<div>

![height:400px](images/xkcd-tech_loops_2x.png)

xkcd, Tech Loops, CC BY-NC 2.5, https://xkcd.com/927/

</div>
</div>

---

<!--
Paraphrasiertes Zitat:
Markdown ist ein Text-zu-HTML Konvertierungs-Werkzeug für Menschen, die für das Web schreiben.
Markdown ermöglicht das Schreiben in einem einfach zu lesenden und einfach zu schreibenden Klartext-Format
und die anschließende Umwandlung in strukturell valides XHTML oder HTML.

- ”plain text” in Abgrenzung zu *rich text* (binary)
	… ausarbeiten

- Hypertext Markup Language (HTML)

- HTML VS XHTML und *valid*: hier erkennt man ganz deutlich, dass es 2004 ist.
  Die beiden Standards existierren eine Zeit lang parallel zu eianander und Browser
	unterscheiden verschiedene Parsing-Modi: Srtrict (XML) und Transitional (HTML).
	Im IE gab es sogar etwas, dass sich ”Quirks Mode” nannte. Viellecht geistert das noch
	immer in den Engines rum.

- In der Definition stecken schon 2 (eigentlich 3) Dinge
  - Markdown das Format
  - und Markdown das Tool (Perl script)
  - und Markdown die Philosophie.

- Gruber hatte eine spezielle Zielgruppe und einen (!) speziellen Anwendungsfall im Sinn.
-->

## Markdown.pl: Das Original

<div class="columns">
<div>

- John Gruber & Aaron Schwartz
- Erste Version 2003, Letzte Version (1.0.1) 2004

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

John Gruber (2004), Markdown
https://daringfireball.net/projects/markdown/

</div>
<div>

### Technik

- plain text format
- (valid) (X)HTML
- conversion tool

### Intention

- for web writers
- easy to read
- easy to write

</div>
</div>

---

## Aktuelle Definition(en)

<div class="columns">
<div>

> Markdown, the subject of this document, is an /informal/ plain-text formatting syntax that is intentionally targeted at non-technical users […] using unspecialized tools.

> Markdown has become something of an Internet meme, in that Markdown gets received, reinterpreted, and reworked as additional communities encounter it.

Internet Engineering Task Force (IETF) (2016), RFC7764:  Guidance on Markdown: Design Philosophies, Stability Strategies, and Select Registrations
https://www.rfc-editor.org/rfc/rfc7764

</div>
<div>

> Markdown is a plain text format for writing structured documents, based on conventions for indicating formatting in email and usenet posts

John MacFarlane (2021), CommonMark Spec Version 0.30
https://spec.commonmark.org/0.30/

</div>
</div>

---

<!--
Markdown in der ursprünglichen Form ist nicht klar spezifiziert.
Es folgt die kambrische Expansion.
-->

## Standards und Spezifikationen?

![…](images/xkcd-standards.png)

xkcd, Standards, CC BY-NC 2.5
https://xkcd.com/927/

---

![bg contain](images/md-evolution-2023-11-13-2107.svg)

---

## Popularität | SO Anfragen Trend

![](images/so-trend-md-2023-11-13.svg)

Stack Overflow Trends für `markdown`, `r-markdown` und `latex` im Zeitraum 2008 - 2023-11-13T15:25:20.925Z
https://insights.stackoverflow.com/trends/?tags=markdown,r-markdown,latex

---

## Popularität | SO Developer Survey 2023

<div class="columns">
<div>

### Die Umfrage

- 2023-05-08 - 2023-05-19
- 89,184 Software Entwickler
- aus 185 Ländern

Stack Overflow 2023 Developer Survey: Methodology
https://survey.stackoverflow.co/2023/#methodology

</div>
<div>

### Kategorie “Asynchronous tools”

> Markdown files are the second most desired asynchronous tool and the most admired asynchronous tool.

Stack Overflow 2023 Developer Survey: Admired and desired asynchronous tools
https://survey.stackoverflow.co/2023/#section-admired-and-desired-asynchronous-tools


</div>
</div>


---

## Popularität | SO Developer Survey 2023 | Grafik

![height:400](images/so-survery-23-async-tools-edt.png)

Stack Overflow 2023 Developer Survey: Admired and desired asynchronous tools
https://survey.stackoverflow.co/2023/#section-admired-and-desired-asynchronous-tools

---

## Syntax

---

## Syntax

---

## Anwenungen: nutshell

![height:500px](images/nutshell-mock-2023-11-11-1845.svg)

---

## Anwenungen: Marp

… diese Präsentation

---

<!--
Nicht vergessen: Danke für die eure Aufmerksamkeit
-->

## Addendum

v.1.0.0 | 2023-11-12 | CC BY-NC-SA 4.0

- https://github.com/nicolaibach/p02b-ws23-referat-md
- Link zum aktuellen release
- Link zum Wiki
  - Glossar
  - Quellenverzeichnis

---

## Übung

Öffne den *CommonMark Spielplatz* in einem Webbrowser. Dort kannst du Markdown eingeben und parallel das Resultat der Umwandlung als AST, HTML oder gerenderte Vorschau betrachten.

<div class="columns">
<div>

### CommonMark Dingus

![height:320](images/qr-code-commonmark-dingus.svg)

https://spec.commonmark.org/dingus/

</div>
<div>

### CommonMark Spec

![height:320](images/qr-code-commonmark-spec-latest.svg)

https://spec.commonmark.org/current/

</div>
</div>
