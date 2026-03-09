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

    <section class="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
      <div class="title-wrap">
        <div class="portfolio-stage">
          <img
            v-for="(letter, index) in letters"
            :key="letter.key"
            :src="letter.src"
            :alt="`Letra ${letter.key}`"
            class="portfolio-letter"
            :class="{ 'portfolio-letter-faded': hoveredIndex === index }"
            draggable="false"
          >

          <button
            v-for="(hotspot, index) in hoverHotspots"
            :key="`hotspot-${hotspot.key}`"
            type="button"
            class="letter-hotspot"
            :style="hotspot.style"
            :aria-label="`Letra ${hotspot.key}`"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
            @focus="hoveredIndex = index"
            @blur="hoveredIndex = null"
          />

          <p class="portfolio-name">de Núria Rejas Cuevas</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import f from '@/assets/home-portfolio/f.png'
import i from '@/assets/home-portfolio/i.png'
import l from '@/assets/home-portfolio/l.png'
import o1 from '@/assets/home-portfolio/o1.png'
import o2 from '@/assets/home-portfolio/o2.png'
import o3 from '@/assets/home-portfolio/o3.png'
import p from '@/assets/home-portfolio/p.png'
import r from '@/assets/home-portfolio/r.png'
import t from '@/assets/home-portfolio/t.png'

const hoveredIndex = ref<number | null>(null)

const letters = [
  { key: 'p', src: p },
  { key: 'o1', src: o1 },
  { key: 'r', src: r },
  { key: 't', src: t },
  { key: 'f', src: f },
  { key: 'o2', src: o2 },
  { key: 'l', src: l },
  { key: 'i', src: i },
  { key: 'o3', src: o3 }
]

const hoverHotspots = [
  { key: 'p', style: 'left: 16.9%; top: 34.7%; width: 10.5%; height: 28.4%;' },
  { key: 'o1', style: 'left: 24.2%; top: 45.8%; width: 10.4%; height: 20.6%;' },
  { key: 'r', style: 'left: 34.7%; top: 42.4%; width: 7.3%; height: 14%;' },
  { key: 't', style: 'left: 40.75%; top: 36.6%; width: 6.1%; height: 27.8%;' },
  { key: 'f', style: 'left: 47.35%; top: 34.85%; width: 8.5%; height: 23.4%;' },
  { key: 'o2', style: 'left: 51.7%; top: 42.1%; width: 12.3%; height: 24.2%;' },
  { key: 'l', style: 'left: 63.1%; top: 32.35%; width: 2.85%; height: 24.1%;' },
  { key: 'i', style: 'left: 68.2%; top: 41.3%; width: 1.9%; height: 20.2%;' },
  { key: 'o3', style: 'left: 70.75%; top: 44.3%; width: 12.9%; height: 21.9%;' }
]
</script>

<style scoped>
.title-wrap {
  width: min(255vw, 5200px);
  transform: translateY(clamp(-58px, -1.8vh, -8px));
}

.portfolio-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 5000 / 2869;
  transform: scale(1.22);
  transform-origin: center center;
}

.portfolio-letter {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  transition: opacity 0.2s ease;
}

.portfolio-letter-faded {
  opacity: 0.4;
}

.letter-hotspot {
  position: absolute;
  border: none;
  background: transparent;
  cursor: pointer;
}

.portfolio-name {
  position: absolute;
  left: 50%;
  top: 70.2%;
  transform: translateX(-50%);
  margin: 0;
  text-align: center;
  color: #ffffff;
  font-size: clamp(20px, 2.2vw, 40px);
  font-weight: 400;
  line-height: 1.1;
  white-space: nowrap;
  pointer-events: none;
}

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
