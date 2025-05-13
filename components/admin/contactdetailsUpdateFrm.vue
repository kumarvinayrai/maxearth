<template>
    <div class="admin-form p-5 bg-white">
      <div class="quote-content p-0">
  <div class="quote-header mb-4">
    <h6 class="site-title-tagline">Admin Panel</h6>
    <h2 class="site-title">Update Contact Details</h2>
  </div>
  <form>
    <div class="row g-3">
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Company Name" required>
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Phone Number" required>
      </div>
      <div class="col-md-6">
        <input type="email" class="form-control" placeholder="Email Address" required>
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Website URL">
      </div>
      <div class="col-md-12">
        <input type="text" class="form-control" placeholder="Full Address" required>
      </div>
    </div>
    <div class="mt-3">
      <textarea class="form-control" placeholder="Additional Notes (Optional)" rows="3"></textarea>
    </div>
    <button type="submit" class="theme-btn mt-3">
      Save Changes <i class="fas fa-save"></i>
    </button>
  </form>
</div>

    </div>
  </template>
  
  <script setup>
  // No props or logic needed at this stage
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
  