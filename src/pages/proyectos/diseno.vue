<template>
  <main class="min-h-screen bg-white">
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
      <h1 class="text-4xl font-extrabold text-[#ffabd3] sm:text-5xl">Diseño</h1>

      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <RouterLink
          v-for="trabajo in trabajosDiseno"
          :key="trabajo.slug"
          :to="`/proyectos/diseno/${trabajo.slug}`"
          class="flex h-full min-h-[440px] flex-col rounded-2xl border border-[#ffabd3] bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
        >
          <img
            v-if="trabajo.miniatura"
            :src="trabajo.miniatura"
            :alt="`Miniatura de ${trabajo.titulo}`"
            class="mb-4 h-[260px] w-full rounded-lg bg-white object-contain"
          >
          <div class="mt-auto flex flex-col">
            <p class="text-xs uppercase tracking-wide text-[#9eaf40]">{{ trabajo.anio }}</p>
            <h2 class="mt-2 text-xl font-semibold text-[#3f3f3f]">
              <template v-if="trabajo.slug === 'maquetacion-articulo'">
                Maquetación<br><span class="whitespace-nowrap">de artículo</span>
              </template>
              <template v-else>
                {{ trabajo.titulo }}
              </template>
            </h2>
            <p class="pt-3 text-sm text-[#666666]">{{ trabajo.subtitulo }}</p>
          </div>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { trabajosDiseno } from '@/data/trabajos'
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
