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

    <section class="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1500px] flex-col items-center justify-center px-6 py-6 sm:px-10 lg:px-16">
      <h1 class="text-center text-4xl font-extrabold text-[#ffabd3] sm:text-5xl">Proyectos</h1>
      <p class="mt-3 text-center text-[clamp(1rem,1.4vw,1.4rem)] font-medium text-[#9eaf40]">
        ¿Qué campo quieres explorar?
      </p>

      <div class="mt-16 grid w-full grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
        <Button
          as-child
          class="project-big-btn mx-auto h-auto w-full max-w-[640px]"
        >
          <RouterLink to="/proyectos/diseno">Diseño</RouterLink>
        </Button>

        <Button
          as-child
          class="project-big-btn mx-auto h-auto w-full max-w-[640px]"
        >
          <RouterLink to="/proyectos/ilustracion">Ilustración</RouterLink>
        </Button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
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

.project-big-btn {
  min-height: clamp(160px, 24vw, 260px);
  border-radius: 28px;
  border: 2px solid #9eaf40;
  background: #ffffff;
  color: #9eaf40;
  font-size: clamp(1.6rem, 3.2vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.01em;
}

.project-big-btn:hover {
  background: #9eaf40;
  color: #ffffff;
}
</style>
