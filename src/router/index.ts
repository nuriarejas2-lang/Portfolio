import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/home/Home.vue'
import About from '@/pages/sobremi/sobremi.vue'
import Projects from '@/pages/proyectos/proyectos.vue'
import DesignProject from '@/pages/proyectos/diseno.vue'
import IllustrationProject from '@/pages/proyectos/ilustracion.vue'
import WorkDetail from '@/pages/proyectos/detalleTrabajo.vue'
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
      component: Projects
    },
    {
      path: '/proyectos/diseno',
      name: 'proyectos-diseno',
      component: DesignProject
    },
    {
      path: '/proyectos/diseno/:slug',
      name: 'proyectos-diseno-detalle',
      component: WorkDetail,
      props: (route) => ({ categoria: 'diseno', slug: route.params.slug as string })
    },
    {
      path: '/proyectos/ilustracion',
      name: 'proyectos-ilustracion',
      component: IllustrationProject
    },
    {
      path: '/proyectos/ilustracion/:slug',
      name: 'proyectos-ilustracion-detalle',
      component: WorkDetail,
      props: (route) => ({ categoria: 'ilustracion', slug: route.params.slug as string })
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contact
    }
  ]
})

export default router
