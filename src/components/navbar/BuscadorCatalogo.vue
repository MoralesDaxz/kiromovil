<script setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { Search, X, ChevronRight, Smartphone } from '@lucide/vue'; // O los iconos de @lucide/vue

const props = defineProps({
  productos: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['seleccionar']);

const searchQuery = ref('');
const isFocused = ref(false);
const containerRef = ref(null);

// Cerrar el desplegable al hacer clic fuera del componente
onClickOutside(containerRef, () => {
  isFocused.value = false;
});

// Marcas populares para sugerir cuando el input está vacío
const marcasPopulares = ['Xiaomi', 'Samsung', 'iPhone', 'Tecno'];

// Filtrado de productos en tiempo real por Nombre o Marca
const resultadosFiltrados = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return [];

  return props.productos
    .filter((item) => {
      const p = item?.data || item;
      const nombreMatch = p.name?.toLowerCase().includes(query);
      const marcaMatch = p.brand?.toLowerCase().includes(query);
      return nombreMatch || marcaMatch;
    })
    .slice(0, 5); // Limitar a los 5 primeros resultados
});

const seleccionarProducto = (producto) => {
  searchQuery.value = '';
  isFocused.value = false;
  emit('seleccionar', producto);
};

const buscarPorTag = (tag) => {
  searchQuery.value = tag;
  isFocused.value = true;
};
</script>

<template>
  <div ref="containerRef" class="relative w-full max-w-md">
    <!-- Input Principal -->
    <div class="relative flex items-center">
      <Search class="absolute left-3.5 h-4 w-4 text-gray-400 pointer-events-none" />

      <input
        v-model="searchQuery"
        @focus="isFocused = true"
        type="text"
        placeholder="Buscar modelo, marca..."
        class="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
      />

      <!-- Botón Limpiar Texto -->
      <button
        v-if="searchQuery"
        @click="searchQuery = ''"
        class="absolute right-3 p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      >
        <X class="w-3.5 h-3.5" />
      </button>
    </div>

    <!-- Menu Desplegable de Resultados -->
    <div
      v-if="isFocused"
      class="absolute left-0 right-0 mt-2 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
    >
      <!-- CASO 1: Mientras escribe y hay coincidencias -->
      <div v-if="searchQuery.trim() !== '' && resultadosFiltrados.length > 0">
        <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-800">
          Productos encontrados
        </div>

        <ul class="divide-y divide-gray-800/50">
          <li
            v-for="item in resultadosFiltrados"
            :key="(item.data || item).id"
            @click="seleccionarProducto(item)"
            class="px-4 py-3 flex items-center justify-between hover:bg-gray-800/60 cursor-pointer transition-colors group"
          >
            <div class="flex items-center gap-3">
              <!-- Imagen Thumbnail o Icono -->
              <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center p-1 shrink-0">
                <img
                  v-if="(item.data || item).images?.[0]"
                  :src="(item.data || item).images[0]"
                  :alt="(item.data || item).name"
                  class="w-full h-full object-contain"
                />
                <Smartphone v-else class="w-5 h-5 text-gray-500" />
              </div>

              <!-- Info Nombre y Marca -->
              <div>
                <h4 class="text-sm font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                  {{ (item.data || item).name }}
                </h4>
                <span class="text-xs text-gray-400 uppercase tracking-wide">
                  {{ (item.data || item).brand }}
                </span>
              </div>
            </div>

            <!-- Precio -->
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-emerald-400">
                ${{ (item.data || item).price?.toLocaleString() }}
              </span>
              <ChevronRight class="w-4 h-4 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </li>
        </ul>
      </div>

      <!-- CASO 2: Escribe pero NO hay resultados -->
      <div
        v-else-if="searchQuery.trim() !== '' && resultadosFiltrados.length === 0"
        class="p-6 text-center text-gray-400"
      >
        <p class="text-sm">No encontramos equipos con "{{ searchQuery }}"</p>
        <p class="text-xs text-gray-500 mt-1">Intenta buscar por marcas como Xiaomi, Samsung o Apple.</p>
      </div>

      <!-- CASO 3: Input Vacío -> Mostrar Marcas Populares -->
      <div v-else class="p-4">
        <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
          Búsquedas populares
        </span>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="marca in marcasPopulares"
            :key="marca"
            @click="buscarPorTag(marca)"
            class="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs font-medium text-gray-300 rounded-full border border-gray-700 transition-colors"
          >
            {{ marca }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>