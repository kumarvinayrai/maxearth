<template>
  <section>
    <footer class="footer-area">
      <div class="footer-content py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="footer-content-box about-us">
                <a href="#" class="footer-logo d-inline-block mb-3">
                  <img :src="footerData.logo.src" :alt="footerData.logo.alt" />
                </a>
                <p class="mb-3">{{ footerData.description }}</p>
                <ul class="list-unstyled footer-contact">
                  <li>
                    <a :href="`tel:${footerData.contact.phone}`"
                      ><i class="fa-solid fa-phone me-2"></i
                      >{{ footerData.contact.phone }}</a
                    >
                  </li>
                  <li>
                    <a :href="`mailto:${footerData.contact.address}`"
                      ><i class="fa-solid fa-location-dot me-2"></i
                      >{{ footerData.contact.address }}</a
                    >
                  </li>
                  <li>
                    <a :href="`mailto:${footerData.contact.email}`"
                      ><i class="fa-solid fa-envelope me-2"></i
                      >{{ footerData.contact.email }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div
              v-for="(section, idx) in footerData.sections"
              :key="idx"
              class="col-md-6 col-lg-2"
            >
              <div class="footer-content-box list">
                <h4
                  class="footer-content-title"
                  :style="section.title === 'Our Services' ? 'visibility: hidden;' : ''"
                >
                  {{ section.title }}
                </h4>
                <ul class="footer-list list-unstyled">
                  <li v-for="(link, i) in section.links" :key="i">
                    <NuxtLink :to="link.href">
                      <i class="fas fa-caret-right me-2"></i>{{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="footer-content-box list">
                <h4 class="footer-content-title">{{ footerData.newsletter.title }}</h4>
                <div class="footer-newsletter">
                  <p>{{ footerData.newsletter.description }}</p>
                  <form @submit.prevent="subscribe" class="subscribe-form">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control mb-2"
                      placeholder="Your Email"
                      required
                    />
                    <button class="theme-btn w-100" type="submit">
                      Subscribe Now <i class="fa-solid fa-paper-plane ms-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-self-center">
              <p class="copyright-text">
                &copy; {{ currentYear }} {{ footerData.copyright }} <br />
                Powered by <a href="#">Neorotech Solutions Pvt Ltd.</a>
              </p>
            </div>
            <div class="col-md-6 align-self-center">
              <ul class="footer-social">
                <li v-for="(icon, i) in footerData.socials" :key="i">
                  <a :href="icon.href" target="_blank"><i :class="icon.icon"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <a
      href="#"
      id="scroll-top"
      class="scroll-top"
      aria-label="Scroll to top"
      :class="{ active: isVisible }"
      @click.prevent="scrollToTop"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const footerData = ref({
  logo: { src: "", alt: "" },
  description: "",
  contact: { phone: "", email: "", address: "" },
  sections: [],
  newsletter: { title: "", description: "" },
  socials: [],
  copyright: "",
});

const email = ref("");
const isVisible = ref(false);
const currentYear = new Date().getFullYear();
const router = useRouter();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function subscribe() {
  alert(`Subscribed with email: ${email.value}`);
  email.value = "";
}

// Util to convert flat .txt key-value into structured data
async function loadFooterData() {
  const res = await fetch("/data/footer.txt");
  const text = await res.text();

  const lines = text.split("\n").filter(Boolean);
  const map = {};

  lines.forEach((line) => {
    const [key, ...rest] = line.split("=");
    map[key.trim()] = rest.join("=").trim();
  });

  // Populate footerData
  footerData.value.logo = {
    src: map.logoSrc,
    alt: map.logoAlt,
  };

  footerData.value.description = map.description;
  footerData.value.contact = {
    phone: map.phone,
    email: map.email,
    address: map.address,
  };

  footerData.value.newsletter = {
    title: map.newsletterTitle,
    description: map.newsletterDescription,
  };

  // Dynamic sections
  const sectionMap = {};
  Object.keys(map).forEach((key) => {
    const match = key.match(/^section(\d+)Link(\d+)(Text|Href)$/);
    if (match) {
      const [_, sectionIndex, linkIndex, field] = match;
      const secKey = `section${sectionIndex}`;
      if (!sectionMap[secKey]) {
        sectionMap[secKey] = { title: "", links: [] };
      }

      const idx = parseInt(linkIndex) - 1;
      sectionMap[secKey].links[idx] = sectionMap[secKey].links[idx] || {};

      if (field === "Text") sectionMap[secKey].links[idx].text = map[key];
      else if (field === "Href") sectionMap[secKey].links[idx].href = map[key];
    }

    const titleMatch = key.match(/^section(\d+)Title$/);
    if (titleMatch) {
      const secKey = `section${titleMatch[1]}`;
      sectionMap[secKey] = sectionMap[secKey] || { title: "", links: [] };
      sectionMap[secKey].title = map[key];
    }
  });

  footerData.value.sections = Object.values(sectionMap);

  // Social icons
  const socials = [];
  let i = 1;
  while (map[`social${i}Icon`] && map[`social${i}Href`]) {
    socials.push({
      icon: map[`social${i}Icon`],
      href: map[`social${i}Href`],
    });
    i++;
  }
  footerData.value.socials = socials;

  footerData.value.copyright = map.copyright;
}

onMounted(() => {
  loadFooterData();

  // scroll top visibility
  window.addEventListener("scroll", () => {
    isVisible.value = window.scrollY > 200;
  });
});
</script>

<style scoped>
#scroll-top {
  position: fixed;
  right: 0.9375rem;
  bottom: 0.9375rem;
  z-index: 9999;
  cursor: pointer;
  color: var(--color-white);
  background-color: var(--theme-color);
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
}

#scroll-top.active {
  opacity: 1;
  visibility: visible;
  bottom: 20px;
}
.footer-contact li {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  color: var(--footer-text-color);
  font-size: 16px;
  margin-bottom: 15px;
}
@media (min-width: 768px) and (max-width: 1199px) {
  #scroll-top.active {
    bottom: 100px;
  }
}
</style>
