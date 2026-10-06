# Sd-Edition — site vitrine

Site statique (Vue 3 + Vite 5) de `sd-edition.fr`. Aucun backend, aucune base de données.

Les pages sont pré-rendues au build par `vite-ssg` : un fichier HTML par route (`/contact` →
`dist/contact.html`), avec son titre et sa description, plus `dist/404.html` et `dist/sitemap.xml`
(généré à partir des routes de `src/router.ts`).

| Action | Commande |
|--------|----------|
| Installer | `npm install` |
| Développer | `npm run dev` (http://localhost:5173) |
| Développer avec Docker | `docker compose up -d` (http://localhost:8084), arrêt : `docker compose down` |
| Vérifier le build | `npm run build && npm run preview` |
| Vérifier les mentions légales | `npm run check:config` |
| Travailler | branche `Develop` (poussée sur GitHub, aucun déploiement) |
| Mettre en ligne | `git push` sur `Develop`, Pull Request `Develop` → `Master`, fusion (workflow `Deploy Prod Site`) |

- Identité de l'entreprise : `src/site.config.ts`.
- Titre et description d'une page : `meta` de sa route dans `src/router.ts`.
- Règles Apache : `public/.htaccess` (modèle commun `sd-edition-infra/templates/web/.htaccess`). Le bloc
  spécifique sert les pages pré-rendues sans extension et répond 404 aux URL inconnues.
- Cloner : `git clone --recurse-submodules <url>` puis `git -C sd-edition-infra checkout main`.
