# Personal website maintenance

[Documentation index](README.md) · [Development](DEVELOPMENT.md)

## Source and public URL

- Source: [`website/`](../website/), not the repository root or `docs/`.
- Public URL: https://ixiehao.github.io/
- Deployment: [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml).
- Languages: English.

`website/` is a source directory, not part of the public URL. Keep the public address and existing external links unchanged.

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

Open <http://127.0.0.1:8000/>. Use HTTP rather than opening files directly, especially when testing fetched resources.

## Validation

Run `git diff --check` and inspect the changed HTML and CSS.

Check images, favicon, navigation, official download destinations, desktop and narrow layouts, keyboard focus, the custom 404 page. Check canonical and share URLs, robots and sitemap where present. A path-only migration should preserve site content.

## Automated responsive checks

Website changes and pull requests run Playwright before Pages deployment. CI reads the actual language list from `website-test.config.mjs`, runs Chromium and WebKit for each language, and publishes only when every matrix job passes. Pull requests never deploy; a failure keeps the existing public site.

From the repository root:

```sh
npm ci --ignore-scripts
npx playwright install chromium webkit
npm run check:website
npm run test:website
# Reproduce one CI job (choose a language supported by this website):
SITE_TEST_LANGUAGE=en npm run test:website -- --project=webkit
npm run test:website:report
```

The checks cover phone portrait/landscape, tablet and desktop sizes, both sides of this site's CSS breakpoints, actual mobile viewport width, local image decoding and aspect ratios, content overflow, overlapping controls, component bounds and column counts. They also check static HTML without JavaScript, the custom 404 page. Test fixtures deliberately inject overflow to verify that the guard rejects broken layouts. Intentional horizontal navigation/code scrolling and text ellipses are treated separately from unintended clipping.

The test server uses the public URL prefix and starts/stops with Playwright. Set `SITE_TEST_PORT` if port 4173 is occupied. External requests are blocked for deterministic layout checks; upstream download availability still needs separate verification. Mobile browser emulation does not replace real-device review.

Download `website-report-*` from the workflow run's **Artifacts**; each browser/language report is retained for 7 days. The HTML report includes failure screenshots, traces and geometry attachments; `test-results/report.json` provides counts. Run `npx playwright show-report <downloaded-playwright-report-directory>` to inspect a downloaded report. Test dependencies and reports are excluded from the published site. Local shared maintenance documents stay outside this repository.

## SEO and AI reading files

The existing static generator remains the source of translated product facts. `search-content.config.json` points to the actual language source and published directory. Python 3 standard-library tools generate an `index.md` beside each canonical HTML page and an `llms.txt` reading index from the rendered page, including installation notes and media credits. No runtime dependency, analytics, account or tracking is added.

```sh
npm run build:website
npm run check:website
npm run test:website
# Only after successful deployment and the public ownership file is reachable:
npm run notify:search
```

`scripts/search-content.py --check` checks canonical/hreflang and sharing metadata, real static body text, schema, sitemap language coverage, Markdown parity and AI reading links. `--self-test` verifies text/link extraction and rejection of empty or stale content. Pages still requires all responsive browser checks before deployment. Generated reading files under `website/` are committed with their source, so stale content can be rejected before publication.

A separate, project-scoped IndexNow ownership file is published at `indexnow-key.txt`. The deployment-dependent notification job first reads that public file, then submits only this site's canonical pages. HTTP 200 means received; 202 means received with ownership verification pending. A failed external notification warns and can be retried; core checks and deployment gates remain strict. Acceptance is not indexing or an AI citation.

Read back every language's raw HTML and Markdown, llms.txt, sitemap, assets and ownership file after deployment. Effective robots rules are managed at `https://ixiehao.github.io/robots.txt`; child project files do not replace the domain-root policy. Keep useful no-JavaScript content and language links. `llms.txt` is an optional reading aid, not an indexing guarantee. No Search Console or Bing Webmaster account submission is implied.

## Deployment

The domain-root `website/robots.txt` applies to all projects under `ixiehao.github.io`, including MacBetter. Keep MacBetter's sitemap declaration here; a `/MacBetter/robots.txt` cannot replace the root policy. The root `llms.txt` points readers to the project-specific catalog. These discovery files do not guarantee search indexing or AI citations and do not add analytics.

The workflow uploads `website/` and deploys it as the site root. It runs on relevant changes to `main` and supports manual dispatch. Pages is configured to use **GitHub Actions**, replacing the former branch-root publishing. When recreating the repository or restoring settings, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**; adding a workflow file alone does not change this setting.

Only publish when authorized. After deployment, read the public URL back and verify resources, navigation and downloads. A successful local preview is not proof that the public site has updated.
