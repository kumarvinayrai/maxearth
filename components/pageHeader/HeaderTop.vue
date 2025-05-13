<template>
  <div id="headerTop" class="header-top">
    <div class="container">
      <div class="header-top-wrapper d-flex justify-content-between align-items-center">
        <!-- Contact Information -->
         <div class="header-top-contact">
        <ul class="list-unstyled d-flex gap-3 mb-0" v-if="contactInfo.length">
          <li v-for="(contact, index) in contactInfo" :key="index">
            <a :href="contact.link" target="_blank" rel="noopener noreferrer">
              <i :class="contact.icon" class="me-1"></i> {{ contact.text }}
            </a>
          </li>
        </ul>
      </div>
        <!-- Social Media Links -->
        <div class="header-top-social d-flex align-items-center gap-2" v-if="socialLinks.length">
          <span v-if="followUsLabel">{{ followUsLabel }}</span>
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const contactInfo = ref([])
const socialLinks = ref([])
const followUsLabel = ref('')

// Utility to parse key-value pairs from .txt
const parseKeyValueTxt = (text) =>
  Object.fromEntries(
    text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#') && line.includes('='))
      .map(line => {
        const [key, ...rest] = line.split('=')
        return [key.trim(), rest.join('=').trim()]
      })
  )

const loadHeaderData = async () => {
  try {
    const res = await fetch('/data/topHeader.txt')
    const text = await res.text()
    const map = parseKeyValueTxt(text)

    // Dynamically build contact info (detect keys starting with headerContact)
    contactInfo.value = Object.entries(map)
      .filter(([key]) => key.startsWith('headerContact') && key.endsWith('Text'))
      .map(([key, text]) => {
        const prefix = key.replace('Text', '')
        return {
          text,
          link: map[`${prefix}Link`] || '#',
          icon: map[`${prefix}Icon`] || 'fa-solid fa-circle-info'
        }
      })

    // Dynamically build social links (detect keys starting with headerSocial)
    socialLinks.value = Object.entries(map)
      .filter(([key]) => key.startsWith('headerSocial') && key.endsWith('Link'))
      .map(([key, link]) => {
        const prefix = key.replace('Link', '')
        return {
          link,
          icon: map[`${prefix}Icon`] || 'fa-brands fa-linkedin'
        }
      })

    followUsLabel.value = map.headerFollowUsLabel || ''

  } catch (err) {
    console.error('Failed to load topHeader.txt:', err)
  }
}

onMounted(loadHeaderData)
</script>

<style scoped>
@media (max-width: 767px) {
  .header-top-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
