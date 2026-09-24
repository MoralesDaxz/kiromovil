<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const searchQuery = ref('')

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Colecciones', href: '#colecciones' },
  { name: 'Contacto', href: '#contacto' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 gap-4">

        <!-- 1. Logo Placeholder (Gris con animación de carga pulse) -->
        <div class="shrink-0 flex items-center gap-3">
          <div class="w-10 h-10 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
            <!-- Icono/SVG temporal mientras simula la carga del logo -->
            <div class="w-5 h-5 bg-gray-600 rounded"></div>
          </div>
          <span class="font-bold text-lg hidden sm:block tracking-wide">BrandName</span>
        </div>


        <!-- 3. Enlaces de Navegación (4 enlaces en portátil) -->
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-gray-300  hover:text-blue-400 transition-colors"
          >
            {{ link.name }}
          </a>
        </nav>
  <!-- 2. Buscador para Portátil / Escritorio (pantallas md y superiores) -->
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- 4. Botón Menú Hamburguesa (Visión Móvil) -->
        <div class="flex md:hidden items-center">
          <button
            @click="toggleMenu"
            type="button"
            class="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

    <!-- 5. Menú Desplegable Adaptativo (Móvil) -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-900 border-b border-gray-800 px-4 pt-2 pb-4 space-y-3">
      <!-- Buscador adaptado a vista móvil -->
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <!-- Enlaces ordenados en vertical para móvil -->
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
    </div>
  </header>
</template>