<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/zoom";
import "swiper/css/pagination";
// import required modules
import {
  Autoplay,
  EffectFade,
  Pagination,
  Scrollbar,
  Zoom,
  EffectCoverflow,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const styleSwiper = "";
    return {
      modules: [
        EffectFade,
        Pagination,
        Autoplay,
        Scrollbar,
        Zoom,
        EffectCoverflow,
      ],
      styleSwiper,
    };
  },
};
</script>
<template>
  <section class="relative px-4 lg:px-10">
    <h2 class="py-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
      Destacados
    </h2>
    <swiper
      :breakpoints="{
        '360': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }"
      :scrollbar="true"
      :zoom="true"
      :loop="true"
      :effect="'coverflow'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
      :navigation="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="relative place-content-center h-60 px-4 py-4"
    >
      <!--  :breakpoints="{
        '360': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }" -->
      <swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-1.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-2.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-3.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-4.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-5.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-6.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-7.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-8.jpg"
            class="rounded-md"
          />
        </div> </swiper-slide
      ><swiper-slide>
        <div :class="styleSwiper">
          <img
            src="https://swiperjs.com/demos/images/abstract-9.jpg"
            class="rounded-md"
          />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
