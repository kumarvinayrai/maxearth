<template>
    <div class="testimonial-area py-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="site-heading text-center">
              <span class="site-title-tagline">Testimonials</span>
              <h2 class="site-title">What Our Client <span>Say's</span></h2>
            </div>
          </div>
        </div>
  
        <!-- Multi-Card Carousel -->
        <div class="row mt-4">
          <div class="col-12 position-relative">
            <div class="overflow-hidden position-relative">
              <div
                class="d-flex transition"
                :style="{ transform: `translateX(-${currentSlide * slideWidth}px)`, width: totalWidth }"
              >
                <div
                  class="d-flex w-100"
                  v-for="(group, index) in groupedTestimonials"
                  :key="index"
                >
                  <div class="d-flex justify-content-between w-100">
                    <!-- Render each testimonial in the group -->
                    <div class="testimonial-col" v-for="(testimonial, idx) in group" :key="idx">
                      <div class="testimonial-single mx-2">
                        <div class="testimonial-rate mb-2">
                          <i class="fas fa-star" v-for="n in 5" :key="n"></i>
                        </div>
                        <div class="testimonial-quote">
                          <p>{{ testimonial.text }}</p>
                        </div>
                        <div class="testimonial-content d-flex align-items-center mt-3">
                          <div class="testimonial-author-img me-3">
                            <img :src="testimonial.image" alt="Author" class="img-fluid rounded-circle" width="60" />
                          </div>
                          <div class="testimonial-author-info">
                            <h4 class="mb-0">{{ testimonial.name }}</h4>
                            <p class="mb-0">{{ testimonial.role }}</p>
                          </div>
                        </div>
                        <span class="testimonial-quote-icon"><i class="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Hyphen Indicators -->
            <div class="d-flex justify-content-center mt-4 gap-2">
              <span
                v-for="index in numberOfSlides"
                :key="index - 1"
                class="carousel-indicator"
                :class="{ active: currentSlide === index - 1 }"
                @click="currentSlide = index - 1"
              >-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    name: 'Anthony Nicoll',
    role: 'Customer',
    image: 'https://live.themewild.com/minox/assets/img/testimonial/01.jpg',
    text: `There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.`
  },
  {
    name: 'Richard Lock',
    role: 'Customer',
    image: 'https://live.themewild.com/minox/assets/img/testimonial/02.jpg',
    text: `There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.`
  },
  {
    name: 'Randal Grand',
    role: 'Customer',
    image: 'https://live.themewild.com/minox/assets/img/testimonial/03.jpg',
    text: `There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.`
  },
  {
    name: 'Edward Miles',
    role: 'Customer',
    image: 'https://live.themewild.com/minox/assets/img/testimonial/04.jpg',
    text: `There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.`
  },
  {
    name: 'Ninal Gordon',
    role: 'Customer',
    image: 'https://live.themewild.com/minox/assets/img/testimonial/05.jpg',
    text: `There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.`
  },
  {
    name: 'Sophie Marsh',
    role: 'Customer',
    image: 'https://live.themewild.com/minox/assets/img/testimonial/06.jpg',
    text: `There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.`
  }
]

const currentSlide = ref(0)

const groupedTestimonials = computed(() => {
  const chunkSize = 3
  const result = []
  for (let i = 0; i < testimonials.length; i += chunkSize) {
    result.push(testimonials.slice(i, i + chunkSize))
  }
  return result
})

const numberOfSlides = computed(() => groupedTestimonials.value.length)

const slideWidth = computed(() => 100 / 3) // Since 3 cards per slide, 100% divided by 3
const totalWidth = computed(() => (numberOfSlides.value * 100) + '%') // Total width of the carousel

// Auto Slide Functionality
let interval = null
onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % numberOfSlides.value
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
  

<style scoped>
.testimonial-area {
  position: relative;
}

.testimonial-single {
  background: var(--color-white);
  padding: 25px;
  margin: 6px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.testimonial-single::before {
  content: "";
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: -6px;
  height: 6px;
  background: var(--theme-color);
}

.testimonial-rate {
  color: var(--theme-color);
}

.testimonial-content {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.testimonial-author-img {
  width: 60px;
  padding: 4px;
  border-radius: 50px;
  border: 3px solid var(--theme-color);
}

.testimonial-author-img img {
  border-radius: 50%;
}

.testimonial-author-info h4 {
  font-size: 18px;
  margin-bottom: 2px;
  color: var(--color-dark);
}

.testimonial-author-info p {
  font-weight: 500;
  color: var(--theme-color);
}

.testimonial-quote-icon {
  position: absolute;
  right: 30px;
  bottom: 10px;
  color: var(--theme-color);
  font-size: 40px;
  opacity: 0.3;
}

.carousel-indicator {
  font-size: 24px;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s ease;
}

.carousel-indicator.active {
  color: var(--theme-color);
}

.transition {
  transition: transform 0.5s ease;
}

.testimonial-col {
  width: 32%;
}

@media (max-width: 767px) {
  .testimonial-col {
    width: 100%;
    margin-bottom: 1rem;
  }
}

.slider-wrapper {
  display: flex;
  transition: width 0.5s ease;
}
</style>
