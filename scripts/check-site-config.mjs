// Refuse le déploiement tant que src/site.config.ts contient une valeur « À COMPLÉTER » :
// les mentions légales seraient publiées incomplètes. Lancé par la CI avant le build.
import { readFileSync } from 'node:fs'

const file = new URL('../src/site.config.ts', import.meta.url)
const lines = readFileSync(file, 'utf8').split(/\r?\n/)
const missing = lines
  .map((line, i) => ({ line: line.trim(), n: i + 1 }))
  .filter(({ line }) => line.includes("'À COMPLÉTER'"))

if (missing.length) {
  console.error('src/site.config.ts : valeurs à compléter avant la mise en ligne :')
  for (const { line, n } of missing) console.error(`  ligne ${n} : ${line}`)
  process.exit(1)
}
console.log('src/site.config.ts : complet.')
