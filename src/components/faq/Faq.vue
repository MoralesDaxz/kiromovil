<script setup>
import { ref } from "vue";
import { faqCategoriesInfo } from "../../../util/FAQ";

// Estado reactivo para almacenar el ID de la pregunta abierta (null = ninguna)
const activeFaqId = ref(null);

const toggleFaq = (id) => {
  activeFaqId.value = activeFaqId.value === id ? null : id;
};
</script>
<template>
  <section class="max-w-4xl mx-auto px-4 text-slate-100 mt-20">
    <!-- Encabezado de la Sección -->
    <div class="text-center mb-10">
      <h2 class="py-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
        Preguntas frecuentes
      </h2>
      <p class="mt-3 text-slate-400">
        Resuelve tus dudas sobre compatibilidad, instalación, garantías y
        envíos.
      </p>
    </div>

    <!-- Lista de Categorías y Preguntas -->
    <div class="space-y-8">
      <div
        v-for="(group, gIdx) in faqCategoriesInfo"
        :key="gIdx"
        class="space-y-3"
      >
        <h3
          class="text-lg font-semibold text-blue-400 border-b border-slate-800 pb-2"
        >
          {{ group.category }}
        </h3>

        <div class="space-y-3">
          <ul
            v-for="faq in group.faqs"
            :key="faq.id"
            class="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700"
          >
            <!-- Botón del Encabezado (Pregunta) -->
            <li
              @click="toggleFaq(faq.id)"
              type="button"
              class="w-full flex items-center justify-between p-5 text-left text-slate-200 font-medium hover:text-white transition-colors focus:outline-none"
              :aria-expanded="activeFaqId === faq.id"
            >
              <span class="pr-4">{{ faq.question }}</span>

              <!-- Icono de Flecha con Rotación -->
              <span
                class="ml-2 shrink-0 transition-transform duration-300"
                :class="
                  activeFaqId === faq.id
                    ? 'rotate-180 text-blue-400'
                    : 'text-slate-500'
                "
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </li>

            <!-- Contenido Plegable (Animado con Grid) -->
            <div
              class="grid transition-[grid-template-rows] duration-300 ease-out"
              :class="
                activeFaqId === faq.id
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              "
            >
              <div class="overflow-hidden">
                <div
                  class="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50"
                >
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
