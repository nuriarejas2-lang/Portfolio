<template>
  <main class="relative min-h-screen overflow-hidden" style="background-color: #9eaf40">
    <nav class="home-nav">
      <Button as-child class="home-btn">
        <RouterLink to="/sobremi">Sobre mí</RouterLink>
      </Button>
      <Button as-child class="home-btn">
        <RouterLink to="/proyectos">Proyectos</RouterLink>
      </Button>
      <Button as-child class="home-btn">
        <RouterLink to="/contacto">Contacto</RouterLink>
      </Button>
    </nav>

    <section class="absolute inset-0 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
      <img :src="portfolioTitle" alt="Portfolio" class="h-auto w-full max-w-[1400px] object-contain" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import portfolioTitle from '@/assets/palabraportfolioconnombre2.png'
</script>

<style scoped>
.home-nav {
  position: absolute;
  z-index: 20;
  top: clamp(20px, 2.6vw, 36px);
  left: clamp(20px, 2.6vw, 36px);
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  gap: clamp(8px, 1.2vw, 18px);
}

.home-btn {
  min-width: clamp(90px, 9vw, 150px);
  height: clamp(34px, 3.2vw, 44px);
  background-color: #ffabd3;
  color: #ffffff;
  border: none;
  font-weight: 500;
  font-size: clamp(12px, 1.1vw, 16px);
}

.home-btn:hover {
  background-color: #ffffff;
  color: #ffabd3;
  border: none;
}
</style>
