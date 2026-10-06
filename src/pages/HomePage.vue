<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { site } from '../site.config'

const activities = [
  {
    title: 'Éditeur de sites',
    text: 'Nous concevons, exploitons et maintenons nos propres sites, avec des engagements clairs sur les données.',
    to: '/editeur-de-sites',
    link: 'Nos sites et nos engagements',
  },
  {
    title: 'Développement pour les entreprises',
    text: "Applications web, mobile et pour ordinateur, reprise d'un existant, hébergement et maintenance.",
    to: '/developpement',
    link: 'Nos prestations de développement',
  },
  {
    title: 'Automatisation IA avec Claude',
    text: 'Audit des tâches à automatiser, mise en place et prise en main par vos équipes.',
    to: '/automatisation-ia',
    link: "L'accompagnement IA",
  },
]
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>{{ site.commercialName }}</h1>
      <p class="hero__lead">
        Nous éditons nos propres sites, développons des applications pour les entreprises et les
        accompagnons dans l'automatisation de leurs tâches avec l'intelligence artificielle.
      </p>
      <p class="hero__note">Prestations réservées aux professionnels, sur devis.</p>
      <RouterLink to="/contact" class="button">Nous contacter</RouterLink>
    </div>
  </section>

  <section id="activites" class="section">
    <div class="container">
      <h2>Nos activités</h2>
      <ul class="cards">
        <li v-for="activity in activities" :key="activity.to" class="card card--link">
          <h3>
            <RouterLink :to="activity.to">{{ activity.title }}</RouterLink>
          </h3>
          <p>{{ activity.text }}</p>
          <p class="card__more">
            <RouterLink :to="activity.to" tabindex="-1" aria-hidden="true">{{ activity.link }} →</RouterLink>
          </p>
        </li>
      </ul>
    </div>
  </section>

  <section id="sites" class="section section--alt">
    <div class="container">
      <h2>Nos réalisations</h2>
      <p class="section__intro">
        Ces sites, conçus, développés et exploités par {{ site.commercialName }}, sont nos premières
        références.
      </p>
      <ul class="cards cards--projects">
        <ProjectCard v-for="project in site.projects" :key="project.name" :project="project" />
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container narrow cta">
      <h2>Un projet pour votre entreprise ?</h2>
      <p>Développement ou automatisation : décrivez-nous votre besoin, nous revenons vers vous avec un devis.</p>
      <RouterLink to="/contact" class="button">Nous contacter</RouterLink>
    </div>
  </section>
</template>
