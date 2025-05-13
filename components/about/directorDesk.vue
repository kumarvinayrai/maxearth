<template>
  <div class="about-area p-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="director-desk">
            <div class="site-heading mb-3">
              <span class="site-title-tagline">Director’s Desk</span>
              <h2 class="site-title">
                {{ title }}
              </h2>
            </div>
            <p class="about-text">{{ description }}</p>
          </div>
        </div>
      </div>

      <!-- Board Members -->
      <section>
        <div class="row mt-5">
          <div class="col-lg-6">
            <div class="site-heading">
              <h2>Board Members</h2>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div
            v-for="(member, index) in boardMembers"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <div
              class="team-item wow fadeInUp"
              :data-wow-delay="(index + 1) * 0.25 + 's'"
              :style="{ visibility: 'visible', animationDelay: (index + 1) * 0.25 + 's', animationName: 'fadeInUp' }"
            >
              <div class="team-img">
                <img :src="member.image" alt="thumb" />
              </div>
              <div class="team-content">
                <div class="team-bio">
                  <h5><a href="#">{{ member.name }}</a></h5>
                  <span>{{ member.role }}</span>
                  <ul class="team-social mt-2">
                    <li v-if="member.facebook"><a :href="member.facebook" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li v-if="member.linkedin"><a :href="member.linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li v-if="member.twitter"><a :href="member.twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Members -->
      <section>
        <div class="row mt-5">
          <div class="col-lg-6">
            <div class="site-heading">
              <h2>Our Key Members</h2>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div
            v-for="(member, index) in keyMembers"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <div
              class="team-item wow fadeInUp"
              :data-wow-delay="(index + 1) * 0.25 + 's'"
              :style="{ visibility: 'visible', animationDelay: (index + 1) * 0.25 + 's', animationName: 'fadeInUp' }"
            >
              <div class="team-img">
                <img :src="member.image" alt="thumb" />
              </div>
              <div class="team-content">
                <div class="team-bio">
                  <h5><a href="#">{{ member.name }}</a></h5>
                  <span>{{ member.role }}</span>
                  <ul class="team-social mt-2">
                    <li v-if="member.facebook"><a :href="member.facebook" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li v-if="member.linkedin"><a :href="member.linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li v-if="member.twitter"><a :href="member.twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref('');
const description = ref('');
const boardMembers = ref([]);
const keyMembers = ref([]);

const parseData = (text) => {
  const lines = text.trim().split('\n');

  lines.forEach(line => {
    if (line.startsWith('TITLE|')) {
      title.value = line.split('|')[1];
    } else if (line.startsWith('DESCRIPTION|')) {
      description.value = line.split('|')[1];
    } else if (line.startsWith('MEMBER|')) {
      const [, name, role, image, type, facebook, linkedin, twitter] = line.split('|');
      const member = { name, role, image, type, facebook, linkedin, twitter };
      if (type === 'board') boardMembers.value.push(member);
      else if (type === 'key') keyMembers.value.push(member);
    }
  });
};

onMounted(async () => {
  const response = await fetch('/data/directorDesk.txt');
  const text = await response.text();
  parseData(text);
});
</script>

<style scoped>
.team-social {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
} 
</style>
