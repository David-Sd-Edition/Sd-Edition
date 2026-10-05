<script setup lang="ts">
import { site } from '../site.config'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p>© {{ year }} {{ site.commercialName }}</p>
      <nav aria-label="Informations légales">
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
        <RouterLink to="/confidentialite">Confidentialité</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </footer>
</template>
