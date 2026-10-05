<script setup lang="ts">
import { site, ownerFullName } from '../site.config'
</script>

<template>
  <section class="section">
    <div class="container narrow legal">
      <h1>Politique de confidentialité</h1>

      <h2>Responsable du traitement</h2>
      <p>
        {{ ownerFullName }}, EI ({{ site.commercialName }}) — {{ site.owner.address }} —
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>.
      </p>

      <h2>Aucun cookie, aucun suivi</h2>
      <p>
        Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience ni de publicité, et
        ne charge aucun contenu depuis un service tiers. Aucun consentement n'est donc demandé.
      </p>

      <h2>Données traitées</h2>
      <ul>
        <li>
          <strong>Messages que vous nous envoyez par e-mail</strong> : utilisés uniquement pour vous
          répondre (base légale : intérêt légitime à traiter votre demande). Conservés le temps
          nécessaire au traitement de votre demande, puis au plus 3 ans après notre dernier échange.
        </li>
        <li>
          <strong>Journaux techniques du serveur</strong> (adresse IP, date, page demandée,
          navigateur) : enregistrés automatiquement par l'hébergeur ({{ site.host.name }}, en France)
          pour la sécurité et le bon fonctionnement du site, et conservés pour une durée limitée.
        </li>
      </ul>
      <p>Ces données ne sont ni vendues, ni cédées, ni utilisées à des fins publicitaires.</p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
        d'opposition sur les données vous concernant. Pour l'exercer, écrivez à
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>. Vous pouvez également
        introduire une réclamation auprès de la CNIL
        (<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>).
      </p>

      <h2>Sites tiers</h2>
      <p>
        Lorsque vous suivez un lien vers un site tiers, c'est la politique de confidentialité de ce
        site qui s'applique.
      </p>

      <p class="muted">Dernière mise à jour : {{ site.legalUpdatedAt }}.</p>
    </div>
  </section>
</template>
