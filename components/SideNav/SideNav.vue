<template>
  <aside class="sidebar h-100 d-flex flex-column">
    <div class="widget category mb-4">
      <h5 class="widget-title">
        <a href="#" @click.prevent>{{ title }}</a>
      </h5>
      <div class="category-list list-group" v-if="links.length">
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="`${baseRoute}/${link.path}`"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          :class="{ active: route.params.section === link.path }"
        >
          <span><i class="fa-solid fa-arrow-right me-2"></i>{{ link.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: { type: String, default: 'Navigation' },
  sectionKey: { type: String, required: true },  // e.g., "aboutUs"
  baseRoute: { type: String, required: true }    // e.g., "/aboutUs"
})

const route = useRoute()
const links = ref([])

const fetchLinks = async () => {
  try {
    const raw = await $fetch('/data/sidebarLinks.txt')
    const sections = raw.split(';')

    for (const section of sections) {
      const [key, value] = section.split('=')
      if (key?.trim() === props.sectionKey) {
        links.value = value
          .split(',')
          .map(item => {
            const [label, path] = item.split('|')
            return path?.trim() ? { label: label.trim(), path: path.trim() } : null
          })
          .filter(Boolean)
        break
      }
    }
  } catch (err) {
    console.error('Sidebar fetch error:', err)
  }
}

onMounted(fetchLinks)
</script>

<style scoped>  
.list-group-item.active {
  text-decoration: underline;
  color: var(--theme-color, #ffc107); /* matches txt-warning */
}
.blog-single-area {
  background: #fff;
}

.widget {
  background: var(--theme-bg-light);
  padding: 30px;
  margin-bottom: 30px;
}

.widget .widget-title {
  padding-bottom: 10px;
  margin-bottom: 30px;
  position: relative;
  font-size: 22px;
  color: var(--color-dark);
}

.widget .widget-title::before,
.widget .widget-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  border-bottom: 3px solid var(--theme-color);
}

.widget .widget-title::before {
  width: 15px;
  left: 0;
}

.widget .widget-title::after {
  width: 30px;
  left: 22px;
}

.widget .category-list a {
  padding: 10px 0;
  background: #f2f3f5;
  border: none;
  border-bottom: 1px solid #ced4da;
  font-weight: 500;
  transition: var(--transition);
}

.widget .category-list a:last-child {
  border-bottom: none;
}

.widget .category-list a:hover {
  padding-left: 10px;
  color: var(--theme-color);
}

.widget .category-list a i {
  margin-right: 5px;
  color: var(--theme-color);
}

/* About section */
.blog-single-content section#about {
  padding: 5rem 0;
}
aside.sidebar {
    background: var(--theme-bg-light);
}
</style>
