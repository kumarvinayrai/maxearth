<template>
    <div class="admin-form p-5 bg-white">
      <div class="quote-content p-0">
  <div class="quote-header mb-4">
    <h6 class="site-title-tagline">Admin Panel</h6>
    <h2 class="site-title">Update Annual Reports</h2>
  </div>
  <form>
    <div class="row g-3">
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Report Title" required>
      </div>
      <div class="col-md-6">
        <input type="number" class="form-control" placeholder="Year (e.g. 2024)" min="1900" max="2100" required>
      </div>
      <div class="col-md-12">
        <input type="file" class="form-control" accept=".pdf,.doc,.docx" required>
      </div>
    </div>
    <div class="mt-3">
      <textarea class="form-control" placeholder="Brief Description or Notes" rows="4" required></textarea>
    </div>
    <button type="submit" class="theme-btn mt-3">
      Upload Report <i class="fas fa-upload"></i>
    </button>
  </form>
</div>

    </div>
  </template>
  
  <script setup>
  // No props or data needed for this basic version
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