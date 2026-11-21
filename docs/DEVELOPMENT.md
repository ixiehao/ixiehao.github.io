# Development

[Documentation index](README.md) · [Website maintenance](WEBSITE.md)

## Layout

- `website/index.html` — personal introduction, application and data-project cards.
- `website/styles.css` — layout, typography, color and responsive behavior.
- `website/404.html` — missing-page handling.
- `website/assets/` — brand marks, project icons and other site assets.
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment.

The site is dependency-free; no npm installation or framework build is needed.

## Content maintenance

Verify project names, descriptions, system requirements and download destinations against their own maintained repositories. Do not make the number of projects part of permanent copy. Keep privacy and performance claims factual.

The English homepage covers the released Mac apps, MacBetter, and the vehicle-name datasets. List public releases and keep system, architecture, language, and dependency details specific to each app.

Download actions use each project's `releases/latest` URL. Website actions go to the English page where available. Keep project icons in sync with their official sites, use appropriately sized existing exports, and record sources in [project asset notes](../website/assets/PROJECT-ASSETS.md). The stylesheet query parameter is the first 12 characters of its SHA-256 digest; update the homepage and 404 page together after CSS changes.

Use the approved io identity and project icons. Keep decorative branding secondary to the actual projects. Preserve asset provenance and any accompanying third-party notices; do not assume a public repository grants reuse rights. This repository currently has no root project license, so do not invent a blanket license statement.

## Validation

Preview and follow the responsive/link checklist in [WEBSITE.md](WEBSITE.md). Inspect headings, navigation, cards, images, keyboard focus and the 404 page. For content or layout changes, inspect both a desktop and a narrow viewport. Documentation-only changes do not require a product release.
