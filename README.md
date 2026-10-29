# OpenMT2 documentation

Documentation site for [OpenMT2](https://github.com/open-mt2), built with
[Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm start
```

The site starts at <http://localhost:3000/docs/> and reloads automatically when
files change.

## Build

```bash
npm run build
```

The output is written to `build/`.

## Preview a production build

```bash
npm run serve
```

## Deploy to GitHub Pages

The site is configured for the project Pages URL:

```text
https://open-mt2.github.io/docs/
```

Pushes to `main` deploy automatically through
`.github/workflows/deploy.yml`.

One-time setup in the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` or run the workflow manually from the **Actions** tab.

To use a custom domain instead, add a `static/CNAME` file with the domain, then
change `url` to the domain and `baseUrl` to `/` in `docusaurus.config.ts`.

## Content layout

| Path                           | Purpose                                      |
| ------------------------------ | -------------------------------------------- |
| `docs/`                        | Main documentation                           |
| `projects/*/docs/`             | Separate documentation instance per project  |
| `projects/*/sidebars.ts`       | Sidebar configuration for each project       |
| `blog/`                        | News and project updates                     |
| `src/css/custom.css`           | Global theme and color tokens                |
| `src/pages/`                   | Homepage                                     |
| `static/img/logo.svg`          | Full logo used on the homepage               |
| `static/img/favicon.svg`       | Ring mark used in the navbar and browser tab |
| `static/img/logo-wordmark.svg` | Alternative wordmark asset                   |

Add new documentation pages under `docs/` and use `_category_.json` files to
label and order folders in the sidebar. Projects live in their own documentation
instances under `projects/<project>/`; register each one in the `plugins` array
in `docusaurus.config.ts` and add it to the Projects menu.
