# ixiehao.github.io

The personal site of [iXiehao](https://github.com/ixiehao): an independent developer building fast, private macOS apps and open-source tools.

This is a dependency-free static site, published with GitHub Pages at <https://ixiehao.github.io/>.

## Repository layout

- `website/` — website source: HTML, CSS, branding and project icons.
- `docs/` — development, preview, validation and publishing instructions.
- `.github/workflows/deploy-pages.yml` — publishes the website directory.

The source directory is not part of the public URL.

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

Open <http://127.0.0.1:8000/>.

## Maintenance

Start with the [documentation index](docs/README.md), [development guide](docs/DEVELOPMENT.md) and [website deployment guide](docs/WEBSITE.md).

GitHub Pages publishes `website/` through **GitHub Actions**. See the deployment guide before publishing or changing the Pages source.
