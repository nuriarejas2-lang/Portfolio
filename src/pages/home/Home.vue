<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goTosobremi = () => {
  router.push('/sobremi')
}

const goToproyectos = () => {
  router.push('/proyectos')
}

const goTocontacto = () => {
  router.push('/contacto')
}
</script>

<template>
  <div>
    <h1>Portfolio</h1>

    <button @click="goTosobremi">Sobre mí</button>
    <button @click="goToproyectos">Proyectos</button>
    <button @click="goTocontacto">Contacto</button>
  </div>
</template>