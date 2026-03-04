<template>
  <main class="min-h-screen bg-[#ffabd3]">
    <header class="bg-[#9eaf40]">
      <div class="mx-auto flex h-20 max-w-[1600px] items-center justify-end px-4 sm:px-8">
        <nav class="flex items-center gap-3 sm:gap-5">
          <Button as-child class="contact-nav-btn">
            <RouterLink to="/">Inicio</RouterLink>
          </Button>
          <Button as-child class="contact-nav-btn">
            <RouterLink to="/sobremi">Sobre mí</RouterLink>
          </Button>
          <Button as-child class="contact-nav-btn">
            <RouterLink to="/proyectos">Proyectos</RouterLink>
          </Button>
        </nav>
      </div>
    </header>

    <section class="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <article class="bg-white p-6 sm:p-8 lg:p-10">
          <h1 class="text-3xl font-extrabold text-[#9eaf40] sm:text-4xl">Contacto</h1>
          <p class="mt-3 text-sm text-[#4b4b4b] sm:text-base">
            Rellena el formulario y me pondré en contacto contigo.
          </p>

          <form class="mt-6 grid grid-cols-1 gap-4">
            <div class="grid gap-2">
              <label for="nombre" class="text-sm font-medium text-[#4b4b4b]">Nombre</label>
              <input
                id="nombre"
                type="text"
                class="h-11 rounded-md border border-[#d4d4d4] px-3 text-sm outline-none focus:border-[#9eaf40]"
                placeholder="Tu nombre"
              >
            </div>

            <div class="grid gap-2">
              <label for="email" class="text-sm font-medium text-[#4b4b4b]">Email</label>
              <input
                id="email"
                type="email"
                class="h-11 rounded-md border border-[#d4d4d4] px-3 text-sm outline-none focus:border-[#9eaf40]"
                placeholder="tu@email.com"
              >
            </div>

            <div class="grid gap-2">
              <label for="mensaje" class="text-sm font-medium text-[#4b4b4b]">Mensaje</label>
              <textarea
                id="mensaje"
                class="min-h-36 rounded-md border border-[#d4d4d4] px-3 py-2 text-sm outline-none focus:border-[#9eaf40]"
                placeholder="Cuéntame tu proyecto"
              />
            </div>

            <Button type="submit" class="contact-submit-btn w-full sm:w-fit">Enviar</Button>
          </form>
        </article>

        <article class="bg-white p-6 sm:p-8 lg:p-10">
          <h2 class="text-xl font-semibold text-[#4b4b4b] sm:text-2xl">También puedes contactarme por:</h2>

          <div class="mt-8 space-y-5">
            <a
              href="https://instagram.com/nuria.blablabla"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-3 text-[#4b4b4b] hover:text-[#9eaf40]"
            >
              <Instagram class="size-5" />
              <span class="text-base">@nuria.blablabla</span>
            </a>

            <a
              href="mailto:nuriarejas2@gmail.com"
              class="inline-flex items-center gap-3 text-[#4b4b4b] hover:text-[#9eaf40]"
            >
              <Mail class="size-5" />
              <span class="text-base">nuriarejas2@gmail.com</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Instagram, Mail } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
</script>

<style scoped>
.contact-nav-btn {
  min-width: clamp(90px, 9vw, 150px);
  height: clamp(34px, 3.2vw, 44px);
  border: none;
  background: #ffabd3;
  color: #ffffff;
  box-shadow: none;
  font-size: clamp(12px, 1.1vw, 16px);
  font-weight: 500;
}

.contact-nav-btn:hover {
  background: #ffffff;
  color: #ffabd3;
}

.contact-submit-btn {
  border: none;
  background: #9eaf40;
  color: #ffffff;
}

.contact-submit-btn:hover {
  background: #879736;
}
</style>
