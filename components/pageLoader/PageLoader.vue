<template>
  <div
    v-if="show"
    class="page-loader d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-white z-5"
  >
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>

<style scoped>
.page-loader {
  z-index: 1050;
}
#__nuxt {
  background: var(--theme-color) !important;
}
.text-warning {
  color: var(--theme-color) !important;
}
</style>
