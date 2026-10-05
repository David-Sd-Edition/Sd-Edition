<script setup lang="ts">
import { site } from '../site.config'
import logo from '../assets/logo-sd-edition.png'
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink to="/" class="brand">
        <img :src="logo" :alt="site.commercialName" width="52" height="64" class="brand__logo" />
      </RouterLink>
      <nav aria-label="Navigation principale">
        <RouterLink to="/#services">Services</RouterLink>
        <RouterLink to="/#sites">Nos sites</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>
