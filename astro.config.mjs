import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    // Output experience.html rather than experience/index.html, so page links
    // stay the same as the old hand-written site.
    format: 'file',
    // Put each page's CSS inside the page itself. With no /_astro/ stylesheet
    // paths, the built site works from any folder, including a GitHub Pages
    // address like jdnqhn.github.io/Portfolio/.
    inlineStylesheets: 'always',
  },
});
