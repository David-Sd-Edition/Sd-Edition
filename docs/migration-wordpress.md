# Remplacement de l'ancien site WordPress (o2switch)

Procédure de bascule de `sd-edition.fr` : WordPress → site statique de ce dépôt.
Toutes les actions se font dans cPanel o2switch (ou en SSH). Ordre à respecter : **sauvegarder,
inventorier, préparer, basculer, puis seulement supprimer**.

## 1. Sauvegarder (avant toute suppression)

1. **Fichiers** : cPanel → « Gestionnaire de fichiers » → compresser le dossier racine du domaine
   (en général `public_html/`) → télécharger l'archive.
2. **Base de données** : ouvrir `wp-config.php` et noter `DB_NAME` et `DB_USER`. cPanel →
   phpMyAdmin → sélectionner **cette** base → Exporter (SQL) → télécharger.
3. Garder ces deux fichiers en local plusieurs mois (récupération d'un texte, d'une image, d'une
   ancienne URL).

Si WordPress a été installé avec **Softaculous**, sa fonction « Sauvegarder » fait les deux d'un
coup ; garder quand même une copie téléchargée.

## 2. Inventorier ce qui ne doit pas être touché

Le dossier racine du domaine ne contient pas forcément que WordPress.

- cPanel → « Domaines » : relever la **racine de document** de chaque sous-domaine
  (`voxliber`, `ecm`, `myrefereeexperience`, `*.staging`, `*.api`…). Tout sous-domaine dont la racine
  est **dans** `public_html/` doit être conservé tel quel.
- À conserver aussi : `.well-known/` (certificat SSL), `cgi-bin/`, les dossiers des applis Node
  (`/home/sdedition/<app>/…`, hors `public_html`), le dossier des scripts `deploy-watch.sh`.
- cPanel → « Bases de données MySQL » : ne supprimer que la base notée à l'étape 1 (les bases des
  applis VoxLiber, ECM, MRE sont au même endroit).
- cPanel → « Tâches Cron » : conserver la tâche `deploy-watch.sh` ; seules les tâches qui
  appellent `wp-cron.php` ou `wp-cli` sont à supprimer.
- **E-mails** : les boîtes `@sd-edition.fr` et les enregistrements DNS (MX, SPF, DKIM) ne
  dépendent pas de WordPress. Ne pas y toucher.

## 3. Relever les URL de l'ancien site (référencement)

Lister les pages publiques de WordPress (menu, `https://sd-edition.fr/wp-sitemap.xml`, ou Google
Search Console → Pages). Pour chaque page qui a un équivalent, ajouter une redirection 301 dans le
bloc « Spécifique sd-edition.fr » de `public/.htaccess` :

```apache
RewriteRule ^ancienne-page/?$ /contact [L,R=301]
```

Les URL techniques de WordPress (`wp-admin`, `wp-login.php`, `xmlrpc.php`, `/feed`…) renvoient
déjà **410 Gone** : elles disparaîtront des moteurs et des robots de scan.

## 4. Préparer le déploiement

1. Compléter `src/site.config.ts` (identité, SIRET, e-mail, descriptions des sites) ;
   `npm run check:config` doit afficher « complet ».
2. Vérifier en local : `npm run dev`, puis `npm run build && npm run preview`.
3. Créer un **compte FTP dédié** (cPanel → « Comptes FTP ») limité au dossier racine du domaine.
4. GitHub → dépôt `Sd-Edition` → Settings → Secrets and variables → Actions → secret
   `SECRETS_PROD` :

   ```
   FTP_HOST=<serveur FTP o2switch>
   FTP_PORT=21
   FTP_USER=<compte FTP dédié>
   FTP_PASS=<mot de passe>
   FTP_SITE_DIR=/
   ```

   `FTP_SITE_DIR` est relatif au dossier du compte FTP (`/` si le compte est limité à
   `public_html/`).

## 5. Basculer

1. **Supprimer les fichiers WordPress** du dossier racine du domaine, et uniquement eux :
   - via Softaculous : « Désinstaller » (supprime fichiers, base et utilisateur MySQL) ; décocher
     la suppression de la base si on préfère la garder quelques semaines ;
   - à la main : `wp-admin/`, `wp-content/`, `wp-includes/`, tous les `wp-*.php`, `index.php`,
     `xmlrpc.php`, `license.txt`, `licence.txt`, `readme.html`, `.htaccess` (sera remplacé), et
     les restes de plugins : `.user.ini` / `php.ini` / `wordfence-waf.php` (Wordfence),
     `.maintenance`, dossiers de cache (`wp-content/cache` déjà inclus).
2. Pousser sur `Master` : le workflow « Deploy Prod Site » envoie le site (onglet Actions).
3. Contrôler :
   - `https://sd-edition.fr`, recharger `https://sd-edition.fr/contact` (pas de 404) ;
   - `http://www.sd-edition.fr` → redirigé vers `https://sd-edition.fr` ;
   - `curl -I https://sd-edition.fr/` affiche `Cache-Control: no-cache` ;
   - `curl -I https://sd-edition.fr/wp-login.php` → `410` ;
   - les sous-domaines (applis) répondent toujours.

Le site est indisponible entre la suppression et la fin du déploiement (une à deux minutes).

## 6. Après la bascule

- Google Search Console : soumettre `https://sd-edition.fr/sitemap.xml`.
- Après 2 à 4 semaines sans problème : supprimer la base WordPress et son utilisateur MySQL
  (si conservés), puis l'installation dans Softaculous si elle y apparaît encore.
- Vérifier dans cPanel → « Sélection de la version PHP » qu'aucune extension ni réglage n'avait
  été ajouté pour WordPress (sans effet sur le site statique, mais inutile).
