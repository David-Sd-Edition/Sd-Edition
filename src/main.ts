import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './styles/main.css'

// vite-ssg : rendu de chaque route en HTML au build, puis hydratation dans le navigateur.
export const createApp = ViteSSG(App, { routes, scrollBehavior })
