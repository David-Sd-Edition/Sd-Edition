# Sd-Edition — site vitrine

Site vitrine de l'activité Sd-Edition (nom commercial d'un entrepreneur individuel,
micro-entrepreneur) : création et exploitation de sites Internet, avec mise en relation vers des
services tiers. Il remplace l'ancien site WordPress de `sd-edition.fr` hébergé sur o2switch.

## Principes

- **Site 100 % statique** : Vue 3 + Vite 5 (stack commune), build dans `dist/` envoyé par FTP.
  Aucun backend, aucune base de données, aucun formulaire côté serveur, aucun cookie ni outil de
  mesure d'audience (donc pas de bandeau cookies). Ne pas en ajouter sans accord explicite.
- Pas de police ni de script chargés depuis un domaine tiers (Google Fonts, CDN…) : transfert
  d'adresse IP à un tiers, à déclarer dans la politique de confidentialité.
- Identité de l'entreprise (nom, adresse, SIRET, e-mail…) : un seul fichier,
  `src/site.config.ts`. Les pages légales le lisent. `npm run check:config` (lancé par la CI avant
  tout déploiement) échoue tant qu'il reste une valeur `À COMPLÉTER`.
- `public/.htaccess` : copie de `sd-edition-infra/templates/web/.htaccess`, plus un bloc
  « Spécifique sd-edition.fr » (anciennes URL WordPress). Les règles communes se modifient dans
  le modèle d'abord.

## Branches et déploiement (exception aux conventions communes)

Ce projet n'a ni staging ni Pull Request (site vitrine, décision de l'utilisateur). Les §2 et §4
de `sd-edition-infra/docs/guides/conventions-git-github.md` ne s'appliquent pas ici. Deux
branches :

- `Develop` : branche de travail, **uniquement locale**. Jamais poussée sur GitHub, aucun
  workflow ne s'y déclenche. Les commits s'y font à la demande de l'utilisateur.
- `Master` : production. Vérification en local (`docker compose up -d`, `npm run dev` ou
  `npm run build && npm run preview`), puis, à la demande de l'utilisateur :
  `git checkout Master`, `git merge --ff-only Develop`, `git push`, et retour sur `Develop`.
  Pas de commit direct sur `Master`.
- Push sur `Master` → `.github/workflows/Deploy.yml` : contrôle de `site.config.ts`, build, envoi
  FTP dans le dossier racine du domaine. Pas de `dangerous-clean-slate` : le dossier peut contenir
  d'autres éléments (`.well-known`, dossiers de sous-domaines…).
- Secret GitHub `SECRETS_PROD` (lignes `CLÉ=valeur`) : `FTP_HOST`, `FTP_PORT`, `FTP_USER`,
  `FTP_PASS`, `FTP_SITE_DIR`.
- Format de commit : celui des conventions communes (§3), `#00 : …` en l'absence de ticket.

## Configuration des agents sd-edition

| Valeur | Projet Sd-Edition |
|--------|-------------------|
| Dossier backend | aucun |
| Dossier frontend | `.` (racine du dépôt) |
| Dossier tests backend | aucun |
| Dossier tests frontend | aucun |
| Exécution des tests | non |
| Dossier documentation | `docs/` |
| Plan de développement | aucun |
| Validation documentation | avant écriture |
| Dépôt GitHub | `David-Sd-Edition/Sd-Edition` |
| Assigné | `David-Sd-Edition` |
| Labels GitHub | `bug`, `feature`, `Improve`, `documentation` |
| Board GitHub | aucun |
| URL frontend local | `http://localhost:8084` (Docker, `docker compose up -d`) ou `http://localhost:5173` (`npm run dev`) |
| URL API local | aucune |
| URL frontend staging / API staging | aucune (pas de staging) |
| URLs production (interdites aux tests automatisés) | `https://sd-edition.fr`, `https://www.sd-edition.fr` |
| Dossier tests staging, comptes de test, enums métier | aucun |
| Matrice des permissions | aucune |
| Conventions UI | CSS maison (`src/styles/main.css`, variables CSS), polices système, pas de framework UI |
| docker-compose, réseau Docker, dossier infra | `docker-compose.yml` (service `front`, conteneur `sd_edition_front`, port hôte 8084), réseau par défaut, aucun dossier infra |
| Workflows de déploiement | `.github/workflows/Deploy.yml` (push sur `Master`) |
| Schémas Prisma, client Prisma | aucun |

## Référentiel commun sd-edition

@../sd-edition-infra/CLAUDE.md
