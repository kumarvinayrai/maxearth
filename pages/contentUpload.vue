<template>
    <div id="adminPanel">
      <h3>Admin Panel - Manage Slide Content</h3>
      <textarea v-model="content" rows="10" class="form-control" placeholder="Edit slide content..."></textarea>
      <button class="btn btn-primary mt-3" @click="saveContent">Save Content</button>
      <div v-if="error" class="mt-3 alert alert-danger">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const content = ref('')
  const error = ref(null)
  
  const loadContent = async () => {
    try {
      const response = await fetch('/dynamicContent/Content')
      if (!response.ok) {
        throw new Error('Failed to load content')
      }
      content.value = await response.text()
    } catch (err) {
      error.value = 'Error loading the file.'
    }
  }
  
  const saveContent = async () => {
    try {
      const response = await fetch('/api/saveContent', { // Create this backend endpoint to handle file saving
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content.value }),
      })
  
      if (!response.ok) {
        throw new Error('Failed to save content')
      }
  
      alert('Content saved successfully!')
    } catch (err) {
      error.value = 'Error saving the content.'
    }
  }
  
  loadContent()
  </script>
  
  <style scoped>
  #adminPanel {
    margin-top: 50px;
    padding: 30px;
    background: #f7f7f7;
    border-radius: 8px;
  }
  
  textarea {
    resize: none;
  }
  
  button {
    display: inline-block;
    margin-top: 10px;
  }
  </style>
  