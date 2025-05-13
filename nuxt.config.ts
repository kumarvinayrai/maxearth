// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css','./src/assets/styles/style.css','@fortawesome/fontawesome-free/css/all.min.css','./src/assets/styles/flaticon.css'],
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          crossorigin: 'anonymous'
        }
      ]
    },
  }
})
