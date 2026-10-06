<script setup lang="ts">
import { mailtoFor } from '../contact'

const services = [
  {
    title: 'Sites et applications web',
    text: 'Sites, espaces clients et outils de gestion sur mesure, rapides et adaptés aux mobiles.',
  },
  {
    title: 'Applications mobile et pour ordinateur',
    text: 'Applications pour téléphone ou pour poste de travail, selon les usages de vos équipes.',
  },
  {
    title: "Reprise ou maintenance d'un existant",
    text: "Corrections, mises à jour de sécurité et évolutions d'une application déjà en place.",
  },
  {
    title: 'Hébergement et maintenance',
    text: 'Mise en ligne, sauvegardes, mises à jour et suivi des applications livrées.',
  },
  {
    title: 'Automatisations',
    text: 'Échanges de données entre vos outils, tâches répétitives, rapports générés automatiquement.',
  },
]

const steps = [
  { title: 'Échange sur le besoin', text: 'Vos objectifs, vos contraintes, vos outils actuels.' },
  { title: 'Devis', text: 'Périmètre, livrables, délais et prix, détaillés par écrit.' },
  { title: 'Réalisation', text: "Développement avec des points d'étape réguliers." },
  { title: 'Livraison', text: 'Mise en ligne, documentation et remise du code.' },
  { title: 'Suivi', text: 'Maintenance et évolutions, si vous le souhaitez.' },
]

const technologies = [
  'Vue.js',
  'TypeScript',
  'Node.js',
  'Bases de données SQL',
  'Docker',
  'Git et GitHub',
  'Déploiement automatisé',
]
</script>

<template>
  <section class="hero hero--page">
    <div class="container">
      <h1>Développement pour les entreprises</h1>
      <p class="hero__lead">
        Applications web, mobile et pour ordinateur, conçues, développées et maintenues pour les
        professionnels.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <aside class="notice" aria-label="Conditions de l'offre">
        <p>
          <strong>Offre réservée aux professionnels.</strong> Tarifs sur devis, établi gratuitement
          après un premier échange sur votre besoin.
        </p>
        <a :href="mailtoFor('development')" class="button">Demander un devis</a>
      </aside>

      <h2>Prestations</h2>
      <ul class="cards cards--wide">
        <li v-for="service in services" :key="service.title" class="card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </li>
      </ul>
      <p class="section__more">
        Automatiser des tâches avec l'intelligence artificielle ? Voir
        <RouterLink to="/automatisation-ia">Automatisation IA avec Claude</RouterLink>.
      </p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2>Démarche</h2>
      <ol class="steps">
        <li v-for="step in steps" :key="step.title">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Technologies utilisées</h2>
      <ul class="tags">
        <li v-for="technology in technologies" :key="technology">{{ technology }}</li>
      </ul>
      <p class="section__more">
        Nos propres sites, développés et exploités par Sd-Edition, sont nos premières références :
        <RouterLink to="/editeur-de-sites#sites">voir nos sites</RouterLink>.
      </p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container narrow cta">
      <h2>Un projet ?</h2>
      <p>Décrivez-nous votre besoin : nous revenons vers vous avec un devis.</p>
      <a :href="mailtoFor('development')" class="button">Demander un devis</a>
    </div>
  </section>
</template>
