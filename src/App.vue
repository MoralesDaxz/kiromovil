<script setup>
import Banner from "./components/banner/Banner.vue";
import Faq from "./components/faq/Faq.vue";
import Footer from "./components/footer/Footer.vue";
import Navbar from "./components/navbar/Navbar.vue";
import TopStore from "./components/topStore/TopStore.vue";
import CarouselTechServices from "./components/carousels/techService/CarouselTechServices.vue";
import CarouselParallaxCases from "./components/carousels/cases/CarouselParallaxCases.vue";
</script>

<template>
  <section id="mainContainer" class="darkTheme max-w-[1900px] mx-auto relative">
    <Navbar />
    <Banner />
    <TopStore />
    <CarouselTechServices />
    <Faq />
    <CarouselParallaxCases/>
    <Footer />
  </section>
</template>
