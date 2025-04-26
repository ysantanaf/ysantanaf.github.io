import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeSection from "@/views/ResumeSection.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import TfgView from "@/views/TfgView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/about',
      children: [
        {
          path: '/about',
          name: 'about',
          components: {
            content: AboutView
          }
        },
        {
          path: '/resume',
          name: 'resume',
          components: {
            content: ResumeSection
          }
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          components: {
            content: PortfolioView
          }
        },
        {
          path: '/contact',
          name: 'contact',
          components: {
            content: ContactView
          }
        },
        {
          path: '/tfg',
          name: 'tfg',
          components: {
            content: TfgView
          }
        }
      ]
    }
  ],
})

export default router
