<script setup lang="ts">
import { site } from '../site.config'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <nav aria-label="Activités" class="site-footer__nav">
        <RouterLink to="/editeur-de-sites">Éditeur de sites</RouterLink>
        <RouterLink to="/developpement">Développement</RouterLink>
        <RouterLink to="/automatisation-ia">Automatisation IA</RouterLink>
        <RouterLink to="/a-propos">À propos</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <nav aria-label="Informations légales" class="site-footer__nav">
        <RouterLink to="/conditions-generales">Conditions générales de prestation</RouterLink>
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
        <RouterLink to="/confidentialite">Confidentialité</RouterLink>
      </nav>
      <p>© {{ year }} {{ site.commercialName }} — Prestations réservées aux professionnels, sur devis.</p>
    </div>
  </footer>
</template>
