<template>
  <main class="min-h-screen bg-[#ffffff]">
    <header class="bg-[#9eaf40]">
      <div class="mx-auto flex h-20 max-w-[1600px] items-center justify-end px-4 sm:px-8">
        <nav class="flex items-center gap-3 sm:gap-5">
          <Button as-child class="project-nav-btn">
            <RouterLink to="/">Inicio</RouterLink>
          </Button>
          <Button as-child class="project-nav-btn">
            <RouterLink to="/sobremi">Sobre mí</RouterLink>
          </Button>
          <Button as-child class="project-nav-btn">
            <RouterLink to="/contacto">Contactos</RouterLink>
          </Button>
        </nav>
      </div>
    </header>

    <section class="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
      <h1 class="text-center text-4xl font-extrabold text-[#ffabd3] sm:text-5xl">Proyectos</h1>

      <div class="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
        <RouterLink
          to="/proyectos/diseno"
          class="group relative mx-auto block w-full max-w-[820px] transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            :src="designStar"
            alt="Estrella de Diseño"
            class="h-auto w-full object-contain"
          >
          <span class="absolute inset-0 flex items-center justify-center text-3xl font-medium text-white sm:text-4xl">
            Diseño
          </span>
        </RouterLink>

        <RouterLink
          to="/proyectos/ilustracion"
          class="group relative mx-auto block w-full max-w-[820px] transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            :src="illustrationStar"
            alt="Estrella de Ilustración"
            class="h-auto w-full object-contain"
          >
          <span class="absolute inset-0 flex items-center justify-center text-3xl font-medium text-white sm:text-4xl">
            Ilustración
          </span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import designStar from '@/assets/estrella-diseno.png'
import illustrationStar from '@/assets/estrella-ilustracion.png'
</script>

<style scoped>
.project-nav-btn {
  min-width: clamp(90px, 9vw, 150px);
  height: clamp(34px, 3.2vw, 44px);
  border: none;
  background: #ffabd3;
  color: #ffffff;
  box-shadow: none;
  font-size: clamp(12px, 1.1vw, 16px);
  font-weight: 500;
}

.project-nav-btn:hover {
  background: #ffffff;
  color: #ffabd3;
}
</style>
