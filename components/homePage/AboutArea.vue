<template>
  <section id="about" class="about-area py-120 pb-5">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- Left Column -->
        <div class="col-lg-6">
          <div class="about-left fadeInLeft">
            <div class="about-img mb-4 mb-lg-0">
              <img :src="about.image" :alt="about.imageAlt" class="img-fluid rounded-0" />
            </div>
            <div class="about-experience d-flex align-items-center">
              <div class="about-experience-icon me-3">
                <i :class="about.experienceIcon"></i>
              </div>
              <strong class="text-start">
                {{ about.experienceYears }} Years Of <br />
                {{ about.experienceText }}
              </strong>
            </div>
          </div>
        </div>
        <!-- Right Column -->
        <div class="col-lg-6">
          <div class="about-right fadeInRight">
            <div class="site-heading mb-3">
              <span class="site-title-tagline">{{ about.tagline }}</span>
              <h2 class="site-title">
                {{ about.headingBefore }}
                <span>{{ about.headingHighlight }}</span>
                {{ about.headingAfter }}
              </h2>
            </div>
            <p class="about-text mb-4">{{ about.description }}</p>
            <p class="about-text mb-4">{{ about.description2 }}</p>
            <!-- Features -->
            <div class="about-content mb-4">
              <div class="row g-3">
                <div class="col-md-6" v-for="(feature, index) in about.features" :key="`feature-${index}`">
                  <div class="about-item d-flex">
                    <div class="about-item-icon me-3">
                      <i :class="feature.icon"></i>
                    </div>
                    <div class="about-item-content">
                      <h5 class="mb-1">{{ feature.title }}</h5>
                      <p class="mb-0">{{ feature.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Points -->
            <ul class="about-list list-unstyled mb-4">
              <li v-for="(point, index) in about.points" :key="`point-${index}`">
                <i :class="[point.icon, 'me-2', 'txt-warning']"></i>{{ point.text }}
              </li>
            </ul>
 
            <a :href="about.cta.link" class="theme-btn mt-3">
              {{ about.cta.text }} <i class="fas fa-arrow-right-long"></i>
            </a>  
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const about = reactive({
  image: '',
  imageAlt: '',
  experienceYears: 0,
  experienceText: '',
  experienceIcon: '',
  tagline: '',
  headingBefore: '',
  headingHighlight: '',
  headingAfter: '',
  description: '',
  description2: '',
  features: [],
  points: [],
  cta: {
    text: '',
    link: '',
  },
})

const parseTextFile = (data) => {
  const parsedData = {}
  const lines = data.split('\n')

  lines.forEach((line) => {
    const [key, value] = line.split('=')
    if (key && value) {
      const keys = key.split('.')
      if (keys.length === 1) {
        parsedData[key] = value.trim()
      } else if (keys.length === 2) {
        parsedData[keys[0]] = parsedData[keys[0]] || {}
        parsedData[keys[0]][keys[1]] = value.trim()
      }
    }
  })

  // Map features and points to objects instead of arrays
  parsedData.features = []
  parsedData.points = []

  for (let i = 1; parsedData[`feature${i}`]; i++) {
    parsedData.features.push({
      icon: parsedData[`feature${i}`].icon,
      title: parsedData[`feature${i}`].title,
      text: parsedData[`feature${i}`].text,
    })
    delete parsedData[`feature${i}`]
  }

  for (let i = 1; parsedData[`point${i}`]; i++) {
    parsedData.points.push({
      text: parsedData[`point${i}`].text,
      icon: parsedData[`point${i}`].icon,
    })
    delete parsedData[`point${i}`]
  }

  return parsedData
}

onMounted(async () => {
  const response = await fetch('/data/about.txt')
  const textData = await response.text()
  const parsedData = parseTextFile(textData)

  Object.assign(about, parsedData)
})
</script>

<style scoped>
.about-content,
ul.about-list.list-unstyled.mb-4 {
    display: none;
}
</style>
