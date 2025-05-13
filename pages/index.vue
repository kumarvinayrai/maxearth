<template>
  <div>     
    <PageLoader :show="loading" />
    <div v-show="!loading">
      <Header />
      <CarouselSlide />
      <AboutArea />
      <AboutServices />
      <OurVision />
      <SafetyPolicy />
      <CounterSection />
      <TeamArea />
      <VideoArea />
      <PartnerArea />
      <Footer />
    <!-- 
    <ServiceArea /> 
    <PortfolioArea/>
   <ChooseArea/>
<QuoteArea/>
   
      <ProcessSection />
    <FaqArea/>
   <BlogArea/> --> 
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import PageLoader from '~/components/pageLoader/PageLoader.vue'
import Header from '~/components/pageHeader/Header.vue'
import CarouselSlide from '~/components/homePage/CarouselSlide.vue'
import AboutServices from '~/components/homePage/AboutServices.vue'
import AboutArea from '~/components/homePage/AboutArea.vue'
import  OurVision from '~/components/homePage/OurVision.vue'
import SafetyPolicy from '~/components/homePage/SafetyPolicy.vue'
import CounterSection from '~/components/homePage/CounterSection.vue'
import TeamArea from '~/components/homePage/TeamArea.vue'
import VideoArea from '~/components/homePage/VideoArea.vue'
import PartnerArea from '~/components/homePage/PartnerArea.vue'
import Footer from '~/components/pageFooter/Footer.vue'

const { loading } = usePageLoader()

onMounted(async () => {
  // Wait for DOM rendering
  await nextTick()

  // Wait for all images to load
  await waitForAllImages()

  // Optional: delay to smooth UX
  setTimeout(() => {
    loading.value = false
  }, 300)
})

function waitForAllImages() {
  const images = Array.from(document.images)
  const unloaded = images.filter(img => !img.complete)

  if (!unloaded.length) return Promise.resolve()

  return Promise.all(
    unloaded.map(
      img =>
        new Promise(resolve => {
          img.onload = img.onerror = resolve
        })
    )
  )
}
</script>
