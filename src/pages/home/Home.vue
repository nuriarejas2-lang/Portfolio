<template>
  <main
    class="relative min-h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${homeBackground})` }"
  >
    <div class="absolute left-4 top-4 z-10 flex w-44 flex-col gap-2 sm:left-6 sm:top-6">
      <RouterLink to="/sobremi">
        <Button class="w-full border-[#e78aa9] bg-[#e78aa9] text-white hover:bg-[#d97999]">Sobre mí</Button>
      </RouterLink>
      <RouterLink to="/proyectos">
        <Button class="w-full border-[#e78aa9] bg-[#e78aa9] text-white hover:bg-[#d97999]">Proyectos</Button>
      </RouterLink>
      <RouterLink to="/contacto">
        <Button class="w-full border-[#e78aa9] bg-[#e78aa9] text-white hover:bg-[#d97999]">Contacto</Button>
      </RouterLink>
    </div>

    <section class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
      <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">Portfolio</h1>
      <p class="mt-2 text-xl font-medium sm:text-2xl">de Núria Rejas</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import homeBackground from '@/assets/inicio-bg.png'
</script>
