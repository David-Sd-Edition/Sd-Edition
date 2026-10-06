<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { site } from '../site.config'

const roles = [
  {
    title: 'Conception',
    text: 'Analyse du besoin, choix des fonctionnalités et parcours utilisateur pensés pour être simples.',
  },
  {
    title: 'Exploitation',
    text: 'Hébergement, mises à jour, sauvegardes et suivi au quotidien des sites en production.',
  },
  {
    title: 'Maintenance',
    text: 'Corrections, mises à jour de sécurité et évolutions, au rythme des retours des utilisateurs.',
  },
]
</script>

<template>
  <section class="hero hero--page">
    <div class="container">
      <h1>Éditeur de sites</h1>
      <p class="hero__lead">
        {{ site.commercialName }} conçoit, exploite et maintient ses propres sites, de l'idée à la mise
        en ligne puis au suivi au quotidien.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Notre rôle d'éditeur</h2>
      <ul class="cards">
        <li v-for="role in roles" :key="role.title" class="card">
          <h3>{{ role.title }}</h3>
          <p>{{ role.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container narrow">
      <h2>Nos engagements sur les données</h2>
      <ul class="checklist">
        <li>
          <strong>Chaque site garde ses propres données.</strong> Un compte créé sur l'un de nos sites
          n'existe que sur ce site.
        </li>
        <li><strong>Aucun échange ni recoupement</strong> de données entre nos sites.</li>
        <li><strong>Aucune revente</strong> de données, à qui que ce soit.</li>
      </ul>
      <p>
        Chaque site a sa propre politique de confidentialité. Plus de détails dans notre
        <RouterLink to="/confidentialite#sites-edites">politique de confidentialité</RouterLink>.
      </p>
    </div>
  </section>

  <section id="sites" class="section">
    <div class="container">
      <h2>Nos sites</h2>
      <ul class="cards cards--projects">
        <ProjectCard v-for="project in site.projects" :key="project.name" :project="project" />
      </ul>
      <p class="section__more">
        Une question sur l'un de nos sites ? <RouterLink to="/contact">Contactez-nous</RouterLink>.
      </p>
    </div>
  </section>
</template>
