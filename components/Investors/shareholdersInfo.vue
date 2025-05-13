<template>
    <section id="shareholders-info" class="about-area p-5">
      <div class="container">
        <div class="row align-items-center gy-5">
          <div class="site-heading mb-3">
          <span class="site-title-tagline">Shareholders Information</span>
          <h2 class="site-title">Our
            <span> Shareholders  </span>Information</h2>
            <p class="text-muted">
              This section provides information on the key shareholders of Maxearth Resources Limited.
              Details include names, shareholder type, ownership percentages, and shareholder status.
              The data is presented transparently for stakeholder awareness.
            </p>
          </div>
  
          <!-- Shareholder Card 1 -->
          <div class="col-md-6">
            <div class="portfolio-sidebar">
              <div class="widget portfolio-sidebar-content">
                <h4 class="portfolio-sidebar-title">Shareholder Details</h4>
                <ul>
                  <li>Shareholder Name <span>Rajesh Kumar</span></li>
                  <li>Type <span>Individual</span></li>
                  <li>Shareholding <span>15.25%</span></li>
                  <li>Status <span>Active</span></li>
                  <li>Shares Held <span>15,250</span></li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Shareholder Card 2 -->
          <div class="col-md-6">
            <div class="portfolio-sidebar">
              <div class="widget portfolio-sidebar-content">
                <h4 class="portfolio-sidebar-title">Shareholder Details</h4>
                <ul>
                  <li>Shareholder Name <span>Green Equity Partners</span></li>
                  <li>Type <span>Institutional</span></li>
                  <li>Shareholding <span>22.10%</span></li>
                  <li>Status <span>Active</span></li>
                  <li>Shares Held <span>22,100</span></li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Shareholder Card 3 -->
          <div class="col-md-6">
            <div class="portfolio-sidebar">
              <div class="widget portfolio-sidebar-content">
                <h4 class="portfolio-sidebar-title">Shareholder Details</h4>
                <ul>
                  <li>Shareholder Name <span>Priya Mehta</span></li>
                  <li>Type <span>Individual</span></li>
                  <li>Shareholding <span>9.80%</span></li>
                  <li>Status <span>Active</span></li>
                  <li>Shares Held <span>9,800</span></li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Shareholder Card 4 -->
          <div class="col-md-6">
            <div class="portfolio-sidebar">
              <div class="widget portfolio-sidebar-content">
                <h4 class="portfolio-sidebar-title">Shareholder Details</h4>
                <ul>
                  <li>Shareholder Name <span>Maxwealth Holding Pvt. Ltd.</span></li>
                  <li>Type <span>Promoter Group</span></li>
                  <li>Shareholding <span>35.00%</span></li>
                  <li>Status <span>Active</span></li>
                  <li>Shares Held <span>35,000</span></li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Add more shareholder cards as needed -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script logic needed for static content
  </script>
  
  <style scoped>
  .portfolio-sidebar {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 6px;
    margin-bottom: 30px;
    transition: box-shadow 0.3s ease;
  }
  
  .portfolio-sidebar-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--theme-color, #007bff);
    padding-bottom: 5px;
  }
  
  .portfolio-sidebar-content ul {
    list-style: none;
    padding-left: 0;
    margin: 0 0 15px 0;
  }
  
  .portfolio-sidebar-content ul li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #eaeaea;
    font-size: 15px;
  }
  
  .portfolio-sidebar-content ul li span {
    font-weight: 500;
    color: #333;
  }
  </style>
  