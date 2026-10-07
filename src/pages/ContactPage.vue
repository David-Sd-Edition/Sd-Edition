<script setup lang="ts">
import { mailtoFor, type ContactRequest } from '../contact'
import { site } from '../site.config'

const requests: { key: ContactRequest; text: string }[] = [
  {
    key: 'development',
    text: "Site, application web, mobile ou pour ordinateur, reprise ou maintenance d'un existant.",
  },
  {
    key: 'ai',
    text: 'Audit des tâches à automatiser, mise en place, prise en main par vos équipes.',
  },
  {
    key: 'publishedSite',
    text: "Un compte, une donnée ou une question sur l'un des sites édités par Sd-Edition.",
  },
]
</script>

<template>
  <section class="section">
    <div class="container narrow">
      <h1>Contact</h1>
      <p>
        Choisissez le type de demande : votre messagerie s'ouvre avec un message prérempli, à compléter
        avant l'envoi.
      </p>
      <p class="notice notice--inline">
        <span><strong>Prestations réservées aux professionnels.</strong> Tarifs sur devis, établi
        gratuitement après un premier échange.</span>
      </p>

      <ul class="contact-requests">
        <li v-for="request in requests" :key="request.key">
          <a :href="mailtoFor(request.key)" class="contact-request">
            <strong>{{ site.contact.requests[request.key].label }}</strong>
            <span>{{ request.text }}</span>
          </a>
        </li>
      </ul>

      <p>
        Pour toute autre demande, écrivez directement à
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>.
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
