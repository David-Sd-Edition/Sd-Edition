import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    // Page exclue des moteurs de recherche et du plan du site.
    noindex?: boolean
  }
}

// Chaque route est pré-rendue au build (vite-ssg) : `/contact` → `dist/contact.html`. Le titre et
// la description sont écrits dans le HTML par App.vue, et le plan du site est généré à partir de
// cette liste (vite.config.ts).
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/HomePage.vue'),
    meta: {
      description:
        "Sd-Edition édite ses propres sites, développe des applications web, mobile et pour ordinateur pour les entreprises et les accompagne dans l'automatisation avec l'IA. Prestations réservées aux professionnels, sur devis.",
    },
  },
  {
    path: '/editeur-de-sites',
    component: () => import('./pages/PublisherPage.vue'),
    meta: {
      title: 'Éditeur de sites',
      description:
        'Sd-Edition conçoit, exploite et maintient ses propres sites. Chaque site garde ses propres données : aucun échange, aucun recoupement, aucune revente.',
    },
  },
  {
    path: '/developpement',
    component: () => import('./pages/DevelopmentPage.vue'),
    meta: {
      title: 'Développement pour les entreprises',
      description:
        "Développement d'applications web, mobile et pour ordinateur pour les professionnels : création, reprise d'un existant, hébergement, maintenance et automatisations. Tarifs sur devis.",
    },
  },
  {
    path: '/automatisation-ia',
    component: () => import('./pages/AiPage.vue'),
    meta: {
      title: 'Automatisation IA avec Claude',
      description:
        "Accompagnement des professionnels dans l'automatisation de tâches avec Claude : audit, mise en place, prise en main par les équipes, cadre de traitement des données. Tarifs sur devis.",
    },
  },
  {
    path: '/a-propos',
    component: () => import('./pages/AboutPage.vue'),
    meta: {
      title: 'À propos',
      description:
        "Qui est derrière Sd-Edition : parcours, compétences, façon de travailler et statut d'entrepreneur individuel.",
    },
  },
  {
    path: '/contact',
    component: () => import('./pages/ContactPage.vue'),
    meta: {
      title: 'Contact',
      description:
        "Contacter Sd-Edition : demande de devis de développement, demande d'accompagnement IA ou question sur un site édité.",
    },
  },
  {
    path: '/conditions-generales',
    component: () => import('./pages/TermsPage.vue'),
    meta: {
      title: 'Conditions générales de prestation',
      description:
        'Conditions générales des prestations de Sd-Edition, réservées aux professionnels : devis, prix, paiement, propriété du code, responsabilité, données personnelles.',
    },
  },
  {
    path: '/mentions-legales',
    component: () => import('./pages/LegalNoticePage.vue'),
    meta: { title: 'Mentions légales', description: 'Mentions légales du site sd-edition.fr.' },
  },
  {
    path: '/confidentialite',
    component: () => import('./pages/PrivacyPage.vue'),
    meta: {
      title: 'Politique de confidentialité',
      description: 'Données personnelles et cookies sur sd-edition.fr.',
    },
  },
  {
    // Pré-rendue sous `/404` (`dist/404.html`), servie par Apache pour toute URL inconnue.
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/NotFoundPage.vue'),
    meta: { title: 'Page introuvable', noindex: true },
  },
]

export const scrollBehavior: RouterScrollBehavior = (to, _from, saved) => {
  if (saved) return saved
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  return { top: 0 }
}
