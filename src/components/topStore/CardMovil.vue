<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  movil: Object
});

// La imagen seleccionada inicia con la primera posición del arreglo
const imagenSeleccionada = ref(props?.movil?.images[0] || '');

// Actualiza la imagen activa si las props cambian
watch(() => props.movil?.images, (nuevasImagenes) => {
  if (nuevasImagenes?.length > 0) {
    imagenSeleccionada.value = nuevasImagenes[0];
  }
});
</script>
<template>
  <article class="bg-gray-700/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between">
    <div>
      <!-- Visor de Imagen Principal -->
      <div class="relative h-56 bg-gray-300 flex items-center justify-center p-4 group">
        <img
          v-if="imagenSeleccionada"
          :src="imagenSeleccionada"
          :alt="movil.name"
          class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div v-else class="text-gray-400 text-sm font-medium">Sin imagen disponible</div>

        <!-- Tag de la marca -->
        <span class="absolute top-3 left-3 bg-black/90 backdrop-blur-sm text-gray-200 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-gray-500 capitalize tracking-wider">
          {{ movil.brand }}
        </span>
      </div>

      <!-- Miniaturas de la Galería (Sólo se muestra si hay más de 1 imagen) -->
      <div v-if="movil.images.length > 1" class="flex justify-center gap-2 px-4 py-2 bg-gray-50/50 border-t border-b border-gray-100">
        <button
          v-for="(img, index) in movil.images"
          :key="index"
          @click="imagenSeleccionada = img"
          :class="[
            'w-10 h-10 rounded-lg border p-0.5 transition-all overflow-hidden',
            imagenSeleccionada === img
              ? 'border-gray-900  scale-105'
              : 'border-gray-200 opacity-60 hover:opacity-100'
          ]"
        >
          <img :src="img" :alt="`Vista ${index + 1}`" class="w-full h-full object-contain" />
        </button>
      </div>

      <!-- Detalles del Producto -->
      <div class="p-5">
        <h3 class="capitalize font-bold text-gray-300 text-base leading-snug line-clamp-2">
          {{ movil.name }}
        </h3>
      </div>
    </div>

    <!-- Pie de Tarjeta (Precio y Stock) -->
    <div class="p-5 pt-0 flex items-center justify-between border-t border-gray-50 mt-2">
      <div>
        <span class="block text-xs text-gray-400 font-medium">Precio</span>
        <span class="text-2xl font-black text-gray-200">${{ movil.price.toLocaleString() }}</span>
      </div>
      <div class="text-right">
      </div>
    </div>
  </article>
</template>