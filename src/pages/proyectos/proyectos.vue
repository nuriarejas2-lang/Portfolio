<template>
  <main class="min-h-screen bg-background p-6">
    <section class="mx-auto w-full max-w-3xl space-y-6">
      <h1 class="text-3xl font-bold tracking-tight">Proyectos</h1>
      <p class="text-muted-foreground">Elige una categoría para ver su página.</p>

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

      <section class="rounded-lg border p-4">
        <RouterView />
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
