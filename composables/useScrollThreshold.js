import { ref, watch, onUnmounted, isRef } from 'vue'

export function useScrollThreshold(threshold, target = null) {
  const isPassed = ref(false)
  let currentTarget = null

  const getScrollTop = (element) => {
    if (!element) return 0
    return element === window || element instanceof Window
      ? element.scrollY
      : element.scrollTop
  }

  const checkScroll = () => {
    if (!currentTarget) return
    const scrollTop = getScrollTop(currentTarget)
    isPassed.value = scrollTop > threshold
  }

  const setupListener = () => {
    // Limpia el listener anterior si existía
    if (currentTarget) {
      currentTarget.removeEventListener('scroll', checkScroll)
    }

    // Resuelve si el target es un ref de Vue o un elemento directo
    const el = isRef(target) ? target.value : target
    currentTarget = el || (typeof window !== 'undefined' ? window : null)

    if (currentTarget) {
      currentTarget.addEventListener('scroll', checkScroll, { passive: true })
      checkScroll() // Comprobación inicial
    }
  }

  // Escucha cambios en el target (por ejemplo, cuando un Template Ref se monta en el DOM)
  watch(
    () => (isRef(target) ? target.value : target),
    () => setupListener(),
    { immediate: true }
  )

  onUnmounted(() => {
    if (currentTarget) {
      currentTarget.removeEventListener('scroll', checkScroll)
    }
  })

  return isPassed
}
/*
<script setup>
import { ref } from 'vue'
import { useScrollThreshold } from './composables/useScrollThreshold'

// Uso con Window
const showBackToTop = useScrollThreshold(300)

// Uso con un contenedor específico (Template Ref)
const myContainer = ref(null)
const containerScrolled = useScrollThreshold(150, myContainer)
</script>

<template>
  <button v-if="showBackToTop">Volver arriba</button>

  <div ref="myContainer" class="h-64 overflow-y-auto">
    <!-- Contenido con scroll -->
  </div>
</template>
*/