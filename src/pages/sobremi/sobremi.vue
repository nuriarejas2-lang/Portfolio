<template>
  <main class="min-h-screen bg-[#ffffff]">
    <header class="bg-[#9eaf40]">
      <div class="mx-auto flex h-20 max-w-[1600px] items-center justify-end px-4 sm:px-8">
        <nav class="flex items-center gap-3 sm:gap-5">
          <Button as-child class="about-nav-btn">
            <RouterLink to="/">Inicio</RouterLink>
          </Button>
          <Button as-child class="about-nav-btn">
            <RouterLink to="/">Proyectos</RouterLink>
          </Button>
          <Button as-child class="about-nav-btn">
            <RouterLink to="/contacto">Contacto</RouterLink>
          </Button>
        </nav>
      </div>
    </header>

    <section class="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div class="space-y-10">
          <article class="max-w-2xl p-6 sm:p-8">
            <h1 class="text-4xl font-extrabold text-[#ffabd3] sm:text-5xl">Sobre mí</h1>

            <p class="mt-6 text-base leading-8 text-[#4b4b4b] sm:text-lg">
              Diseñadora e ilustradora en formación, centrada en crear piezas visuales claras y creativas.
            </p>
            <p class="mt-5 text-base leading-8 text-[#4b4b4b] sm:text-lg">
              <span class="font-semibold">Estudios:</span><br>
              Grado en Diseño y Tecnologías Creativas
            </p>
            <p class="mt-5 text-base leading-8 text-[#4b4b4b] sm:text-lg">
              <span class="font-semibold">Habilidades:</span><br>
              Diseño editorial, identidad visual e ilustración.
            </p>
            <div class="mt-5 text-base leading-8 text-[#4b4b4b] sm:text-lg">
              <p><span class="font-semibold">Herramientas:</span></p>
              <p>Adobe Indesign</p>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Premiere Pro</p>
              <p>Procreate</p>
            </div>
          </article>
        </div>

        <div class="flex justify-center lg:justify-end">
          <img
            :src="aboutIllustration"
            alt="Ilustración Sobre mí"
            class="h-auto w-full max-w-[620px] object-contain"
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import aboutIllustration from '@/assets/ilustracion-sobremi.png'
</script>

<style scoped>
.about-nav-btn {
  min-width: clamp(90px, 9vw, 150px);
  height: clamp(34px, 3.2vw, 44px);
  border: none;
  background: #ffabd3;
  color: #ffffff;
  box-shadow: none;
  font-size: clamp(12px, 1.1vw, 16px);
  font-weight: 500;
}

.about-nav-btn:hover {
  background: #ffffff;
  color: #ffabd3;
}
</style>
