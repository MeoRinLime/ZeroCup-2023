import { createRouter, createWebHistory } from 'vue-router'
import HomepageVue from '../views/Homepage.vue'
import DetailsVue from '../views/Details.vue'
import SchoolMatesVue from '../components/SchoolMates.vue'
import BuildingsVue from '../components/Buildings.vue'
import HistoryVue from '../components/History.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomepageVue
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsVue,
      redirect: '/details/buildings',
      children:[
        {
          path: 'buildings',
          component: BuildingsVue
        },
        {
          path: 'history',
          component: HistoryVue
        },
        {
          path: 'schoolmates',
          component: SchoolMatesVue
        },
      ]
    },
    
  ]
})

export default router
