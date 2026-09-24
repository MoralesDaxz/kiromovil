<script setup>
import Banner from "./components/banner/Banner.vue";
import Faq from "./components/faq/Faq.vue";
import Footer from "./components/footer/Footer.vue";
import Navbar from "./components/navbar/Navbar.vue";
import Services from "./components/services/Services.vue";
import ServicesCoverflow from "./components/services/ServicesCoverflow.vue";
import TopStore from "./components/topStore/TopStore.vue";
</script>

<template>
  <section id="mainContainer" class="darkTheme max-w-[2000px] mx-auto relative">
    <Navbar />
    <Banner />
    <Services />
    <TopStore />
    <ServicesCoverflow />
    <Faq />
    <Footer />
  </section>
</template>
