// composables/usePageLoader.js
import { ref, onMounted, nextTick } from 'vue'

export function usePageLoader(delay = 300) {
  const loading = ref(true)

  async function waitForAllImages() {
    const images = Array.from(document.images)
    const unloaded = images.filter(img => !img.complete)

    if (!unloaded.length) return Promise.resolve()

    return Promise.all(
      unloaded.map(
        img =>
          new Promise(resolve => {
            img.onload = img.onerror = resolve
          })
      )
    )
  }

  onMounted(async () => {
    await nextTick()
    await waitForAllImages()
    setTimeout(() => {
      loading.value = false
    }, delay)
  })

  return { loading }
}
