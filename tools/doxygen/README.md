# Client C++ API

The client reference is generated from a client checkout with Doxygen and
mounted at `/client/api/` under the Docusaurus site. The Client docs sidebar
has a small C++ API page that opens it. `tools/build-api.sh` is a post-build
step: run `npm run build` first, then generate the API into `build/client/api/`.

The in-page return link assumes `baseUrl: "/docs/"`. The C++ API page uses
`useBaseUrl`, so only the return link needs updating if the base path changes.

The pages use `.htm` because Docusaurus `serve` rewrites `.html` URLs and drops
the `/docs/` base, which breaks Doxygen's internal links locally. `.htm` is
served as-is. The script copies `index.htm` to `index.html` so
`/docs/client/api/` works as a directory index.

- `Doxyfile.in` is rendered by `tools/build-api.sh`. The script substitutes
  `@CLIENT_DIR@`, `@DOXYGEN_DIR@` and `@OUTPUT_DIR@`, runs Doxygen and flattens
  the `html/` output into `static/api/client/`.
- `docusaurus.css` maps the Docusaurus design tokens (palette, typography,
  radii, code colours and dark mode) onto Doxygen Awesome variables.
- `header.html` is the Doxygen HTML header. It loads the theme extensions,
  follows the Docusaurus `theme` localStorage key and injects a compact
  “Back to docs” link.
- `mainpage.md` is the API landing page.
- `theme/` is the vendored Doxygen Awesome release; see its `README.md`.

The generated `static/api/` directory is ignored. In CI the client repository is
checked out into `client/` and `CLIENT_DIR` is set by the deploy workflow.
