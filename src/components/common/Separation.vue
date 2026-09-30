<script setup>
const props = defineProps({
  spriteColor: String,
  lineColor: String,
});
</script>

<template>
  <!-- ======================================================== -->
  <!-- SEPARADOR CON NIEBLA SIMÉTRICA (ARRIBA Y ABAJO)        -->
  <!-- ======================================================== -->
  <div
    class="w-full absolute bottom-0 translate-y-1/2 left-0 h-20 pointer-events-none z-20 flex items-center justify-center overflow-visible"
  >
    <!-- Capa 1: Resplandor/Niebla ambiental amplia (Sombra difusa hacia ambas direcciones) -->
    <div
      :style="{ '--sprite-color': spriteColor }"
      class="w-full h-full bg-(--sprite-color) blur-3xl opacity-90 scale-y-125"
    ></div>

    <!-- Capa 2: Degradado vertical suave (transparente -> color denso -> transparente) -->
    <div
      :style="{ '--sprite-color': spriteColor }"
      class="absolute inset-0 bg-linear-to-b from-transparent via-(--sprite-color) to-transparent opacity-90 blur-md"
    ></div>

    <!-- Capa 3: Línea de luz central muy fina para acentuar el origen del resplandor (Opcional) -->
    <div
      :style="{ '--line-color': lineColor }"
      class="absolute w-3/4 h-px bg-linear-to-r from-transparent via-(--line-color)/70 to-transparent blur-[2px]"
    ></div>
  </div>
</template>
