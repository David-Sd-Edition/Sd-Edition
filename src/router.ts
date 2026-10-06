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
        'Sd-Edition conçoit, développe et exploite des sites Internet qui mettent leurs utilisateurs en relation avec des services adaptés à leurs besoins.',
    },
  },
  {
    path: '/contact',
    component: () => import('./pages/ContactPage.vue'),
    meta: { title: 'Contact', description: 'Contacter Sd-Edition.' },
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
