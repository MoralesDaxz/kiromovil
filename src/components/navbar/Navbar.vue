<script setup>
import { motion, AnimatePresence } from "motion-v";
import { ref } from "vue";

const isMenuOpen = ref(false);
const searchQuery = ref("");

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Colecciones", href: "#colecciones" },
  { name: "Contacto", href: "#contacto" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 bg-gray-900 border-b border-gray-800 text-white"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 gap-4">
        <!-- 1. Logo Placeholder -->
        <div class="shrink-0 flex items-center gap-3">
          <div
            class="w-10 h-10 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center"
          >
            <div class="w-5 h-5 bg-gray-600 rounded"></div>
          </div>
          <span class="font-bold text-lg hidden sm:block tracking-wide"
            >Kiro Movil</span
          >
        </div>

        <!-- 2. Enlaces de Navegación (Escritorio) -->
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-gray-300 hover:text-blue-400 transition-colors"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- 3. Buscador (Escritorio) -->
        <div class="hidden md:flex flex-1 max-w-md mx-4">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar productos o servicios..."
              class="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <svg
              class="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <!-- 4. Botón Menú Hamburguesa (Móvil) -->
        <div class="flex md:hidden items-center">
          <button
            @click="toggleMenu"
            type="button"
            class="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 5. Menú Desplegable Animado (Móvil) -->
    <AnimatePresence>
      <motion.div
        v-if="isMenuOpen"
        :initial="{ height: 0, opacity: 0 }"
        :animate="{ height: 'auto', opacity: 1 }"
        :exit="{ height: 0, opacity: 0 }"
        :transition="{
          height: {
            type: 'spring',
            bounce: 0.25 /* Controla la intensidad del rebote (0.3 a 0.5 es ideal) */,
            duration: 0.6,
            // stiffness: 300, // Rigidez del resorte
            // damping: 18     // Amortiguación (a menor número, más rebota)
          },
          opacity: {
            duration: 0.2,
            ease: 'easeOut',
          },
        }"
        class="md:hidden bg-gray-900 border-b border-gray-800 px-4 pt-2 pb-4 space-y-3 overflow-hidden"
      >
        <!-- Buscador Móvil -->
        <div class="relative w-full pt-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar..."
            class="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <svg
            class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <!-- Enlaces Móviles -->
        <div class="flex flex-col space-y-1 pt-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  </header>
</template>
