<template>
    <section class="faq-area py-120">
      <div class="container">
        <div class="row">
          <!-- Left Content Column -->
          <div class="col-lg-6">
            <div class="faq-right">
              <div class="site-heading mb-3">
                <span class="site-title-tagline justify-content-start">{{ faqInfo.tagline }}</span>
                <h2 class="site-title my-3">
                  {{ faqInfo.titleBefore }} <span>{{ faqInfo.titleHighlight }}</span> {{ faqInfo.titleAfter }}
                </h2>
              </div>
              <p class="mb-3">{{ faqInfo.description1 }}</p>
              <p class="mb-4">{{ faqInfo.description2 }}</p>
              <a :href="faqInfo.button.link" class="theme-btn mt-2">{{ faqInfo.button.text }}</a>
            </div>
          </div>
  
          <!-- FAQ Accordion Column -->
          <div class="col-lg-6">
            <div class="accordion" id="accordionExample">
              <div
                class="accordion-item"
                v-for="(item, index) in faqList"
                :key="index"
              >
                <h2 class="accordion-header" :id="`heading${index}`">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: index !== 0 }"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    :aria-expanded="index === 0 ? 'true' : 'false'"
                    :aria-controls="`collapse${index}`"
                  >
                    <span><i class="far fa-question"></i></span> {{ item.question }}
                  </button>
                </h2>
                <div
                  :id="`collapse${index}`"
                  class="accordion-collapse collapse"
                  :class="{ show: index === 0 }"
                  :aria-labelledby="`heading${index}`"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const faqInfo = {
    tagline: "Faq's",
    titleBefore: "General",
    titleHighlight: "frequently",
    titleAfter: "asked questions",
    description1:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
    description2:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    button: {
      text: "Have Any Question ?",
      link: "#",
    },
  }
  
  const faqList = [
    {
      question: "How Long Does A Service Take ?",
      answer:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...",
    },
    {
      question: "How Can I Become A Member ?",
      answer:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...",
    },
    {
      question: "What Payment Gateway You Support ?",
      answer:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...",
    },
    {
      question: "How Can I Cancel My Request ?",
      answer:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...",
    },
  ]
  </script>
  