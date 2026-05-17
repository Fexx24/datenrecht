import { createRouter, createWebHistory } from 'vue-router'

// Route components
import Home from '@/pages/home.vue'
import About from '@/pages/about.vue'
import Contact from '@/pages/contact.vue'
import Pricing from '@/pages/pricing.vue'
import License from '@/pages/license.vue'
import Privacy from '@/pages/privacy.vue'
import Accessibility from '@/pages/accessibility-statement.vue'
import Impressum from '@/pages/impressum.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/license', name: 'License', component: License },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/accessibility-statement', name: 'Accessibility', component: Accessibility },
  { path: '/impressum', name: 'Impressum', component: Impressum },
  // fallback
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { left: 0, top: 0 } }
})

export default router

