import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth() {
  const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return windowWidth
}