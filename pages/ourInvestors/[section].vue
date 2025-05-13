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
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 p-0">
              <SideNav
                title="Our Investors"
                sectionKey="ourInvestors"
                baseRoute="/ourInvestors"
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

const { loading } = usePageLoader()
const route = useRoute()

const componentMap = {
  investorsDetails: () => import('@/components/Investors/investorsDetails.vue'),
  annualReports: () => import('@/components/Investors/annualReports.vue'),
  quarterlyResults: () => import('@/components/Investors/quarterlyResults.vue'),
  shareholdersInfo: () => import('@/components/Investors/shareholdersInfo.vue'),
  stockPrice: () => import('@/components/Investors/stockPrice.vue'), // added
}

//Get component dynamically based on route param
const dynamicComponent = computed(() => {
  const section = route.params.section
  return defineAsyncComponent(componentMap[section] || componentMap.investorsDetails)
})

//Compute banner key for GlobalSection
const computedBannerKey = computed(() => {
  const section = route.params.section || 'investorsDetails'
  return `${section.toLowerCase()}Section`
})
</script>
