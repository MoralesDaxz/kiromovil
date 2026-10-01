<script setup>
import Separation from '../common/Separation.vue';

</script>

<template>
  <div class="relative w-full">
     <Separation sprite-color="#000" line-color="#000408f3" />
    <p
      className="w-full text-center relative bottom-[-3.5rem] z-10 text-bondiBlue-40  text-xs opacity-80"
    >
      Kiro Movil - Copyright © - {{ new Date().getFullYear() }}
    </p>
  </div>
</template>
