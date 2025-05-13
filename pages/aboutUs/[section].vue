<template>
    <PageLoader :show="loading" />
    <div v-if="!loading">
      <Header /> 
    <!--  Dynamic Banner Section -->
    <GlobalSection 
      fileName="bannerSection.txt" 
      :sectionKey="computedBannerKey" 
    />
      <section>
        <div class="blog-single-area">
          <div class="container-fluid">
            <div class="row gx-4">
              <!-- Sidebar -->
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 px-0">
                <SideNav 
                title="Who We Are"
                sectionKey="aboutUs"
                baseRoute="/aboutUs"/>
              </div>
  
              <!-- Main Content -->
              <div class="col-lg-9 col-md-12">
                <div class="blog-single-wrapper">
                  <div class="blog-single-content">
                    <component :is="dynamicComponent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import PageLoader from '~/components/pageLoader/PageLoader.vue'
  import Header from '~/components/pageHeader/Header.vue'
  import Footer from '~/components/pageFooter/Footer.vue'
  import GlobalSection from '~/components/GlobalSection.vue'
  import SideNav from '@/components/SideNav/SideNav.vue'
  
  const { loading } = usePageLoader()
  const route = useRoute()
  
  // Mapping route params to async components
  const componentMap = { 
    managementTeam: () => import('@/components/about/managementTeam.vue'),
    accomplishMent: () => import('@/components/about/accomplishMent.vue'),
    directorDesk: () => import('@/components/about/directorDesk.vue'),
    visionNmission: () => import('@/components/about/visionNmission.vue'),
    maxearthAdvantage: () => import('@/components/about/maxearthAdvantage.vue'),
    aboutArea: () => import('@/components/about/aboutArea.vue'), // Fallback default
  }
  
// Get component dynamically based on route param
const dynamicComponent = computed(() => {
  const section = route.params.section
  return defineAsyncComponent(componentMap[section] || componentMap.aboutArea)
})

// Compute banner key for GlobalSection
const computedBannerKey = computed(() => {
  const section = route.params.section || 'aboutArea'
  return `${section.toLowerCase()}Section`
})
  </script>
  
  <style scoped>
  /* Scoped styles if necessary */
  </style>
  