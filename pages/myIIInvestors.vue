<template>
      <PageLoader :show="loading" />
  <div v-show="!loading">
    <!-- Your Page Content -->
    <Header />
    <GlobalSection fileName="Investors.txt" />
    <section id="investors" class="choose-area  py-120">
      <div class="container">
        <div class="row align-items-center">
          <!-- Content Column -->
          <div class="col-lg-6">
            <div
              class="choose-content choose fadeInUp"
            >
              <div class="site-heading mb-3">
                <span class="site-title-tagline">{{ sectionData.tagline }}</span>
                <h2 class="site-title">
                  {{ sectionData.titleBefore }} <span>{{ sectionData.titleHighlight }}</span> {{ sectionData.titleAfter }}
                </h2>
              </div>
              <p>{{ sectionData.description }}</p>
  
              <div class="choose-wrapper">
                <div
                  class="choose-item"
                  v-for="(item, index) in chooseItems"
                  :key="index"
                >
                  <div class="choose-icon">
                    <i :class="item.icon"></i>
                  </div>
                  <div class="choose-item-content">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Image Column -->
          <div class="col-lg-6">
            <div
              class="choose-img choose fadeInRight"
            >
              <img :src="sectionData.image" alt="choose image" class="img-fluid w-100 min-height" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  </template>
  
  <script setup> 
import { reactive, onMounted } from 'vue' 
import PageLoader from '~/components/pageLoader/PageLoader.vue'
import Header from '~/components/pageHeader/Header.vue'
import Footer from '~/components/pageFooter/Footer.vue'
import GlobalSection from '~/components/GlobalSection.vue'

const { loading } = usePageLoader()
  const sectionData = {
    tagline: "Max Earth Advantage",
    titleBefore: "India’s Most  ",
    titleHighlight: "Strategic",
    titleAfter: "Mineral Partner",
    description:
      "We have several Black Strap Project (s) in the States of – Jharkhand, Maharashtra, Orissa, and Kerala.  We anticipate at least 6-7 Project (s) to be Operational during the Financial Year 2026-27 and becomes as Strategic Business Units in the Minor Mineral Sector, as majority of them are located at Key Places, on New Rail Head, Road Head, Vicinity of  Port and Civil City Retail Consumption and Captive Consumptions.",
    image: '/img/choose/010.png',
  }
  
  const chooseItems = [
    {
      icon: "flaticon-foreman",
      title: "The Botejhari Manganese Initiative",
      text: "On the Major Mineral front, the Group have recently engaged itself into the Prospecting and Exploration of the Botejhari Manganese Block, (a G-3 Work, Mine Block Area 6.094-Hectare with 34% + Manganese Contents of Composite Licence) Mineral Block in the Distt: Balaghat, Madhya Pradesh State as  our 1st Priority Project.  .",
    },
    {
      icon: "flaticon-mining-cart-1",
      title: "Timeline-Driven Expansion in Strategic Mineral Assets",
      text: "Max Earth is strategically expanding its presence in the major minerals sector, with a focused commitment to acquiring and developing critical and strategic mineral assets. We prioritize swift execution, adhering to aggressive timelines to secure high-potential mineral blocks that strengthen India’s resource independence and industrial growth. Our disciplined approach ensures rapid deployment of technical and operational expertise, positioning us as a key player in the nation’s critical minerals supply chain.",
    },
  ]
  </script>
  <style scoped>
.min-height {
    min-height: 61rem;
}
</style>
  