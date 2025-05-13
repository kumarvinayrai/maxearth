<template>
  <section id="portfolio" class="portfolio py-5">
    <div class="container">

      <!-- Section Title -->
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h3 class="section-title text-uppercase fs-4 fs-md-3 fs-lg-2">
            {{ portfolioContent.title }}
          </h3>
        </div>
      </div>

      <!-- Paragraphs -->
      <div class="row mb-4">
        <div class="col-12 mx-auto">
          <div v-for="(para, idx) in portfolioContent.paragraphs" :key="idx" class="mb-2">
            <p class="fs-6 fs-md-5 mb-0">{{ para }}</p>
          </div>
        </div>
      </div>

      <!-- Portfolio Card -->
  <!-- Portfolio Cards Grid -->
<div class="row g-4 justify-content-center">
  <div
    class="col-12 col-lg-6 d-flex align-items-stretch"
    v-for="(card, idx) in portfolioCards"
    :key="idx"
  >
    <div class="card card-c11 border-0 rounded-0 w-100">
      <figure class="card-img mb-0 zoom-effect-img">
        <img
          :src="card.image"
          :alt="card.alt"
          class="img-fluid w-100 h-100 object-fit-cover rounded-0"
        />
      </figure>
      <article class="card-body p-0 card-shadow">
        <h5 class="mb-3">{{ card.title }}</h5>
        <p class="mb-0">{{ card.description }}</p>
      </article>
    </div>
  </div>
</div>


    </div>
  </section>
  
</template>

<script setup>
 
const portfolioContent = {
  title: "Our Portfolio",
  paragraphs: [
    "Explore our curated web design portfolio, where each project reflects our passion for creating visually compelling and highly functional websites. From responsive mobile layouts to dynamic web apps and custom-built e-commerce solutions, we ensure every design is both aesthetically pleasing and user-centric.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  ]
};

const portfolioCards = [
  {
    image: '/img/banner-images/card-image-1.jpg',
    alt: 'Where does it come from?',
    title: 'Where does it come from?',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'
  },
  {
    image: '/img/banner-images/card-image-2.jpg',
    alt: 'Why do we use it?',
    title: 'Why do we use it?',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter College in Virginia, looked up one of the more obscure Latin words, consectetur.'
  },
  {
    image: '/img/banner-images/card-image-3.jpg',
    alt: 'Another Case Study',
    title: 'Another Case Study',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'
  },
  {
    image: '/img/banner-images/card-image-4.jpg',
    alt: 'Where can I get some?',
    title: 'Where can I get some?',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything hidden.'
  },
  {
    image: '/img/banner-images/card-image-5.jpg',
    alt: 'Another Case Study',
    title: 'Another Case Study',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'
  },
  {
    image: '/img/banner-images/card-image-6.jpg',
    alt: 'Another Case Study',
    title: 'Another Case Study',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'
  }
];
</script>

<style scoped> 
.card-c11 .card-body {
    background-color: #fff;
    min-height: 15rem;
    max-width: 30rem;
    padding: 2rem !important;
    margin-top: -8rem;
    position: relative;
    z-index: 2;
    }  
figure {
  position: relative;
  overflow: hidden;
}
.card-img, .card-img-top {
    border-radius: 0;
}
.zoom-effect-img {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.zoom-effect-img img {
  transition: transform 0.5s ease;
}

.zoom-effect-img:hover img {
  transform: scale(1.1); /* Adjust the scale for zoom intensity */
}
@media (min-width: 992px) and (max-width: 1200px) {
  .card-c11 .card-body{
  margin-top: -6rem;
  max-width: 23rem;
  min-height: auto; 
}
  
}
</style>
