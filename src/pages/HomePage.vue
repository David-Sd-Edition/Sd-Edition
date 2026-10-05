<script setup lang="ts">
import { site } from '../site.config'

const services = [
  {
    title: 'Conception',
    text: 'Analyse du besoin, choix des fonctionnalités et parcours utilisateur pensés pour être simples.',
  },
  {
    title: 'Développement',
    text: 'Sites et applications web modernes, rapides et adaptés aux mobiles.',
  },
  {
    title: 'Exploitation',
    text: 'Hébergement, mises à jour, sauvegardes et suivi au quotidien des sites en production.',
  },
  {
    title: 'Mise en relation',
    text: 'Nos sites orientent leurs utilisateurs vers des services tiers adaptés à leurs besoins.',
  },
]
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>{{ site.commercialName }}</h1>
      <p class="hero__lead">
        Nous créons et exploitons des sites Internet qui mettent leurs utilisateurs en relation avec
        les services dont ils ont besoin.
      </p>
      <RouterLink to="/contact" class="button">Nous contacter</RouterLink>
    </div>
  </section>

  <section id="services" class="section">
    <div class="container">
      <h2>Ce que nous faisons</h2>
      <ul class="cards">
        <li v-for="service in services" :key="service.title" class="card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section id="sites" class="section section--alt">
    <div class="container">
      <h2>Nos sites</h2>
      <ul class="cards">
        <li v-for="project in site.projects" :key="project.name" class="card">
          <h3>
            <a :href="project.url" target="_blank" rel="noopener">{{ project.name }}</a>
          </h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container narrow">
      <h2>Mise en relation : en toute transparence</h2>
      <p>
        Certains de nos sites présentent des services proposés par des tiers. Lorsque vous utilisez
        l'un de ces services, vous contractez directement avec le tiers concerné, selon ses propres
        conditions. Le cas échéant, l'existence d'une rémunération de {{ site.commercialName }} par
        ce tiers est indiquée sur le site concerné. Plus de détails dans nos
        <RouterLink to="/mentions-legales#mise-en-relation">mentions légales</RouterLink>.
      </p>
    </div>
  </section>
</template>
