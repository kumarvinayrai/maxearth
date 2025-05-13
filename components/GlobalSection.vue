  <template>
    <section v-if="loaded && sectionData">
      <div class="container-fluid">
        <div class="row align-items-center min-vh-50 bg-primary-clip">
          <!-- Text Content -->
          <div class="col-lg-6 px-5">
            <h1 class="display-5 fw-bold mb-3 text-white">{{ sectionData.heading }}</h1>
            <p class="lead text-white">{{ sectionData.subheading }}</p>
          </div>
          <!-- Image Content -->
          <div class="col-lg-6 p-0">
            <img
              :src="sectionData.imageSrc"
              :alt="sectionData.imageAlt"
              :title="sectionData.imageTitle"
              :loading="sectionData.imageLoading || 'lazy'"
              class="img-fluid object-fit-cover clip-img"
            />
          </div>
        </div>
      </div>
    </section>

    <div v-else-if="loaded" class="text-center p-5 text-danger">
      Failed to load content.
    </div>

    <div v-else class="text-center p-5 text-muted">
      Loading...
    </div>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    fileName: { type: String, required: true },
    sectionKey: { type: [String, Number], required: true } // Handle any type
  })

  const sectionData = ref(null)
  const loaded = ref(false)

  onMounted(async () => {
    try {
      const response = await fetch(`/data/${props.fileName}`)
      if (!response.ok) throw new Error(`Fetch error: ${response.status} ${response.statusText}`)

      const text = await response.text()
      const lines = text.split(';').map(line => line.trim()).filter(Boolean)

      // Normalize section keys for case-insensitive comparison
      const targetKey = String(props.sectionKey).toLowerCase()
      const sectionLine = lines.find(line => line.toLowerCase().startsWith(`${targetKey}=`))

      if (!sectionLine) throw new Error(`Section "${props.sectionKey}" not found in ${props.fileName}`)

      const [, rawContent] = sectionLine.split('=')
      const entries = rawContent.split(',').map(item => item.trim())

      const parsed = {}
      for (const entry of entries) {
        const [key, value] = entry.split('|')
        if (!key || !value) {
          console.warn(`Invalid entry skipped: "${entry}"`)
          continue
        }
        parsed[key.trim()] = value.trim()
      }

      if (!parsed.heading || !parsed.imageSrc) {
        throw new Error(`Incomplete data for section: ${props.sectionKey}`)
      }

      sectionData.value = parsed
    } catch (error) {
      console.error(`Failed to load section "${props.sectionKey}":`, error.message)
    } finally {
      loaded.value = true
    }
  })
  </script>

  <style scoped>
  .bg-primary-clip {
    background: linear-gradient(to right, var(--theme-color), #004080);
  }

  .clip-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  </style>
