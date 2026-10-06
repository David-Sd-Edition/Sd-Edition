<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { site } from './site.config'

// Titre, description et adresse canonique de la page, écrits dans le HTML pré-rendu.
const route = useRoute()
useHead(
  computed(() => {
    const { title, description, noindex } = route.meta
    return {
      htmlAttrs: { lang: 'fr' },
      title: title ? `${title} — ${site.commercialName}` : `${site.commercialName} — ${site.tagline}`,
      meta: [
        ...(description ? [{ name: 'description', content: description }] : []),
        ...(noindex ? [{ name: 'robots', content: 'noindex' }] : []),
      ],
      link: noindex ? [] : [{ rel: 'canonical', href: site.url + route.path }],
    }
  }),
)
</script>

<template>
  <SiteHeader />
  <main id="contenu">
    <RouterView />
  </main>
  <SiteFooter />
</template>
