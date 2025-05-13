<template>
    <PageLoader :show="loading" />
<div v-show="!loading">
  <!-- Your Page Content -->
  <Header />
  <GlobalSection fileName="Verticals.txt" />
    <section id="verticals" class="service-area bg py-120">
      <div class="container">
        <!-- Heading Section -->
        <div class="row">
          <div class="col-lg-6 mx-auto text-center">
            <div class="site-heading">
              <span class="site-title-tagline">{{ service.headingTagline }}</span>
              <h2 class="site-title">
                {{ service.headingBefore }} <span>{{ service.headingHighlight }}</span> {{ service.headingAfter }}
              </h2>
            </div>
          </div>
        </div>
  
        <!-- Services Grid -->
        <div class="row g-4">
          <div
            v-for="(item, index) in service.items"
            :key="`service-${index}`"
            class="col-md-6 col-lg-3"
          >
            <div class="service-item wow fadeInUp" :data-wow-delay="`${0.25 * index}s`">
              <!-- Service Image with Icon -->
              <div class="service-img position-relative overflow-hidden">
                <img :src="item.image" :alt="item.title" class="img-fluid w-100 rounded-0" />
                <div class="service-icon position-absolute top-50 start-50 translate-middle">
                  <i :class="item.iconClass"></i>
                </div>
              </div>
  
              <!-- Service Content -->
              <div class="service-content p-3">
                <h3 class="service-title">
                  <a :href="item.link">{{ item.title }}</a>
                </h3>
                <p class="truncate-txt">{{ item.description }}</p>
  
                <!-- CTA 
                <div class="service-arrow">
                  <a :href="item.link" class="theme-btn">
                    Read More <i class="fas fa-arrow-right-long"></i>
                  </a>
                </div>-->
  
                <!-- Shadow Icon -->
                <div class="service-shadow-icon">
                  <i :class="item.iconClass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <Footer />
</div>
  </template>
  
  <script setup>
import { reactive } from 'vue'
import PageLoader from '~/components/pageLoader/PageLoader.vue'
import Header from '~/components/pageHeader/Header.vue'
import Footer from '~/components/pageFooter/Footer.vue'
import GlobalSection from '~/components/GlobalSection.vue'

const { loading } = usePageLoader()
  const service = reactive({
    headingTagline: 'Critical & Strategic Minerals',
    headingBefore: "Mineral Utilization Sector",
    //headingHighlight: 'Services',
    headingAfter: '',
    items: [
      {
        image: '/img/service/02.jpg',
        title: 'Cobalt',
        description: 'Used in Steel Alloys, rechargeable batteries, medical equipment and aviatronics.',
        iconClass: 'flaticon-weight-scale',
        link: '#',
      },
      {
        image: '/img/service/01.jpg',
        title: 'Beryllium',
        description: 'Beryllium used in the aviation industry. Beryllium is used as alloys with copper or nickel to make byroscopes, springs, electrical contracts, sport welding electrodes, heat bearing industrial  paints.',
        iconClass: 'flaticon-foreman',
        link: '#',
      },
      {
        image: '/img/service/05.jpg',
        title: 'Natural Graphite',
        description: 'Used in Crucibles, foundries, pencils, refractories production of graphite-based sealing gaskets, graphite grease, brake lining, industrial paints defense sector, high speed brakes lining, electrical grease and series of industrial usages.',
        iconClass: 'flaticon-refinery',
        link: '#',
      },
      {
        image: '/img/service/03.jpg',
        title: 'Cadmium',
        description: 'Used in electro-plating in nuclear reactors electrical storage/ rechargeable batteries, cadmium-based bearing alloys are used in high-speed internal combustion engines. Copper Cadmium alloys are used in electric transmission wires, paints, enamel, soap, rubber, glass, ceramic glazes, photographic films and lithography.',
        iconClass: 'flaticon-factory-machine-1',
        link: '#',
      },
      
      
      {
        image: '/img/service/04.jpg',
        title: 'Molybdenum',
        description: 'Molybdenum is used in production of steel alloys as refractories metal in electrical and electronic components and heat resistance element in electric arc furnaces operated at extremely high temperatures. Also used in lubricants, catalysts, pigments, oil and greases, aerosol sprays in reducing surface friction and as anti-wear and antifriction agents in plastics.',
        iconClass: 'flaticon-crane-truck',
        link: '#',
      },
      {
        image: '/img/service/06.jpg',
        title: 'Vanadium',
        description: 'Alloy Vanadium is used in manufacture of steel products, low carbon flat rolled steels, high strength plates and structural steel to pipes, reenforcing bars, forging steels, rail steel and tool steels. Used as stabilizer in titanium and alumina, vanadium-based batteries for power plants and rechargeable Vanadium redox battery (VRB) for commercial applications. Vanadium is also used to produce super conductive magnets with a field of 1, 75,000 gausses.',
        iconClass: 'flaticon-miner',
        link: '#',
      },      
      {
        image: '/img/service/06.jpg',
        title: 'Manganese',
        description: 'Steel Industry Alloys, Manganese Dioxide is used for manufacturing dry cell batteries used in manufacture of various chemicals such as potassium permanganate hydroquinone manganese sulphate manganese chloride, manganese phosphate etc.  Pyrolusite is used generally to impart glaze to pottery and make colored bricks, used in dryers for oils varnishes and paints.Manganese Sulphide is used in the manufacture of salts and In- calico Printing, Manganese Chloride used in Cotton Textile as bronze dye, besides leather, photography and matchbox industries.',
        iconClass: 'flaticon-miner',
        link: '#',
      },
    ],
  })
  </script>
  
  <style scoped>
  .service-img img {
    transition: transform 0.3s ease;
  }
  .service-img:hover img {
    transform: scale(1.05);
  }
  </style>
  