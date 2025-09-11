import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import EjemploPage from '@/views/EjemploPage.vue'
import PokePage from '@/views/PokePage.vue'
import ProductosPage from '@/views/ProductosPage.vue'

const routes = [
  { path: '/', name:'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/ejemplo', name: 'ABP3', component: EjemploPage },
  { path: '/poke', name: 'Poke', component: PokePage },
  { path: '/productos', name: 'Productos', component: ProductosPage },
  { path: '/productos/marca/:brand', name: 'Productos-por-Marca', component: ProductosPage }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;