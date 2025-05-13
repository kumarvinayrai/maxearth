<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="{ 'fixed-top': isScrolled, 'navbar-shadow': isScrolled }">
    <div class="container">
      <!-- Logo -->
      <NuxtLink class="navbar-brand" to="/">
        <img :src="navbar.logoSrc" :alt="navbar.logoAlt" height="40" />
      </NuxtLink>

      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Offcanvas Menu (Mobile) -->
      <div class="offcanvas offcanvas-end custom-offcanvas d-lg-none" id="offcanvasNavbar">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">{{ navbar.offcanvasTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li v-for="(item, index) in navbar.navLinks" :key="index" class="nav-item">
              <NuxtLink class="nav-link" :to="item.link" :class="{ active: isActive(item.link) }"
                        @click="handleNav(item.link)">
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div class="collapse navbar-collapse d-none d-lg-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(item, index) in navbar.navLinks" :key="index" class="nav-item">
            <NuxtLink class="nav-link" :to="item.link" :class="{ active: isActive(item.link) }"
                      @click="handleNav(item.link)">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, navigateTo } from '#app'

const navbar = ref({
  logoSrc: '',
  logoAlt: '',
  offcanvasTitle: '',
  navLinks: []
})

const isScrolled = ref(false)
const route = useRoute()

async function loadContentFromTxt() {
  const res = await fetch('/data/navBar.txt')
  const content = await res.text()
  const lines = content.split('\n')

  lines.forEach(line => {
    const [key, value] = line.split('=')
    if (!key || !value) return

    const trimmedKey = key.trim()
    const trimmedValue = value.trim()

    switch (trimmedKey) {
      case 'navbarLogoSrc':
        navbar.value.logoSrc = trimmedValue
        break
      case 'navbarLogoAlt':
        navbar.value.logoAlt = trimmedValue
        break
      case 'navbarOffcanvasTitle':
        navbar.value.offcanvasTitle = trimmedValue
        break
      case 'navbarLinks':
        navbar.value.navLinks = trimmedValue.split(',').map(pair => {
          const [text, link] = pair.split('|')
          return { text: text.trim(), link: link.trim() }
        })
        break
    }
  })
}

function handleNav(link) {
  if (link.startsWith('#')) {
    const target = document.querySelector(link)
    if (target) {
      const offset = -70
      const top = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  } else {
    navigateTo(link)
  }

  const offcanvas = document.getElementById('offcanvasNavbar')
  if (offcanvas?.classList.contains('show')) {
    bootstrap.Offcanvas.getInstance(offcanvas)?.hide()
  }
}

function isActive(link) {
  return route.path === link || (link.startsWith('#') && route.hash === link)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  loadContentFromTxt()
  if (process.client) window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  if (process.client) window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@media (max-width: 991px) {
  .custom-offcanvas {
    width: 50%;
  }
}
</style>
