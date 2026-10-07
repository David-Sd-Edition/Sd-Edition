<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../site.config'

const props = defineProps<{ project: Project }>()

// Images des sites : fichiers de src/assets/projects/, désignés par leur nom dans site.config.ts.
const images = import.meta.glob<string>('../assets/projects/*', { eager: true, import: 'default' })
const image = (file?: string) => (file ? images[`../assets/projects/${file}`] : undefined)

const logo = computed(() => image(props.project.logo))
const screenshot = computed(() => image(props.project.screenshot))
</script>

<template>
  <li class="card project-card">
    <img
      v-if="screenshot"
      :src="screenshot"
      :alt="`Capture d'écran de ${project.name}`"
      class="project-card__screenshot"
      loading="lazy"
    />
    <div class="project-card__body">
      <div class="project-card__title">
        <img v-if="logo" :src="logo" alt="" class="project-card__logo" width="40" height="40" />
        <h3>
          <a :href="project.url" target="_blank" rel="noopener">{{ project.name }}</a>
        </h3>
      </div>
      <p v-if="project.inDevelopment" class="badge">En développement</p>
      <p>{{ project.description }}</p>
      <p v-if="project.privacyUrl" class="project-card__privacy">
        <a :href="project.privacyUrl" target="_blank" rel="noopener">Politique de confidentialité</a>
      </p>
    </div>
  </li>
</template>
