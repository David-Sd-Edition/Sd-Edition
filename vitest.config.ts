// Config Vitest fusionnée avec la config Vite (plugin Vue), d'après
// sd-edition-infra/templates/testing/frontend/vitest.config.ts.
// vite.config.ts exporte un objet : mergeConfig suffit. Ses `ssgOptions` ne servent qu'à
// `vite-ssg build` (vite-ssg n'est pas un plugin Vite) et sont ignorées par Vitest.
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      globals: true,
      include: ['test/**/*.spec.ts'],
      passWithNoTests: true,
      coverage: {
        // istanbul (dépendance @vitest/coverage-istanbul) : le provider v8 surestime fortement la
        // couverture des fichiers .vue.
        provider: 'istanbul',
        include: ['src/**/*.{ts,vue}'],
        reporter: ['text-summary', 'text', 'html'],
      },
    },
  }),
)
