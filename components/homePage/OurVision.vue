<template>
  <section id="missionVision" class="choose-area bg py-120">
    <div class="container">
      <div class="row align-items-center">
        <!-- Content Column -->
        <div class="col-lg-6">
          <div class="choose-content choose fadeInUp">
            <div class="site-heading mb-3">
              <span class="site-title-tagline">{{ sectionData.tagline }}</span>
              <h2 class="site-title">{{ sectionData.title }}</h2>
            </div>
            <p>{{ sectionData.description }}</p>

            <div class="site-heading mb-3">
              <span class="site-title-tagline">{{ visionData.tagline }}</span>
              <h2 class="site-title">{{ visionData.title }}</h2>
            </div>
            <p>{{ visionData.description }}</p>

            <div class="site-heading mb-3">
              <h2 class="site-title">{{ whatWeDoTitle.title }}</h2>
            </div>

            <div class="choose-wrapper">
              <div
                class="choose-item"
                v-for="(item, index) in whatWeDo"
                :key="index"
              >
                <div class="choose-icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="choose-item-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>

            <a href="/aboutUs/about" class="theme-btn mt-3">
              Discover More <i class="fas fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

        <!-- Image Column -->
        <div class="col-lg-6">
          <div class="choose-img choose fadeInRight">
            <img
              :src="sectionData.image"
              alt="choose image"
              class="img-fluid w-100 min-height"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionData = ref({
  tagline: '',
  title: '',
  description: '',
  image: '',
})

const visionData = ref({
  tagline: '',
  title: '',
  description: '',
})

const whatWeDoTitle = ref({
  title: '',
})

const whatWeDo = ref([])

const parseContentText = (text) => {
  const lines = text.split('\n').filter(Boolean)
  const data = {}
  const tasks = []

  lines.forEach(line => {
    const idx = line.indexOf('=')
    if (idx === -1) return

    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()

    if (key.startsWith('whatwedo')) {
      const match = key.match(/^whatwedo(\d+)\.(.+)$/)
      if (match) {
        const index = parseInt(match[1], 10)
        const field = match[2]
        if (!tasks[index]) tasks[index] = {}
        tasks[index][field] = value
      }
    } else {
      const [section, field] = key.split('.')
      if (!data[section]) data[section] = {}
      data[section][field] = value
    }
  })

  return {
    sectionData: data.section || {},
    visionData: data.vision || {},
    whatWeDoTitle: data.whatwedotitle || {},
    whatWeDo: tasks.filter(Boolean), // filter undefined gaps
  }
}

onMounted(async () => {
  try {
    const res = await fetch('/data/missionVision.txt')
    if (!res.ok) throw new Error('Failed to fetch content.txt')
    const text = await res.text()
    const parsed = parseContentText(text)

    sectionData.value = parsed.sectionData
    visionData.value = parsed.visionData
    whatWeDoTitle.value = parsed.whatWeDoTitle
    whatWeDo.value = parsed.whatWeDo
  } catch (err) {
    console.error('Error loading content:', err)
  }
})
</script>

<style scoped>
.min-height {
  min-height: 70rem;
}
</style>
