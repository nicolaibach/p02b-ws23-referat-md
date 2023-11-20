# p02b-ws23-referat-md

Kurzreferat über Markdown für `P02b/WS23`.

> [!NOTE]
> [→ Zur aktuellesten Version der Slide Decks](releases/latest)

## Präsentationen aus Markdown-Dateien erstellen mit Marp

> Marp (also known as the Markdown Presentation Ecosystem) provides an intuitive experience for creating beautiful slide decks. You only have to focus on writing your story in a Markdown document.
> — [Marp]

[Marp] kann als [Plugin für Visual Studio Code (Marp for VS Code)][marp-vsc] oder als [CLI (Marp CLI)][marp-cli-gh] verwendet werden. War mag kann auch direkt mit dem [Marpit] JavaScript Framework bzw. dem [Marp Core] arbeiten.

### Das Setup

Für den Anfang habe ich mich für des [Marp VS Code Plugin][marp-vsc] entschieden. Die Einrichtung war *relativ* unkompliziert:

1. Separates [Profil in VS Code][vsc-profiles] erstellen, um Konflikte mit anderen Plugins etc. zu vermeiden
2. Installation des [Plugins][marp-vsc]
3. Den [Pfad zu Chromium in den Plugin-Settings][marp-vsc-file-types] hinterlegen, damit neben HTML auch PDF- und PowerPoint-Dateien erzeugt werden können

Damit eine Markdown-Datei vom [Plugin][marp-vsc] als Präsentation erkannt wird muss lediglich `marp: true` in den [Metadaten der Datei][marp-docs-fm] gesetzt werden:

```markdown sample.md
---
marp: true
---

# My Super Slide Deck

…
```

### Ein eigenes Theme verwenden

Standardmäßig stehen drei [Themes][marp-themes] zur Auswahl, die über [*Directives*][marp-docs-tweak-style] angepasst werden können.

Für dieses Projekt habe ich ein [angepasstes Theme][marp-docs-css-extend] basierend auf dem [Default Theme][marp-theme-default] erstellt:

```css sample.css
/*!
 * @theme my-theme
 */

@import "default";

/* custom styles here */
```

Damit das Stylesheet gefunden wird muss es [registriert][marp-tl-reg-theme] werden:

```json ./vscode/settings.json
{
	"markdown.marp.themes": [
		"path/to/my-theme.css"
	]
}
```

Die beiden relevanten Dateien in diesem Projekt:

```
.
├── .vscode
│   └── settings.json
└── src
    └── theme
        └── panda.css
```

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title"
		rel="cc:attributionURL" href="https://github.com/nicolaibach/p02b-ws23-referat-md">p02b-ws23-referat-md</a> by <a
		rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/nicolaibach/">Nicolai
		Bach</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
		target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)<img
			style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
			src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img
			style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
			src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img
			style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
			src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img
			style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
			src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>

### CC BY-NC-SA 4.0 DEED

> **Note:**
> This deed highlights only some of the key features and terms of the actual license. It is not a license and has no legal value. You should carefully review all of the terms and conditions of the [actual license](LICENSE) before using the licensed material.

#### You are free to:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

The licensor cannot revoke these freedoms as long as you follow the license terms.

#### Under the following terms:

- **Attribution** - You must give [appropriate credit](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#), provide a link to the license, and [indicate if changes were made](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#). You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **NonCommercial** - You may not use the material for [commercial purposes](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#).
- **ShareAlike** - If you remix, transform, or build upon the material, you must distribute your contributions under the [same license](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#) as the original.
- **No additional restrictions** - You may not apply legal terms or [technological measures](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#) that legally restrict others from doing anything the license permits.

#### Notices:

You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable [exception or limitation](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#).

No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as [publicity, privacy, or moral rights](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#) may limit how you use the material.

<!-- Reference Links -->

[Marp]: https://marp.app
[marp-vsc]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
[marp-cli-gh]: https://github.com/marp-team/marp-cli
[Marpit]: https://github.com/marp-team/marpit
[Marp Core]: https://github.com/marp-team/marp-core
[vsc-profiles]: https://code.visualstudio.com/docs/editor/profiles
[marp-vsc-file-types]: https://github.com/marp-team/marp-vscode#supported-file-types
[marp-docs-fm]: https://github.com/marp-team/marp/blob/main/website/docs/guide/directives.md#front-matter
[marp-themes]: https://github.com/marp-team/marp-core/tree/main/themes
[marp-docs-tweak-style]: https://marpit.marp.app/directives?id=tweak-theme-style
[marp-docs-css-extend]: https://marpit.marp.app/theme-css?id=customized-theme
[marp-theme-default]: https://github.com/marp-team/marp-core/tree/main/themes#default
[marp-tl-reg-theme]: https://yoanbernabeu.github.io/MARP-Template-Library/docs/intro/#the-easy-way-with-vs-code
