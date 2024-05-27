import { createMemoryHistory, createRouter } from 'vue-router'

import Baju from '../src/components/Baju.vue' // Adjust the import path
import Celana from '../src/components/Celana.vue' // Adjust the import path
import Aksesoris from '../src/components/Aksesoris.vue'

const routes = [
  { path: 'Baju', component: Baju },
  { path: '/Celana', component: Celana },
  { path: '/about', component: Aksesoris }, // Assuming '/about' corresponds to ShoppingCart
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;