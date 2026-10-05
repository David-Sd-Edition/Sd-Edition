# Sd-Edition — site vitrine

Site statique (Vue 3 + Vite 5) de `sd-edition.fr`. Aucun backend, aucune base de données.

| Action | Commande |
|--------|----------|
| Installer | `npm install` |
| Développer | `npm run dev` (http://localhost:5173) |
| Développer avec Docker | `docker compose up -d` (http://localhost:8084), arrêt : `docker compose down` |
| Vérifier le build | `npm run build && npm run preview` |
| Vérifier les mentions légales | `npm run check:config` |
| Travailler | branche locale `Develop` (jamais poussée, aucun déploiement) |
| Mettre en ligne | `git checkout Master`, `git merge --ff-only Develop`, `git push` (workflow `Deploy Prod Site`), puis `git checkout Develop` |

- Identité de l'entreprise : `src/site.config.ts`.
- Règles Apache : `public/.htaccess` (modèle commun `sd-edition-infra/templates/web/.htaccess`).
- Remplacement de l'ancien WordPress : [`docs/migration-wordpress.md`](docs/migration-wordpress.md).
- Cloner : `git clone --recurse-submodules <url>` puis `git -C sd-edition-infra checkout main`.
