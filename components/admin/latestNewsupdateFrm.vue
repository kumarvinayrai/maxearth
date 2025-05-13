<template>
    <div class="admin-form p-5 bg-white">
      <div class="quote-content p-0">
  <div class="quote-header mb-4">
    <h6 class="site-title-tagline">Admin Panel</h6>
    <h2 class="site-title">Update Latest News</h2>
  </div>
  <form>
    <div class="row g-3">
      <div class="col-md-12">
        <input type="text" class="form-control" placeholder="News Title" required>
      </div>
      <div class="col-md-6">
        <input type="date" class="form-control" placeholder="Date" required>
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Author or Source">
      </div>
      <div class="col-md-12">
        <input type="file" class="form-control" accept=".jpg,.jpeg,.png,.webp">
      </div>
    </div>
    <div class="mt-3">
      <textarea class="form-control" placeholder="News Content or Summary" rows="5" required></textarea>
    </div>
    <button type="submit" class="theme-btn mt-3">
      Publish News <i class="fas fa-newspaper"></i>
    </button>
  </form>
</div>

    </div>
  </template>
  
  <script setup>
  // Placeholder setup – can be extended with props or logic
  </script>
  
  <style scoped> 
  
  .form-control {
  padding: 16px 22px!important;
  font-size: 16px!important;
  border-radius: 0px!important;
  background-color: var(--theme-bg-light)!important;
  border: none!important;
  box-shadow: none!important;
}
  </style>
  