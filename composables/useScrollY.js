import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollY() {
  const scrollY = ref(0)
  let ticking = false

  const handleScroll = () => {
    if (ticking) return
    ticking = true

    requestAnimationFrame(() => {
      scrollY.value = window.scrollY
      ticking = false
    })
  }

  onMounted(() => {
    scrollY.value = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return scrollY
}