<template>
    <div :class="['alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show']" role="alert">
      {{ message }}
      <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    type: { type: String, required: true },
    message: { type: String, required: true }
  })
  </script>
  