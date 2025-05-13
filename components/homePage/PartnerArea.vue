<template>
  <section class="partner-area bg py-120">
    <div class="container">
      <div class="marquee-wrapper overflow-hidden position-relative">
        <div class="marquee-track">
          <div class="marquee d-flex align-items-center gap-4">
            <div
              v-for="(logo, index) in repeatedPartners"
              :key="index"
              class="partner-logo"
            >
              <img :src="logo.src" :alt="logo.alt" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const partners = ref([]);

const loadPartnerData = async () => {
  try {
    const response = await fetch('/data/partners.txt');
    const text = await response.text();

    const lines = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));

    partners.value = lines.map(line => {
      const attributes = line.split(';').reduce((acc, part) => {
        const [key, val] = part.split('=');
        if (key && val) acc[key.trim()] = val.trim();
        return acc;
      }, {});
      return { src: attributes.src || '', alt: attributes.alt || '' };
    });
  } catch (error) {
    console.error('Failed to load partner logos:', error);
  }
};

onMounted(() => {
  loadPartnerData();
});

// Repeat logos to enable smooth looping marquee
const repeatedPartners = computed(() => [
  ...partners.value,
  ...partners.value,
  ...partners.value
]);
</script>

<style scoped>
.marquee-wrapper {
  height: 100px;
  position: relative;
  overflow: hidden;
}

.marquee-track {
  width: 100%;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

.marquee {
  display: flex;
  animation: scroll-marquee 30s linear infinite;
}

.partner-logo {
  flex: 0 0 auto;
  padding-right: 2rem;
}

@keyframes scroll-marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-33.333%);
  }
}
</style>
