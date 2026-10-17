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

## Deployment

The workflow uploads `website/` and deploys it as the site root. It runs on relevant changes to `main` and supports manual dispatch. Pages is configured to use **GitHub Actions**, replacing the former branch-root publishing. When recreating the repository or restoring settings, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**; adding a workflow file alone does not change this setting.

Only publish when authorized. After deployment, read the public URL back and verify resources, navigation and downloads. A successful local preview is not proof that the public site has updated.
