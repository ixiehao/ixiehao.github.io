# ixiehao.github.io

The personal site of [iXiehao](https://github.com/ixiehao): an independent developer building fast, private macOS apps and open-source tools.

This is a dependency-free static site, published with GitHub Pages at <https://ixiehao.github.io/>.

## Projects

| Project | What it does | Get it |
| --- | --- | --- |
| [ShotMap](https://ixiehao.github.io/ShotMap/) | Turn a video's key moments into a storyboard image; refine frames on a visual timeline. macOS 13+. | [Latest release](https://github.com/ixiehao/ShotMap/releases/latest) |
| [LumaView](https://ixiehao.github.io/LumaView/en/) | Browse image folders, inspect EXIF, and read PDFs without importing a library. macOS 12+. | [Latest release](https://github.com/ixiehao/LumaView/releases/latest) |
| [MP4Flow](https://ixiehao.github.io/MP4Flow/en/) | Convert, trim, crop, rotate, and merge videos. macOS 13+; requires FFmpeg and ffprobe installed separately. | [Latest release](https://github.com/ixiehao/MP4Flow/releases/latest) |
| [MacBetter](https://ixiehao.github.io/MacBetter/) | Find free, open-source Mac apps with official links, licenses, and practical requirements. | [Source](https://github.com/ixiehao/MacBetter) |
| [VehicleName](https://ixiehao.github.io/VehicleName/) | Car brands, models, terms, and regional aliases in four languages. | [Source](https://github.com/ixiehao/VehicleName) |
| [MotorcycleName](https://ixiehao.github.io/MotorcycleName/) | Motorcycle brands, models, classes, and regional aliases in four languages. | [Source](https://github.com/ixiehao/MotorcycleName) |

The three Mac apps are free and open source, run on Apple silicon and Intel, and include English, Chinese, French, Russian, Spanish, Japanese, and Korean. See each release page for installation instructions and requirements.

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
