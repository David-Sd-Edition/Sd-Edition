import { createRouter, createWebHistory } from 'vue-router'
import { site } from './site.config'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
  }
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: '/:pathMatch(.*)*',
      component: () => import('./pages/NotFoundPage.vue'),
      meta: { title: 'Page introuvable' },
    },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} — ${site.commercialName}`
    : `${site.commercialName} — ${site.tagline}`
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', to.meta.description ?? '')
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute('href', site.url + to.path)
})
