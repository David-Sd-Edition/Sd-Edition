<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../site.config'
import logo from '../assets/logo-sd-edition.png'

const links = [
  { to: '/editeur-de-sites', label: 'Sites' },
  { to: '/developpement', label: 'Développement' },
  { to: '/automatisation-ia', label: 'IA' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

// Menu mobile : fermé à chaque changement de page et avec la touche Échap.
const open = ref(false)
const toggle = ref<HTMLButtonElement>()
const route = useRoute()
watch(
  () => route.fullPath,
  () => (open.value = false),
)

function close() {
  if (!open.value) return
  open.value = false
  toggle.value?.focus()
}
</script>

<template>
  <header class="site-header" @keydown.esc="close">
    <div class="container site-header__inner">
      <RouterLink to="/" class="brand">
        <img :src="logo" :alt="`${site.commercialName}, accueil`" width="52" height="64" class="brand__logo" />
      </RouterLink>
      <button
        ref="toggle"
        type="button"
        class="menu-toggle"
        :aria-expanded="open"
        aria-controls="menu-principal"
        @click="open = !open"
      >
        <span class="menu-toggle__icon" aria-hidden="true"></span>
        Menu
      </button>
      <nav
        id="menu-principal"
        class="site-nav"
        :class="{ 'site-nav--open': open }"
        aria-label="Navigation principale"
      >
        <RouterLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
