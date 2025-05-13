<template>
  <section class="team-area 65rem bg pt-120 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="site-heading text-center">
            <span class="site-title-tagline">{{ sectionData.tagline }}</span>
            <h2 class="site-title">
              {{ sectionData.titleBefore }} <span>{{ sectionData.titleHighlight }}</span>
            </h2>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div
          class="col-md-6 col-lg-3"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <div class="team-item wow fadeInUp" :data-wow-delay="member.delay">
            <div class="team-img">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="team-social">
              <a
                v-for="(social, i) in member.socials"
                :key="i"
                :href="`https://${social.platform}.com`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i :class="social.iconClass"></i>
              </a>
            </div>
            <div class="team-content">
              <div class="team-bio">
                <h5><a href="#">{{ member.name }}</a></h5>
                <span>{{ member.position }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sectionData = ref({});
const teamMembers = ref([]);

const loadContent = async () => {
  const response = await fetch('data/teamArea.txt');
  const text = await response.text();

  const lines = text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));

  const getValue = (lines, key) =>
    lines.find(line => line.startsWith(`${key}=`))?.split('=')[1]?.trim();

  sectionData.value = {
    tagline: getValue(lines, 'tagline'),
    titleBefore: getValue(lines, 'titleBefore'),
    titleHighlight: getValue(lines, 'titleHighlight'),
  };

  // Group all member lines
  const memberLines = lines.filter(line => line.startsWith('member_'));

  // Extract unique member IDs
  const memberIds = [...new Set(
    memberLines
      .map(line => line.match(/^member_(\d+)_/)?.[1])
      .filter(Boolean)
  )];

  teamMembers.value = memberIds.map(id => {
    const socialsRaw = getValue(lines, `member_${id}_socials`);
    const socials = socialsRaw
      ? socialsRaw.split(',').map(entry => {
          const [platform, iconClass] = entry.trim().split(':');
          return { platform, iconClass };
        })
      : [];

    return {
      name: getValue(lines, `member_${id}_name`),
      position: getValue(lines, `member_${id}_position`),
      image: getValue(lines, `member_${id}_image`),
      delay: getValue(lines, `member_${id}_delay`),
      socials,
    };
  });
};

onMounted(() => {
  loadContent();
});
</script>
