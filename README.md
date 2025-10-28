# West Garden Supply Web

Bilingual (English/Chinese) marketing site for [www.westgardensupply.com](https://www.westgardensupply.com) built with Next.js App Router.

## Requirements

- Node.js 18+
- npm 9+

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to view the site locally. The language toggle persists your last selection via `localStorage` and defaults to Chinese for browsers whose primary locale starts with `zh`.

## Production Build

```bash
npm run build
npm start
```

`npm run build` outputs optimized assets to `.next/`. `npm start` serves the compiled app.

## Quality Checks

```bash
npm run lint
```

Linting uses `next/core-web-vitals` to validate the React codebase.

