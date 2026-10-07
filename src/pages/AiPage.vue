<script setup lang="ts">
import { mailtoFor } from '../contact'
import { site } from '../site.config'

const services = [
  {
    title: 'Audit des tâches à automatiser',
    text: 'Inventaire des tâches répétitives, gain attendu, données concernées et ce qui doit rester fait à la main.',
  },
  {
    title: 'Mise en place',
    text: 'Configuration, connexion à vos outils, automatisations sur mesure et tests sur vos cas réels.',
  },
  {
    title: 'Prise en main par vos équipes',
    text: "Séances de prise en main, guides d'utilisation et bonnes pratiques pour vérifier les résultats.",
  },
]

const examples = [
  'Trier et résumer des e-mails ou des documents reçus.',
  'Extraire les informations de factures ou de bons de commande vers un tableur.',
  'Préparer des premières versions de réponses types, relues avant envoi.',
  'Répondre aux questions de vos équipes à partir de votre documentation interne.',
  'Produire des comptes rendus ou des rapports réguliers.',
]
</script>

<template>
  <section class="hero hero--page">
    <div class="container">
      <h1>Automatisation IA avec Claude</h1>
      <p class="hero__lead">
        Repérer les tâches répétitives de votre entreprise et les confier à Claude, l'assistant
        d'intelligence artificielle d'Anthropic, dans un cadre maîtrisé.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <aside class="notice" aria-label="Conditions de l'offre">
        <p>
          <strong>Offre réservée aux professionnels.</strong> Tarifs sur devis, établi gratuitement
          après un premier échange sur vos besoins.
        </p>
        <a :href="mailtoFor('ai')" class="button">Demander un accompagnement</a>
      </aside>

      <h2>Ce que couvre l'accompagnement</h2>
      <ul class="cards">
        <li v-for="service in services" :key="service.title" class="card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container narrow">
      <h2>Exemples d'usages</h2>
      <ul class="checklist">
        <li v-for="example in examples" :key="example">{{ example }}</li>
      </ul>
      <p class="muted">
        Les résultats produits par une intelligence artificielle peuvent comporter des erreurs : chaque
        automatisation prévoit une vérification humaine adaptée.
      </p>
    </div>
  </section>

  <section id="donnees" class="section">
    <div class="container narrow">
      <h2>Traitement des données</h2>
      <div class="notice notice--block">
        <ul>
          <li>
            Claude est fourni par Anthropic, société établie aux États-Unis : les données qui lui sont
            transmises peuvent être <strong>traitées hors de l'Union européenne</strong>.
          </li>
          <li>
            Nous retenons une offre d'Anthropic couverte par un
            <strong>accord de traitement des données</strong> (DPA), qui encadre ces transferts. L'offre
            et ses conditions sont vérifiées avec vous avant tout projet.
          </li>
          <li>
            Nous définissons ensemble les données qui peuvent être transmises : pas de données
            sensibles (santé, données bancaires…) ni de données personnelles inutiles à la tâche.
          </li>
          <li>
            Vous restez responsable de vos traitements. {{ site.commercialName }} intervient comme
            sous-traitant au sens du RGPD pour ceux qu'il met en place, dans les conditions prévues au
            devis et aux <RouterLink to="/conditions-generales">conditions générales de prestation</RouterLink>.
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container narrow cta">
      <h2>Des tâches à automatiser ?</h2>
      <p>Décrivez-nous vos besoins : nous revenons vers vous avec une proposition et un devis.</p>
      <a :href="mailtoFor('ai')" class="button">Demander un accompagnement</a>
      <p class="muted trademark">
        Claude est une marque d'Anthropic. {{ site.commercialName }} n'est ni affilié à Anthropic ni
        partenaire d'Anthropic.
      </p>
    </div>
  </section>
</template>
