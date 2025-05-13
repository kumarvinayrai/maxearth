<template>
    <div class="admin-form p-5 bg-white">
      <div class="quote-content p-0">
  <div class="quote-header mb-4">
    <h6 class="site-title-tagline">Admin Panel</h6>
    <h2 class="site-title">Update Social Media Links</h2>
  </div>
  <form>
    <div class="row g-3">
      <div class="col-md-6">
        <input type="url" class="form-control" placeholder="Facebook URL">
      </div>
      <div class="col-md-6">
        <input type="url" class="form-control" placeholder="Twitter URL">
      </div>
      <div class="col-md-6">
        <input type="url" class="form-control" placeholder="LinkedIn URL">
      </div>
      <div class="col-md-6">
        <input type="url" class="form-control" placeholder="Instagram URL">
      </div>
      <div class="col-md-6">
        <input type="url" class="form-control" placeholder="YouTube URL">
      </div>
      <div class="col-md-6">
        <input type="url" class="form-control" placeholder="Other (e.g. Threads, TikTok)">
      </div>
    </div>
    <div class="mt-3">
      <textarea class="form-control" placeholder="Additional Notes (Optional)" rows="3"></textarea>
    </div>
    <button type="submit" class="theme-btn mt-3">
      Save Links <i class="fas fa-link"></i>
    </button>
  </form>
</div>
    </div>
  </template>
  
  <script setup>
  // Placeholder for future logic or form controls
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
  