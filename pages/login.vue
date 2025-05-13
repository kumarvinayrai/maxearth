<!-- pages/login.vue (refactored) -->

<template> 
  <HeaderTop />

  <section class="login-area py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="login-form p-4 shadow rounded bg-white">
            <div class="login-header text-center mb-4">
              <img :src="logoSrc" alt="Logo" class="img-fluid mb-3" style="max-height: 60px" />
              <p class="mb-0">Login with your Minox account</p>
            </div>

            <!-- Alerts -->
            <Alert 
              v-if="successMessage" 
              type="success" 
              :message="successMessage" 
              @close="successMessage = ''" 
            />
            <Alert 
              v-if="errorMessage" 
              type="warning" 
              :message="errorMessage" 
              @close="errorMessage = ''" 
            />

            <!-- Login Form -->
            <form @submit.prevent="handleLogin">
              <FormInput
                id="email"
                label="Email Address"
                type="email"
                v-model="email"
                :error="errors.email"
                placeholder="Your Email"
              />
              <FormInput
                id="password"
                label="Password"
                type="password"
                v-model="password"
                :error="errors.password"
                placeholder="Your Password"
              />

              <div class="d-flex justify-content-between mb-3">
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="remember" 
                    v-model="rememberMe" 
                  />
                  <label class="form-check-label" for="remember">Remember Me</label>
                </div>
                <!-- <NuxtLink to="/comingSoon" class="text-decoration-none small">
                  Forgot Password?
                </NuxtLink> -->
              </div>

              <div class="d-grid">
                <button type="submit" class="theme-btn" :disabled="isLoading">
                  <i :class="isLoading ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-right-to-bracket'"></i>
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import HeaderTop from '@/components/pageHeader/HeaderTop.vue'
import Footer from '@/components/pageFooter/Footer.vue'
import Alert from '@/components/popupAlert/Alert.vue'
import FormInput from '@/components/latestNews/FormInput.vue'

const router = useRouter()

const logoSrc = ref('/img/logo/logo.png')
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const errors = ref({})
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const validCredentials = {
  email: 'user@example.com',
  password: 'password123'
}

const handleLogin = () => {
  // Reset messages and errors
  errors.value = {}
  successMessage.value = ''
  errorMessage.value = ''

  // Validate fields
  if (!email.value) errors.value.email = 'Email is required'
  if (!password.value) errors.value.password = 'Password is required'

  // If no validation errors
  if (email.value && password.value) {
    isLoading.value = true

    setTimeout(() => {
      const isValidUser = 
        email.value === validCredentials.email && 
        password.value === validCredentials.password

      if (isValidUser) {
        successMessage.value = 'You have logged in successfully.'
        setTimeout(() => router.push('/admin/adminPanel'), 1500)
      } else {
        errorMessage.value = 'Invalid email or password'
        setTimeout(() => (errorMessage.value = ''), 4000)
      }

      isLoading.value = false
    }, 1500)
  }
}
</script>

<style scoped>
.login-area {
  background-color: #f0f0f0;
}
.alert-warning {
  --bs-alert-color: #fff;
  --bs-alert-bg: var(--theme-color);
}
</style>
