<template>
  <section id="SafetyPolicy" class="safety-policy py-120">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- Left Column -->
        <div class="col-lg-6">
          <div class="safety-policy-left fadeInLeft">
            <div class="safety-policy-itemimg mb-4 mb-lg-0">
              <img :src="safetyPolicy.image" :alt="safetyPolicy.imageAlt" class="img-fluid rounded-0" />
            </div>
          </div>
        </div>
        <!-- Right Column -->
        <div class="col-lg-6">
          <div class="safety-policy-right fadeInRight">
            <div class="site-heading mb-3">
              <span class="site-title-tagline">{{ safetyPolicy.tagline }}</span>
              <h2 class="site-title">
                <span>{{ safetyPolicy.highlightHeadingBefore }}&nbsp;</span>{{ safetyPolicy.headingBefore }}
                <span>{{ safetyPolicy.headingHighlight }}</span>
                {{ safetyPolicy.headingAfter }}
              </h2>
            </div>
            <p class="mb-4">{{ safetyPolicy.description }}</p>
            <!-- Points -->
            <ul class="safety-policy-list list-unstyled mb-4">
              <li v-for="(point, index) in safetyPolicy.points" :key="index">
                <i :class="[point.icon, 'me-2', 'txt-warning']"></i>{{ point.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { reactive, onMounted } from 'vue'

const safetyPolicy = reactive({
  image: '',
  imageAlt: '',
  tagline: '',
  highlightHeadingBefore: '',
  headingBefore: '',
  headingHighlight: '',
  headingAfter: '',
  description: '',
  points: []
})

async function loadSafetyPolicyData() {
  const res = await fetch('/data/safetyPolicy.txt')
  const txt = await res.text()

  const lines = txt.split('\n').filter(line => line.trim() !== '' && !line.startsWith('#'))

  const points = []
  for (const line of lines) {
    const [key, ...rest] = line.split('=')
    const value = rest.join('=').trim()
    if (!key.startsWith('safetyPolicy.')) continue

    const path = key.trim().split('.')
    if (path[1]?.startsWith('point')) {
      const index = parseInt(path[1].replace('point', '')) - 1
      if (!points[index]) points[index] = {}
      points[index][path[2]] = value
    } else {
      safetyPolicy[path[1]] = value
    }
  }

  safetyPolicy.points = points.filter(p => p.text)
}

onMounted(loadSafetyPolicyData)
</script>
<style scoped>
  /* Your styles remain unchanged except note about unused class */
  
  .safety-policy-left {
    position: relative;
    z-index: 1;
  }
  .safety-policy-left::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 250px;
    height: 250px;
    background: var(--theme-color);
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    z-index: -1;
  }
  .safety-policy-left::after {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    width: 250px;
    height: 250px;
    background: var(--theme-color);
    clip-path: polygon(100% 0, 0% 0%, 100% 100%);
    z-index: -1;
  }
  .safety-policy-left img {
    width: 100%;
  }
  .safety-policy-right {
    position: relative;
    display: block;
    padding-left: 30px;
  }
  .safety-policy-right:before {
    content: "";
    position: absolute;
    top: 8px;
    left: 0px;
    width: 25px;
    height: 92%;
    border-right: 5px solid var(--theme-color);
    z-index: -1;
  }
  .safety-policy-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-top: 10px;
  }
  @media all and (max-width: 991px) {
    .safety-policy-right {
      margin-top: 70px;
    }
  }
  </style>
  