<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../style.css";
import { Parallax, Navigation, Autoplay } from "swiper/modules";
import { infoTechServices } from "../../../../util/techServices";
import { cases } from "../../../../util/frecuentCases";

const modules = [Parallax, Navigation, Autoplay];
const { contentSwiper, boxArticle, title, subtitle, prf } = {
  contentSwiper: "place-content-center backdrop-brightness-75", //text-3xl sm:text-4xl md:text-5xl font-bold
  boxArticle: "px-20 md:px-40 md:pb-8 flex flex-col gap-8",
  title: "text-3xl sm:text-4xl md:text-5xl font-bold font-bold",
  subtitle: " text-xl sm:text-2xl font-medium",
  prf: "text-base sm:text-lg lg:w-[50%]",
};
</script>

<template>
  <swiper
    :autoplay="{ delay: 4000 }"
    :speed="600"
    :parallax="true"
    :modules="modules"
    :navigation="true"
    class="mySwiper h-[450px]"
  >
    <div
      slot="container-start"
      class="parallax-bg"
      data-swiper-parallax="-23%"
    ></div>
    <swiper-slide v-for="item in cases" :class="contentSwiper">
      <article :class="boxArticle">
        <h3 :class="title" data-swiper-parallax="-400">
          {{ item.title }}
        </h3>
        <h4 :class="subtitle" data-swiper-parallax="-300">
          {{ item.subtitle }}
        </h4>
        <p :class="prf" data-swiper-parallax="-200">
          {{ item.prf }}
        </p>
      </article>
    </swiper-slide>
  </swiper>
</template>
<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #a0b3cfce; /* Tu color personalizado en HEX, RGB o clase */
  transition: color ease-in 0.3s;
}

/* Opcional: Para cambiar el color al pasar el cursor */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #17489298;
}
</style>
