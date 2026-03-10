<template>
  <main class="min-h-screen bg-[#ffffff]">
    <header class="bg-[#9eaf40]">
      <div class="mx-auto flex h-20 max-w-[1600px] items-center justify-end px-4 sm:px-8">
        <nav class="flex items-center gap-3 sm:gap-5">
          <Button as-child class="about-nav-btn">
            <RouterLink to="/">Inicio</RouterLink>
          </Button>
          <Button as-child class="about-nav-btn">
            <RouterLink to="/proyectos">Proyectos</RouterLink>
          </Button>
          <Button as-child class="about-nav-btn">
            <RouterLink to="/contacto">Contacto</RouterLink>
          </Button>
        </nav>
      </div>
    </header>

    <section class="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1750px] items-center px-6 py-6 sm:px-8 md:px-10 lg:px-12">
      <div class="grid items-center gap-8 lg:grid-cols-[1.15fr_1.2fr] lg:gap-8 xl:gap-10">
        <figure
          class="mx-auto w-full max-w-[860px] lg:max-w-[980px]"
          @mouseenter="isWinking = true"
          @mouseleave="isWinking = false"
          @focusin="isWinking = true"
          @focusout="isWinking = false"
        >
          <img
            :src="isWinking ? aboutIllustrationWink : aboutIllustration"
            alt="Ilustración de Núria"
            class="h-auto w-full object-contain"
            draggable="false"
          >
        </figure>

        <article class="space-y-6 lg:space-y-7">
          <h1 class="max-w-[900px] text-[clamp(1.6rem,3.2vw,3.55rem)] font-extrabold leading-[1.08] text-[#9eaf40]">
            ¡Hola! Me llamo Núria Rejas,<br>
            y soy de Valencia, España.
          </h1>

          <div class="grid gap-7 xl:grid-cols-[1.15fr_0.75fr] xl:gap-10 mt-2">
            <div class="space-y-6 text-[clamp(0.95rem,1.05vw,1.15rem)] leading-[1.3] text-[#171717]">
              <p>
                Soy diseñadora e ilustradora en formación y mi<br>
                motor es la utilidad creativa. No busco solo crear<br>
                piezas bonitas; busco que mis ilustraciones y<br>
                diseños transmitan una esencia y cumplan una<br>
                función clara. Me mueve la idea de que el arte<br>
                visual puede facilitar la vida del resto.
              </p>
              <p>
                Soy una persona trabajadora, con la mente<br>
                siempre abierta a nuevas ideas. Cada proyecto es<br>
                para mí una oportunidad de aprendizaje y un paso<br>
                más hacia mi meta: poner la creatividad al servicio<br>
                de la comunicación con impacto positivo.
              </p>
            </div>

            <aside class="space-y-8 text-[#171717]">
              <section>
                <h2 class="about-side-title">ESTUDIOS</h2>
                <p class="about-side-year">/2022 - 2024</p>
                <p class="about-side-text">Bachillerato de Diseño y Artes<br>Plásticas (La Salle Paterna)</p>
                <p class="about-side-year mt-4">/2024 - actualidad</p>
                <p class="about-side-text">Grado en Diseño y Tecnologías<br>Creativas (Universitat Politècnica<br>de València)</p>
              </section>

              <section>
                <h2 class="about-side-title">HABILIDADES</h2>
                <p class="about-side-text">Ilustración</p>
                <p class="about-side-text">Diseño editorial</p>
                <p class="about-side-text">Identidad visual</p>
              </section>

              <section>
                <h2 class="about-side-title">HERRAMIENTAS</h2>
                <p class="about-side-text">Adobe Indesign</p>
                <p class="about-side-text">Adobe Illustrator</p>
                <p class="about-side-text">Adobe Photoshop</p>
                <p class="about-side-text">Adobe Premiere Pro</p>
                <p class="about-side-text">Procreate</p>
              </section>
            </aside>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import aboutIllustration from '@/assets/sobremi/ilustracion-normal.png'
import aboutIllustrationWink from '@/assets/sobremi/ilustracion-guinando.png'

const isWinking = ref(false)
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
  border: none;
  background: #ffffff;
  color: #ffabd3;
}

.about-side-title {
  margin-bottom: 8px;
  font-size: clamp(1rem, 1.1vw, 1.25rem);
  font-weight: 800;
  letter-spacing: 0.01em;
  color: #ffabd3;
}

.about-side-year {
  font-size: clamp(0.96rem, 1vw, 1.12rem);
  font-weight: 500;
  color: #9eaf40;
}

.about-side-text {
  font-size: clamp(0.96rem, 1.02vw, 1.14rem);
  line-height: 1.16;
}

@media (max-width: 1279px) {
  .about-side-title {
    font-size: clamp(0.96rem, 2.3vw, 1.14rem);
  }

  .about-side-year,
  .about-side-text {
    font-size: clamp(0.92rem, 2.2vw, 1.08rem);
  }
}
</style>
