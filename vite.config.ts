import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ViteSSGOptions } from 'vite-ssg'
import { site } from './src/site.config'

// Pages pré-rendues par `vite-ssg build`, hors page 404 (exclue du plan du site).
let pages: string[] = []

const ssgOptions: ViteSSGOptions = {
  // `/contact` → `dist/contact.html` (servi sans extension par public/.htaccess).
  dirStyle: 'flat',
  // Pas d'extraction du CSS critique (paquet beasties non installé).
  beastiesOptions: false,
  includedRoutes(paths) {
    pages = paths.filter((path) => !path.includes(':'))
    return [...pages, '/404']
  },
  onFinished() {
    const urls = pages.map((path) => `  <url><loc>${site.url}${path}</loc></url>`).join('\n')
    writeFileSync(
      resolve('dist', 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    )
  },
}

export default defineConfig({
  plugins: [vue()],
  ssgOptions,
})
