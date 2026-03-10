<template>
  <RouterLink
    v-if="showHomeButton"
    to="/"
    class="fixed left-4 top-0 z-50 flex h-20 w-20 items-center justify-center"
    aria-label="Volver al inicio"
  >
    <img
      :src="homeStar"
      alt=""
      class="cursor-pointer object-contain transition-transform duration-200 hover:scale-105"
      style="width: 88px; height: 88px"
      draggable="false"
    >
  </RouterLink>

  <RouterView />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import homeStar from '@/assets/estrella-home.png'

const route = useRoute()
const showHomeButton = computed(() => route.path !== '/')
</script>
