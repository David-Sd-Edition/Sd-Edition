<script setup lang="ts">
import { site } from '../site.config'
</script>

<template>
  <section class="section">
    <div class="container narrow">
      <h1>Contact</h1>
      <p>
        Une question, un projet, une proposition de partenariat ? Écrivez-nous, nous vous répondons
        rapidement.
      </p>
      <p class="contact-line">
        <a :href="`mailto:${site.contact.email}`" class="button">{{ site.contact.email }}</a>
      </p>
      <p v-if="site.contact.phone" class="contact-line">
        Téléphone : <a :href="`tel:${site.contact.phone.replace(/\s/g, '')}`">{{ site.contact.phone }}</a>
      </p>
      <p class="muted">
        Les informations que vous nous transmettez par e-mail servent uniquement à vous répondre.
        Voir notre <RouterLink to="/confidentialite">politique de confidentialité</RouterLink>.
      </p>
    </div>
  </section>
</template>
