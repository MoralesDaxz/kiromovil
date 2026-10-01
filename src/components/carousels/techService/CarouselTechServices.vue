<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Faltaba importar los estilos de navegación

import { infoTechServices } from "../../../../util/techServices";
// Importamos solo los módulos necesarios para este efecto
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

const modules = [
  Pagination,
  Navigation, // Añadido para que las flechas funcionen
  Autoplay,
  EffectCoverflow,
];
</script>

<template>
  <!-- Limitamos el contenedor principal a tu max-w-7xl (aprox 1280px) -->
  <section
    class="relative mt-10  px-4 lg:px-10 w-7x max-w-7xl mx-auto overflow-hidden"
  >
    <h2 class="py-24 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
      Nuestro servicio
    </h2>

    <div class="relative w-full mx-auto">
      <swiper
        :effect="'coverflow'"
        :centeredSlides="true"
        :loop="true"

        :breakpoints="{
          '450': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 3,
          },
        }"
        :coverflowEffect="{
          rotate: 0 /* 0 para que no se inclinen hacia los lados */,
          stretch: 0 /* Espacio entre los slides */,
          depth: 150 /* Profundidad Z para hacerlos más pequeños atrás */,
          modifier: 2.5 /* Multiplicador del efecto */,
          slideShadows: true,
        }"
        :navigation="true"
        :pagination="{ clickable: true }"
        :modules="modules"

        class="w-full h-auto py-8"
      >
        <swiper-slide
          v-for="(item, idx) in infoTechServices"
          :key="idx"
          class="w-[280px] sm:w-[320px] md:w-[400px] bg-gray-800 text-white p-6 border border-gray-700 rounded-2xl flex flex-col transition-all duration-300 min-h-[320px]"
        >
          <span class="flex justify-center mb-6">
            <p
              class="flex items-center justify-center w-12 h-12 bg-white font-black text-xl rounded-full text-black shadow-lg"
            >
              {{ idx + 1 }}
            </p>
          </span>
          <h3
            class="min-h-[3rem] text-xl flex items-center justify-center text-center font-bold mb-4"
          >
            {{ item.title }}
          </h3>
          <p
            class="mt-2 text-gray-300 text-center text-sm leading-relaxed flex-1"
          >
            {{ item.prf }}
          </p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
/* Evita que los slides cambien su ancho cuando swiper calcula el 'auto' */
.swiper-slide {
  flex-shrink: 0;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #a0b3cfce; /* Tu color personalizado en HEX, RGB o clase */
  transition: color ease-in .3s;
}

/* Opcional: Para cambiar el color al pasar el cursor */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #17489298;
}
</style>
