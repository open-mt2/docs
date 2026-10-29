# OpenMT2 documentation

Documentation site for [OpenMT2](https://github.com/openMT2), built with
[Docusaurus](https://docusaurus.io/).

The theme is defined in `src/css/custom.css` and uses a red-forward palette
inspired by [dalamud.dev](https://dalamud.dev/).

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm start
```

The site starts at <http://localhost:3000> and reloads automatically when files
change.

## Build

```bash
npm run build
```

The output is written to `build/`.

## Preview a production build

```bash
npm run serve
```

## Content layout

| Path | Purpose |
| --- | --- |
| `docs/` | Documentation pages |
| `blog/` | News and project updates |
| `src/css/custom.css` | Global theme and color tokens |
| `src/pages/` | Homepage |
| `static/img/logo.svg` | Full logo used on the homepage |
| `static/img/logo-wordmark.svg` | Wordmark used in the navbar |
| `static/img/favicon.svg` | Compact ring mark used as the favicon |

Add new documentation pages under `docs/` and use `_category_.json` files to
label and order folders in the sidebar. Update `docusaurus.config.ts` when the
project URL or repository links change.
