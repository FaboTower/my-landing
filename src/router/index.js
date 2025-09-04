import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import EjemploPage from '@/views/EjemploPage.vue'

const routes = [
  { path: '/', name:'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/ejemplo', name: 'ABP3', component: EjemploPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;