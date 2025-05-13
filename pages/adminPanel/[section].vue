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
                title="Admin Panel"
                sectionKey="adminPanel"
                baseRoute="/adminPanel"
              />
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

// Page loader state
const { loading } = usePageLoader()
const route = useRoute()

// Define section component map with corresponding import paths
const componentMap = {
  annualReportsFrm: () => import('@/components/admin/annualReportsFrm.vue'),
  contactDetailsUpdateFrm: () => import('@/components/admin/contactdetailsUpdateFrm.vue'),
  latestNewsUpdateFrm: () => import('@/components/admin/latestNewsupdateFrm.vue'),
  mediaAnnounceFrm: () => import('@/components/admin/mediaAnnounceFrm.vue'),
  quarterlyUpdatesFrm: () => import('@/components/admin/quarterlyUpdatesFrm.vue'),
  shareholdersDetailsFrm: () => import('@/components/admin/shareholdersDetailsFrm.vue'),
  socialMediaLinksFrm: () => import('@/components/admin/socialMedialinksFrm.vue'),
  stockPriceUpdateFrm: () => import('@/components/admin/stockPricepdateFrm.vue'),
}

// Get component dynamically based on the route param
const dynamicComponent = computed(() => {
  const section = (route.params.section || '').toLowerCase()

  // Map lower-case keys to real camelCase keys
  const keyMap = Object.keys(componentMap).reduce((acc, key) => {
    acc[key.toLowerCase()] = key
    return acc
  }, {})

  // Lookup the section key case-insensitively
  const matchedKey = keyMap[section] || 'annualReportsFrm'

  return defineAsyncComponent(componentMap[matchedKey])
})

// Compute the banner key for GlobalSection dynamically
const computedBannerKey = computed(() => {
  const section = route.params.section || 'annualReportsFrm'
  return `${section.toLowerCase()}Section`
})
</script>

<style scoped>
/* Scoped styles if necessary */
</style>
