<script setup lang="ts">
import { site, ownerFullName, registryUrl } from '../site.config'
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

      <h2 id="activite">Activité</h2>
      <p>{{ site.commercialName }} exerce trois activités :</p>
      <ul>
        <li>
          <strong>édition de sites</strong> : conception, exploitation et maintenance de ses propres
          sites ;
        </li>
        <li>
          <strong>développement pour les entreprises</strong> : développement d'applications web,
          mobile ou pour ordinateur, hébergement et maintenance des applications livrées ;
        </li>
        <li>
          <strong>automatisation IA</strong> : accompagnement des entreprises dans l'automatisation de
          tâches avec l'intelligence artificielle Claude.
        </li>
      </ul>
      <p>
        Activité déclarée au Registre national des entreprises depuis le
        {{ site.owner.declaredActivitySince }} : {{ site.owner.declaredActivity.toLowerCase() }}.
        Cette activité secondaire n'apparaît pas dans le code APE. L'ensemble des activités déclarées
        figure sur l'extrait d'immatriculation,
        <a :href="registryUrl" target="_blank" rel="noopener">consultable sur data.inpi.fr</a> ou
        communiqué sur simple demande.
      </p>
      <p>
        Les prestations sont <strong>réservées aux professionnels</strong> et établies sur devis, selon
        les <RouterLink to="/conditions-generales">conditions générales de prestation</RouterLink>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, logos, graphismes, code) est la propriété de
        {{ ownerFullName }}, sauf mention contraire. Toute reproduction, totale ou partielle, sans
        autorisation préalable est interdite.
      </p>
      <p>
        Claude est une marque d'Anthropic. {{ site.commercialName }} n'est ni affilié à Anthropic ni
        partenaire d'Anthropic ; la marque est citée uniquement pour décrire les prestations proposées.
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
