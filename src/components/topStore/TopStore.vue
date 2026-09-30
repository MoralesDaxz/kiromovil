<!-- TopStore.vue -->
<script setup>
import { useCatalogo } from "../../../composables/useCatalogo";
import CardMovil from "./CardMovil.vue";
import SkeletonCard from "./SkeletonCard.vue";

const { productos, cargando, error } = useCatalogo();
</script>

<template>
  <section class="mt-10 flex flex-col items-center">
    <h2 class="py-24 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
      Novedad en artículos
    </h2>

    <!-- 1. Estado de Carga: Muestra 8 tarjetas Skeleton parpadeando -->
    <div
      v-if="cargando"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4"
    >
      <SkeletonCard v-for="n in 8" :key="n" />
    </div>

    <!-- 2. Estado de Error -->
    <div v-else-if="error" class="text-center py-10 text-red-500 font-semibold">
      {{ error }}
    </div>

    <!-- 3. Estado Cargado: Muestra los productos reales -->
    <div
      v-else
      class="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 "
    >
      <CardMovil
        v-for="item in productos"
        :key="item?.data?.id"
        :movil="item?.data"
      />
    </div>
  </section>
</template>