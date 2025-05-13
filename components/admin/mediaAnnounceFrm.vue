<template>
    <div class="admin-form p-5 bg-white">
      <div class="quote-content p-0">
  <div class="quote-header mb-4">
    <h6 class="site-title-tagline">Admin Panel</h6>
    <h2 class="site-title">Update Media Announce</h2>
  </div>
  <form>
    <div class="row g-3">
      <div class="col-md-12">
        <input type="text" class="form-control" placeholder="Announcement Title" required>
      </div>
      <div class="col-md-6">
        <input type="date" class="form-control" required>
      </div>
      <div class="col-md-6">
        <select class="form-select" required>
          <option disabled selected value="">Select Type</option>
          <option>Press Release</option>
          <option>Media Coverage</option>
          <option>Public Statement</option>
          <option>Interview</option>
        </select>
      </div>
      <div class="col-md-12">
        <input type="file" class="form-control" accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov">
      </div>
    </div>
    <div class="mt-3">
      <textarea class="form-control" placeholder="Description or Details" rows="5" required></textarea>
    </div>
    <button type="submit" class="theme-btn mt-3">
      Publish Announcement <i class="fas fa-bullhorn"></i>
    </button>
  </form>
</div>

    </div>
  </template>
  
  <script setup>
  // Placeholder setup – can be extended with props or logic
  </script>
  
  <style scoped> 
  
  .form-select, .form-control {
  padding: 16px 22px!important;
  font-size: 16px!important;
  border-radius: 0px!important;
  background-color: var(--theme-bg-light)!important;
  border: none!important;
  box-shadow: none!important;
}
  </style>
  