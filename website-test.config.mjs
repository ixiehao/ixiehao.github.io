import { readFileSync, readdirSync } from 'node:fs';

const languages = ['en'];
export default {
  ...{
  "prefix": "/",
  "url": "https://ixiehao.github.io/",
  "directory": "website",
  "build": null,
  "breakpoints": [
    420,
    720,
    1050
  ],
  "cards": ".app-card,.data-item",
  "uniform": [
    ".app-card"
  ],
  "notFound": true
},
  grids: [{"selector": ".app-grid", "columns": [[720, 1], [1050, 2], [10000, 3]]}],
  languages
};
