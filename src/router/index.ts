import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/home/Home.vue'
import About from '@/pages/sobremi/sobremi.vue'
import Projects from '@/pages/proyectos/proyectos.vue'
import DesignProject from '@/pages/proyectos/diseno.vue'
import IllustrationProject from '@/pages/proyectos/ilustracion.vue'
import Contact from '@/pages/contacto/contacto.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobremi',
      name: 'sobremi',
      component: About
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Projects,
      children: [
        {
          path: 'diseno',
          name: 'proyectos-diseno',
          component: DesignProject
        },
        {
          path: 'ilustracion',
          name: 'proyectos-ilustracion',
          component: IllustrationProject
        }
      ]
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contact
    }
  ]
})

export default router
