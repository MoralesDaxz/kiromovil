<script setup>
import bannerImg from "../../assets/banner.webp";
import { ref } from "vue";
import Separation from "../common/Separation.vue";
</script>

<template>
  <section
    id="banner"
    class="relative w-full min-h-[80vh]  lg:min-h-150 flex items-center overflow-hidden bg-gray-800"
  >
    <!-- 1. Skeleton de carga (Gris con pulso) -->

    <!-- 2. Imagen optimizada: object-right en móvil, object-center en portátil -->
    <img
      :src="bannerImg"
      alt="Banner de presentación"
      class="absolute w-full h-full object-cover object-right sm:object-right md:object-right  z-0 transition-opacity duration-500 opacity-70"
      @load="isLoaded = true"
    />

    <!-- 4. Contenido del banner -->
    <article
      class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full"
    >
      <div class="max-w-md md:max-w-xl text-white space-y-5">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
        <p class="text-base sm:text-lg text-gray-200 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
          nulla? Consectetur tenetur repellendus necessitatibus sapiente omnis
          earum illum deleniti, cum, ipsa, minus quaerat et libero in rerum
          magnam qui laudantium.
        </p>
      </div>
      <div class="flex gap-3 mt-8">
        <button class="w-fit px-3 py-2">Ubicación</button>
        <button class="w-fit px-3 py-2 ">Contacto</button>
      </div>
    </article>
  <Separation/>
  </section>

</template>
