<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { site } from './site.config'

// Titre, description, adresse canonique et aperçu de lien (Open Graph, Twitter) de la page,
// écrits dans le HTML pré-rendu. L'image d'aperçu est hébergée sur le site (public/og-image.jpg).
const route = useRoute()
useHead(
  computed(() => {
    const { title, description, noindex } = route.meta
    const fullTitle = title
      ? `${title} — ${site.commercialName}`
      : `${site.commercialName} — ${site.tagline}`
    const url = site.url + route.path
    const preview = noindex
      ? []
      : [
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: site.commercialName },
          { property: 'og:locale', content: 'fr_FR' },
          { property: 'og:title', content: fullTitle },
          { property: 'og:description', content: description ?? '' },
          { property: 'og:url', content: url },
          { property: 'og:image', content: `${site.url}/og-image.jpg` },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: `${site.commercialName} — ${site.tagline}` },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
    return {
      htmlAttrs: { lang: 'fr' },
      title: fullTitle,
      meta: [
        ...(description ? [{ name: 'description', content: description }] : []),
        ...(noindex ? [{ name: 'robots', content: 'noindex' }] : []),
        ...preview,
      ],
      link: noindex ? [] : [{ rel: 'canonical', href: url }],
    }
  }),
)
</script>

<template>
  <a href="#contenu" class="skip-link">Aller au contenu</a>
  <SiteHeader />
  <main id="contenu" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter />
</template>
