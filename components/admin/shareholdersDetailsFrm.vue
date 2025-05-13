<template>
    <div class="admin-form p-5 bg-white">
      <div class="quote-content p-0">
  <div class="quote-header mb-4">
    <h6 class="site-title-tagline">Admin Panel</h6>
    <h2 class="site-title">Update Shareholders Details</h2>
  </div>
  <form>
    <div class="row g-3">
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Shareholder Name" required>
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Shareholder ID or Reference" required>
      </div>
      <div class="col-md-6">
        <input type="email" class="form-control" placeholder="Email Address">
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Phone Number">
      </div>
      <div class="col-md-12">
        <input type="text" class="form-control" placeholder="Address">
      </div>
      <div class="col-md-12">
        <input type="number" class="form-control" placeholder="Number of Shares" min="1" required>
      </div>
    </div>
    <div class="mt-3">
      <textarea class="form-control" placeholder="Additional Notes (if any)" rows="4"></textarea>
    </div>
    <button type="submit" class="theme-btn mt-3">
      Save Details <i class="fas fa-user-edit"></i>
    </button>
  </form>
</div>
    </div>
  </template>
  
  <script setup>
  // Reserved for future logic or form handling
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
  