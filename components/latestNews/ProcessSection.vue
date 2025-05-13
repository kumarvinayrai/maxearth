<template>
    <section class="process-area pf-bg py-120">
      <div class="container">
        <!-- Section Heading -->
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="site-heading text-center">
              <span class="site-title-tagline">{{ process.headingTagline }}</span>
              <h2 class="site-title text-white">
                {{ process.headingBefore }} <span>{{ process.headingHighlight }}</span>
              </h2>
            </div>
          </div>
        </div>
  
        <!-- Process Steps -->
        <div class="row justify-content-between">
          <div
            v-for="(step, index) in process.steps"
            :key="`process-step-${index}`"
            class="col-lg-3 col-md-6 mb-30"
          >
            <div class="process-single">
              <div class="icon text-center d-block mx-auto">
                <span>{{ step.number }}</span>
                <i :class="step.iconClass"></i>
              </div>
              <h4>{{ step.title }}</h4>
              <p class="truncate-txt">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const process = reactive({
    //headingTagline: 'How It Works',
    headingBefore: 'What',
    headingHighlight: 'We Do',
    steps: [
      {
        number: '01',
        iconClass: 'flaticon-factory',
        title: 'Supply of aggregates to Roads & Bridges',
        description: 'Max Earth Resources Ltd. currently has four operational crushers in the state of Jharkhand. All of these are 200 TPH, 2-stage crushers. The average monthly production of each of these crushers is about 50,000 tons.',
      },
      {
        number: '02',
        iconClass: 'flaticon-presentation',
        title: 'Mining',
        description: 'Max Earth Resources Ltd. plans to acquire mines across India to supply boulders to its own crushers as well as the other crushers in its vicinity. Max Earth Resources Limited also plans to lease these mines to the interested parties.',
      },
      {
        number: '03',
        iconClass: 'flaticon-pickaxe',
        title: 'Chairman Speech',
        description: 'I am pleased to address you all at the onset of this journey that we are set to undertake with Max Earth Resources Limited.',
      },
      {
        number: '04',
        iconClass: 'flaticon-factory-machine-1',
        title: 'Forthcoming Plans for F.Y.24-25',
        description: 'In the next financial year, Max Earth Resources Limited plans to set up two 200 TPH crushers in the state of Jharkhand.',
      }, 
    ],
  })
  </script>
  <style scoped>
  .process-single {
    padding: 1.5rem;
    position: relative;
    height: 22rem;
    background: var(--color-white);
    transition: var(--transition);
    z-index: 1;
}
[class^="flaticon-"]:before, [class*=" flaticon-"]:before, [class^="flaticon-"]:after, [class*=" flaticon-"]:after {
    font-family: Flaticon;
    font-style: normal;
    color: var(--color-white);
}
.process-single:hover{
  transform: translateY(-10px);
  transition: var(--transition);
}
  </style>
  