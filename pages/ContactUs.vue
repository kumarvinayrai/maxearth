<template>
<PageLoader :show="loading" />
<div v-show="!loading">
  <!-- Your Page Content -->
  <Header />
  <GlobalSection fileName="bannerSection.txt" sectionKey="newsSection" />
    <section id="getQuote" class="quote-area bg py-120">
      <div class="container">
        <getTouchCard/>
        <div class="quote-wrapper">
          <div class="row align-items-center g-4">
            <!-- Quote Image -->
            <div class="col-lg-5">
              <div class="quote-img">
                <img :src="quoteInfo.image" :alt="quoteInfo.alt" class="img-fluid w-100 rounded-0" />
              </div>
            </div>
  
            <!-- Quote Form -->
            <div class="col-lg-7">
              <div class="quote-content">
                <div class="quote-header mb-4">
                  <h6 class="site-title-tagline">{{ quoteInfo.subheading }}</h6>
                  <h2 class="site-title">{{ quoteInfo.heading }}</h2>
                </div>
  
                <form @submit.prevent="submitForm">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input v-model="form.name" type="text" name="name" class="form-control" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input v-model="form.email" type="email" name="email" class="form-control" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input v-model="form.subject" type="text" name="subject" class="form-control" placeholder="Subject" required />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <select v-model="form.service" class="form-select" name="service" required>
                          <option value="" disabled>Choose Service</option>
                          <option v-for="(service, index) in services" :key="index" :value="service">
                            {{ service }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
  
                  <div class="form-group mt-3">
                    <textarea v-model="form.message" name="message" class="form-control" placeholder="Type Message" rows="4" required></textarea>
                  </div>
  
                  <button type="submit" class="theme-btn mt-3">
                    Submit Now <i class="fas fa-arrow-right-long"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <MapSection /> 
    <Footer />
  </div>
  </template>
  
  <script setup> 
import { reactive, onMounted } from 'vue' 
import PageLoader from '~/components/pageLoader/PageLoader.vue'
import GlobalSection from '~/components/GlobalSection.vue'
import getTouchCard from '~/components/contactUs/getTouchCard.vue'
import MapSection from '~/components/contactUs/MapSection.vue' 
import Header from '~/components/pageHeader/Header.vue'
import Footer from '~/components/pageFooter/Footer.vue' 


  const { loading } = usePageLoader()
  const quoteInfo = {
    subheading: 'Get Free Quote',
    heading: 'Do You Have Any Questions?',
    image: '/img/quote/01.jpg',
    alt: 'Quote Illustration',
  }
  
  const services = [
    'Mine Engineering',
    'Coal Excavation',
    'Geological Consulting',
    'Mobile Crane Services',
    'Stone Crushers',
    'Responsible Mining',
  ]
  
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
  })
  
  function submitForm() {
    console.log('Submitted form:', { ...form })
    // You can replace this with an API call
    alert('Form submitted!')
  }
  </script>
  