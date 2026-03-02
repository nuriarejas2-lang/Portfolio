<template>
  <main class="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12">
    <section class="mx-auto w-full max-w-3xl space-y-6 rounded-xl border bg-card p-6 shadow-sm sm:p-10">
      <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Proyectos</h1>
      <p class="text-sm text-muted-foreground sm:text-base">Elige una categoría para ver su página.</p>

      <div class="flex flex-col sm:flex-row gap-3">
        <RouterLink to="/proyectos/diseno" custom v-slot="{ navigate, isActive }">
          <Button
            :variant="isActive ? 'default' : 'outline'"
            class="w-full sm:w-auto"
            @click="navigate"
          >
            Diseño
          </Button>
        </RouterLink>
        <RouterLink to="/proyectos/ilustracion" custom v-slot="{ navigate, isActive }">
          <Button
            :variant="isActive ? 'default' : 'outline'"
            class="w-full sm:w-auto"
            @click="navigate"
          >
            Ilustración
          </Button>
        </RouterLink>
      </div>

      <section class="rounded-lg border p-4 sm:p-6">
        <RouterView />
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
