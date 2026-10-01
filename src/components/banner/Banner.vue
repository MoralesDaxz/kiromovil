<script setup>
import bannerImg from "../../assets/banner.webp";
import { ref } from "vue";
import Separation from "../common/Separation.vue";
import { MapPinCheckInside, MessageCircleCheck, Phone } from "@lucide/vue";
</script>

<template>
  <section
    id="banner"
    class="relative w-full min-h-[80dvh] lg:min-h-150 flex justify-center items-center overflow-hidden bg-gray-800"
  >
    <img
      :src="bannerImg"
      alt="Banner de presentación"
      class="absolute w-full h-full object-cover object-right sm:object-right md:object-right z-0 transition-opacity duration-500 opacity-80"
      @load="isLoaded = true"
    />
    <article
      class="relative max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col items-center md:items-start"
    >
      <div class="mt-10 w-full md:max-w-xl space-y-6">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-100 text-center"
        >
          Expertos en moviles
        </h1>
        <p
          class="text-base sm:text-lg text-gray-100 backdrop-brightness-65 p-4 rounded-md"
        >
          En el corazón del sector La Tendida, nos hemos consolidado como el
          centro de referencia especializado en la venta, asesoría y soporte
          técnico de telefonía móvil. Nos dedicamos a ofrecerte la más amplia
          variedad de smartphones de las mejores marcas a precios altamente
          competitivos, con la garantía de que si buscas un modelo específico
          que no tengamos en tienda, te lo traemos por encargo sin
          complicaciones.
        </p>
        <div class="round space-y-4 mt-8 px-6 py-2 text-gray-300">
          <h2 class="italic text-center text-lg md:text-2xl font-medium">
            ¿Por qué confiar en nosotros cuando tu móvil falle?
          </h2>
          <p class="text-base sm:text-lg backdrop-brightness-65 p-4 rounded-md">
            Combinamos años de trayectoria con un diagnóstico transparente y
            reparaciones efectivas para solucionar desde fallas de software
            hasta reemplazo de pantallas y baterías.
          </p>
        </div>
      </div>
      <div class="self-start flex gap-8 mx-10 mt-14">
        <a
          href="https://maps.app.goo.gl/1aedSekV5mzyZVfW8"
          target="_blank"
          rel="noopener noreferrer"
          class="primaryBtn w-fit px-3 py-2 flex gap-2 text-center"
        >
          <MapPinCheckInside />
          <p>Ubicación</p>
        </a>
        <button class="primaryBtn w-fit px-3 py-2 flex gap-2">
          <MessageCircleCheck />
          <p>Contacto</p>
        </button>
      </div>
    </article>
    <Separation spriteColor="#05274ede" lineColor="#0d4599" />
  </section>
</template>
