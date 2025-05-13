<template>
    <PageLoader :show="loading" />
  <div v-show="!loading">
    <!-- Your Page Content -->
    <Header />
    <GlobalSection fileName="bannerSection.txt" sectionKey="projectsSection" />
    <div class="portfolio-single-area">
      <div class="container-fluid p-0">
        <div class="portfolio-single-wrapper">
          <div class="row">
            <!-- Sidebar -->
            <div class="col-3 mb-lg-0 px-0">
              <aside class="portfolio-sidebar">
                <div class="widget portfolio-sidebar-content mb-0">
                  <h4 class="widget-title">Project Overview</h4>
                  <ul>
                    <li>Category <span>Coal Excavation</span></li>
                    <li>Date <span>19 May, 2024</span></li>
                    <li>Client <span>Roger M. Collins</span></li>
                    <li>Budget <span>Rs1,250,000</span></li>
                    <li>Project Manager <span>Doseph Brehmer</span></li>
                    <li>Location <span> Andheri East, Mumbai-400059</span></li>
                    <li>Website <span>maxearth.com</span></li>
                    <li>Rating
                      <div class="rating">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="widget new-portfolio">
                  <h4>Committed to Sustainable Mining Excellence</h4>
                  <a href="#" class="theme-btn theme-btn2">Contact Us<i class="fas fa-arrow-right-long"></i></a>
                </div>
              </aside>
            </div>

            <!-- Main Content -->
            <div class="col-9 px-5 pt-5 py-120">
              <div class="portfolio-details">
                <!-- <div class="portfolio-details-img mb-30">
                  <img src="../public/img/portfolio/single.jpg" alt="Coal Excavation Site">
                </div> -->
                <div class="site-heading mb-3">
          <span class="site-title-tagline">Coal Excavation – Hudson</span>
          <h2 class="site-title">Coal Excavation – 
            <span> Hudson Valley  </span>Project</h2>
          </div>
                <p class="mb-20">
                  The Hudson Valley Coal Excavation Project represents one of MaxEarth Resources’ largest and most complex undertakings to date. This initiative focused on responsible extraction techniques, integrating environmental monitoring, land rehabilitation planning, and energy-efficient equipment.
                </p>

                <p class="mb-20">
                  Over the course of 18 months, the project team successfully extracted over 1.5 million metric tons of thermal-grade coal while maintaining a minimal ecological footprint. A portion of the operational area is already undergoing reclamation with native vegetation to restore the natural landscape.
                </p>

                <!-- Images -->
                <div class="row">
                  <div class="col-md-6 mb-20">
                    <img src="../public/img/portfolio/01.jpg" alt="Mining Operations">
                  </div>
                  <div class="col-md-6 mb-20">
                    <img src="../public/img/portfolio/02.jpg" alt="Excavation Equipment">
                  </div>
                </div>

                <p class="mb-20">
                  This project is part of MaxEarth’s broader vision to modernize coal mining through automation and digital tracking. Our adaptive mining technologies have reduced waste, lowered energy usage, and ensured compliance with strict federal environmental regulations.
                </p>

                <!-- Tips -->
                <div class="my-4">
                  <h3 class="mb-3">Project Tips & Recommendations</h3>
                  <p>
                    Through our experience on this project, we developed key best practices in logistics, resource planning, and on-site safety. These insights now inform our ongoing and future operations across multiple mining regions.
                  </p>
                  <ul class="portfolio-single-list">
                    <li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Implement advanced safety protocols for excavation crews</li>
                    <li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Use GIS mapping to identify low-impact zones for mining</li>
                    <li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Coordinate with local communities to align on environmental plans</li>
                    <li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Deploy energy-efficient haulage and excavation equipment</li>
                    <li><i class="fa-solid fa-circle-check me-2 txt-warning"></i> Maintain real-time data tracking on production volumes</li>
                  </ul>
                </div>

                <!-- Challenges -->
                <div class="my-4">
                  <h3 class="mb-3">Project Challenges & Solutions</h3>
                  <p>
                    One of the key challenges involved operating within protected watershed areas. Through strategic engineering design, MaxEarth was able to minimize surface runoff, implement water recycling systems, and gain regional approval for continued development.
                  </p>
                  <p>
                    Another obstacle was ensuring consistent labor safety amidst high-volume excavation. Our smart wearables and live monitoring dashboards contributed to a 28% reduction in on-site incidents compared to previous baselines.
                  </p>
                </div>

                <!-- Future Projects -->
                <div class="my-4">
                  <h3 class="mb-3">Upcoming Projects</h3>
                  <p>
                    Building on the success of this operation, MaxEarth Resources will begin exploratory drilling in the Appalachian Basin in Q3 2025. This next phase will focus on rare earth elements critical to clean energy solutions, including neodymium and dysprosium.
                  </p>
                  <p>
                    We’re also advancing digital transformation across all sites, with AI-assisted geological modeling set to roll out by the end of the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
</div>
</template>

<script setup>  
import PageLoader from '~/components/pageLoader/PageLoader.vue'
import Header from '~/components/pageHeader/Header.vue'
import Footer from '~/components/pageFooter/Footer.vue'
import GlobalSection from '~/components/GlobalSection.vue'

const { loading } = usePageLoader()
</script>

<style scoped>
/*=======================
34. Widget sidebar css
=========================*/
.portfolio-sidebar-title {
    margin-bottom: 30px;
    font-size: 26px;
    font-weight: 600;
}

.portfolio-sidebar .portfolio-sidebar-content ul li {
    border-bottom: 1px solid var(--border-info-color);
    display: block;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 33px;
}
.portfolio-sidebar .portfolio-sidebar-content ul li span {
    display: block;
    font-weight: normal;
    margin: 0;
}

.portfolio-sidebar .portfolio-sidebar-content ul li:last-child {
    border-bottom: none;
}
 i.fas.fa-star{
    color: var(--theme-color)!important;
}
.new-portfolio {
    background: var(--theme-color) !important;
}
.new-portfolio h4 {
    color: var(--color-white);
    margin-bottom: 30px;
    font-size: 28px;
}
.theme-btn2:hover {
    color: var(--color-white);
}
.theme-btn2 {
    background: var(--color-white);
    color: var(--color-dark);
}
.widget {
  background: var(--theme-bg-light);
  padding: 30px;
  margin-bottom: 30px;
}

.widget .widget-title {
  padding-bottom: 10px;
  margin-bottom: 30px;
  position: relative;
  font-size: 22px;
  color:  var(--color-dark);
}

.widget .widget-title::before {
  position: absolute;
  content: '';
  width: 15px;
  border-bottom: 3px solid var(--theme-color);
  bottom: 0;
  left: 0;
}

.widget .widget-title::after {
  position: absolute;
  content: '';
  width: 30px;
  border-bottom: 3px solid var(--theme-color);
  bottom: 0;
  left: 22px;
}

.widget .search-form .form-control {
  padding: 12px 15px 12px 15px;
  border-radius: 0px;
  box-shadow: none;
}

.widget .search-form {
  position: relative;
}

.widget .search-form .form-control:focus {
  border-color: var(--theme-color);
}

.widget .search-form button {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 18px;
  padding: 8px 18px 6px 18px;
  background: transparent;
  border: none;
  color: var(--theme-color);
}

.widget .category-list a {
  display: block;
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid #ced4da;
  transition: var(--transition);
}

.widget .category-list a:last-child {
  margin-bottom: 0px;
  border-bottom: none;
}

.widget .category-list a:hover {
  padding-left: 10px;
  color: var(--theme-color);
}

.widget .category-list a i {
  margin-right: 5px;
  color: var(--theme-color);
}

.widget .category-list a span {
  float: right;
}

.widget .recent-post-single {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
}

.widget .recent-post-img {
  margin-right: 20px;
}

.widget .recent-post-img img {
  width: 120px;
}

.widget .recent-post-bio h6 {
  font-size: 18px;
  font-weight: 600;
}

.widget .recent-post-bio span {
  font-size: 14px;
  color: var(--theme-color);
  font-weight: 500;
}

.widget .recent-post-bio span i {
  margin-right: 5px;
}

.widget .recent-post-bio h6 a:hover {
  color: var(--theme-color);
}

.widget .social-share-link a {
  width: 35px;
  height: 35px;
  line-height: 31px;
  border: 2px solid var(--theme-color);
  color: var(--theme-color);
  text-align: center;
  margin-right: 5px;
  border-radius: 50px;
  transition: var(--transition);
}

.widget .social-share-link a:hover {
  background: var(--theme-color);
  color: var(--color-white);
}

.widget .tag-list a {
  background: var(--color-white);
  color:  var(--color-dark);
  padding: 5px 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
  transition: var(--transition);
}

.widget .tag-list a:hover {
  background-color: var(--theme-color);
  color: var(--color-white);
}

</style>