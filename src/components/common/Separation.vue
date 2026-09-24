<script setup></script>

<template>
 <!-- ======================================================== -->
  <!-- SEPARADOR CON NIEBLA SIMÉTRICA (ARRIBA Y ABAJO)        -->
  <!-- ======================================================== -->
  <div class="w-full absolute bottom-0 translate-y-1/2 left-0  h-20 pointer-events-none z-20 flex items-center justify-center overflow-visible">

    <!-- Capa 1: Resplandor/Niebla ambiental amplia (Sombra difusa hacia ambas direcciones) -->
    <div class="w-full h-full bg-[#05274ede] blur-3xl opacity-90 scale-y-125"></div>

    <!-- Capa 2: Degradado vertical suave (transparente -> color denso -> transparente) -->
    <div class="absolute inset-0 bg-linear-to-b from-transparent via-[#05274ede] to-transparent opacity-90 blur-md"></div>

    <!-- Capa 3: Línea de luz central muy fina para acentuar el origen del resplandor (Opcional) -->
    <div class="absolute w-3/4 h-px bg-linear-to-r from-transparent via-[#0d4599]/70 to-transparent blur-[2px]"></div>

  </div>
</template>
