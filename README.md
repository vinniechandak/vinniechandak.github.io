# vinniechandak.github.io

Personal portfolio for Vinod Chandak — a single-page React app with a
terminal / code-editor aesthetic. Each section is presented as a "file"
(`readme.md`, `about.md`, `skills.json`, `experience.log`, `contact.sh`),
navigated through a file-tree sidebar.

Live site: [vinniechandak.github.io](https://vinniechandak.github.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e76f05bc-f2f5-4285-8daa-ecc8150e0d2a/deploy-status)](https://app.netlify.com/sites/vinodchandak/deploys)

## Tech stack

- **React 19** (Create React App / `react-scripts`)
- **styled-components 6** for all styling and theming (terminal palette + global styles)
- **react-icons** for iconography
- **pnpm** as the package manager, **Node 24**

## Prerequisites

- [Node.js](https://nodejs.org) 24+ (see `.nvmrc` — run `nvm use` if you use nvm)
- [pnpm](https://pnpm.io) 9+ (`corepack enable pnpm` or `npm i -g pnpm`)

> This project uses pnpm with a hoisted `node_modules` layout (configured in
> `.npmrc`) so that Create React App's tooling resolves correctly. Use `pnpm`
> rather than `npm` or `yarn`.

## Getting started

```bash
pnpm install      # install dependencies
pnpm start        # run the dev server at http://localhost:3000
```

## Scripts

| Command        | Description                                              |
| -------------- | -------------------------------------------------------- |
| `pnpm start`   | Start the development server with hot reload             |
| `pnpm build`   | Produce an optimized production build in `build/`        |
| `pnpm test`    | Run the test suite (add `-- --watchAll=false` for CI)    |
| `pnpm run deploy` | Build and publish `build/` to GitHub Pages via `gh-pages` |

## Project structure

```
src/
├── App.js                  # ThemeProvider + GlobalStyle + layout
├── index.js                # React 19 createRoot entry point
├── pages/
│   └── AppContainer.js     # Sidebar + content shell, mobile drawer state
├── components/
│   ├── Sidebar.js          # File-tree navigation + social links
│   ├── Navigationbar.js    # Mobile menu toggle
│   ├── Container.js        # Renders the content sections in order
│   ├── Home.js             # Terminal-window hero ($ whoami)
│   ├── About.js            # about.md
│   ├── Education.js        # education.md (degree + certifications)
│   ├── Skills.js           # skills.json
│   ├── Experience.js       # experience.log
│   ├── Contact.js          # contact.sh
│   ├── TerminalWindow.js   # Shared window chrome (traffic lights)
│   ├── Card.js             # Reusable detail card
│   └── Title.js            # Section headers ($ open <file>)
└── styles/
    ├── colours.js          # Terminal palette
    ├── theme.js            # Theme tokens (fonts, radius, layout)
    └── GlobalStyle.js      # Global createGlobalStyle rules
```

## Editing content

The site content lives as plain data inside each section component — for
example, roles in `components/Experience.js`, skill groups in
`components/Skills.js`, and certifications in `components/Education.js`.
Update those arrays/objects to change what's shown.

## SEO / prerendering

The production build is prerendered with [react-snap](https://github.com/stereobooster/react-snap)
so that crawlers, answer engines, and no-JS visitors receive fully rendered
static HTML (not just an empty `<div id="root">`). This runs automatically as a
`postbuild` step — note that `.npmrc` sets `enable-pre-post-scripts=true`, which
pnpm requires for `postbuild` to fire.

`src/index.js` hydrates the prerendered markup when present and falls back to a
fresh mount otherwise. Structured data (JSON-LD `Person`), Open Graph / Twitter
tags, `sitemap.xml`, and `robots.txt` live in `public/`.

The social preview image is `public/og-image.png` (1200×630).

## Deployment

The site is hosted on GitHub Pages. `pnpm run deploy` runs the production
build — which prerenders via `postbuild` — and pushes `build/` to the
`gh-pages` branch:

```bash
git checkout master && pnpm run deploy
```

> Use `pnpm run deploy`, not `pnpm deploy`. pnpm has a built-in `deploy`
> command that shadows the package.json script (it errors with
> `ERR_PNPM_CANNOT_DEPLOY`); `pnpm run deploy` always runs the script.

`gh-pages` is build output managed by the `gh-pages` tool — never edit it or
merge `master` into it by hand; each deploy rebuilds and replaces it.
