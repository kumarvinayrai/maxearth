<template>
  <div>
    <!-- Carousel -->
    <div
      v-if="!loading && slides.length > 0"
      id="DynamicCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      data-bs-pause="hover"
    >
      <!-- Indicators -->
      <div class="carousel-indicators" v-if="slides.length > 1">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          data-bs-target="#DynamicCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : null"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div
            class="slide-item d-flex align-items-center"
            :style="{ backgroundImage: `url(${slide.image || '/img/default-image.png'})` }"
          >
            <div class="overlay"></div>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-12 col-lg-10 text-center text-lg-start">
                  <div class="slider-content">
                    <h6 class="slide-sub-title mb-2">{{ slide.subtitle || 'Default Subtitle' }}</h6>
                    <h1 class="slide-title">
                      {{ slide.title || 'Default Title' }}
                      <span>{{ slide.headingHighlight || '' }}</span>
                      {{ slide.headingAfter || '' }}
                    </h1>
                    <p class="lead">{{ slide.description || 'Default Description' }}</p>
                    <div class="slide-btn mt-3">
                      <a
                        :href="slide.buttonLink || '#'"
                        class="btn btn-warning btn-lg me-2 theme-btn"
                      >
                        About More <i class="fas fa-arrow-right-long"></i>
                      </a>
                      <a
                        :href="slide.secondaryButtonLink || '#'"
                        class="btn btn-outline-light btn-lg theme-btn theme-btn-outline"
                      >
                        Learn More <i class="fas fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button
        v-if="slides.length > 1"
        class="carousel-control-prev"
        type="button"
        data-bs-target="#DynamicCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        v-if="slides.length > 1"
        class="carousel-control-next"
        type="button"
        data-bs-target="#DynamicCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const slides = ref([])
const loading = ref(true)

const parseSlidesFromText = (text) => {
  const blocks = text.split('[slide]').filter(Boolean)
  return blocks.map(block => {
    const data = {}
    block.trim().split('\n').forEach(line => {
      const [key, ...rest] = line.split('=')
      if (key && rest.length) {
        data[key.trim()] = rest.join('=').trim()
      }
    })
    return data
  })
}

onMounted(async () => {
  try {
    const res = await fetch('/data/content.txt')
    if (!res.ok) throw new Error(`Failed to load content`)
    const text = await res.text()
    slides.value = parseSlidesFromText(text)
  } catch (err) {
    console.error(err)
    slides.value = [] // fallback to empty if needed
  } finally {
    loading.value = false
  }
})
</script>


<style scoped> 
.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--theme-color);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    z-index: 10;
    opacity: .6;
}
/* Position left arrow */
.carousel-control-prev {
    left: 2rem; 
}
/* Position right arrow */
.carousel-control-next {
    right: 2rem; 
}
.carousel-control-prev:hover,
.carousel-control-next:hover{
  opacity: 1;
}
.slider-content .slide-btn{
  display: none;
}
.text-warning{
  color: var(--theme-color)!important;
}
</style>
