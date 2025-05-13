<template> 
  <section class="feature-area py-120 pt-3">
    <div class="container">
      <div class="feature-wrapper">
        <div class="row g-4">
          <div
              v-for="(item, index) in features"
              :key="index"
              class="col-12 col-sm-6 col-lg-3 d-flex"
            >
              <div
                class="feature-item wow w-100"
                :class="item.animation"
                :data-wow-delay="item.delay"
              >
                <span class="count">{{ item.count }}</span>
                <div class="feature-icon mb-3">
                  <i :class="item.icon"></i>
                </div>
                <h4 class="feature-title mb-2">{{ item.title }}</h4>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const features = [
    {
      count: '01',
      icon: 'flaticon-labor-man',
      title: 'Expert Engineers',
      description:'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      animation: 'fadeInUp',
      delay: '.25s',
    },
    {
      count: '02',
      icon: 'flaticon-forklift',
      title: 'Modern Equipment',
      description:'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      animation: 'fadeInDown',
      delay: '.25s',
    },
    {
      count: '03',
      icon: 'flaticon-factory',
      title: 'We Quality Industrial',
      description:'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      animation: 'fadeInUp',
      delay: '.25s',
    },
    {
      count: '04',
      icon: 'flaticon-mechanical-arm',
      title: 'Best Manufacturing',
      description:'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      animation: 'fadeInDown',
      delay: '.25s',
    },
  ];
  </script>
  