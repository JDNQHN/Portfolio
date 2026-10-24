# JDN — Jayden Chan's personal website

Built with [Astro](https://astro.build). Every page compiles to plain HTML and CSS.

## Running it

You need [Node.js](https://nodejs.org) 20 or newer.

```sh
npm install      # once, to download Astro
npm run dev      # live preview at http://localhost:4321 while you edit
npm run build    # builds the finished site into dist/
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/pages/` | One file per page: `index`, `experience`, `gallery`, `music`. |
| `src/layouts/Base.astro` | The `<head>`, fonts, and base styles shared by every page. |
| `src/layouts/SubPage.astro` | The layout for every page except home: the "JDN" link back home and the big heading. |
| `src/components/` | Reusable pieces: `HomeLink`, `UnderConstruction`. |
| `public/` | Files copied across exactly as they are: images, and the 2022 site in `public/original/`. |

To add a page, create a new file in `src/pages/` using `SubPage`, like the others.

## Hosting

- **Netlify:** connect the repo; `netlify.toml` already sets the build command and output folder.
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- **GitHub Pages:** needs a GitHub Actions workflow to run the build. It isn't set up yet.
