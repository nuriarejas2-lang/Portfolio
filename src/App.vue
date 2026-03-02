<template>
  <RouterLink v-if="showHomeButton" to="/" class="fixed left-4 top-4 z-50">
    <Button variant="outline" size="icon" aria-label="Volver al inicio">
      <House class="size-4" />
    </Button>
  </RouterLink>

  <RouterView />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { House } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

import { Button } from '@/components/ui/button'

const route = useRoute()
const showHomeButton = computed(() => route.path !== '/')
</script>
