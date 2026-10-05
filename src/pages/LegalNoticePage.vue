<script setup lang="ts">
import { site, ownerFullName } from '../site.config'
</script>

<template>
  <section class="section">
    <div class="container narrow legal">
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>{{ site.domain }}</strong> est édité par <strong>{{ ownerFullName }}, EI</strong>
        (entrepreneur individuel), exerçant sous le nom commercial
        <strong>{{ site.commercialName }}</strong>.
      </p>
      <ul>
        <li>Adresse : {{ site.owner.address }}</li>
        <li>SIRET : {{ site.owner.siret }}</li>
        <li v-if="site.owner.registration">{{ site.owner.registration }}</li>
        <li>{{ site.owner.vatMention }}</li>
        <li>
          Contact : <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
          <template v-if="site.contact.phone"> — {{ site.contact.phone }}</template>
        </li>
      </ul>
      <p>Directeur de la publication : {{ ownerFullName }}.</p>

      <h2>Hébergeur</h2>
      <p>
        {{ site.host.name }}<br />
        {{ site.host.address }}<br />
        Téléphone : {{ site.host.phone }}<br />
        <a :href="site.host.url" target="_blank" rel="noopener">{{ site.host.url }}</a>
      </p>

      <h2>Activité</h2>
      <p>
        {{ site.commercialName }} crée et exploite des sites Internet. Certains de ces sites mettent
        leurs utilisateurs en relation avec des services proposés par des tiers.
      </p>

      <h2 id="mise-en-relation">Information sur la mise en relation</h2>
      <p>
        Lorsqu'un site édité par {{ site.commercialName }} présente des services proposés par des
        tiers, l'utilisateur contracte directement avec le tiers concerné, selon les conditions
        générales de celui-ci. {{ site.commercialName }} n'est pas partie à ce contrat et n'intervient
        ni dans son exécution ni dans le paiement.
      </p>
      <p>
        Conformément à l'article L. 111-7 du Code de la consommation, chaque site concerné indique
        les critères de classement et de référencement des offres présentées, ainsi que l'existence
        éventuelle d'une relation contractuelle, d'un lien capitalistique ou d'une rémunération
        (commission, affiliation…) entre {{ site.commercialName }} et les tiers référencés, lorsque
        ceux-ci influencent ce classement.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, logos, graphismes, code) est la propriété de
        {{ ownerFullName }}, sauf mention contraire. Toute reproduction, totale ou partielle, sans
        autorisation préalable est interdite.
      </p>

      <h2>Liens externes</h2>
      <p>
        Ce site contient des liens vers des sites tiers. {{ site.commercialName }} n'exerce aucun
        contrôle sur leur contenu et décline toute responsabilité à leur égard.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Voir la <RouterLink to="/confidentialite">politique de confidentialité</RouterLink>.
      </p>

      <p class="muted">Dernière mise à jour : {{ site.legalUpdatedAt }}.</p>
    </div>
  </section>
</template>
