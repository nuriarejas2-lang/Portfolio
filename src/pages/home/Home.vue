<template>
  <main class="relative min-h-screen overflow-hidden" style="background-color: #9eaf40">
    <nav class="home-nav">
      <RouterLink to="/sobremi" class="home-nav-item">
        <img :src="botonSobreMi" alt="Fondo botón Sobre mí" class="home-nav-bg" />
        <span class="absolute inset-0 flex items-center justify-center text-[clamp(12px,1.35vw,20px)] font-medium text-[#fe93c2]">
          Sobre mí
        </span>
      </RouterLink>

      <RouterLink to="/proyectos" class="home-nav-item">
        <img :src="botonProyectos" alt="Fondo botón Proyectos" class="home-nav-bg" />
        <span class="absolute inset-0 flex items-center justify-center text-[clamp(12px,1.35vw,20px)] font-medium text-[#fe93c2]">
          Proyectos
        </span>
      </RouterLink>

      <RouterLink to="/contacto" class="home-nav-item">
        <img :src="botonContacto" alt="Fondo botón Contacto" class="home-nav-bg" />
        <span class="absolute inset-0 flex items-center justify-center text-[clamp(12px,1.35vw,20px)] font-medium text-[#fe93c2]">
          Contacto
        </span>
      </RouterLink>
    </nav>

    <section class="absolute inset-0 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
      <img :src="portfolioTitle" alt="Portfolio" class="h-auto w-full max-w-[1400px] object-contain" />
    </section>
  </main>
</template>

<script setup lang="ts">
import portfolioTitle from '@/assets/palabraportfolioconnombre2.png'
import botonSobreMi from '@/assets/boton-sobremi.png'
import botonProyectos from '@/assets/boton-proyectos.png'
import botonContacto from '@/assets/boton-contacto.png'
</script>

<style scoped>
.home-nav {
  --btn-size: clamp(120px, 18vw, 260px);
  position: absolute;
  z-index: 20;
  top: clamp(-14px, -0.8vw, -8px);
  left: clamp(2px, 0.3vw, 6px);
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  gap: calc(var(--btn-size) * -0.36);
}

.home-nav-item {
  position: relative;
  flex: 0 0 auto;
  width: var(--btn-size);
  aspect-ratio: 5000 / 4267;
  overflow: hidden;
}

.home-nav-bg {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
