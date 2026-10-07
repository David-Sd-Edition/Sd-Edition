<script setup lang="ts">
import { site, ownerFullName, registryUrl } from '../site.config'

const principles = [
  {
    title: 'Un seul interlocuteur',
    text: 'La même personne vous accompagne du premier échange au suivi après livraison.',
  },
  {
    title: 'Des engagements écrits',
    text: 'Périmètre, délais et prix sont fixés dans un devis détaillé avant tout démarrage.',
  },
  {
    title: 'Un travail transmissible',
    text: 'Code remis, documentation et outils courants : votre application ne dépend pas de nous.',
  },
  {
    title: 'Des données respectées',
    text: 'Seules les données utiles sont collectées, sans traceur publicitaire ni revente.',
  },
]
</script>

<template>
  <section class="hero hero--page">
    <div class="container">
      <h1>À propos</h1>
      <p class="hero__lead">
        Derrière {{ site.commercialName }} : {{ ownerFullName }}, entrepreneur individuel.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container narrow">
      <h2>Parcours</h2>
      <p v-for="(paragraph, index) in site.about.background" :key="index">{{ paragraph }}</p>

      <h2 class="section__title">Compétences</h2>
      <ul class="tags">
        <li v-for="skill in site.about.skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2>Façon de travailler</h2>
      <ul class="cards">
        <li v-for="principle in principles" :key="principle.title" class="card">
          <h3>{{ principle.title }}</h3>
          <p>{{ principle.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container narrow">
      <h2>Statut</h2>
      <p>
        {{ site.commercialName }} est le nom commercial de {{ ownerFullName }}, entrepreneur
        individuel (EI), SIRET {{ site.owner.siret }}. Activité déclarée au Registre national des
        entreprises depuis le {{ site.owner.declaredActivitySince }} :
        <strong>{{ site.owner.declaredActivity.toLowerCase() }}</strong>.
      </p>
      <p>
        Cette activité n'apparaît pas dans le code APE, qui ne reflète que l'activité principale.
        L'ensemble des activités déclarées figure sur l'extrait d'immatriculation,
        <a :href="registryUrl" target="_blank" rel="noopener">consultable sur data.inpi.fr</a> ou
        communiqué sur simple demande.
      </p>
      <p>
        Prestations réservées aux professionnels, sur devis :
        <RouterLink to="/developpement">développement</RouterLink> et
        <RouterLink to="/automatisation-ia">automatisation IA</RouterLink>.
        <RouterLink to="/contact">Nous contacter</RouterLink>.
      </p>
    </div>
  </section>
</template>
