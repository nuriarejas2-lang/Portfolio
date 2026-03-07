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

    <section class="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 sm:py-14">
      <RouterLink :to="volverA" class="text-sm text-[#9eaf40] underline underline-offset-4">
        Volver a {{ categoriaLabel }}
      </RouterLink>

      <article v-if="trabajo" class="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <section class="rounded-2xl border border-[#e7e7e7] bg-[#fafafa] p-4 sm:p-6">
          <div class="overflow-hidden rounded-lg bg-white">
            <video
              v-if="piezaActual && piezaActual.tipo === 'video'"
              :src="getVideoSrc(piezaActual.src, piezaActual.maxSegundos)"
              controls
              preload="auto"
              playsinline
              class="h-auto w-full"
              @loadeddata="mostrarPrimerFrame"
              @timeupdate="limitarVideo($event, piezaActual.maxSegundos)"
            />
            <img
              v-else-if="piezaActual"
              :src="piezaActual.src"
              :alt="piezaActual.alt"
              class="h-auto w-full object-contain"
            >
            <div v-else class="p-8 text-center text-sm text-[#666666]">Sin material visual</div>
          </div>

          <div v-if="piezas.length > 1" class="mt-4 flex items-center justify-between">
            <button type="button" class="carousel-btn" @click="anteriorPieza">← Anterior</button>
            <p class="text-sm text-[#666666]">{{ indiceActual + 1 }} / {{ piezas.length }}</p>
            <button type="button" class="carousel-btn" @click="siguientePieza">Siguiente →</button>
          </div>
        </section>

        <section class="rounded-2xl border border-[#ffabd3] p-6 sm:p-8">
          <p class="text-sm uppercase tracking-wide text-[#9eaf40]">{{ trabajo.anio }}</p>
          <h1 class="mt-3 text-3xl font-extrabold text-[#ffabd3] sm:text-5xl">{{ trabajo.titulo }}</h1>
          <p class="mt-4 text-lg text-[#4b4b4b]">{{ trabajo.subtitulo }}</p>
          <p class="mt-6 text-base leading-8 text-[#4b4b4b]">{{ trabajo.descripcion }}</p>

          <div class="mt-8">
            <h2 class="text-lg font-semibold text-[#3f3f3f]">Herramientas</h2>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="herramienta in trabajo.herramientas"
                :key="herramienta"
                class="rounded-full bg-[#ffabd3] px-4 py-1.5 text-sm text-white"
              >
                {{ herramienta }}
              </li>
            </ul>
          </div>
        </section>
      </article>

      <article v-else class="mt-6 rounded-2xl border border-red-200 p-6">
        <h1 class="text-2xl font-bold text-red-500">Proyecto no encontrado</h1>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { Button } from '@/components/ui/button'
import { encontrarTrabajo } from '@/data/trabajos'

const props = defineProps<{
  categoria: 'diseno' | 'ilustracion'
  slug: string
}>()

const trabajo = computed(() => encontrarTrabajo(props.categoria, props.slug))
const volverA = computed(() => (props.categoria === 'diseno' ? '/proyectos/diseno' : '/proyectos/ilustracion'))
const categoriaLabel = computed(() => (props.categoria === 'diseno' ? 'Diseño' : 'Ilustración'))
const indiceActual = ref(0)
const piezas = computed(() => trabajo.value?.media ?? [])
const piezaActual = computed(() => piezas.value[indiceActual.value])

watch(
  () => [props.categoria, props.slug],
  () => {
    indiceActual.value = 0
  }
)

const anteriorPieza = () => {
  if (piezas.value.length === 0) return
  indiceActual.value = (indiceActual.value - 1 + piezas.value.length) % piezas.value.length
}

const siguientePieza = () => {
  if (piezas.value.length === 0) return
  indiceActual.value = (indiceActual.value + 1) % piezas.value.length
}

const getVideoSrc = (src: string, maxSegundos?: number) => {
  if (!maxSegundos) return src
  return `${src}#t=0.01,${maxSegundos}`
}

const mostrarPrimerFrame = (event: Event) => {
  const video = event.target as HTMLVideoElement
  if (video.currentTime === 0) {
    video.currentTime = 0.01
  }
}

const limitarVideo = (event: Event, maxSegundos?: number) => {
  if (!maxSegundos) {
    return
  }

  const video = event.target as HTMLVideoElement
  if (video.currentTime >= maxSegundos) {
    video.pause()
    video.currentTime = 0.01
  }
}
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

.carousel-btn {
  border: none;
  border-radius: 9999px;
  background: #ffabd3;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.45rem 0.9rem;
}

.carousel-btn:hover {
  background: #f498c8;
}
</style>
