<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination, Scrollbar } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const styleSwiper =
      " bg-black/50 text-white flex flex-col items-center justify-center text-center rounded-md my-auto";
    return {
      modules: [EffectFade, Pagination, Autoplay, Scrollbar],
      styleSwiper,
    };
  },
};
</script>
<template>
  <section class="relative px-4 lg:px-10">
    <h2 class="py-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
      Servicios
    </h2>
    <swiper
      :loop="true"
      :effect="'slide'"
      :navigation="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :breakpoints="{
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
      }"
      class="relative place-content-center w-full h-60 px-4"
    >
      <swiper-slide :class="styleSwiper"
        ><p>1</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>2</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>3</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>4</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>5</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>6</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>7</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>8</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"
        ><p>9</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit
        veniam, minima necessitatibus magni blanditiis cupiditate architecto
        expedita quidem alias, debitis repellendus autem vero mollitia corrupti
        accusamus? Sapiente, odit eveniet.</swiper-slide
      >
      <swiper-slide :class="styleSwiper"><p>10</p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique vel blanditiis, tempore cum alias possimus ullam repellendus doloribus. Expedita dicta repellat fugit iure optio molestias sint nisi quam enim soluta!</swiper-slide>
    </swiper>
  </section>
</template>
