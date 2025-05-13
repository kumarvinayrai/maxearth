<template>
    <PageLoader :show="loading" />
<div v-show="!loading">
  <!-- Your Page Content -->
  <Header /> 
  <GlobalSection fileName="bannerSection.txt" sectionKey="newsSection" />
<section>
  <div class="blog-single-area pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="blog-single-wrapper">
          <div class="blog-single-content">
            <div class="blog-thumb-img mb-4">
              <img src="https://live.themewild.com/minox/assets/img/blog/single.jpg" class="img-fluid" alt="thumb">
            </div>
            <div class="blog-info"> 
              <div class="blog-details">
                <h3 class="blog-details-title mb-3">It is a long established fact that a reader</h3>
                <p class="mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                <p class="mb-3">But I must explain to you how all this mistaken idea...</p>
                <blockquote class="blockqoute p-3 border-start border-3 border-primary bg-light">
                  It is a long established fact that a reader will be distracted...
                  <h6 class="blockqoute-author mt-2">Mark Crawford</h6>
                </blockquote>
                <p class="mb-4">In a free hour when our power of choice is untrammelled...</p>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <img src="https://live.themewild.com/minox/assets/img/blog/01.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="col-md-6 mb-3">
                    <img src="https://live.themewild.com/minox/assets/img/blog/02.jpg" class="img-fluid" alt="">
                  </div>
                </div>
                <p class="mb-4">Power of choice is untrammelled and when nothing prevents...</p>
               </div>
            </div> 
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <aside class="sidebar"> 
          <div class="widget category mb-4">
            <h5 class="widget-title">Category</h5>
            <div class="category-list list-group">
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span><i class="fa-solid fa-arrow-right me-2"></i>Mine Engineering</span><span>(10)</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span><i class="fa-solid fa-arrow-right me-2"></i>Coal Excavation</span><span>(15)</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span><i class="fa-solid fa-arrow-right me-2"></i>Geological Consulting</span><span>(20)</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span><i class="fa-solid fa-arrow-right me-2"></i>Mobile Crane Services</span><span>(30)</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span><i class="fa-solid fa-arrow-right me-2"></i>Stone Crushers</span><span>(25)</span>
              </a>
            </div>
          </div>
          <div class="widget recent-post mb-4">
            <h5 class="widget-title">Recent Post</h5>
            <div class="d-flex mb-3">
              <img src="https://live.themewild.com/minox/assets/img/blog/bs-1.jpg" class="img-fluid me-3" width="80" alt="thumb">
              <div class="recent-post-bio">
                <h6><a href="#">There are many variations of passages available</a></h6>
                <span><i class="fa-solid fa-clock"></i> May 19, 2024</span>
              </div>
            </div>
            <div class="d-flex mb-3">
              <img src="https://live.themewild.com/minox/assets/img/blog/bs-2.jpg" class="img-fluid me-3" width="80" alt="thumb">
              <div class="recent-post-bio">
                <h6><a href="#">There are many variations of passages available</a></h6>
                <span><i class="fa-solid fa-clock"></i> May 19, 2024</span>
              </div>
            </div>
            <div class="d-flex">
              <img src="https://live.themewild.com/minox/assets/img/blog/bs-3.jpg" class="img-fluid me-3" width="80" alt="thumb">
              <div class="recent-post-bio">
                <h6><a href="#">There are many variations of passages available</a></h6>
                <span><i class="fa-solid fa-clock"></i> May 19, 2024</span>
              </div>
            </div>
          </div>  
          
              <div class="blog-author d-flex gap-3 align-items-start">
                <div class="blog-author-img">
                  <img src="https://live.themewild.com/minox/assets/img/blog/author.jpg" class="img-fluid rounded-circle" alt="">
                </div>
                <div class="author-info">
                  <h6>Author</h6>
                  <h3 class="author-name">Agnes F. Natale</h3>
                  <p>It is a long established fact that a reader will be distracted...</p>
                  <div class="author-social d-flex gap-2">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  </div>
                  
                </div>
              </div>
        </aside>
      </div>
    </div>
  </div>
</div>

</section>









  <!-- new Section
  <section>
    <div class="container-fluid">
      <div class="row align-items-center min-vh-50 bg-primary-clip"> -->
        <!-- Left Side Text -->
        <!-- <div class="col-lg-6 px-5">
          <h1 class="display-5 fw-bold mb-3 text-white">{{ newContent.heading }}</h1>
          <p class="lead text-white">{{ newContent.subheading }}</p>
        </div> -->
        <!-- Right Side Image -->
        <!-- <div class="col-lg-6 p-0">
          <img :src="newContent.image" :alt="newContent.imageAlt" class="img-fluid object-fit-cover clip-img" />
        </div>
      </div>
    </div>
  </section> -->
  <!-- Section with Blog Cards -->
  <!-- <section> -->
    <!-- <div class="container"> -->
      <!-- Section Title -->
      <!-- <div class="row py-5 pb-0">
        <div class="col-lg-6 mx-auto">
          <div class="site-heading text-center">
            <span class="site-title-tagline">{{ sectionTitle.tagline }}</span>
            <h2 class="site-title">
              {{ sectionTitle.title }} <span>{{ sectionTitle.highlight }}</span>
            </h2>
          </div>
        </div>
      </div> -->
      <!-- Blog Cards -->
      <!-- <div class="row">
        <div v-for="(blog, index) in blogs" :key="index" class="col-md-6 col-lg-4 mb-4">
          <div class="blog-item">
            <div class="blog-item-img">
              <img :src="blog.image" :alt="blog.title" class="img-fluid w-100" />
              <div class="blog-date">
                <i class="fal fa-calendar-alt me-2"></i> {{ formatDate(blog.date) }}
              </div>
            </div>

            <div class="blog-item-info mt-3">
              <div class="blog-item-meta mb-2">
                <ul class="list-unstyled d-flex flex-wrap gap-2">
                  <li><i class="far fa-user-circle me-1"></i> {{ blog.author }}</li> -->
                  <!-- <li><i class="far fa-comments me-1"></i> {{ blog.comments }} Comments</li> -->
                <!-- </ul>
              </div>
              <h4 class="blog-title">
                <a href="#" class="text-decoration-none">{{ blog.title }}</a>
              </h4>
              <p class="mb-3">{{ blog.description }}</p>
              <a :href="blog.link || '#'" class="theme-btn">
                {{ newContent.buttonText }} <i class="fas fa-arrow-right-long ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <!-- </section> -->
  <Footer />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageLoader from '~/components/pageLoader/PageLoader.vue'
import Header from '~/components/pageHeader/Header.vue'
import Footer from '~/components/pageFooter/Footer.vue'
import GlobalSection from '~/components/GlobalSection.vue'
const { loading } = usePageLoader()
// Reactive data
// const blogs = ref([])
// const newContent = ref({})
// const sectionTitle = ref({})
 
// const loadData = async () => {
//   try {
//     const response = await fetch('/assets/newsData.txt')
//     const data = await response.json()

//     blogs.value = data.blogs
//     newContent.value = data.newContent
//     sectionTitle.value = data.sectionTitle
//   } catch (error) {
//     console.error('Error loading data:', error)
//   }
// }
// const formatDate = (dateStr) => {
//   const date = new Date(dateStr)
//   if (isNaN(date)) return 'Invalid Date'
//   const options = { year: 'numeric', month: 'short', day: 'numeric' }
//   return date.toLocaleDateString(undefined, options)
// }
 
// onMounted(() => {
//   loadData()
// })
</script>
<style scoped>
.bg-primary-clip {
  background-image: linear-gradient(90deg, #00155a, #00155a 49%, #00155a);
}

.clip-img {
  clip-path: polygon(60px 0, 100% 0, 100% 100%, 0 100%);
}

.blog-item-img img {
  transition: transform 0.4s ease;
}
 


 /*  */

 /*====================
32. Blog css 
======================*/

.blog-area{
  position: relative;
}

.blog-item{
  margin-bottom: 25px;
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.blog-item-img{
  position: relative;
  overflow: hidden;
}

.blog-item:hover .blog-item-img img{
  transform: scale(1.1);
} 

.blog-date{
  position: absolute;
  padding: 8px 22px 8px 15px;
  left: 0;
  bottom: 0;
  background: var(--theme-color);
  color: var(--color-white);
  clip-path: polygon(0 0, 90% 0%, 100% 100%, 0% 100%);
  z-index: 2;
}

.blog-item-info {
  padding: 15px 22px 15px 22px;
}

.blog-item-meta ul {
  margin: 0;
  padding: 0;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--border-info-color);
  padding-bottom: 14px;
}

.blog-item-meta ul li {
  display: inline-block;
  margin-right: 15px;
  font-weight: 500;
  position: relative;
  color:  var(--color-dark);
}

.blog-item-meta ul li i {
  margin-right: 5px;
  color: var(--theme-color);
}

.blog-item-meta a:hover {
  color: var(--theme-color);
}

.blog-title {
  font-size: 22px;
  margin-bottom: 15px;
  line-height: 1.2;
  text-transform: capitalize;
}

.blog-item-info p {
  margin-bottom: 16px;
}

.blog-item-info .theme-btn {
  margin-top: 15px;
}

.blog-item-info h4 a {
  color:  var(--color-dark);
}

.blog-item-info h4 a:hover {
  color: var(--theme-color);
}




/*========================
33. Blog single css
==========================*/

.blog-thumb-img {
  margin-bottom: 20px;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.blog-meta .blog-meta-left ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

.blog-meta .blog-meta-left ul li{
  font-weight: 500;
}

.blog-meta i {
  margin-right: 5px;
  color: var(--theme-color);
}

.blog-meta a {
  color: var(--body-text-color);
  font-weight: 500;
}

.blog-meta a:hover {
  color: var(--theme-color);
}

.blog-details-title {
  font-size: 34px;
  color:  var(--color-dark);
}

.blockqoute {
  background: var(--theme-bg-light);
  border-left: 5px solid var(--theme-color);
  padding: 30px;
  font-size: 17px;
  font-style: italic;
  margin: 20px 0;
  border-radius: 0px;
}

.blockqoute-author {
  margin-top: 20px;
  padding-left: 60px;
  position: relative;
  color:  var(--color-dark);
}

.blockqoute-author::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 40px;
  background: var(--theme-color);
  left: 0;
  top: 10px;
}

.blog-details-tags {
  display: flex;
  align-items: center;
  gap: 20px;
}

.blog-details-tags h5 {
  color:  var(--color-dark);
}

.blog-details-tags ul {
  display: flex;
  align-items: center;
  gap: 15px;
}

.blog-details-tags ul a {
  background: var(--theme-bg-light);
  color:  var(--color-dark);
  padding: 6px 18px;
  transition: var(--transition);
}

.blog-details-tags ul a:hover {
  background: var(--theme-color);
  color: var(--color-white);
}

.blog-author {
  display: flex;
  justify-content: start;
  align-items: center;
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  margin: 50px 0;
  padding: 20px;
}

.blog-author-img {
  width: 320px;
}

.author-name {
  font-size: 22px;
  color: var(--theme-color);
  margin: 8px 0;
}

.author-info {
  padding: 0 20px;
}

.author-social {
  margin-top: 10px;
}

.author-social a {
  width: 35px;
  height: 35px;
  line-height: 31px;
  text-align: center;
  border: 2px solid var(--theme-color);
  border-radius: 50px;
  margin-right: 5px;
  color: var(--theme-color);
  transition: var(--transition);
}

.author-social a:hover {
  color: var(--color-white);
  background: var(--theme-color);
}

.blog-comments {
  margin-bottom: 50px;
}

.blog-comments h3 {
  color:  var(--color-dark);
}

.blog-comments-wrapper {
  margin: 30px 0;
}

.blog-comments-single {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-top: 50px;
}

.blog-comments-single img {
  border-radius: 50%;
}

.blog-comments-content {
  padding: 0 0 0 20px;
}

.blog-comments-content span {
  font-size: 14px;
  color: var(--theme-color);
  font-weight: 500;
}

.blog-comments-content a {
  font-weight: 500;
  margin-top: 5px;
  color: var(--theme-color);
}

.blog-comments-content a:hover {
  color:  var(--color-dark);
}

.blog-comments-content h5 {
  color:  var(--color-dark);
}

.blog-comments-reply {
  margin-left: 50px;
}

.blog-comments-form {
  padding: 30px;
  margin-top: 50px;
  background: var(--theme-bg-light);
}

.blog-comments-form h3 {
  margin-bottom: 20px;
}

.blog-comments-form .form-group {
  margin-bottom: 20px;
}

.blog-comments-form .form-control {
  padding: 15px 20px;
  border-radius: 0px;
  box-shadow: none;
  transition: var(--transition);
}

.blog-comments-form .form-control:focus {
  border-color: var(--theme-color);
}



@media all and (max-width: 767px) {
  .blog-meta {
    flex-direction: column;
    font-size: 15px;
  }

  .blog-meta .blog-meta-left ul {
    gap: 10px;
  }

  .blog-details-tags {
    flex-direction: column;
    align-items: flex-start;
  }

  .blog-author {
    flex-direction: column;
    text-align: center;
    padding: 25px;
  }

  .author-info{
    margin-top: 25px;
  }

  .blog-comments-single {
    flex-direction: column;
    text-align: center;
    padding: 30px 0px;
    box-shadow: var(--box-shadow);
    margin-bottom: 30px;
    border-radius: 10px;
  }

  .blog-comments-single img{
    margin: 0 auto 20px auto;
  }

  .blog-comments-reply {
    margin-left: 0px;
  }
}



/*=======================
34. Widget sidebar css
=========================*/

.widget {
  background: var(--theme-bg-light);
  padding: 30px;
  margin-bottom: 30px;
}

.widget .widget-title {
  padding-bottom: 10px;
  margin-bottom: 30px;
  position: relative;
  font-size: 22px;
  color:  var(--color-dark);
}

.widget .widget-title::before {
  position: absolute;
  content: '';
  width: 15px;
  border-bottom: 3px solid var(--theme-color);
  bottom: 0;
  left: 0;
}

.widget .widget-title::after {
  position: absolute;
  content: '';
  width: 30px;
  border-bottom: 3px solid var(--theme-color);
  bottom: 0;
  left: 22px;
}

.widget .search-form .form-control {
  padding: 12px 15px 12px 15px;
  border-radius: 0px;
  box-shadow: none;
}

.widget .search-form {
  position: relative;
}

.widget .search-form .form-control:focus {
  border-color: var(--theme-color);
}

.widget .search-form button {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 18px;
  padding: 8px 18px 6px 18px;
  background: transparent;
  border: none;
  color: var(--theme-color);
}

.widget .category-list a {
  padding: 10px 0;
    border: none;
    font-weight: 500;
    background: #f2f3f5;
    border-bottom: 1px solid #ced4da;
    transition: var(--transition);
}

.widget .category-list a:last-child {
  margin-bottom: 0px;
  border-bottom: none;
}

.widget .category-list a:hover {
  padding-left: 10px;
  color: var(--theme-color);
}

.widget .category-list a i {
  margin-right: 5px;
  color: var(--theme-color);
}

.widget .category-list a span {
  float: right;
}

.widget .recent-post-single {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
}

.widget .recent-post-img {
  margin-right: 20px;
}

.widget .recent-post-img img {
  width: 120px;
}

.widget .recent-post-bio h6 {
  font-size: 18px;
  font-weight: 600;
}

.widget .recent-post-bio span {
  font-size: 14px;
  color: var(--theme-color);
  font-weight: 500;
}

.widget .recent-post-bio span i {
  margin-right: 5px;
}

.widget .recent-post-bio h6 a:hover {
  color: var(--theme-color);
}

.widget .social-share-link a {
  width: 35px;
  height: 35px;
  line-height: 31px;
  border: 2px solid var(--theme-color);
  color: var(--theme-color);
  text-align: center;
  margin-right: 5px;
  border-radius: 50px;
  transition: var(--transition);
}

.widget .social-share-link a:hover {
  background: var(--theme-color);
  color: var(--color-white);
}

.widget .tag-list a {
  background: var(--color-white);
  color:  var(--color-dark);
  padding: 5px 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
  transition: var(--transition);
}

.widget .tag-list a:hover {
  background-color: var(--theme-color);
  color: var(--color-white);
}

</style>
