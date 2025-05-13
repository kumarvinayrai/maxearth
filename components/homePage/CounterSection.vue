<template>
  <section class="counter-area py-120">
    <div class="container">
      <div class="row g-4">
        <div
          v-for="(counter, index) in counters"
          :key="`counter-${index}`"
          class="col-6 col-lg-3"
        >
          <div
            class="counter-box text-center p-3 h-100"
            ref="counterElements"
          >
            <div class="icon">
              <i :class="counter.iconClass"></i>
            </div>
            <div>
              <span class="counter">{{ counter.current }}</span>
              <h6 class="title">{{ counter.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'

const counters = reactive([])
const counterElements = ref([])

async function loadCounterData() {
  try {
    const res = await fetch('/data/counterSection.txt')
    const text = await res.text()

    const entries = text.trim().split(/\n\s*\n/)
    entries.forEach((block) => {
      const entry = { current: 0 }
      block.split('\n').forEach(line => {
        const [key, value] = line.split('=')
        const k = key?.trim()
        const v = value?.trim()
        if (!k || !v) return
        entry[k] = ['to', 'speed'].includes(k) ? Number(v) : v
      })
      counters.push(entry)
    })
  } catch (err) {
    console.error('Failed to load counters:', err)
  }
}

function startCounting(index) {
  const counter = counters[index]
  const { to, speed } = counter
  const startTime = performance.now()

  const tick = now => {
    const progress = Math.min((now - startTime) / speed, 1)
    counter.current = Math.floor(progress * to)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(async () => {
  await loadCounterData()
  await nextTick()

  // Initialize the counterElements ref
  counterElements.value.forEach((el, idx) => {
    if (el) {
      const observer = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            startCounting(idx)
            obs.unobserve(entry.target)
          }
        },
        { threshold: 0.5 }
      )
      observer.observe(el)
    }
  })
})
</script>

<style scoped>
/* Optional scoped styles */
</style>
