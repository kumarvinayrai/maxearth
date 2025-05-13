<template>
  <div class="container text-center mt-5">
    <button class="btn btn-success btn-sm fs-6 fs-md-5" @click="triggerAlert">
      Show Alert
    </button>

    <div v-if="showAlert" class="alert alert-success alert-dismissible fade show mt-4 text-start fs-6 fs-md-5" role="alert">
      <strong class="d-block">0 openings found!</strong>
      <p class="mb-0">
        Thanks for your interest in working with us. There are no openings currently. You can leave your resume below and we could get back to you.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAlert = ref(false)

const triggerAlert = () => {
  showAlert.value = true

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    showAlert.value = false
  }, 4000)
}
</script>
