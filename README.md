# IBM Carbon UI Demo

A small, self-contained React + Vite application built on the [IBM Carbon
Design System](https://carbondesignsystem.com/) (`@carbon/react`). It exists
as a **UI-testing target**: a single page that exercises a wide range of
real Carbon components with clean, semantic markup, for use by an automated
resolver/tracker tool that needs correct ARIA structure to validate against.

## Components exercised

Header (UI Shell top nav with global actions), Button, TextInput, Dropdown,
Checkbox, RadioButtonGroup, Toggle, Slider, Tabs, Modal, OverflowMenu,
Accordion, DataTable (sortable + searchable, with toolbar), InlineNotification,
ToastNotification, plus layout primitives (Grid/Column/Tile/Content).

## Local development

```bash
npm install
npm run dev
```

This starts the Vite dev server (default `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview
```

`vite.config.js` sets `base: './'` so the built assets use relative paths and
work when served from a GitHub Pages project subpath
(`https://<user>.github.io/<repo>/`).

## Deploying

`.github/workflows/deploy.yml` builds the app and publishes `dist/` on every
push to `main` using `actions/upload-pages-artifact` +
`actions/deploy-pages`.

**Before the first deploy**, in the repository's GitHub settings go to
**Settings → Pages** and set **Source = GitHub Actions** (instead of "Deploy
from a branch"). After that, pushes to `main` deploy automatically.

## Notes on the Sass setup

Carbon's React components ship their styles as Sass source, consumed via:

```scss
// src/styles.scss
@use '@carbon/react';
```

Vite is configured (`vite.config.js`) to use the modern Sass compiler API
backed by `sass-embedded`, with `node_modules` added as a load path, so the
bare `@use '@carbon/react'` import resolves correctly against the package's
export map. Both `sass` and `sass-embedded` are listed as dev dependencies.
