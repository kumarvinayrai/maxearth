<template>
    <section id="blog" class="blog-area pb-120 py-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="site-heading text-center">
              <span class="site-title-tagline">{{ sectionInfo.tagline }}</span>
              <h2 class="site-title" v-html="sectionInfo.title"></h2>
            </div>
          </div>
        </div>
  
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-4"
            v-for="(blog, index) in blogs"
            :key="index"
          >
            <div class="blog-item wow fadeInUp" :data-wow-delay="blog.delay">
              <div class="blog-item-img position-relative">
                <img :src="blog.image" :alt="blog.alt" class="img-fluid w-100 rounded-0" />
                <div class="blog-date">
                  <i class="fal fa-calendar-alt"></i> {{ blog.date }}
                </div>
              </div>
              <div class="blog-item-info">
                <div class="blog-item-meta">
                  <ul class="list-unstyled d-flex flex-wrap gap-3 mb-2">
                    <li>
                      <a href="#"><i class="far fa-user-circle"></i> {{ blog.author }}</a>
                    </li>
                    <!--<li>
                      <a href="#"><i class="far fa-comments"></i> {{ blog.comments }} Comments</a>
                    </li>-->
                  </ul>
                </div>
                <h4 class="blog-title">
                  <a :href="blog.link">{{ blog.title }}</a>
                </h4>
                <p>{{ blog.description }}</p>
                <a class="theme-btn" :href="blog.link">Read More<i class="fas fa-arrow-right-long"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup> 
  const sectionInfo = {
    tagline: 'Announcements',
    title: 'Latest Announcements & <span>News</span>',
  }
  
  const blogs = [
    {
      image: '/img/blog/010.jpeg',
      alt: 'Blog 1',
      date: 'Apr 26, 2025',
      author: 'Reuters',
      comments: 3,
      title: 'India urging firms to acquire overseas iron ore, coking coal assets.',
      description:
        'India aims to boost its overall steelmaking capacity to 300 million tons by 2030.',
      link: '#',
      delay: '.25s',
    },
    {
      image: '/img/blog/020.jpg',
      alt: 'Blog 2',
      date: 'Apr 25, 2025',
      author: 'Reuters',
      comments: 3,
      title: 'Hindustan Zinc CFO flags price volatility on tariff risks, sees strong FY26 growth.',
      description:
        'On Friday, Hindustan Zinc reported a jump in fourth-quarter profit.',
      link: '#',
      delay: '.50s',
    },
    {
      image: '/img/blog/030.jpg',
      alt: 'Blog 3',
      date: 'Apr 24, 2025',
      author: 'Reuters',
      comments: 3,
      title: 'India’s NMDC exploring coking coal assets in Indonesia, Australia.',
      description:
        'India, the world’s second-largest producer of crude steel, meets 85% of its coking coal requirements through imports.',
      link: '#',
      delay: '.75s',
    },
  ]
  </script>
  