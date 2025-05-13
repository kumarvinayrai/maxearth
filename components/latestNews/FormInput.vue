<template>
  <div class="form-group mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="form-control"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="error" class="text-danger small">{{ error }}</div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  error: String,
  modelValue: [String, Number]
})

defineEmits(['update:modelValue'])
</script>
