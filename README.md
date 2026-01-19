# Blood Moon UI (PLEX Minimal)

A **static, stealable UI kit** — open `index.html` and you’re running.  
No frameworks, no build steps, no dependencies.

Built by **Dorian Sotpyrc** for **plexdata.online**.

- Website: https://plexdata.online  
- Medium: https://medium.com/@doriansotpyrc

**Theme:** Blood Moon — premium dark, calm crimson accents, audit-grade readability.

## What’s inside

```

ui-kit/
index.html
css/
tokens.css
base.css
components.css
pages.css
js/
app.js
assets/
img/
hero.webp

````

## Quick start (local)

Open:

- `ui-kit/index.html`

## Quick start (serve)

```bash
cd ui-kit
python3 -m http.server 7063 --bind 0.0.0.0
````

Visit:

* [http://localhost:7063](http://localhost:7063)

## Design rules (minimal)

* **Not pure black:** wine/charcoal surfaces keep reds alive and reduce harsh contrast.
* **Crimson is sparse:** reserved for focus/active/danger (never always-on neon).
* **Readable by default:** thin borders, subtle surface layers, compact audit styling.
* **Accessible:** `:focus-visible`, real labels, error text (not color-only), reduced motion respected.
* **Token-driven:** swap `css/tokens.css` to reskin most UI.

## License

MIT
