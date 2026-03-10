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

    <section class="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1500px] items-center px-6 py-6 sm:px-10 lg:px-16">
      <div class="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <article class="text-white">
          <h2 class="text-[clamp(2.2rem,4.5vw,4.6rem)] font-extrabold leading-[1.05]">
            También puedes contactarme por:
          </h2>

          <div class="mt-10 flex flex-col gap-6 text-[clamp(1.05rem,1.3vw,1.4rem)]">
            <a
              href="https://instagram.com/nuria.blablabla"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-4 text-white hover:opacity-80"
            >
              <Instagram class="size-6" />
              <span>@nuria.blablabla</span>
            </a>

            <a
              href="mailto:nuriarejas2@gmail.com"
              class="inline-flex items-center gap-4 text-white hover:opacity-80"
            >
              <Mail class="size-6" />
              <span>nuriarejas2@gmail.com</span>
            </a>

            <a
              href="tel:+34610240794"
              class="inline-flex items-center gap-4 text-white hover:opacity-80"
            >
              <Phone class="size-6" />
              <span>610 24 07 94</span>
            </a>
          </div>
        </article>

        <article class="w-full max-w-[640px] justify-self-end rounded-[36px] bg-white p-6 sm:p-8 lg:p-10">
          <h1 class="text-3xl font-extrabold text-[#9eaf40] sm:text-4xl">Contacto</h1>
          <p class="mt-3 text-sm text-[#4b4b4b] sm:text-base">
            Si quieres colaborar conmigo, responde a este formulario :)
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
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Instagram, Mail, Phone } from 'lucide-vue-next'

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
