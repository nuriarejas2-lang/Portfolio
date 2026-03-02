<template>
  <main class="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12">
    <section class="mx-auto w-full max-w-2xl rounded-xl border bg-card p-6 shadow-sm sm:p-10">
      <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Contacto</h1>
      <p class="mt-3 text-sm text-muted-foreground sm:text-base">
        Si quieres colaborar conmigo, escríbeme aquí.
      </p>

      <form class="mt-8 grid grid-cols-1 gap-4">
        <div class="grid gap-2">
          <label for="nombre" class="text-sm font-medium">Nombre</label>
          <input
            id="nombre"
            type="text"
            class="h-10 rounded-md border bg-background px-3 text-sm"
            placeholder="Tu nombre"
          />
        </div>

        <div class="grid gap-2">
          <label for="email" class="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            class="h-10 rounded-md border bg-background px-3 text-sm"
            placeholder="tu@email.com"
          />
        </div>

        <div class="grid gap-2">
          <label for="mensaje" class="text-sm font-medium">Mensaje</label>
          <textarea
            id="mensaje"
            class="min-h-28 rounded-md border bg-background px-3 py-2 text-sm"
            placeholder="Cuéntame tu proyecto"
          />
        </div>

        <Button type="submit" class="w-full sm:w-auto">Enviar</Button>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
