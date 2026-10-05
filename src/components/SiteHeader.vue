<script setup lang="ts">
import { site } from '../site.config'
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink to="/" class="brand">{{ site.commercialName }}</RouterLink>
      <nav aria-label="Navigation principale">
        <RouterLink to="/#services">Services</RouterLink>
        <RouterLink to="/#sites">Nos sites</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>
