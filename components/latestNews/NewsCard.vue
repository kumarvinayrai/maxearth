<template>
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <img :src="item.image" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    item: Object
  })
  </script>
  